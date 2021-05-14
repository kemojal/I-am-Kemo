import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Nav from '../components/Nav'
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import MyProjects from '../components/sections/MyProjects';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="I am kemo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav/>
        <Hero/>
        <About/>
        <MyProjects/>
      </main>

      {/* <footer className={styles.footer}>
        
          Powered by{' '}
          k
    
      </footer> */}
    </div>
  )
}
