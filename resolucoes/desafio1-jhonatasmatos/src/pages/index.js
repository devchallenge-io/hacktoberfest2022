import Link from 'next/link'
import { getAllPosts } from '../../services/data'

export default function Home({ data }) {

  return (
    <div>
      {
        data?.posts?.map((post) => (
          <div key={post.slug}>
            <h2>
              <Link href={`/post/${post?.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
            <h3>{post.description}</h3>
            <p>{post.date}</p>

            <img src={post.coverImage.url} width={post.coverImage.width} hieght={post.coverImage.hieght} />

            <p>
              {post.content}
            </p>
          </div>
        ))
      }
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
