import React from "react"
import Header from '../components/header'

const Contact = () => (
    <>
        <div id="page-content">

            <div class="p-services">


                <Header />

                <main class="l-main">
                    <div class="l-hero l-hero--alt l-hero--map l-hero--small l-hero--with-overlay l-hero--with-overlay--alt" aria-hidden="true">
                        <div class="l-hero__content row row-align-top">
                            <div class="l-hero__content__box gr-12 no-gutter">
                                <div class="c-map-container js-map-container">
                                    <div id="c-map" data-zoom="17" data-lat="51.5169795" data-lng="-0.10476360000006935"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="l-sec">
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row row-align-between g-gutter-top-5">
                                    <div class="l-sec__box gr-6 gr-12@mobile-small no-gutter-left no-gutter@mobile-small">
                                        <div class="l-sec__box__content">
                                            <a href="#" class="c-info-box c-info-box--centered-mobile active" aria-label="Company address in London" data-cords="51.5169795,-0.10476360000006935">
                                                <div class="c-info-box__media" aria-hidden="true">
                                                    <span class="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt">
                                                        <span class="o-icon o-icon--london"></span>
                                                    </span>
                                                </div>
                                                <div class="c-info-box__head g-gutter-top-1">
                                                    <h3 class="t-style-fpn-s-r-u">London</h3>
                                                </div>
                                                <div class="c-info-box__content g-gutter-top-1">
                                                    <strong class="t-style-fpn-l-r">
                                                        Pagepro LTD<br />
                                                        International House<br />
                                                        24 Holborn Viaduct<br />
                                                        London EC1A 2BN
                                                    </strong>
                                                </div>
                                                <div class="c-info-box__foot g-gutter-top-1">
                                                    <span class="t-style-fpn-s-r-u">
                                                        <span class="u-paint-3">Company number:</span>
                                                        <span>10030163</span>
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 gr-12@mobile-small no-gutter-right no-gutter@mobile-small g-spacing-top-5@mobile-small">
                                        <div class="l-sec__box__content">
                                            <a href="#" class="c-info-box c-info-box--centered-mobile" aria-label="Company address in Bialystok" data-cords="53.1365894,23.14256380000006">
                                                <div class="c-info-box__media" aria-hidden="true">
                                                    <span class="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt">
                                                        <span class="o-icon o-icon--bialystok"></span>
                                                    </span>
                                                </div>
                                                <div class="c-info-box__head g-gutter-top-1">
                                                    <h3 class="t-style-fpn-s-r-u">Bialystok</h3>
                                                </div>
                                                <div class="c-info-box__content g-gutter-top-1">
                                                    <strong class="t-style-fpn-l-r">
                                                        Pagepro Sp. z o.o.<br />
                                                        Dąbrowskiego 28<br />
                                                        15-872 Białystok<br />
                                                        Poland
                                                    </strong>
                                                </div>
                                                <div class="c-info-box__foot g-gutter-top-1">
                                                    <span class="t-style-fpn-s-r-u">
                                                        <span class="u-paint-3">Phone:</span>
                                                        <span>+48 888 641 098</span>
                                                    </span><br /><br />
                                                    <span class="t-style-fpn-s-r-u">
                                                        <span class="u-paint-3">NIP:</span>
                                                        <span>542-327-00-57</span>
                                                    </span><br />
                                                    <span class="t-style-fpn-s-r-u">
                                                        <span class="u-paint-3">REGON:</span>
                                                        <span>366771509</span>
                                                    </span><br />
                                                    <span class="t-style-fpn-s-r-u">
                                                        <span class="u-paint-3">KRS:</span>
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
                    <section class="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-3@desktop-small">
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Let's <strong>work together</strong>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-gutter-top-3">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__content">
                                            <form class="f-form f-form--contact js__form--contact">
                                                <fieldset>
                                                    <div class="f-form__row row">
                                                        <div class="f-form__box gr-6 gr-12@tablet no-gutter-left no-gutter@tablet">
                                                            <div class="row">
                                                                <div class="gr-6 gr-12@mobile no-gutter-left no-gutter@mobile">
                                                                    <div class="f-form__section">
                                                                        <div class="f-field f-field--anim f-field--input">
                                                                            <div class="f-label-wrapper">
                                                                                <label class="t-style-fpn-xxs-r u-paint-3" for="contact_full-name">Full Name</label>
                                                                            </div>
                                                                            <div class="f-input-wrapper f-input-wrapper--person u-paint-3">
                                                                                <input class="u-paint-2" required type="text" name="msg_name" id="contact_full-name" value="" />
                                                                                <span class="o-icon o-icon--user u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="f-form__section g-spacing-top-2 g-spacing-top-1@mobile">
                                                                        <div class="f-field f-field--anim f-field--input">
                                                                            <div class="f-label-wrapper">
                                                                                <label class="t-style-fpn-xxs-r u-paint-3" for="contact_email">E-mail Address</label>
                                                                            </div>
                                                                            <div class="f-input-wrapper f-input-wrapper--mail u-paint-3">
                                                                                <input class="u-paint-2" required type="email" name="msg_email" id="contact_email" value="" />
                                                                                <span class="o-icon o-icon--mail u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-1@mobile">
                                                                    <div class="f-form__section">
                                                                        <div class="f-field f-field--anim f-field--input">
                                                                            <div class="f-label-wrapper">
                                                                                <label class="t-style-fpn-xxs-r u-paint-3" for="contact_company">Company</label>
                                                                            </div>
                                                                            <div class="f-input-wrapper f-input-wrapper--company u-paint-3">
                                                                                <input class="u-paint-2" type="text" name="msg_company" id="contact_company" value="" />
                                                                                <span class="o-icon o-icon--building u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="f-form__section g-spacing-top-2 g-spacing-top-1@mobile">
                                                                        <div class="f-field f-field--anim f-field--input">
                                                                            <div class="f-label-wrapper">
                                                                                <label class="t-style-fpn-xxs-r u-paint-3" for="contact_phone">Phone Number</label>
                                                                            </div>
                                                                            <div class="f-input-wrapper f-input-wrapper--phone u-paint-3">
                                                                                <input class="u-paint-2" type="text" name="msg_phone" id="contact_phone" value="" />
                                                                                <span class="o-icon o-icon--phone u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="f-form__box f-form__box--stretch gr-6 gr-12@tablet no-gutter-right no-gutter@tablet g-spacing-top-2@tablet g-spacing-top-1@mobile">
                                                            <div class="row">
                                                                <div class="gr-12 no-gutter">
                                                                    <div class="f-form__section">
                                                                        <div class="f-field f-field--anim f-field--textarea">
                                                                            <div class="f-label-wrapper">
                                                                                <label class="t-style-fpn-xxs-r u-paint-3" for="contact_description">Message</label>
                                                                            </div>
                                                                            <div class="f-textarea-wrapper u-paint-3">
                                                                                <textarea class="u-paint-2" required id="contact_description" name="msg_content"></textarea>
                                                                                <span class="o-icon o-icon--comment u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="f-form__row row row-align-right g-gutter-top-3">
                                                        <div class="f-form__box gr-adapt no-gutter">
                                                            <button class="c-btn s-btn-style-4">
                                                                <span class="c-label">Send a message</span>
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



            <footer class="l-foot u-bg-4 u-paint-2 g-gutter-top-5 g-gutter-top-2@mobile g-gutter-bottom-5 g-gutter-bottom-2@mobile">
                <div class="l-inner">

                    <div class="row row-align-between row-align-middle ">
                        <div class="l-foot__box g-gr gr-4 gr-12@mobile gr-adapt@tablet no-gutter-left no-gutter@tablet">
                            <p class="u-text-centered@mobile">
                                &copy; 2019 Pagepro. All rights reserved.
                            </p>
                        </div>
                        <div class="g-gr gr-4 gr-12@mobile no-gutter-left no-gutter@tablet g-gutter-top-1@mobile u-text-centered@mobile">
                            <a class="u-paint-2 u-default-link-anim" href="cookies.html">Cookies Policy</a>
                            <a class="u-paint-2 u-default-link-anim g-spacing-left-1" href="privacy.html">Privacy Policy</a>
                        </div>
                        <div class="l-foot__box g-gr gr-4 gr-12@mobile gr-adapt@tablet no-gutter-right no-gutter@tablet">
                            <ul class="c-socials-list ui-hover-opacity g-gutter-top-2@mobile">
                                <li class="c-socials-list__item">
                                    <a class="c-social u-paint-2" target="_blank" href="http://www.facebook.com/thisispagepro">
                                        <span class="u-info">Visit our Facebook Profile</span>
                                        <span class="o-icon o-icon--facebook"></span>
                                    </a>
                                </li>
                                <li class="c-socials-list__item">
                                    <a class="c-social u-paint-2" target="_blank" href="https://www.linkedin.com/company/pagepro">
                                        <span class="u-info">Visit our Linkedin Profile</span>
                                        <span class="o-icon o-icon--linkedin"></span>
                                    </a>
                                </li>
                                <li class="c-socials-list__item">
                                    <a class="c-social u-paint-2" target="_blank" href="https://github.com/pagepro">
                                        <span class="u-info">Visit our Github Profile</span>
                                        <span class="o-icon o-icon--github"></span>
                                    </a>
                                </li>
                                <li class="c-socials-list__item--instagram">
                                    <a class="c-social u-paint-2" target="_blank" href="https://www.instagram.com/pagepro_/">
                                        <span class="u-info">Visit our Instagram Profile</span>
                                        <span class="o-icon o-icon--instagram"></span>
                                    </a>
                                </li>
                                <li class="c-socials-list__item--slideshare">
                                    <a class="c-social u-paint-2" target="_blank" href="http://www.slideshare.net/Pagepro">
                                        <span class="u-info">Visit our Slideshare Profile</span>
                                        <span class="o-icon o-icon--slideshare"></span>
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