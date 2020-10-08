import Layout from '../components/Layout'
import "../dist/styles.css"

function MyApp({ Component, pageProps }) {
    return (
        <Layout {...pageProps}>
            <Component {...pageProps} />
        </Layout>
    )
  }

  MyApp.getInitialProps = async({ Component, ctx }) => {
      let pageProps
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      } 

      return {
          pageProps
      }
  }

  
  export default MyApp