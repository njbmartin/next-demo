import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

import './index.scss';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Welcome to Plum Next.js!</h1>
      <p className='description'>
        A demo built with Next.js, Redux, and Sass. It also routes an API, which is used to fetch some data.
      </p>

      <div className='row'>
        <Link href='/feed'>
          <a className='card'>
            <h3>Go to example &rarr;</h3>
            <p>Next.js is seriously cool (in my opinion)</p>
          </a>
        </Link>
      </div>
    </div>
  </div>
)



export default Home
