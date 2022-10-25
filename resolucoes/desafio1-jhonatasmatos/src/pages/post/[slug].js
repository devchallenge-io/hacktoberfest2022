import { useRouter } from 'next/router'
import { getAllPosts, getPostBySlug } from '../../../services/data'

function Post({ post }) {
  
  const router = useRouter()
  if (router.isFallback)  return <div>Loading...</div>;

  return (
      <div>
        <h2>
        {post.title}
        </h2>
        <h3>{post.description}</h3>
        <p>{post.date}</p>

        <img src={post.coverImage.url} width={post.coverImage.width} hieght={post.coverImage.hieght} />

        <p>
          {post.content}
        </p>
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