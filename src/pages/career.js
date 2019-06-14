import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import JobOfferList from '../components/jobOfferList';
import Instagram from '../components/instagram';
import BgImage from '../components/bgImage';
import { graphql } from "gatsby";


function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../static/img/', false, /\.(jpg|svg)$/));

const Career = (props) => (
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
<script>document.querySelector('body').classList.add('loading-state');</script> */}
        <div id="page-content">

            <div className="p-uk-agencies">


                <Header />

                <main className="l-main">
                    <BgImage
                        title="bgAgencies"
                        fluid={props.data.bgAgencies.childImageSharp.fluid}
                        height='424px'
                        className="l-hero l-hero--alt l-hero--small l-hero--with-overlay u-paint-4" >
                        <div className="l-inner g-gutter-top-10 g-gutter-bottom-5 g-gutter-bottom-3@mobile">
                            <div className="l-hero__head row row-align-bottom g-gutter-top-8 g-gutter-top-2@mobile">
                                <div className="l-hero__head__box">
                                    <strong className="t-style-fpn-xl-r-u">Career at Pagepro</strong>
                                    <h2 className="t-style-fpn-xxl-b g-spacing-top-2">
                                        Learn something new every day.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </BgImage>
                    <section className="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Working at <strong>Pagepro</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--international u-m-left-3"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">International Projects</h4>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                <strong>We work with clients all over the world</strong>, usually with top-notch startups from UK&amp;US with the hottest tech stack.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--review"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Code Review</h4>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Working with front-end experts and getting feedback from their code reviews <strong>will grow your pump your skills dramatically</strong>.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--react"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Latest Technologies</h4>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Clients sometimes like to support legacy technologies, that is fine, but not in Pagepro. <strong>Every project we need to grow our developer's skills</strong>.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--chart-grow u-m-left-3"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Extreme Learning Speed</h4>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                <strong>The key to working at Pagepro is learning.</strong> Every 3 months we set new learning goals for you and every month we are checking on your progress.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--screen-idea u-m-left-3"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Career Path <a href="https://docs.google.com/spreadsheets/d/1LvNnEJtfCSGJ-DaF1NCEtKoJzhss7v2TfXhKAXmdpJo/edit?usp=sharing" className="t-lower" target="_blank">(preview)</a></h4>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Every position at Pagepro is <strong>well described with clear requirements</strong>.
                                                                You always know what stage are you are at now, and what you need to improve to be promoted.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--money"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Internal Trainings</h4>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Every Friday you can work on non comercial projects to <strong>develop your skills</strong> in selected areas.
                                                                Fridays are also spent on knowledge exchanging and sharing ideas.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--screen-code u-m-left-3"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Best tools</h4>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                You will have the advantage of working on a brand new <strong>Apple Macbook</strong> with two flat-screen monitors. We will help you to configure and install the best software.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--screen-js u-m-left-3"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Flexible Working Hours</h4>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Let's adjust your plan to work efficiently at the office or <strong>work remotly</strong> from any place in the world with an internet connection.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--chart-wordpress u-m-left-3"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Other Bonuses</h4>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Free lunch every day, attending awesome company events and <strong>international conference trips</strong> are just some of the perks of being a member of the team.
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

                    <section className="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-2@desktop-small">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Our <strong>tech stack</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list c-info-boxes-list--alt">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://facebook.github.io/react/" target="_blank">
                                                                    <img src={images['react.svg']} alt="React logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">REACT</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://facebook.github.io/react-native/" target="_blank">
                                                                    <img src={images['react-native.svg']} alt="React Native logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">REACT NATIVE</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://redux.js.org/" target="_blank">
                                                                    <img src={images['redux.svg']} alt="Redux logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">REDUX</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://github.com/mobxjs/mobx" target="_blank">
                                                                    <img src={images['mobx.svg']} alt="Mobx logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">MOBX</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                                                                    <img src={images['html5.svg']} alt="HTML5 logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">HTML5</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://developer.mozilla.org/en/docs/Web/CSS/CSS3" target="_blank">
                                                                    <img src={images['css.svg']} alt="CSS3 logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">CSS3</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--horizontal-default">
                                                                <a href="https://www.w3schools.com/js/" target="_blank">
                                                                    <img src={images['javascript.svg']} alt="JavaScript logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">JavaScript ES6</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://gulpjs.com/" target="_blank">
                                                                    <img src={images['gulp.svg']} alt="Gulp logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Gulp</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--photoshop">
                                                                <a href="http://www.photoshop.com/" target="_blank">
                                                                    <img src={images['psd.svg']} alt="Adobe Photoshop logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Photoshop</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--photoshop">
                                                                <a href="https://www.adobe.com/pl/products/xd.html" target="_blank">
                                                                    <img src={images['adobexd.svg']} alt="Adobe XD logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">AdobeXD</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://www.sketchapp.com/" target="_blank">
                                                                    <img src={images['sketch.svg']} alt="Sketch App logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Sketch</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://www.invisionapp.com/" target="_blank">
                                                                    <img src={images['invision.svg']} alt="Invision App logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Invision</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://slack.com/" target="_blank">
                                                                    <img src={images['slack.svg']} alt="Slack logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Slack</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://about.gitlab.com/" target="_blank">
                                                                    <img src={images['gitlab.svg']} alt="Gitlab logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Gitlab</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://wordpress.com" target="_blank">
                                                                    <img src={images['wordpress.svg']} alt="WordPress logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">WordPress</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--horizontal-default">
                                                                <a href="https://woocommerce.com/" target="_blank">

                                                                    <img src={images['woocommerce.svg']} alt="Woocomerce logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Woo</h4>
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
                    <JobOfferList />
                    <section className="l-sec" id="position--react">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h3 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span className="o-icon o-icon--react"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            React / JavaScript Developer
                                                        </span>
                                                    </span>
                                                </h3>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    We're looking for talented <strong>JavaScript developers</strong> experienced with <strong>React</strong> to join our team. You’ll work with our clients to build great products that delight users while using weekly investment time to improve ourselves, our company, and our community.
                                                </p>
                                                <p className="u-paint-3">
                                                    #react #redux #mobx #axios #jsx #redux-forms #webpack #typescript
                                                </p>
                                                <p className="u-paint-1">
                                                    <strong>Salary:</strong> 5,500 - 15,500 PLN NET
                                                </p>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <a target="_blank" className="c-cta-link s-btn-style-3" href="career-react.html">
                                                    <span className="c-label">More Details</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="position--javascript">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h3 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--round u-bg-1 u-paint-4">
                                                                <span className="o-icon o-icon--right"></span>
                                                                <span className="c-dash-ico"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            Junior JavaScript Developer
                                                        </span>
                                                    </span>
                                                </h3>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    We're happy to invest in motivated <strong>junior developers</strong> that want to <strong>grow their JavaScript skills</strong> and build a future-proof web and mobile solutions for our clients.
                                                </p>
                                                <p className="u-paint-3">
                                                    #es6 #babel #webpack #typescript #tdd #nodejs #serverless
                                                </p>
                                                <p className="u-paint-1">
                                                    <strong>Salary:</strong> 3,500 - 5,500 PLN NET
                                                </p>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <a target="_blank" className="c-cta-link s-btn-style-3" href="career-javascript.html">
                                                    <span className="c-label">More Details</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="position--react-native">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h3 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span className="o-icon o-icon--react-native"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            React Native Developer
                                                        </span>
                                                    </span>
                                                </h3>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    We're looking for talented <strong>JavaScript developers</strong> experienced with <strong>React Native</strong> to join our team. You’ll work with our clients to build great mobie apps that delight users while using weekly investment time to improve ourselves, our company, and our community.
                                                </p>
                                                <p className="u-paint-3">
                                                    #react #react-native #redux #mobx
                                                </p>
                                                <p className="u-paint-1">
                                                    <strong>Salary:</strong> 5,500 - 15,500 PLN NET
                                                </p>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <a className="c-cta-link s-btn-style-3" href="mailto:react-native@pagepro.co">
                                                    <span className="c-label">Apply Now</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="position--front-end">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h3 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--round u-bg-1 u-paint-4">
                                                                <span className="o-icon o-icon--right"></span>
                                                                <span className="c-dash-ico"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            Front-end Developer (slicer)
                                                        </span>
                                                    </span>
                                                </h3>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    We’re looking for passionate front-end developers with a love to slice beautiful designs, a proven track record of delivering challenging software projects and would thrive in a forward thinking, progressive, company.
                                                </p>
                                                <p className="u-paint-3">
                                                    #HTML5 #CSS3 #SASS #ES6 #SVG #Transitions #RWD #sketch #adobe-xd #styleguides
                                                </p>
                                                <p className="u-paint-1">
                                                    <strong>Salary:</strong> 4,500 - 8,500 PLN NET
                                                </p>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <a target="_blank" className="c-cta-link s-btn-style-3" href="career-frontend-dev.html">
                                                    <span className="c-label">More details</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="l-sec" id="position--front-end-intern">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h3 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--round u-bg-1 u-paint-4">
                                                                <span className="o-icon o-icon--right"></span>
                                                                <span className="c-dash-ico"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            Junior Front-end Developer
                                                        </span>
                                                    </span>
                                                </h3>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    Want to become professional front-end web developer? There is no better place than Pagepro.
                                                </p>
                                                <p className="u-paint-3">
                                                    #HTML5 #CSS3 #SASS #SVG #RWD #bem #OOCSS
                                                </p>
                                                <p className="u-paint-1">
                                                    <strong>Salary:</strong> 2,500 - 3,500 PLN NET
                                                </p>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <a className="c-cta-link s-btn-style-3" href="mailto:intern@pagepro.co">
                                                    <span className="c-label">Apply Now</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="position--wordpress">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h3 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--alt">
                                                                <span className="o-icon o-icon--wordpress"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            WordPress Developer
                                                        </span>
                                                    </span>
                                                </h3>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    We're looking for WordPress developer with ACF, WPML plugins experience.
                                                </p>
                                                <p className="u-paint-3">
                                                    #WP #WPML #ACF #mysql #docker #api
                                                </p>
                                                <p className="u-paint-1">
                                                    <strong>Salary:</strong> 3,000 - 8,500 PLN NET
                                                </p>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <a className="c-cta-link s-btn-style-3" href="./career-wordpress.html">
                                                    <span className="c-label">Apply Now</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="position--sales">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h3 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--round u-bg-1 u-paint-4">
                                                                <span className="o-icon o-icon--right"></span>
                                                                <span className="c-dash-ico"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            Junior Business Developer
                                                        </span>
                                                    </span>
                                                </h3>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    <strong>We are looking for fresh top graduates from Bialystok's Universities</strong>, who can join our sales team and grow international business with us.
                                                </p>
                                                <p className="u-paint-3">
                                                    #inboud #outbound #marketing #kpi #b2bsales #crm
                                                </p>
                                                <p className="u-paint-1">
                                                    <strong>Salary:</strong> from 3,000 PLN NET
                                                </p>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <a target="_blank" className="c-cta-link s-btn-style-3" href="career-sales.html">
                                                    <span className="c-label">More details</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="position--marketing">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h3 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--round u-bg-1 u-paint-4">
                                                                <span className="o-icon o-icon--right"></span>
                                                                <span className="c-dash-ico"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            Junior Marketing Manager
                                                        </span>
                                                    </span>
                                                </h3>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    We search for a young and top talented people with basic marketing knowledge and a lot of willpower to learn and improve.
                                                </p>
                                                <p className="u-paint-3">
                                                    #marketing #b2b #inbound #outbound #SEO #SEM #analytics #content
                                                </p>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <a target="_blank" className="c-cta-link s-btn-style-3" href="./career-marketing-manager.html">
                                                    <span className="c-label">More details</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="position--technical-account">
                        <div className="l-row">
                            <div className="l-inner u-decor-bottom u-paint-5">
                                <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                            <div className="l-sec__box__head u-paint-1">
                                                <h3 className="t-style-fpn-l-r-u">
                                                    <span className="c-ico-label">
                                                        <span className="c-ico-label__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--round u-bg-1 u-paint-4">
                                                                <span className="o-icon o-icon--right"></span>
                                                                <span className="c-dash-ico"></span>
                                                            </span>
                                                        </span>
                                                        <span className="c-ico-label__info">
                                                            Technical Account Manager
                                                        </span>
                                                    </span>
                                                </h3>
                                            </div>
                                            <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                                <p>
                                                    We are looking for a qualified Technical Account Manager with front-end knowledge and a high problem-solving attitude to discover and respond to our clients' technical needs.
                                                </p>
                                                <p className="u-paint-3">
                                                    #project #scoping #account #order #deadlines #crm
                                                </p>
                                            </div>
                                            <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                <a target="_blank" className="c-cta-link s-btn-style-3" href="./career-technical-account.html">
                                                    <span className="c-label">More details</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Instagram />

                </main>
            </div>
            <Footer />
        </div>
    </>
)

export const careerQuery = graphql`
    query {
        bgAgencies: file(relativePath: { eq: "bg_agencies.jpg" }) {
            childImageSharp {
              fluid(quality: 80, maxWidth: 4160) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    `

export default Career;