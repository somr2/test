import React from 'react'
import { Link } from "react-router-dom";

const HeaderNav = ({links}) => {
    return (
        <ul>
            {links.map((link, index)=>(
                <li key={index}><Link to={`/${link.url}`}>{link.title}</Link></li>
            ))}
        </ul>
    )
}

export default HeaderNav