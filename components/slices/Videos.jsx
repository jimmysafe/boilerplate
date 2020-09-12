
import YouTube from 'react-youtube';
import { useState } from 'react'
import { RichText } from 'prismic-reactjs'

const Videos = ({ slice }) => {
    const videos = slice.items
    return (
        <div className="section-videos">
            {videos.map((video, i) => (
                <Video key={i} video={video}/>
            ))}
        </div>
    )
}


const Video = ({ video }) => {
    const [ready, setReady] = useState(false)
    return (
        <div className="video-outer-box" >
            <div className="video-inner-box">
                <YouTube videoId={video.videoid[0].text} onReady={() => setReady(true)}/>
                {ready &&
                    <div className="caption">
                        <RichText render={video.caption} />
                    </div>
                }
            </div>
        </div>
    )
}


export default Videos
