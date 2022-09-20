// import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
  <title>
    {/* <img src="https://internshala.com/static/images/common/new_internshala_logo.svg " /> */}
    I-Shala
  </title>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}

export default MyApp
