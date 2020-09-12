import React from 'react'
import { getPosts } from '../../prismic/queries'
import { linkResolver, hrefResolver } from '../../prismic/prismic-configuration'
import Link from 'next/link'

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

Blog.getInitialProps = async() => {
    const posts = await getPosts()
    return {
        posts
    }
}

export default Blog
