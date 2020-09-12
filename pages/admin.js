export default function Admin() {
    return <></>
  }
  
  Admin.getInitialProps = async(ctx) => {
    ctx.res.writeHead(302, { Location: 'https://prismic.io/dashboard/' })
    ctx.res.end()
    return
  }