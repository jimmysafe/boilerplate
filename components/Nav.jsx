import nav from '../config/nav.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Nav = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    
    return (
        <nav className="desktop">
            <div className="social-container">
                <ul>
                    <li>
                        <a href="https://www.instagram.com/chantal.ciaffardini/" target="_blank">
                            <img src="/images/instagram.svg" alt="instagram"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCqW7drEJqAvBthfqxtMwEpQ" target="_blank">
                            <img src="/images/youtube.svg" alt="youtube"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="logo-container">
                <h2>Chantal</h2>
            </div>
            <ul className={`nav-list ${open ? 'open' : ''}`}>
                {nav.map(item => (
                    <Link as={`/${item.url}`} href={item.url === "blog" ? "/[blog]": "/[page]"} key={item.name}>
                        <li className={`icon-container ${router.query.page === item.url ? 'active' : ''}`} onClick={() => setOpen(false)}>
                            {/* <img src={item.icon} alt={item.name}/> */}
                            <span>{item.name}</span>
                        </li>
                    </Link>
                ))}
            </ul>
            <div className="burger-menu" onClick={() => setOpen(!open)}>
                {open ? 
                    <img src="/images/x.svg" alt=""/>
                :
                    <img src="/images/menu.svg" alt=""/>
                }
            </div>
        </nav>
    )
}

export default Nav
