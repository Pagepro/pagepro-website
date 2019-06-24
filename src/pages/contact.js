import React from "react"
import Header from '../components/header'

const Contact = () => (
    <>
        <div id="page-content">

            <div className="p-services">


                <Header />

                <main className="l-main">
                    <div className="l-hero l-hero--alt l-hero--map l-hero--small l-hero--with-overlay l-hero--with-overlay--alt" aria-hidden="true">
                        <div className="l-hero__content row row-align-top">
                            <div className="l-hero__content__box gr-12 no-gutter">
                                <div className="c-map-container js-map-container">
                                    <div id="c-map" data-zoom="17" data-lat="51.5169795" data-lng="-0.10476360000006935"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-sec">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row row-align-between g-gutter-top-5">
                                    <div className="l-sec__box gr-6 gr-12@mobile-small no-gutter-left no-gutter@mobile-small">
                                        <div className="l-sec__box__content">
                                            <a href="#" className="c-info-box c-info-box--centered-mobile active" aria-label="Company address in London" data-cords="51.5169795,-0.10476360000006935">
                                                <div className="c-info-box__media" aria-hidden="true">
                                                    <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt">
                                                        <span className="o-icon o-icon--london"></span>
                                                    </span>
                                                </div>
                                                <div className="c-info-box__head g-gutter-top-1">
                                                    <h3 className="t-style-fpn-s-r-u">London</h3>
                                                </div>
                                                <div className="c-info-box__content g-gutter-top-1">
                                                    <strong className="t-style-fpn-l-r">
                                                        Pagepro LTD<br />
                                                        International House<br />
                                                        24 Holborn Viaduct<br />
                                                        London EC1A 2BN
                                                    </strong>
                                                </div>
                                                <div className="c-info-box__foot g-gutter-top-1">
                                                    <span className="t-style-fpn-s-r-u">
                                                        <span className="u-paint-3">Company number:</span>
                                                        <span>10030163</span>
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-6 gr-12@mobile-small no-gutter-right no-gutter@mobile-small g-spacing-top-5@mobile-small">
                                        <div className="l-sec__box__content">
                                            <a href="#" className="c-info-box c-info-box--centered-mobile" aria-label="Company address in Bialystok" data-cords="53.1365894,23.14256380000006">
                                                <div className="c-info-box__media" aria-hidden="true">
                                                    <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt">
                                                        <span className="o-icon o-icon--bialystok"></span>
                                                    </span>
                                                </div>
                                                <div className="c-info-box__head g-gutter-top-1">
                                                    <h3 className="t-style-fpn-s-r-u">Bialystok</h3>
                                                </div>
                                                <div className="c-info-box__content g-gutter-top-1">
                                                    <strong className="t-style-fpn-l-r">
                                                        Pagepro Sp. z o.o.<br />
                                                        Dąbrowskiego 28<br />
                                                        15-872 Białystok<br />
                                                        Poland
                                                    </strong>
                                                </div>
                                                <div className="c-info-box__foot g-gutter-top-1">
                                                    <span className="t-style-fpn-s-r-u">
                                                        <span className="u-paint-3">Phone:</span>
                                                        <span>+48 888 641 098</span>
                                                    </span><br /><br />
                                                    <span className="t-style-fpn-s-r-u">
                                                        <span className="u-paint-3">NIP:</span>
                                                        <span>542-327-00-57</span>
                                                    </span><br />
                                                    <span className="t-style-fpn-s-r-u">
                                                        <span className="u-paint-3">REGON:</span>
                                                        <span>366771509</span>
                                                    </span><br />
                                                    <span className="t-style-fpn-s-r-u">
                                                        <span className="u-paint-3">KRS:</span>
                                                        <span>0000667902</span>
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-3@desktop-small">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Let's <strong>work together</strong>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-gutter-top-3">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__content">
                                            <form className="f-form f-form--contact js__form--contact">
                                                <fieldset>
                                                    <div className="f-form__row row">
                                                        <div className="f-form__box gr-6 gr-12@tablet no-gutter-left no-gutter@tablet">
                                                            <div className="row">
                                                                <div className="gr-6 gr-12@mobile no-gutter-left no-gutter@mobile">
                                                                    <div className="f-form__section">
                                                                        <div className="f-field f-field--anim f-field--input">
                                                                            <div className="f-label-wrapper">
                                                                                <label className="t-style-fpn-xxs-r u-paint-3" for="contact_full-name">Full Name</label>
                                                                            </div>
                                                                            <div className="f-input-wrapper f-input-wrapper--person u-paint-3">
                                                                                <input className="u-paint-2" required type="text" name="msg_name" id="contact_full-name" value="" />
                                                                                <span className="o-icon o-icon--user u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="f-form__section g-spacing-top-2 g-spacing-top-1@mobile">
                                                                        <div className="f-field f-field--anim f-field--input">
                                                                            <div className="f-label-wrapper">
                                                                                <label className="t-style-fpn-xxs-r u-paint-3" for="contact_email">E-mail Address</label>
                                                                            </div>
                                                                            <div className="f-input-wrapper f-input-wrapper--mail u-paint-3">
                                                                                <input className="u-paint-2" required type="email" name="msg_email" id="contact_email" value="" />
                                                                                <span className="o-icon o-icon--mail u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-1@mobile">
                                                                    <div className="f-form__section">
                                                                        <div className="f-field f-field--anim f-field--input">
                                                                            <div className="f-label-wrapper">
                                                                                <label className="t-style-fpn-xxs-r u-paint-3" for="contact_company">Company</label>
                                                                            </div>
                                                                            <div className="f-input-wrapper f-input-wrapper--company u-paint-3">
                                                                                <input className="u-paint-2" type="text" name="msg_company" id="contact_company" value="" />
                                                                                <span className="o-icon o-icon--building u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="f-form__section g-spacing-top-2 g-spacing-top-1@mobile">
                                                                        <div className="f-field f-field--anim f-field--input">
                                                                            <div className="f-label-wrapper">
                                                                                <label className="t-style-fpn-xxs-r u-paint-3" for="contact_phone">Phone Number</label>
                                                                            </div>
                                                                            <div className="f-input-wrapper f-input-wrapper--phone u-paint-3">
                                                                                <input className="u-paint-2" type="text" name="msg_phone" id="contact_phone" value="" />
                                                                                <span className="o-icon o-icon--phone u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="f-form__box f-form__box--stretch gr-6 gr-12@tablet no-gutter-right no-gutter@tablet g-spacing-top-2@tablet g-spacing-top-1@mobile">
                                                            <div className="row">
                                                                <div className="gr-12 no-gutter">
                                                                    <div className="f-form__section">
                                                                        <div className="f-field f-field--anim f-field--textarea">
                                                                            <div className="f-label-wrapper">
                                                                                <label className="t-style-fpn-xxs-r u-paint-3" for="contact_description">Message</label>
                                                                            </div>
                                                                            <div className="f-textarea-wrapper u-paint-3">
                                                                                <textarea className="u-paint-2" required id="contact_description" name="msg_content"></textarea>
                                                                                <span className="o-icon o-icon--comment u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="f-form__row row row-align-right g-gutter-top-3">
                                                        <div className="f-form__box gr-adapt no-gutter">
                                                            <button className="c-btn s-btn-style-4">
                                                                <span className="c-label">Send a message</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>



            <footer className="l-foot u-bg-4 u-paint-2 g-gutter-top-5 g-gutter-top-2@mobile g-gutter-bottom-5 g-gutter-bottom-2@mobile">
                <div className="l-inner">

                    <div className="row row-align-between row-align-middle ">
                        <div className="l-foot__box g-gr gr-4 gr-12@mobile gr-adapt@tablet no-gutter-left no-gutter@tablet">
                            <p className="u-text-centered@mobile">
                                &copy; 2019 Pagepro. All rights reserved.
                            </p>
                        </div>
                        <div className="g-gr gr-4 gr-12@mobile no-gutter-left no-gutter@tablet g-gutter-top-1@mobile u-text-centered@mobile">
                            <a className="u-paint-2 u-default-link-anim" href="cookies.html">Cookies Policy</a>
                            <a className="u-paint-2 u-default-link-anim g-spacing-left-1" href="privacy.html">Privacy Policy</a>
                        </div>
                        <div className="l-foot__box g-gr gr-4 gr-12@mobile gr-adapt@tablet no-gutter-right no-gutter@tablet">
                            <ul className="c-socials-list ui-hover-opacity g-gutter-top-2@mobile">
                                <li className="c-socials-list__item">
                                    <a className="c-social u-paint-2" target="_blank" href="http://www.facebook.com/thisispagepro">
                                        <span className="u-info">Visit our Facebook Profile</span>
                                        <span className="o-icon o-icon--facebook"></span>
                                    </a>
                                </li>
                                <li className="c-socials-list__item">
                                    <a className="c-social u-paint-2" target="_blank" href="https://www.linkedin.com/company/pagepro">
                                        <span className="u-info">Visit our Linkedin Profile</span>
                                        <span className="o-icon o-icon--linkedin"></span>
                                    </a>
                                </li>
                                <li className="c-socials-list__item">
                                    <a className="c-social u-paint-2" target="_blank" href="https://github.com/pagepro">
                                        <span className="u-info">Visit our Github Profile</span>
                                        <span className="o-icon o-icon--github"></span>
                                    </a>
                                </li>
                                <li className="c-socials-list__item--instagram">
                                    <a className="c-social u-paint-2" target="_blank" href="https://www.instagram.com/pagepro_/">
                                        <span className="u-info">Visit our Instagram Profile</span>
                                        <span className="o-icon o-icon--instagram"></span>
                                    </a>
                                </li>
                                <li className="c-socials-list__item--slideshare">
                                    <a className="c-social u-paint-2" target="_blank" href="http://www.slideshare.net/Pagepro">
                                        <span className="u-info">Visit our Slideshare Profile</span>
                                        <span className="o-icon o-icon--slideshare"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>



        </div>
    </>
)


export default Contact