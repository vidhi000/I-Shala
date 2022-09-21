// import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (<>
      <Head>
        <link rel="shortcut icon" href='https://www.logoheroes.net/uploads/logo/2017/07/rocket-logo-exploration.jpg' />
      </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}

export default MyApp
