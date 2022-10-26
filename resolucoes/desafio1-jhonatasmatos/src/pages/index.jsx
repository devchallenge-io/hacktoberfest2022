import Head from 'next/Head'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '../../services/data'
import { toLocaleDate } from '../helpers/dateConverter'

export default function Home({ data }) {

  return (
    <div className="w-screen h-screen bg-white flex flex-col">
      <Head>
        <title>Post.IO</title>
        <meta name="description" content="My first blog with Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full h-20 flex justify-between px-32 bg-gray-900 items-center">
        <Link href="#">
          <a>
            <Image src="/jamstack.svg" alt="" width={150} height={70} />
          </a>
        </Link>
        <p className="text-white w-40 text-md">Post.io</p>
      </header>
      
      <main className="w-screen h-screen mt-12 flex flex-col items-center">
          {
            data?.posts?.map((post) => (  
              <div className="w-1/2 h-52 flex justify-between border-b-[2px] mt-8 py-4">
                <div className="w-auto" key={post.slug}>
                  <div className="flex items-center gap-2 text-xs">
                    <img className="w-8 h-8 rounded-full" src={post.author.profileImage.url} width={post.author.profileImage.width} hieght={post.author.profileImage.hieght} />
                    <p className="font-semibold">{post.author.name} - </p>
                    <p className="text-gray-400">{toLocaleDate(post.date)}</p>
                  </div>
                  
                  <Link className="cursor-pointer" href={`/post/${post?.slug}`}>
                    <a>
                      <div className="">
                        <h2 className="text-md mt-4 font-bold">
                          {post.title}
                        </h2>
                        <p className="mt-2 max-w-lg h-24 text-ellipsis line-clamp-4">
                          {post.content}
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="w-64 flex items-center justify-end">
                  <img className="w-48 h-48" src={post.coverImage.url} width={post.coverImage.width} hieght={post.coverImage.hieght} />
                </div>              
              </div>
            ))
          }
      </main>
      <footer className="w-full h-32 flex items-center justify-center mt-10 text-center bg-gray-100">
        <p>feito com 💜 por <a href="https://github.com/jhonatasmatos">jhonatasmatos.</a></p>
      </footer>
    </div>
  )
}

export const getStaticProps = async() => {

  const data = await getAllPosts()
  
  return {
    props: {
      data 
    }
  }    
}
