import React from 'react';
import Newsletter from '../components/newsletter'

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
                                                <a className="u-paint-4 u-default-link-anim" href="index.html">Home</a>
                                            </li>
                                            <li>
                                                <a className="u-paint-4 u-default-link-anim" href="about.html">About</a>
                                            </li>
                                            <li>
                                                <a className="u-paint-4 u-default-link-anim" href="our-work.html">Our Work</a>
                                            </li>
                                            <li>
                                                <a className="u-paint-4 u-default-link-anim" href="services.html">Services</a>
                                            </li>
                                            <li>
                                                <a className="u-paint-4 u-default-link-anim" href="agencies.html">For Agencies</a>
                                            </li>
                                            <li>
                                                <a className="u-paint-4 u-default-link-anim" href="contact.html">Contact</a>
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
                                                <a className="u-paint-4 u-default-link-anim" href="react-development.html">React Developers</a>
                                            </li>
                                            <li>
                                                <a className="u-paint-4 u-default-link-anim" href="react-native-development.html">React Native Developers</a>
                                            </li>
                                            <li>
                                                <a className="u-paint-4 u-default-link-anim" href="nodejs-development.html">Node.js Developers</a>
                                            </li>
                                            <li>
                                                <a className="u-paint-4 u-default-link-anim" href="frontend-development.html">Front-end Developers</a>
                                            </li>
                                            <li>
                                                <a className="u-paint-4 u-default-link-anim" href="wordpress-development.html">WordPress Developers</a>
                                            </li>
                                            <li>
                                                <a className="u-paint-4 u-default-link-anim" href="storybook-development.html">Storybook Developers</a>
                                            </li>
                                            <li>
                                                <a className="u-paint-4 u-default-link-anim" href="services.html#service--dedicated-teams">Dedicated Front-end Teams</a>
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
                            <a className="u-paint-4 u-default-link-anim" href="cookies.html">Cookies Policy</a>
                            <a className="u-paint-4 u-default-link-anim g-spacing-left-1" href="privacy.html">Privacy Policy</a>
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