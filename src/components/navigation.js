import { Link } from "gatsby"
import React from "react"


const linkStyles = {
    marginLeft: '20px',
    textDecoration: 'none',
    color: 'black'
}

const activeLink = {
    backgroundColor: 'coral'
}

const Navigation = () => (
    <nav>
        <Link style={linkStyles} activeStyle={activeLink}
            to="/"
        >
            Home
                </Link>
        <Link style={linkStyles} activeStyle={activeLink} partiallyActive={true}
            to="works"
        >
            Works
                </Link>
        <Link style={linkStyles} activeStyle={activeLink} partiallyActive={true}
            to="services"
        >
            Services
                </Link>
        <Link style={linkStyles} activeStyle={activeLink}
            to="about"
        >
            About
                </Link>
        <Link style={linkStyles} activeStyle={activeLink} partiallyActive={true}
            to="career"
        >
            Career
                </Link>
        <Link style={linkStyles} activeStyle={activeLink}
            to="contact"
        >
            Contact
                </Link>
        <Link style={linkStyles} activeStyle={activeLink}
            to="privacy-policy"
        >
            Privacy policy
                </Link>
        <Link style={linkStyles} activeStyle={activeLink}
            to="cookies"
        >
            Cookies
                </Link>
    </nav>
)


export default Navigation