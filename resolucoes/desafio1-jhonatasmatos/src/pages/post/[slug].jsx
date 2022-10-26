import Head from 'next/Head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getAllPosts, getPostBySlug } from '../../../services/data'
import { toLocaleDate } from '../../helpers/dateConverter'

function Post({ post }) {
  
  const router = useRouter()
  if (router.isFallback)  return <div>Loading...</div>;

  return (
      <div className=" bg-white flex flex-col items-center">
        <Head>
          <title>Post.IO | {post.title}</title>
          <meta name="description" content="My first blog with Next" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="w-full h-20 flex justify-between px-32 bg-gray-900 items-center">
          <Link href="/">
            <a>
              <Image src="/jamstack.svg" alt="" width={150} height={70} />
            </a>
          </Link>
          <p className="text-white w-40 text-md">Post.io</p>
        </header>
        
        <main className="w-1/2 mt-12 flex flex-col">
          <div className="flex flex-row gap-4">
            <img className="w-12 h-12 rounded-full" src={post.author.profileImage.url} width={post.author.profileImage.width} hieght={post.author.profileImage.hieght} />
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-gray-400">{toLocaleDate(post.date)}</p>
            </div>
          </div>
          <h1 className="font-bold text-2xl max-w-2xl leading-9 mt-6">
            {post.title}
          </h1>
          
          <h2 className="mt-2 text-md text-gray-400">{post.description}</h2>

          <img className="w-auto max-h-fit mt-4" src={post.coverImage.url} width={post.coverImage.width} hieght={post.coverImage.hieght} />

          <p className="mt-10">
            {post.content}
          </p>
        </main>
        <footer className="w-full h-32 flex items-center justify-center mt-10 text-center bg-gray-100">
          <p>feito com 💜 por <a href="https://github.com/jhonatasmatos">jhonatasmatos.</a></p>
        </footer>
      </div>
  )
}

export async function getStaticProps({ params }) {

  const post = await getPostBySlug(params.slug)

  return {
    props: {
      post: post.posts[0]
    }
  }

}

export async function getStaticPaths() {
  const data = await getAllPosts()

  return {
    paths: data.posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}


export default Post;