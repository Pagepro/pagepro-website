import { Link } from "gatsby"
import React from "react"
import Navigation from '../components/navigation';
import logo_pagepro from '../../static/img/logo_pagepro.svg'

const Header = () => {
    return (
        <>
            <header className="l-header">
                <div className="l-inner">
                    <div className="row row-align-between row-align-middle">
                        <div className="l-header__box l-header__box--logo">
                            <div className="c-logo-box">
                                <Link className="c-logo-box__inner"
                                    to="/"
                                >                    <span className="c-logo-box__media">
                                        <span className="o-object-wrapper">
                                            <object type="image/svg+xml" data={logo_pagepro} >Pagepro</object>
                                        </span>
                                    </span>
                                    <span className="c-logo-box__info">
                                        <span className="u-info">Pagepro</span>
                                    </span>
                                </Link>

                            </div>
                        </div>
                        <div className="l-header__box l-header__box--nav">
                            <nav className="c-main-nav-box">
                                <div className="c-main-nav-box__head">
                                    <button className="c-burger js-toggle-main-nav u-paint-4" aria-label="toggle menu">
                                        <span className="c-burger__inner">
                                            <span className="c-burger__lines"></span>
                                            <span className="c-burger__cross"></span>
                                            <span className="c-burger__info">toggle menu</span>
                                        </span>
                                    </button>
                                </div>
                                <div className="c-main-nav-box__content">

                                    <Navigation />

                                    <ul className="c-socials-list ui-hover-opacity g-gutter-bottom-1@mobile">
                                        <li className="c-socials-list__item">
                                            <a className="c-social u-paint-4" target="_blank" href="http://www.facebook.com/thisispagepro">
                                                <span className="u-info">Visit our Facebook page</span>
                                                <span className="o-icon o-icon--facebook"></span>
                                            </a>
                                        </li>
                                        <li className="c-socials-list__item">
                                            <a className="c-social u-paint-4" target="_blank" href="https://www.linkedin.com/company/pagepro">
                                                <span className="u-info">Visit our Linkedin</span>
                                                <span className="o-icon o-icon--linkedin"></span>
                                            </a>
                                        </li>
                                        <li className="c-socials-list__item">
                                            <a className="c-social u-paint-4" target="_blank" href="https://github.com/pagepro">
                                                <span className="u-info">Visit our Github page</span>
                                                <span className="o-icon o-icon--github"></span>
                                            </a>
                                        </li>
                                        <li className="c-socials-list__item--instagram">
                                            <a className="c-social u-paint-4" target="_blank" href="https://www.instagram.com/pagepro_/">
                                                <span className="u-info">Visit our Instagram page</span>
                                                <span className="o-icon o-icon--instagram"></span>
                                            </a>
                                        </li>
                                        <li className="c-socials-list__item--slideshare">
                                            <a className="c-social u-paint-4" target="_blank" href="http://www.slideshare.net/Pagepro">
                                                <span className="u-info">Visit our Slideshare page</span>
                                                <span className="o-icon o-icon--slideshare"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>

    );
}

export default Header;