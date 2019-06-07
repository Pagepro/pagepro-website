import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import Instagram from '../components/instagram'

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../static/img/', false, /\.(jpg|svg)$/));

const About = () => (
    <>
        {/* <div className="page-loader" style="transform: translateX(-100%);">
    <div className="logo">
        <div className="loader-circle"></div>
        <div className="loader-line-mask">
        <div className="loader-line"></div>
        </div>
        <span className="o-object-wrapper">
            <object type="image/svg+xml" data="static/img/logo_pagepro_loader.svg">Pagepro</object>
        </span>
    </div>
</div>
<div className="curtain"></div>
<script>document.querySelector('body').classNameList.add('loading-state');</script> */}
        <div id="page-content">

            <div className="p-about">

                <Header />

                <main className="l-main">
                    <div className="l-hero l-hero--alt l-hero--small l-hero--with-overlay l-hero--with-overlay--top u-bg-2 u-paint-4" style={{ backgroundImage: 'url(static/img/bg_services.jpg)' }}>
                        <div className="l-inner g-gutter-top-10 g-gutter-bottom-5 g-gutter-bottom-3@mobile">
                            <div className="l-hero__head row row-align-bottom g-gutter-top-8 g-gutter-top-2@mobile">
                                <div className="l-hero__head__box">
                                    <div className="case-study-media-box">
                                        <div className="case-study-media-box__info">
                                            <h2 className="t-style-fpn-xxl-b-u">
                                                About
                                    </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-sec">
                        <div className="l-row u-decor-bottom u-paint-5">
                            <div className="l-inner u-paint-2">
                                <div className="row row-align-between g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                                    <div className="l-sec__box gr-5 gr-12@mobile u-paint-1 t-style-fpn-l-r-u no-gutter-left no-gutter@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                At Pagepro, we are developing the web in the heart of Europe.
                                    </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                Having worked for clients worldwide, from New York to Singapore, we’re seeking new challenges. Because it’s time to redefine IT outsourcing and make it fit into one sentence right next to the word “enjoyable”.
                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Pagepro <strong>in numbers</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list c-info-boxes-list--rwd-alt g-spacing-bottom-minus-4 g-spacing-bottom-minus-2@desktop-small">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u">Projects done in 2018</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong className="t-style-fpn-xxxl-l u-paint-1" data-counter>176</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u">PSD converted into HTML in 2018</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong className="t-style-fpn-xxxl-l u-paint-1" data-counter>1757</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u">WordPress Projects in 2018</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong className="t-style-fpn-xxxl-l u-paint-1" data-counter>38</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u">Commits per week</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong className="t-style-fpn-xxxl-l u-paint-1" data-counter>1124</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u">Years in business</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong className="t-style-fpn-xxxl-l u-paint-1" data-counter>10</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u">Team members</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong className="t-style-fpn-xxxl-l u-paint-1" data-counter>18</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Instagram />

                    <section className="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Core <strong>values</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list g-spacing-bottom-minus-4 g-spacing-bottom-minus-2@desktop-small">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--target"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Creative ideas</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Complex decision-making processes require a lot of minds on board. we use all of our resources to build a product that fits your market.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--settings"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Build an MVP</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                We will help you build and improve your mvp (minimum viable product), using our experience gained over 5 years in bussines.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--sandglass"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Daily Standups</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                You're encouraged to join our daily standups - our development team will update you on current activities.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--diamond"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Trust &amp; Quality</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Working on the hour, we value your time and will deliver finished product that meets quality coding standards and deadlines.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--people"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Partnership</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                The success of your product is our success as well. You can count on our recommendations and advice from day one.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--dollar-molecule"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Budget Control</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Thanks to our reporting you're always in control of your budget. Easily follow costs for development or administration.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="l-sec l-sec--with-slider u-bg-1 u-paint-4">
                        <div className="l-row">
                            <div className="l-inner l-inner-no-gutters@desktop-small">
                                <div className="row row-align-center">
                                    <div className="l-sec__box gr-10 gr-12@desktop-small no-gutter no-gutter@desktop-small">
                                        <div className="l-sec__box__content">
                                            <div className="c-slider-wrapper c-slider-wrapper--testimonials js-testimonials-slider g-gutter-top-8 g-gutter-top-5@desktop-small g-gutter-bottom-8 g-gutter-bottom-5@desktop-small">
                                                <div className="c-slider-wrapper__container swiper-container" aria-label="testimonials slider">
                                                    <ol className="c-testimonials-list swiper-wrapper swiper-wrapper--alt">
                                                        <li className="c-testimonials-list__item swiper-slide">
                                                            <blockquote className="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-bottom-5 g-gutter-bottom-3@mobile g-gutter-left-4 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-right-4 g-gutter-right-2@desktop-small g-gutter-right-1@mobile" aria-label="Testimonial">
                                                                <div className="c-testimonial__content t-style-fpn-m-ri u-line-h-m c-chat-decor-parent">
                                                                    <p className="t-style-fpn-xl-ri-u">
                                                                        Chris and his team are <strong>very talented front-end developers</strong>. The level of commitment, quality and service level that they provide is hard to find.<br className="hide@tablet" /> We <strong>highly recommend</strong> them as a trusted partner.
                                                </p>
                                                                    <span className="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                        <span className="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                        <span className="c-chat-decor__line c-chat-decor__line--right"></span>
                                                                    </span>
                                                                </div>
                                                                <footer className="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                                    <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                        <img src={images['pic_ilona-filipi.jpg']} alt="Ilona Filipi" />
                                                                    </figure>
                                                                    <div className="c-testimonial__foot__info u-text-upper">
                                                                        <strong className="u-decor-bottom--alt t-style-fpn-s-r">Ilona Filipi</strong><br />
                                                                        Managing Director<br />
                                                                        Moove, London
                                                </div>
                                                                </footer>
                                                            </blockquote>
                                                        </li>
                                                        <li className="c-testimonials-list__item swiper-slide">
                                                            <blockquote className="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-bottom-5 g-gutter-bottom-3@mobile g-gutter-left-4 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-right-4 g-gutter-right-2@desktop-small g-gutter-right-1@mobile" aria-label="Testimonial">
                                                                <div className="c-testimonial__content t-style-fpn-m-ri u-line-h-m c-chat-decor-parent">
                                                                    <p className="u-line-h-m">
                                                                        I would like to recommend Pagepro as a high qualified <strong>Front-end development</strong> partner.
                                                                        For past three years, RevSquare was using Pagepro services to satisfy needs for clients from 10 different countries. During this time Pagepro provided high quality services, big support with good prices and communication skills.
                                                </p>
                                                                    <span className="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                        <span className="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                        <span className="c-chat-decor__line c-chat-decor__line--right"></span>
                                                                    </span>
                                                                </div>
                                                                <footer className="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                                    <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                        <img src={images['pic_guillaume-pousseo.jpg']} alt="Guillaume Pousseo" />
                                                                    </figure>
                                                                    <div className="c-testimonial__foot__info u-text-upper">
                                                                        <strong className="u-decor-bottom--alt t-style-fpn-s-r">Guillaume Pousseo</strong> <br />CTO<br />
                                                                        RevSquare, New York City
                                                </div>
                                                                </footer>
                                                            </blockquote>
                                                        </li>
                                                        <li className="c-testimonials-list__item g-gutter-right-3 g-gutter-right-0@tablet swiper-slide">
                                                            <blockquote className="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-left-2@tablet g-gutter-left-1@mobile g-gutter-right-2@tablet g-gutter-right-1@mobile" aria-label="Testimonial">
                                                                <div className="c-testimonial__content t-style-fpn-m-ri c-chat-decor-parent">
                                                                    <p className="u-line-h-m">
                                                                        The website was delivered on time and on budget. Redfox Media’s multiple touchpoints led to comprehensive communication and a unified vision that is rare for fixed-price projects. Differing time zones led to logistical challenges, <strong>but their experience and work ethic compensated for any issues</strong>.
                                                </p>
                                                                    <span className="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                        <span className="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                        <span className="c-chat-decor__line c-chat-decor__line--right"></span>
                                                                    </span>
                                                                </div>
                                                                <footer className="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                                    <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                        <img src={images['ppic-lance-redgrave.jpg']} alt="Lance Redgrave" />
                                                                    </figure>
                                                                    <div className="c-testimonial__foot__info u-text-upper">
                                                                        <strong className="u-decor-bottom--alt t-style-fpn-s-r">Lance Redgrave</strong> <br />CEO <br />Redfox Media, Sydney
                                                </div>
                                                                </footer>
                                                            </blockquote>
                                                        </li>
                                                        <li className="c-testimonials-list__item swiper-slide">
                                                            <blockquote className="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-bottom-5 g-gutter-bottom-3@mobile g-gutter-left-4 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-right-4 g-gutter-right-2@desktop-small g-gutter-right-1@mobile" aria-label="Testimonial">
                                                                <div className="c-testimonial__content t-style-fpn-m-ri u-line-h-m c-chat-decor-parent">
                                                                    <p className="u-line-h-m">
                                                                        We’ve had the ultimate good fortune of working with Chris and his team since 2015, building dozens upon dozens of sites. <strong>They deliver exactly when they say they will</strong> and it’s always pixel-perfect. But not only that, they prefer to under-promise and over-deliver!
                                                </p>
                                                                    <span className="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                        <span className="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                        <span className="c-chat-decor__line c-chat-decor__line--right"></span>
                                                                    </span>
                                                                </div>
                                                                <footer className="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                                    <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                        <img src={images['pic_michal-kenderski.jpg']} alt="Michal Kenderski" />
                                                                    </figure>
                                                                    <div className="c-testimonial__foot__info u-text-upper">
                                                                        <strong className="u-decor-bottom--alt t-style-fpn-s-r">Michal Kenderski</strong> <br />CEO<br />
                                                                        Republik-Media, London
                                            </div>
                                                                </footer>
                                                            </blockquote>
                                                        </li>
                                                        <li className="c-testimonials-list__item swiper-slide">
                                                            <blockquote className="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-bottom-5 g-gutter-bottom-3@mobile g-gutter-left-4 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-right-4 g-gutter-right-2@desktop-small g-gutter-right-1@mobile" aria-label="Testimonial">
                                                                <div className="c-testimonial__content t-style-fpn-m-ri u-line-h-m c-chat-decor-parent">
                                                                    <p className="u-line-h-m">
                                                                        Chris and his team came on board at the last minute to help us out with a complex and challenging project. <strong>They proved to be an invaluable resource.</strong> Pagepro is great at problem solving, very organised and deliver in a timely fashion. I’d recommend them highly and will look forward to working with them again on future projects.
                                                </p>
                                                                    <span className="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                        <span className="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                        <span className="c-chat-decor__line c-chat-decor__line--right"></span>
                                                                    </span>
                                                                </div>
                                                                <footer className="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                                    <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                        <img src={images['pic_carole-egerton.jpg']} alt="Carole Egerton" />
                                                                    </figure>
                                                                    <div className="c-testimonial__foot__info u-text-upper">
                                                                        <strong className="u-decor-bottom--alt t-style-fpn-s-r">Carole Egerton</strong> <br />Managing Director<br />Baffle &amp; Zander, London
                                                </div>
                                                                </footer>
                                                            </blockquote>
                                                        </li>
                                                        <li className="c-testimonials-list__item swiper-slide">
                                                            <blockquote className="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-bottom-5 g-gutter-bottom-3@mobile g-gutter-left-4 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-right-4 g-gutter-right-2@desktop-small g-gutter-right-1@mobile" aria-label="Testimonial">
                                                                <div className="c-testimonial__content c-chat-decor-parent">
                                                                    <p className="t-style-fpn-xl-ri-u">
                                                                        <strong>They are more than a great development team.</strong> They are a partner that helps create high quality applications.
                                                </p>
                                                                    <span className="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                        <span className="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                        <span className="c-chat-decor__line c-chat-decor__line--right"></span>
                                                                    </span>
                                                                </div>
                                                                <footer className="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                                    <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                        <img src={images['pic_paul-horrocks.jpg']} alt="John Horrocks" />
                                                                    </figure>
                                                                    <div className="c-testimonial__foot__info u-text-upper">
                                                                        <strong className="u-decor-bottom--alt t-style-fpn-s-r">John Horrocks</strong><br />
                                                                        Rocksurance<br />
                                                                        New York City
                                                </div>
                                                                </footer>
                                                            </blockquote>
                                                        </li>
                                                    </ol>
                                                </div>
                                                <div className="c-slider-wrapper__navigation swiper-navigation">
                                                    <span className="c-slider-button c-slider-button--prev js-slider-prev" aria-label="go to next slide"></span>
                                                    <span className="c-slider-button c-slider-button--next js-slider-next" aria-label="go to previous slide"></span>
                                                    <ol className="c-dots-list">
                                                        <li className="c-dots-list__item">
                                                            <span className="c-dot u-bg-4 u-paint-2"></span>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small u-bg-6">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h2 className="t-style-fpn-l-r-u">
                                                Spreading our <strong>knowledge</strong>
                                            </h2>
                                            <p className="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                Teaching is a part of our company's DNA: we do internal lectures and workshops, speak at meetups and conferences, write blog posts.
                        </p>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media c-info-box__media--alt" aria-hidden="true">
                                                            <figure className="o-img-wrapper">
                                                                <img src={images['reactjs-workshop.jpg']} alt="ReactJS open workshop" />
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">
                                                                Open Workshop: Introducing basics of React
                                        </span>
                                                        </div>
                                                        <div className="c-info-box__content">
                                                            <p>
                                                                16.05.2018, Białystok, Poland.
                                        </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media c-info-box__media--alt" aria-hidden="true">
                                                            <figure className="o-img-wrapper">
                                                                <img src={images['reactjs-lecture.jpg']} alt="ReactJS lecture at Bialystok University of Technology" />
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">
                                                                A lecture at Bialystok University of Technology
                                        </span>
                                                        </div>
                                                        <div className="c-info-box__content">
                                                            <p>
                                                                28.05.2018, Białystok, Poland.
                                        </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media c-info-box__media--alt" aria-hidden="true">
                                                            <figure className="o-img-wrapper">
                                                                <img src={images['meetjs-react-redux-lecture.jpg']} alt="Advanced React &amp; Redux Patterns - a lecture on MeetJS Summer Special" />
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">
                                                                Advanced React &amp; Redux Patterns - a lecture on MeetJS Summer Special
                                        </span>
                                                        </div>
                                                        <div className="c-info-box__content">
                                                            <p>
                                                                25.08.2018, Białystok, Poland.
                                        </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section className="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small u-bg-5">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-xl-r-u u-paint-1 u-text-centered">
                                                Achieve success with us!
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-align-center g-gutter-top-4 g-gutter-top-3@desktop-small">
                                    <div className="l-sec__box gr-6 gr-12@mobile-big no-gutter@mobile-big">
                                        <div className="l-sec__box__content t-style-fpn-s-r u-line-h-m">
                                            <p className="u-text-centered">
                                                Need a qualified software development team to take your project from where it is now, to where you want it to be?
                                            </p>
                                            <p className="g-gutter-top-3 g-gutter-top-2@desktop-small u-text-centered">
                                                <strong className="t-style-fpn-s-s">Talk to us and get the ball rolling.</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-align-center g-gutter-top-4 g-gutter-top-3@desktop-small">
                                    <div className="l-sec__box gr-6">
                                        <div className="l-sec__box__actions c-decors-parent">
                                            <div className="c-decors-box" aria-hidden="true">
                                                <div className="c-decor-wrapper c-decor-wrapper--center-vertical c-decor-wrapper--right">
                                                    <span className="c-plane-decor u-paint-4">
                                                        <span className="o-icon o-icon--plane"></span>
                                                    </span>
                                                </div>
                                            </div>
                                            <a className="c-cta-link s-btn-style-3" href="contact.html">
                                                <span className="c-label">Contact Us</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </div>


            <Footer />
        </div>
    </>
)


export default About