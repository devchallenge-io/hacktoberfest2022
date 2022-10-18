import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const GRAPHCMS_PERMANENTAUTH_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjYwMzcxNjMsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w5ZDZoY2N3MDN2ZjAxdWVoNXYwZjNwaS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZjg3N2FmYzgtYjdkOC00YTY1LWI4MjMtMDcwZDlmYzU4YzY2IiwianRpIjoiY2w5ZDdpZjFtMDNncTAxdW1ncWdlYXcwZSJ9.WOSzeqZg542zIjF2hJDGVrAG10uXNG3j0Cw4Ko0UAqd91lJTIlOKDqQYkXsJ0eeyIdso3yuS60PjEuF7xls8R4YS7lrTpAPC0BcvV8Si0vqD3s6cNHi7k0_Q-VjanV2wLAubS6IFe9OqSApLbVeBGNGHDgwb2Fge_2tBadzmpywIzxYYSXbFgl9s5gdzAZJkImSjptW41nJmfrnXWAxnIMkmLPAqQLKFTFHgooVJkpdmhALJhUSLrIW47vjirmGFV_b9JNS5qAOB7bcKxMmTvShiDRMrdX96Rqtu87n9BiZuaejgljic1S-BIW0QDZSjKVWqFdX3s_El8WptULZht7UnFG2fz4pzlcnOFsOg6Z47ftEtyWeuSFIAxkvH6ECELKpL-PAlxD4Owf2C9S-AVdrOjp-V-D4s8CFVGCE7jlLkcYPoYgbWeweSIMkjHyJjvgxDpx1JFEpFEjcwBezbxkjzDp1YqH9JesAVPuEzcps1qlNuZ0ADQR5w8WtEfU_9omaDdACrbQtEGw79aUZuxeG28nVtxFZr5wp3ueE2HNbfPjLTbVZOev3g8w-GrwC658y28pP9coOpi0dzcG5rWcjk6cugSGo11D_hGSonp_MKhvE52MCpjT-KwQZ1PDd-UzMcx0ejoG1kQsykFxHDHLnv_x_bNFY83_GjzbVDm84";
const GRAPHCMS_URL = "https://api-sa-east-1.hygraph.com/v2/cl9d6hccw03vf01ueh5v0f3pi/master";

export default function Home() {

  useEffect(() => {
    const executeAsync = async () => {
      try {
        const headers = {
          'content-type': 'application/json',
          'Authorization': `Bearer ${GRAPHCMS_PERMANENTAUTH_TOKEN}`
        }
        const requestBody = {
          query: `query getAllPosts(){
                          posts{
                            title
                            content{
                              html
                            }
                            thumbnail{
                              url
                            }
                            shortDescription
                            author{
                              name
                              avatar{
                                url
                              }
                            }
                          }
                        }
                        `
        };

        const options = {
          method: "POST",
          url: GRAPHCMS_URL,
          headers,
          data: requestBody
        }

        const response = await axios(options)
        console.log('RESPONSE FROM AXIOS REQUEST', response.data);
      }
      catch (err) {
        console.log('ERROR DURING AXIOS REQUEST', err);
      }
    }
    executeAsync();
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Post.IO</title>
        <meta name="description" content="Smallest Blog with Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

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
  )
}
