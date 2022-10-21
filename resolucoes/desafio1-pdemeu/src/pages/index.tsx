import React from 'react'
import { GetStaticProps } from 'next';
import Head from 'next/head'
import Prismic from '@prismicio/client';
import { RichText } from "prismic-dom"
import styles from "./styles.module.css";
import Image from 'next/image';
import { getPrismicClient } from '../../services/prismic';

type Post = {
  slug: string;
  title: string;
  author: string;
  banner: {
    url: string;
    alt: string;
  };
  excerpt: string;
  updatedAt: string;
}
interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | Desafio01 - pdemeu</title>
      </Head>

      <main className={styles.container}>
        <h2 className={styles.subTitle}>Posts do Blog</h2>
        <div className={styles.list}>
          {posts.map(post => (
            <div className={styles.item} key={post.slug}>
              {// eslint-disable-next-line @next/next/no-img-element
                <img
                  className={styles.banner}
                  src={post.banner.url}
                  alt={post.banner.alt}
                />
              }
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.author}</p>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
        <footer className={styles.footer}>
          feito com 💜 por pedro demeu
        </footer>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query<any>([
    Prismic.predicates.at("document.type", "post")
  ], {
    fetch: ["post.title", "post.banner", "post.author", "post.content"],
    pageSize: 100,
  })

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      banner: post.data.banner,
      author: post.data.author,
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    props: {
      posts
    }
  }
}