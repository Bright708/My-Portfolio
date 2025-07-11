import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>My Portfolio</h1>
            <nav>
                <ul>
                    <li><Link className='link' to={"/"}>Home</Link></li>
                    <li><Link className='link'to={"/about"}>About Me</Link></li>
                    <li><Link className='link'to={"/labs"}>Labs</Link> </li>
                    <li><Link className='link'to={"/projects"}>Projects</Link></li>
                    <li><Link className='link'to={"/blog"}>Blog</Link></li>
                    <li><Link className='link'to={"/contact"}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
    
 
}

export default Header
