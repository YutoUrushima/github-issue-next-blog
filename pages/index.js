import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { SNS } from '../component/sns'
import { ICON } from '../component/icon'
import { Issues, apolloClient } from '../component/client'
import { ApolloProvider } from '@apollo/client'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>GitHub Issues Blog | Yuto Urushima</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* 共通、facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="YutoUrushima"/>
        <meta property="og:description" content="Next.js + GitHub Issuesで作ったデモブログサイトです。"/>
        <meta property="og:url" content="https://github-issue-next-blog.vercel.app/"/>
        <meta property="og:site_name" content="YutoUrushima"/>
        {/* meta twitter */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="YutoUrushima"/>
        <meta name="twitter:title" content="YutoUrushima"/>
        <meta name="twitter:description" content="Next.js + GitHub Issuesで作ったデモブログサイトです。"/>
        <meta name="twitter:image" content="https://github-issue-next-blog.vercel.app//b-ogp-image.jpg"/>
        <meta name="twitter:url" content="https://pedantic-hugle-406857.netlify.app"/>
        {/* /meta twitter */}
      </Head>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className="pc">
            <ICON/>
          </div>
          <h1>GitHub Issues Blog</h1>
          <div className="pc">
            <SNS/>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.card}>
          <ApolloProvider client={apolloClient}>
            <Issues />
          </ApolloProvider>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.toTop}>
            <Link href="/">
              <a>
                To Top
              </a>
            </Link>
          </div>
          <div className="sp">
            <div className={styles.spFooter}>
              <SNS/>
            </div>
          </div>
          <p>&copy;2021 YutoUrushima All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}