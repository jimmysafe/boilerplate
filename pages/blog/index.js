import { getPosts } from '../../prismic/queries'
import { linkResolver, hrefResolver } from '../../prismic/prismic-configuration'
import Link from 'next/link'
import { blogActive } from '../../utils'

const Blog = ({ posts }) => {
    console.log(posts)
    return (
        <div className="my-8">
            {posts.map((post) => (
                <Link as={linkResolver(post)} href={hrefResolver(post)} key={post.uid}>
                    <a><span>{post.data.post_title[0].text}</span></a>
                </Link>
            ))}
        </div>
    )
}

Blog.getInitialProps = async({ res }) => {
    const posts = await getPosts()
    if(!blogActive){
        res.writeHead(301, {
            Location: '/'
            });
        res.end();
        return {}
    }
    return {
        posts
    }
}

export default Blog
