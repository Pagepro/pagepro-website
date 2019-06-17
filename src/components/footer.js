import React from 'react';
import Newsletter from '../components/newsletter'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <>
            <footer className="l-foot u-bg-2 u-paint-4 g-gutter-top-5 g-gutter-top-2@mobile g-gutter-bottom-5 g-gutter-bottom-2@mobile">
                <div className="l-inner">

                    <div className="row row-align-between h-flex-stretch">
                        <div className="l-foot__box g-gr gr-4 gr-adapt@tablet gr-12@mobile no-gutter no-gutter@tablet no-gutter@mobile">
                            <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile" aria-label="Company address">
                                <div className="c-info-box__head u-text-centered@mobile">
                                    <h4 className="u-paint-3 t-style-fpn-s-r">Address</h4>
                                </div>
                                <div className="c-info-box__content g-gutter-top-1 u-text-centered@mobile">
                                    <strong className="t-style-fpn-l-r u-line-h-s">
                                        Pagepro LTD<br />
                                        International House<br />
                                        24 Holborn Viadut<br />
                                        London EC1A 2BN
                        </strong>
                                </div>
                            </div>
                            <div className="c-info-box g-gutter-top-4 g-gutter-top-2@mobile" aria-label="Company phone number">
                                <div className="c-info-box__head">
                                    <h4 className="u-paint-3 t-style-fpn-s-r">E-mail</h4>
                                </div>
                                <div className="c-info-box__content g-gutter-top-1 u-line-h-n">
                                    <strong className="t-style-fpn-s-r u-text-centered@mobile">
                                        hello@pagepro.co
                        </strong>
                                </div>
                            </div>
                        </div>

                        <Newsletter />

                        <div className="l-foot__box g-gr gr-4 gr-2@tablet no-gutter no-gutter@tablet h-hide@mobile">
                            <div className="row row-align-between">
                                <div className="c-info-box gr-adapt no-gutter-left" aria-label="About Pagepro">
                                    <div className="c-info-box__head">
                                        <h4 className="u-paint-3 t-style-fpn-s-r">Pagepro</h4>
                                    </div>
                                    <div className="c-info-box__content g-gutter-top-1">
                                        <ul>
                                            <li>
                                                <Link className="u-paint-4 u-default-link-anim" to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link className="u-paint-4 u-default-link-anim" to="/about">About</Link>
                                            </li>
                                            <li>
                                                <Link className="u-paint-4 u-default-link-anim" to="/works">Our Work</Link>
                                            </li>
                                            <li>
                                                <Link className="u-paint-4 u-default-link-anim" to="/services">Services</Link>
                                            </li>
                                            <li>
                                                <Link className="u-paint-4 u-default-link-anim" to="contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="c-info-box gr-adapt no-gutter-right hide@tablet" aria-label="Hire">
                                    <div className="c-info-box__head">
                                        <h4 className="u-paint-3 t-style-fpn-s-r">Hire</h4>
                                    </div>
                                    <div className="c-info-box__content g-gutter-top-1">
                                        <ul>
                                            <li>
                                                <Link className="u-paint-4 u-default-link-anim" to="/services/react-development">React Developers</Link>
                                            </li>
                                            <li>
                                                <Link className="u-paint-4 u-default-link-anim" to="/services/react-native-development">React Native Developers</Link>
                                            </li>
                                            <li>
                                                <Link className="u-paint-4 u-default-link-anim" to="/services/nodejs-development">Node.js Developers</Link>
                                            </li>
                                            <li>
                                                <Link className="u-paint-4 u-default-link-anim" to="/services/frontend-development">Front-end Developers</Link>
                                            </li>
                                            <li>
                                                <Link className="u-paint-4 u-default-link-anim" to="/services/wordpress-development">WordPress Developers</Link>
                                            </li>
                                            <li>
                                                <Link className="u-paint-4 u-default-link-anim" to="/services/storybook-development">Storybook Developers</Link>
                                            </li>
                                            <li>
                                                <Link className="u-paint-4 u-default-link-anim" to="/services#service--dedicated-teams">Dedicated Front-end Teams</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-align-between row-align-middle g-gutter-top-5 g-gutter-top-2@mobile">
                        <div className="l-foot__box g-gr gr-4 gr-12@mobile gr-adapt@tablet no-gutter-left no-gutter@tablet">
                            <p className="u-text-centered@mobile">
                                &copy; 2019 Pagepro. All rights reserved.
                </p>
                        </div>
                        <div className="g-gr gr-4 gr-12@mobile no-gutter-left no-gutter@tablet g-gutter-top-1@mobile u-text-centered@mobile">
                            <Link className="u-paint-4 u-default-link-anim" to="/cookies">Cookies Policy</Link>
                            <Link className="u-paint-4 u-default-link-anim g-spacing-left-1" to="/privacy-policy">Privacy Policy</Link>
                        </div>
                        <div className="l-foot__box g-gr gr-4 gr-12@mobile gr-adapt@tablet no-gutter-right no-gutter@tablet">
                            <ul className="c-socials-list ui-hover-opacity g-gutter-top-2@mobile">
                                <li className="c-socials-list__item">
                                    <a className="c-social u-paint-4" target="_blank" href="http://www.facebook.com/thisispagepro">
                                        <span className="u-info">Visit our Facebook Profile</span>
                                        <span className="o-icon o-icon--facebook"></span>
                                    </a>
                                </li>
                                <li className="c-socials-list__item">
                                    <a className="c-social u-paint-4" target="_blank" href="https://www.linkedin.com/company/pagepro">
                                        <span className="u-info">Visit our Linkedin Profile</span>
                                        <span className="o-icon o-icon--linkedin"></span>
                                    </a>
                                </li>
                                <li className="c-socials-list__item">
                                    <a className="c-social u-paint-4" target="_blank" href="https://github.com/pagepro">
                                        <span className="u-info">Visit our Github Profile</span>
                                        <span className="o-icon o-icon--github"></span>
                                    </a>
                                </li>
                                <li className="c-socials-list__item--instagram">
                                    <a className="c-social u-paint-4" target="_blank" href="https://www.instagram.com/pagepro_/">
                                        <span className="u-info">Visit our Instagram Profile</span>
                                        <span className="o-icon o-icon--instagram"></span>
                                    </a>
                                </li>
                                <li className="c-socials-list__item--slideshare">
                                    <a className="c-social u-paint-4" target="_blank" href="http://www.slideshare.net/Pagepro">
                                        <span className="u-info">Visit our Slideshare Profile</span>
                                        <span className="o-icon o-icon--slideshare"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;