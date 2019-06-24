import React from "react"
import Header from '../components/header';
import Footer from '../components/footer';
import BgImage from '../components/bgImage'
import { graphql, Link } from "gatsby"
import storybook from '../../static/img/storybook.svg'
import bgServices from '../../static/img/bg_services.jpg'

const Services = (props) => (
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

            <div className="p-services">

                <Header />

                <main className="l-main">
                    <div class="l-hero l-hero--alt l-hero--small l-hero--with-overlay u-bg-2 u-paint-4" style={{ backgroundImage: `url(${bgServices})` }}>
                        <div class="c-video-box" data-video data-poster="./media/services-poster.jpg" data-srcs="./media/services.mp4,./media/services.webm"></div>
                        <div class="l-inner g-gutter-top-10 g-gutter-top-6@tablet">
                            <div class="l-hero__head row row-align-bottom g-gutter-top-8 g-gutter-top-3@mobile">
                                <div class="l-hero__head__box">
                                    <h1 class="t-style-fpn-xxl-b-u">
                                        Front-end Development Services
                        </h1>
                                </div>
                            </div>
                            <div class="l-hero__content row row-align-top g-gutter-top-5">
                                <div class="l-hero__content__box gr-12 no-gutter">
                                    <ul class="c-service-boxes-list js-services-list g-spacing-bottom-minus-8" style={{ width: '100%', maxWidth: '1140px', maxHeight: '570px' }}>
                                        <li class="c-service-boxes-list__item c-decors-parent" style={{ width: '25%' }}>
                                            <span class="c-decors-box c-decors-box--sup" aria-hidden="true">
                                                <span class="c-angle-decor c-angle-decor--right c-angle-decor--bottom g-gutter-right-1 g-gutter-top-1 u-paint-4"></span>
                                            </span>
                                            <div class="c-service-box">
                                                <a class="c-service-box__inner u-rev-on-hover-parent u-paint-4 u-paint-1-on-hover u-bg-1 c-mouse-follow-hover-parent js-mouse-follow-hover is-hovered-from-top" href="#service--front-end">
                                                    <span class="c-mouse-follow-hover-box u-paint-4" aria-hidden="true">
                                                        <span class="c-mouse-follow-hover-box__horizontal"></span>
                                                        <span class="c-mouse-follow-hover-box__vertical"></span>
                                                    </span>
                                                    <span class="c-ico-label c-ico-label--alt">
                                                        <span class="c-ico-label__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--round u-bg-4 u-paint-1 u-rev-on-hover">
                                                                <span class="o-icon o-icon--right"></span>
                                                                <span class="c-dash-ico"></span>
                                                            </span>
                                                        </span>
                                                        <span class="c-ico-label__info t-style-fpn-s-r-u">
                                                            Front-end development
                                            </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="c-service-boxes-list__item c-decors-parent" >
                                            <span class="c-decors-box c-decors-box--sup" aria-hidden="true">
                                                <span class="c-angle-decor c-angle-decor--left c-angle-decor--bottom g-gutter-right-1 g-gutter-top-1 u-paint-4"></span>
                                                <span class="c-angle-decor c-angle-decor--right c-angle-decor--bottom g-gutter-right-1 g-gutter-top-1 u-paint-4 hide@mobile-medium"></span>
                                            </span>
                                            <div class="c-service-box">
                                                <a class="c-service-box__inner u-rev-on-hover-parent u-paint-4 u-paint-1-on-hover u-bg-1 c-mouse-follow-hover-parent js-mouse-follow-hover is-hovered-from-top" href="#service--react">
                                                    <span class="c-mouse-follow-hover-box u-paint-4" aria-hidden="true">
                                                        <span class="c-mouse-follow-hover-box__horizontal"></span>
                                                        <span class="c-mouse-follow-hover-box__vertical"></span>
                                                    </span>
                                                    <span class="c-ico-label c-ico-label--alt">
                                                        <span class="c-ico-label__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span class="o-icon o-icon--react"></span>
                                                            </span>
                                                        </span>
                                                        <span class="c-ico-label__info t-style-fpn-s-r-u">
                                                            ReactJS development
                                            </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="c-service-boxes-list__item c-decors-parent">
                                            <span class="c-decors-box c-decors-box--sup" aria-hidden="true">
                                                <span class="c-angle-decor c-angle-decor--left c-angle-decor--bottom g-gutter-right-1 g-gutter-top-1 u-paint-4 hide@mobile-medium"></span>
                                                <span class="c-angle-decor c-angle-decor--right c-angle-decor--bottom g-gutter-right-1 g-gutter-top-1 u-paint-4"></span>
                                                <span class="c-angle-decor c-angle-decor--right c-angle-decor--top g-gutter-right-1 g-gutter-top-1 u-paint-4 hide show@mobile-medium"></span>
                                            </span>
                                            <div class="c-service-box">
                                                <a class="c-service-box__inner u-rev-on-hover-parent u-paint-4 u-paint-1-on-hover u-bg-1 c-mouse-follow-hover-parent js-mouse-follow-hover is-hovered-from-top" href="#service--react-native">
                                                    <span class="c-mouse-follow-hover-box u-paint-4" aria-hidden="true">
                                                        <span class="c-mouse-follow-hover-box__horizontal"></span>
                                                        <span class="c-mouse-follow-hover-box__vertical"></span>
                                                    </span>
                                                    <span class="c-ico-label c-ico-label--alt">
                                                        <span class="c-ico-label c-ico-label--alt">
                                                            <span class="c-ico-label__media" aria-hidden="true">
                                                                <span class="o-icon-wrapper o-icon-wrapper--alt">
                                                                    <span class="o-icon o-icon--react-native"></span>
                                                                </span>
                                                            </span>
                                                            <span class="c-ico-label__info t-style-fpn-s-r-u">
                                                                React Native development
                                            </span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="c-service-boxes-list__item c-decors-parent">
                                            <span class="c-decors-box c-decors-box--sup" aria-hidden="true">
                                                <span class="c-angle-decor c-angle-decor--left c-angle-decor--bottom g-gutter-right-1 g-gutter-top-1 u-paint-4"></span>
                                                <span class="c-angle-decor c-angle-decor--left c-angle-decor--top g-gutter-right-1 g-gutter-top-1 u-paint-4 hide show@mobile-medium"></span>
                                            </span>
                                            <div class="c-service-box">
                                                <a class="c-service-box__inner u-rev-on-hover-parent u-paint-4 u-paint-1-on-hover u-bg-1 c-mouse-follow-hover-parent js-mouse-follow-hover is-hovered-from-top" href="#service--nodejs">
                                                    <span class="c-mouse-follow-hover-box u-paint-4" aria-hidden="true">
                                                        <span class="c-mouse-follow-hover-box__horizontal"></span>
                                                        <span class="c-mouse-follow-hover-box__vertical"></span>
                                                    </span>
                                                    <span class="c-ico-label c-ico-label--alt">
                                                        <span class="c-ico-label__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span class="o-icon o-icon--nodejs"></span>
                                                            </span>
                                                        </span>
                                                        <span class="c-ico-label__info t-style-fpn-s-r-u">
                                                            Node.js Development
                                            </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="c-service-boxes-list__item c-decors-parent">
                                            <span class="c-decors-box c-decors-box--sup" aria-hidden="true">
                                                <span class="c-angle-decor c-angle-decor--right c-angle-decor--top g-gutter-right-1 g-gutter-top-1 u-paint-4"></span>
                                                <span class="c-angle-decor c-angle-decor--right c-angle-decor--bottom g-gutter-right-1 g-gutter-top-1 u-paint-4 hide show@mobile-medium"></span>
                                            </span>
                                            <div class="c-service-box">
                                                <a class="c-service-box__inner u-rev-on-hover-parent u-paint-4 u-paint-1-on-hover u-bg-1 c-mouse-follow-hover-parent js-mouse-follow-hover is-hovered-from-top" href="#service--psd-to-html">
                                                    <span class="c-mouse-follow-hover-box u-paint-4" aria-hidden="true">
                                                        <span class="c-mouse-follow-hover-box__horizontal"></span>
                                                        <span class="c-mouse-follow-hover-box__vertical"></span>
                                                    </span>
                                                    <span class="c-ico-label c-ico-label--alt">
                                                        <span class="c-ico-label__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span class="o-icon o-icon--psd"></span>
                                                            </span>
                                                        </span>
                                                        <span class="c-ico-label__info t-style-fpn-s-r-u">
                                                            PSD to HTML
                                            </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="c-service-boxes-list__item c-decors-parent">
                                            <span class="c-decors-box c-decors-box--sup" aria-hidden="true">
                                                <span class="c-angle-decor c-angle-decor--left c-angle-decor--top g-gutter-right-1 g-gutter-top-1 u-paint-4"></span>
                                                <span class="c-angle-decor c-angle-decor--left c-angle-decor--bottom g-gutter-right-1 g-gutter-top-1 u-paint-4 hide show@mobile-medium"></span>
                                                <span class="c-angle-decor c-angle-decor--right c-angle-decor--top g-gutter-right-1 g-gutter-top-1 u-paint-4 hide@mobile-medium"></span>
                                            </span>
                                            <div class="c-service-box">
                                                <a class="c-service-box__inner u-rev-on-hover-parent u-paint-4 u-paint-1-on-hover u-bg-1 c-mouse-follow-hover-parent js-mouse-follow-hover is-hovered-from-top" href="#service--psd-to-email">
                                                    <span class="c-mouse-follow-hover-box u-paint-4" aria-hidden="true">
                                                        <span class="c-mouse-follow-hover-box__horizontal"></span>
                                                        <span class="c-mouse-follow-hover-box__vertical"></span>
                                                    </span>
                                                    <span class="c-ico-label c-ico-label--alt">
                                                        <span class="c-ico-label__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span class="o-icon o-icon--mailing"></span>
                                                            </span>
                                                        </span>
                                                        <span class="c-ico-label__info t-style-fpn-s-r-u">
                                                            PSD to email
                                            </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="c-service-boxes-list__item c-decors-parent">
                                            <span class="c-decors-box c-decors-box--sup" aria-hidden="true">
                                                <span class="c-angle-decor c-angle-decor--left c-angle-decor--top g-gutter-right-1 g-gutter-top-1 u-paint-4 hide@mobile-medium"></span>
                                                <span class="c-angle-decor c-angle-decor--right c-angle-decor--top g-gutter-right-1 g-gutter-top-1 u-paint-4"></span>
                                            </span>
                                            <div class="c-service-box">
                                                <a class="c-service-box__inner u-rev-on-hover-parent u-paint-4 u-paint-1-on-hover u-bg-1 c-mouse-follow-hover-parent js-mouse-follow-hover is-hovered-from-top" href="#service--wordpress">
                                                    <span class="c-mouse-follow-hover-box u-paint-4" aria-hidden="true">
                                                        <span class="c-mouse-follow-hover-box__horizontal"></span>
                                                        <span class="c-mouse-follow-hover-box__vertical"></span>
                                                    </span>
                                                    <span class="c-ico-label c-ico-label--alt">
                                                        <span class="c-ico-label__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span class="o-icon o-icon--wordpress"></span>
                                                            </span>
                                                        </span>
                                                        <span class="c-ico-label__info t-style-fpn-s-r-u">
                                                            WordPress development
                                            </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="c-service-boxes-list__item c-decors-parent">
                                            <span class="c-decors-box c-decors-box--sup" aria-hidden="true">
                                                <span class="c-angle-decor c-angle-decor--left c-angle-decor--top g-gutter-right-1 g-gutter-top-1 u-paint-4"></span>
                                            </span>
                                            <div class="c-service-box">
                                                <a class="c-service-box__inner u-rev-on-hover-parent u-paint-4 u-paint-1-on-hover u-bg-1 c-mouse-follow-hover-parent js-mouse-follow-hover is-hovered-from-top" href="#service--dedicated-teams">
                                                    <span class="c-mouse-follow-hover-box u-paint-4" aria-hidden="true">
                                                        <span class="c-mouse-follow-hover-box__horizontal"></span>
                                                        <span class="c-mouse-follow-hover-box__vertical"></span>
                                                    </span>
                                                    <span class="c-ico-label c-ico-label--alt">
                                                        <span class="c-ico-label__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span class="o-icon o-icon--team"></span>
                                                            </span>
                                                        </span>
                                                        <span class="c-ico-label__info t-style-fpn-s-r-u">
                                                            Dedicated teams
                                            </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="l-sec g-gutter-top-8" id="service--front-end">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h2 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--round u-bg-1 u-paint-4">
                                                                <span className="o-icon o-icon--right"></span>
                                                                <span className="c-dash-ico"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            Front-end Development
                                            </span>
                                                    </span>
                                                </h2>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    Whether you’re looking for an external development partner, or expert developers to integrate with your in-house team, we’ll provide the right talent for your project. Our team of front-end developers not only supply technical expertise, but make sure your project is done the right way.
                                    </p>
                                                <p>
                                                    HTML5, CSS3, LESS, SASS, JavaScript, ES6, Style Guide, SVG, Animations, RWD.
                                    </p>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <Link className="c-cta-link s-btn-style-3" to="services/frontend-development">
                                                    <span className="c-label">Read more</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="service--react">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h2 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span className="o-icon o-icon--react"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            ReactJS Development
                                            </span>
                                                    </span>
                                                </h2>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    <strong>ReactJS</strong> is renowned for its extensibility, adjustability and convenience. Many of the developers acknowledge it one of the best JavaScript open source libraries. It makes possible the creation of such complex software as web browser and mobile application user interfaces that accommodate to the strictest standards.
                                    </p>
                                                <ul>
                                                    <li>Dedicated agile development team</li>
                                                    <li>Scrum coaches and quality assistants</li>
                                                    <li>Weekly iterations and SCRUM</li>
                                                    <li><strong>7 DAYS RISK FREE TRIAL</strong></li>
                                                    <li>NDA Agreement</li>
                                                </ul>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <Link className="c-cta-link s-btn-style-3" to="/services/react-development">
                                                    <span className="c-label">Read more</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="service--react-native">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h2 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span className="o-icon o-icon--react-native"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            React Native Development
                                            </span>
                                                    </span>
                                                </h2>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    <strong>React Native</strong> lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.
                                    </p>
                                                <p>
                                                    <strong>React Native</strong> is a JavaScript framework that allows a JavaScript developer to write two mobile apps (iOS and Android) using the same codebase thus using less resources than in native development.
                                    </p>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <Link className="c-cta-link s-btn-style-3" to="/services/react-native-development">
                                                    <span className="c-label">Read more</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="service--nodejs">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h2 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span className="o-icon o-icon--nodejs"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            Node.js Development
                                            </span>
                                                    </span>
                                                </h2>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    <strong>Node.js</strong> is an open source, cross-platform built on Chrome’s JavaScript runtime for fast and scalable server-side and networking applications. Being an interface to the V8 JavaScript runtime, it enables event-driven programming to the web servers through super-fast JavaScript interpreter that runs in the Chrome browser.
                                    </p>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <Link className="c-cta-link s-btn-style-3" to="/services/nodejs-development">
                                                    <span className="c-label">Read more</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="service--psd-to-html">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h2 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span className="o-icon o-icon--psd"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            PSD to HTML
                                            </span>
                                                    </span>
                                                </h2>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    We turn your designs into web standards compliant HTML5/CSS3 package. We are also doing JavaScript development.
                                    </p>
                                                <p>
                                                    We create code according to W3C standards, and our markup is displayed correctly in all popular modern browsers. The QA team tests the web pages in Internet Explorer 10+ and the latest versions of Firefox, Google Chrome, Safari, Edge and Opera by default for all packages.
                                    </p>
                                                <ul>
                                                    <li>High-quality coding standards</li>
                                                    <li>Based on our <a target="_blank" href="https://github.com/Pagepro/libsasserplate">Starter</a> or your own Boilerplate</li>
                                                    <li>SASS preprocessors</li>
                                                    <li>Semantic, commented and readable code</li>
                                                    <li>Easy to integrate with any CMS</li>
                                                    <li>100% hand-written code</li>
                                                    <li>Tested on real devices (in our DeviceLab)</li>
                                                    <li>Load-speed optimization</li>
                                                    <li>SEO-friendly code</li>
                                                    <li>Quality Assurance</li>
                                                </ul>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <a target="_blank" className="c-cta-link s-btn-style-3" href="http://psd2html.pagepro.co">
                                                    <span className="c-label">Read more</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="service--psd-to-email">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h2 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span className="o-icon o-icon--mailing"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            PSD to email
                                            </span>
                                                    </span>
                                                </h2>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    We've got some of the best solutions for your email marketing
                                                    needs: unbeatable code quality, one day turnaround, and the widest cross-platform compatibility.
                                    </p>
                                                <p>
                                                    Provide the designs and get the highest-quality, fast-loading email template that has been thoroughly tested on real devices, by real professionals.
                                    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="service--wordpress">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h2 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span className="o-icon o-icon--wordpress"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            WordPress Development
                                            </span>
                                                    </span>
                                                </h2>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    WordPress is currently the most popular CMS in the world with over 60 million installations and growing. We have worked on many of WordPress projects, from small blogging solutions to large-budget enterprise-sized implementations.
                                    </p>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <Link className="c-cta-link s-btn-style-3" to="/services/wordpress-development">
                                                    <span className="c-label">Read more</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="service--storybook">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h2 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-svg-wrapper o-svg-wrapper--photoshop">
                                                                <img src={storybook} alt="Storybook development logo" />
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            Storybook Development
                                            </span>
                                                    </span>
                                                </h2>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    <strong>Storybook</strong> is an open source tool for developing and testing application components in isolation. By providing a convenient environment, Storybook facilitates the creation of new UI components for the most popular frameworks such as Angular, React or Vue.
                                    </p>
                                                <p>
                                                    In work between many teams, it is very important to not reinvent the wheel but to share once created solutions. In this case, a good component library that allows a quick overview of the controls and sharing them becomes a crucial tool in the project.
                                    </p>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <Link className="c-cta-link s-btn-style-3" to="/services/storybook-development">
                                                    <span className="c-label">Read more</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="service--dedicated-teams">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h2 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span className="o-icon o-icon--team"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            Dedicated Teams / Team Argumentation
                                            </span>
                                                    </span>
                                                </h2>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    Working with Pagepro on a retainer will save you a lot of time, money, and more importantly, give you the best development team you can find.
                                    </p>
                                                <p>
                                                    The Pagepro team stands for quality, customer care, and the unbeatable experience from hundreds of completed projects.
                                                    We serve Agencies, Businesses, Freelancers.
                                    </p>
                                            </div>
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
                                            <Link className="c-cta-link s-btn-style-3" to="/contact">
                                                <span className="c-label">Contact Us</span>
                                            </Link>
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

export const serviceQuery = graphql`
  query {
    bgServices: file(relativePath: { eq: "bg_services.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 4160) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
      `

export default Services