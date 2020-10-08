import nav from '../config/nav.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { linkResolver } from '../prismic/prismic-configuration'

const Nav = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    console.log(nav)
    return (
        <nav className="desktop">
            <img src="" alt="" className="logo"/>
            <ul className={`nav-list ${open ? 'open' : ''}`}>
                {nav.map((item, i) => (
                    <Link as={linkResolver(item.url)} href="/[page]" key={i}>
                        <li>
                            <span>{item.name}</span>
                        </li>
                    </Link>
                ))}
            </ul>
            {/* <div className="burger-menu" onClick={() => setOpen(!open)}>
                {open ? 
                    <img src="/images/x.svg" alt=""/>
                :
                    <img src="/images/menu.svg" alt=""/>
                }
            </div> */}
        </nav>
    )
}

export default Nav
