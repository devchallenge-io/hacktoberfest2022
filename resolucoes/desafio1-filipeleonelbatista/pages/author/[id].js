import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { api, getLast5PostsAndAuthors, getPostsByAuthorId } from '../../services/api'
import styles from '../../styles/Author.module.css'

const Author = () => {

  const router = useRouter()
  const { id } = router.query

  const [toggleMenu, setToggleMenu] = useState(false)
  const [lastPostsAuthor, setLastPostsAuthor] = useState([])
  const [author, setAuthor] = useState()

  const [lastPosts, setLastPosts] = useState([])
  const [lastAuthors, setLastAuthors] = useState([])

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const executeAsync = async () => {
      try {
        const responseAuthorPosts = await api.post("", getPostsByAuthorId(id))
        const response = await api.post("", getLast5PostsAndAuthors)

        setAuthor(responseAuthorPosts.data.data.author)
        setLastPostsAuthor(responseAuthorPosts.data.data.posts)
        setLastAuthors(response.data.data.authors)
        setLastPosts(response.data.data.posts)
      }
      catch (err) {
        console.log('ERROR DURING AXIOS REQUEST', err);
      }
    }
    executeAsync();
  }, [id])

  return (
    <div className={styles.container}>
      <Head>
        <title>Post.IO | {author?.name} </title>
        <meta name="description" content={`Post.IO | ${author?.name} `} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside className={toggleMenu ? styles.asideToggle : styles.aside}>

        <div style={{ display: "flex", flexDirection: "row", gap: "8px", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "row", gap: "8px", alignItems: "center" }}>
            <Link href="/">
              <a>
                <img src="../../jamstack.svg" alt="jamstack logo" height={40} />
              </a>
            </Link>
            {
              !toggleMenu && <strong>Post.io</strong>
            }
          </div>
          <button
            onClick={handleToggle}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 5,
              right: toggleMenu ? -30 : -40,
              width: "32px",
              height: "32px",
              borderRadius: "16px",
              border: "none",
              backgroundColor: "#222",
              cursor: "pointer"
            }}>
            {
              toggleMenu ? ">" : "<"
            }
          </button>
        </div>

        <h4>Ultimas postagens</h4>
        <ul>
          {
            lastPosts.length > 0 && lastPosts.map(post => (
              <Link href={`/post/${post.id}`}>
                <a>
                  <li key={post.id} style={{ margin: "8px 0" }}>
                    {post.title.length > 15 ? post.title.substr(0, 15) + " [...]" : post.title}
                  </li>
                </a>
              </Link>
            ))
          }
        </ul>
        <h4>Autores</h4>
        <ul>
          {
            lastAuthors.length > 0 && lastAuthors.map(autor => (
              <Link href={`/author/${autor.id}`}>
                <a>
                  <li key={autor.id}>
                    <div style={{ display: "flex", flexDirection: "row", gap: "8px", alignItems: "center" }} >
                      <img src={autor.avatar.url} alt="" width={30} />
                      <strong>{autor.name}</strong>
                    </div>
                  </li>
                </a>
              </Link>
            ))
          }
        </ul>
      </aside>

      <div className={toggleMenu ? styles.contentToggle : styles.content}>
        <main className={styles.main}>

          <h2>Ultimos Posts de:</h2>
          <Link href={`/author/${author?.id}`}>
            <a style={{ display: "flex", flexDirection: "row", gap: "8px", alignItems: "center", margin: "16px" }} >
              <img src={author?.avatar?.url} alt="" style={{ width: "32px" }} />
              <strong>
                {author?.name}
              </strong>
            </a>
          </Link>

          {
            lastPostsAuthor.map(post => (
              <Link href={`/post/${post.id}`}>
                <a>
                  <article className={styles.article} key={post.id}>
                    <img src={post.thumbnail.url} alt={post.title} />
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <strong>{post.title}</strong>
                      <small> <b>Publicado dia:</b>  {`${new Date(post.publishedAt).getDay()}/${new Date(post.publishedAt).getMonth() + 1}/${new Date(post.publishedAt).getFullYear()}`}</small>
                      <small>{post.shortDescription}</small>
                    </div>
                  </article>
                </a>
              </Link>
            ))
          }

        </main>

        <footer className={styles.footer}>
          <a
            href="https://desenvolvedordeaplicativos.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desenvolvido com 💖 por{' '}
            <span className={styles.logo}>
              <Image src="/logo.svg" alt="Filipe Logo" width={150} height={30} />
            </span>
          </a>
        </footer>
      </div>
    </div >
  )
}

export default Author