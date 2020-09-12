import Layout from '../components/Layout'
import "../dist/styles.css"

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            {/* <PageTransition timeout={300} classNames="page-transition">
                <Component {...pageProps} />
            </PageTransition>
            <style jsx global>{`
                .page-transition-enter {
                    margin-top: 50px;
                    opacity: 0;
                }
                .page-transition-enter-active {
                    opacity: 1;
                    margin-top: 0;
                    transition: all 300ms;
                }
                .page-transition-exit {
                    opacity: 1;
                    margin-top: 0;
                }
                .page-transition-exit-active {
                    opacity: 0;
                    margin-top: 50px;
                    transition: all 300ms;
                }
            `}</style> */}
             <Component {...pageProps} />
        </Layout>
    )
  }

  
  export default MyApp