import { getSinglePost } from "../../prismic/queries"
import { useRouter } from 'next/router'
import { blogActive } from '../../utils'

const Post = ({ post }) => {
    const router = useRouter()
    if(!post){
        router.push('/404')
        return null
    }

    console.log(post)

    return (
        <div>
            {post.uid}
        </div>
    )
}

Post.getInitialProps = async({ res, query }) => {
    const post = await getSinglePost(query.post)
    if(!blogActive){
        res.writeHead(301, {
            Location: '/'
            });
        res.end();
        return {}
    }
    if(!post) {
        res.writeHead(301, {
            Location: '/404'
            });
        res.end();
        return {}
    }
    return { post }
}

export default Post
