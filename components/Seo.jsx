
import Head from 'next/head'

const Seo = ({ page }) => {
    const { meta_title, meta_description } = page.data
    return (
        <Head>
            <title>{meta_title.length > 0 ? meta_title[0].text : 'Chantal'} | Chantal Ciaffardini</title>
            <meta name="description" content={meta_description.length > 0 ? meta_description[0].text : 'Chantal CIaffardini'}/>
        </Head>
    )
}

export default Seo