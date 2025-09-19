import '../styles/globals.css'
import Layout from '../components/Layout'

// Tüm sayfalarda Layout kullanılacak
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
