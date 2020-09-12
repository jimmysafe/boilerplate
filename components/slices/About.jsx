import { RichText } from 'prismic-reactjs'
import { useEffect } from 'react'

const About = ({ slice }) => {
    const about = slice.primary

    // Replaces all empty <p> with a </br>
    useEffect(() => {
        let allPs = document.querySelectorAll('p')
            allPs.forEach(p => {
            if(p.innerHTML === ''){
                let br = document.createElement('br');
                p.parentNode.replaceChild(br, p);
            }
        })
    }, [])

    return (
        <div className="section-about">
            <div className="img-cont">
                <img src={about.photo.url} alt={about.photo.alt} />
            </div>
            <div className="content">
                <RichText render={about.content}/>
            </div>
        </div> 
    )
}

export default About
