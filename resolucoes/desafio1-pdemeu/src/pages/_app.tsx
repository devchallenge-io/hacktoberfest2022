import { AppProps } from "next/app"
import Head from "next/head"
import "../../styles/globals.css"
import { Header } from "../components"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DesafioBlog | pdemeu</title>

      </Head>
      <Header />
      <Component {...pageProps} />

    </>
  )
}
