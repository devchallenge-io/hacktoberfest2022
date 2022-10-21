import React from 'react'
import { GetStaticProps } from 'next';
import Head from 'next/head'
import { getPrismicClient } from '../../../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from "prismic-dom"
import styles from "./styles.module.css";

type Post = {
  slug: string;
  title: string;
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
        <div className={styles.list}>
          {posts.map(post => (
            <a href="" key={post.slug}>
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at("document.type", "post")
  ], {
    fetch: ["post.title", "post.content"],
    pageSize: 100,
  })

  const posts = response.results.map(post => {
    return {
      flug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {
      posts
    }
  }
}