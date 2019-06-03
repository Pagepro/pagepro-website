import { Link } from "gatsby"
import React from "react"

const activeLink = {
    color: "white"
}

const Navigation = () => (
    <ul className="c-main-nav ui-hover-opacity">
        <li className="c-main-nav__item ">
            <Link className="c-link-default u-text-centered@mobile" activeStyle={activeLink}
                to="/"
            >
                Home
                </Link>
        </li>
        <li className="c-main-nav__item ">
            <Link className="c-link-default u-text-centered@mobile" activeStyle={activeLink} partiallyActive={true}
                to="/works"
            >
                Works
                </Link>
        </li>
        <li className="c-main-nav__item ">
            <Link className="c-link-default u-text-centered@mobile" activeStyle={activeLink} partiallyActive={true}
                to="/services"
            >
                Services
                </Link>
        </li>
        <li className="c-main-nav__item ">
            <Link className="c-link-default u-text-centered@mobile" activeStyle={activeLink}
                to="/about"
            >
                About
                </Link>
        </li>
        <li className="c-main-nav__item ">
            <Link className="c-link-default u-text-centered@mobile" activeStyle={activeLink} partiallyActive={true}
                to="/career"
            >
                Career
                </Link>
        </li>
        <li className="c-main-nav__item ">
            <Link className="c-link-default u-text-centered@mobile" activeStyle={activeLink}
                to="/contact"
            >
                Contact
                </Link>
        </li>
        <li className="c-main-nav__item ">
            <Link className="c-link-default u-text-centered@mobile" activeStyle={activeLink}
                to="/privacy-policy"
            >
                Privacy policy
                </Link>
        </li>
        <li className="c-main-nav__item ">
            <Link className="c-link-default u-text-centered@mobile" activeStyle={activeLink}
                to="/cookies"
            >
                Cookies
                </Link>
        </li>
    </ul>

)


export default Navigation