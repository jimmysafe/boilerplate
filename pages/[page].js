import { getSinglePage } from '../prismic/queries'
import { useRouter } from 'next/router'

export default function Page({ page }) {

    const router = useRouter()
    if(!page && router.query !== 'blog') {
        router.push('/404')
        return null
    }

    // console.log(page)

    return (
        <>
        <p className="my-8 text-bold uppercase">{page.data.title[0].text}</p>
      
        {/* <Seo page={page} /> */}
        {/* <div className="page-content">
            {page.data.body.map((slice, i) => (
                <Slice key={i} slice={slice} page={page}/>
            ))}
        </div> */}
        </>
    )
}

export async function getServerSideProps({ res, query }) {
    const page = await getSinglePage(query.page)
    if(!page && res && query.page !== 'blog') {
        res.writeHead(301, {
            Location: '/404'
            });
        res.end();
        return {}
    }
    return {
      props: {
          page
      }
    }
  }
