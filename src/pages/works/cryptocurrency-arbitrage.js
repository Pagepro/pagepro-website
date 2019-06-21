import React from "react"
import Header from '../../components/header';
import Footer from '../../components/footer';
import { graphql, Link } from 'gatsby';
import BgImage from '../../components/bgImage'

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../../static/img/', false, /\.(jpg|svg)$/));

const CryptocurrencyArbitrage = (props) => (
    <>
        <div id="page-content">

            <div class="p-case-study">

                <Header />

                <main class="l-main">
                    <BgImage
                        title="bgCaseCrypto"
                        fluid={props.data.bgCaseCrypto.childImageSharp.fluid}
                        className="l-hero l-hero--alt l-hero--small l-hero--with-overlay  u-paint-4"
                        height='100vh'>
                        <div class="l-inner g-gutter-top-10 g-gutter-bottom-8">
                            <div class="l-hero__head row g-gutter-top-8 g-gutter-top-0@mobile">
                                <div class="l-hero__head__box">
                                    <h2 class="t-style-fpn-xxl-b-u">
                                        Cryptocurrency arbitrage monitor
                            </h2>
                                </div>
                            </div>
                            <div class="l-hero__foot row">
                                <div class="l-inner">
                                    <div class="l-row row row-align-between row-align-middle">
                                        <div class="l-hero__foot__box gr-adapt no-gutter-left">
                                            <a class="c-ico-link c-ico-link--anim u-paint-4 u-paint-1-on-hover" href="#sec-1">
                                                <span class="o-icon o-icon--down"></span>
                                                <span class="c-label t-style-fpn-s-b u-line-h-m">Scroll for more</span>
                                            </a>
                                        </div>
                                        <div class="l-hero__foot__box gr-adapt no-gutter-right">
                                            <Link class="c-cta-link s-btn-style-2" to="/works" data-animate-out="true">
                                                <span class="c-label">Back to works</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BgImage>
                    <div class="l-sec" id="sec-1">
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row row-align-between g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-4@desktop-small">
                                    <div class="l-sec__box u-paint-1 t-style-fpn-l-r gr-5 gr-12@mobile no-gutter-left no-gutter@mobile">
                                        <div class="l-sec__box__content">
                                            <p class="u-line-h-s">
                                                We delivered ReactJS JavaScript Single Page Application that is checking various cryptocurrencies’ spread between different cryptocurrency exchanges, which is called an arbitrage.
                                </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile">
                                        <div class="l-sec__box__content">
                                            <p>
                                                The idea of the application was to built tool for monitor (mentioned before) arbitrage in real time. Moreover, it needed to have additional feature - saving records of highest daily differences.
                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="l-sec g-gutter-top-4 g-spacing-top-minus-4 g-gutter-bottom-4 g-spacing-bottom-minus-4">
                        <div class="l-row c-decors-parent">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
                                <span class="c-photoshop-line c-photoshop-line--bottom"></span>
                                <div class="l-inner--small">
                                    <span class="c-photoshop-line c-photoshop-line--right"></span>
                                    <span class="c-photoshop-line c-photoshop-line--left"></span>
                                    <div class="c-decor-wrapper c-decor-wrapper--top c-decor-wrapper--right g-gutter-right-2 u-vertical-middle-top">
                                        <span class="o-object-wrapper o-object-wrapper--rectangular-marquee">
                                            <object type="image/svg+xml" data={images['shape_1.svg']}>Photoshop select tool</object>
                                        </span>
                                    </div>
                                    <div class="c-decor-wrapper c-decor-wrapper--bottom c-decor-wrapper--left g-gutter-bottom-2 u-horizontal-middle-left">
                                        <span class="o-object-wrapper o-object-wrapper--move-lines">
                                            <object type="image/svg+xml" data={images['shape_2.svg']}>Photoshop move tool</object>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="l-inner">
                                <div class="row row-align-between g-gutter-top-10 g-gutter-top-0@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small g-gutter-bottom-3@mobile">
                                    <div class="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter@mobile">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                CRYPTOCURRENCY ARBITRAGE
                                </h3>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile">
                                        <div class="l-sec__box__content">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row row-align-center">
                                    <div class="l-sec__box gr-adapt gr-12@tablet no-gutter no-gutter@tablet">
                                        <div class="l-sec__box__content l-inner--small row row-align-center c-decors-parent">
                                            <div class="c-decors-box" aria-hidden="true">
                                                <span class="c-photoshop-line c-photoshop-line--left"></span>
                                                <span class="c-photoshop-line c-photoshop-line--right"></span>
                                                <div class="c-decor-wrapper c-decor-wrapper--bottom c-decor-wrapper--right g-gutter-bottom-8 g-gutter-left-4 u-horizontal-total-right">
                                                    <span class="o-object-wrapper o-object-wrapper--move">
                                                        <object type="image/svg+xml" data={images['shape_3.svg']}>Photoshop drag-move tool</object>
                                                    </span>
                                                </div>
                                            </div>
                                            <figure class="o-video-wrapper o-video-wrapper--default">
                                                <img src={images['bg-case-crypto-2.jpg']} alt="Cryptocurrency Arbitrage" />
                                            </figure>
                                            <div class="c-decors-box c-decors-box--alt g-gutter-bottom-3@mobile" aria-hidden="true">
                                                <div class="c-decor-wrapper c-decor-wrapper--bottom c-decor-wrapper--left g-gutter-left-2 g-gutter-bottom-2 u-vertical-middle-bottom">
                                                    <span class="o-object-wrapper o-object-wrapper--cropp">
                                                        <object type="image/svg+xml" data={images['shape_4.svg']}>Photoshop trim tool</object>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="l-sec">
                        <div class="l-row c-decors-parent">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
                                <div class="l-inner--small">
                                    <span class="c-photoshop-line c-photoshop-line--right"></span>
                                    <span class="c-photoshop-line c-photoshop-line--left"></span>
                                </div>
                            </div>
                            <div class="l-inner g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-4@desktop-small">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Cryptocurrency Arbitrage Monitor <strong>in numbers</strong>
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul class="c-info-boxes-list c-info-boxes-list--rwd-alt g-spacing-bottom-minus-4 g-spacing-bottom-minus-2@desktop-small">
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Integrated Exchanges</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>8</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item  c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Watched cryptocurrency pairs</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>16</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item  c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">API Requests per second</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>22</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item  c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Arbitrage opportunities detected</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>210416</strong>
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
                    <section class="l-sec">
                        <div class="l-row c-decors-parent">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
                                <span class="c-photoshop-line c-photoshop-line--bottom"></span>
                                <div class="l-inner--small">
                                    <span class="c-photoshop-line c-photoshop-line--right"></span>
                                    <span class="c-photoshop-line c-photoshop-line--left"></span>
                                    <div class="c-decor-wrapper c-decor-wrapper--top c-decor-wrapper--right g-gutter-top-3 g-gutter-right-4 u-horizontal-middle-right">
                                        <span class="o-object-wrapper o-object-wrapper--path">
                                            <object type="image/svg+xml" data={images['shape_5.svg']}>Photoshop curve tool</object>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="l-inner">
                                <div class="row row-align-between g-gutter-top-10 g-gutter-top-0@desktop-small">
                                    <div class="l-sec__box gr-6 gr-12@mobile no-gutter-left no-gutter@mobile">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Delivery
                                </h3>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                Our team was made up of two React Developers - <strong>Tomasz</strong> and <strong>Patryk</strong>. They developed Front-End structure of the application using <strong>React</strong>.
                                </p>
                                            <p class="g-gutter-top-1">
                                                Apps in React are created of reusable components. The biggest advantage of this framework is the huge community. Developers provide their own open source solutions, that other devs can use in their projects.
                                </p>
                                            <p class="g-gutter-top-1">
                                                For optional static type-checking along with the latest <strong>ECMAScript</strong> features, we used <strong>TypeScript</strong>. Thanks to this tool, creating applications is much quicker and easier. Another very helpful tool was Axios. It is a <strong>Promise-based HTTP</strong> client for JavaScript. It helped us with managing requests.Thanks to WebSocket API technology, we could create a table of exchange rates with real time data.
                                </p>
                                            <p class="g-guter-top-1">
                                                On the server side, we used <strong>NodeJS</strong> with <strong>MongoDB</strong>. Furthermore, we used Mongoose, that is Object Data Modeling library which is designed to work in an asynchronous environment. During works on server side, we were using <strong>Buddy.Works</strong> - easy to manage CI/CD (continuous integration and continuous delivery) product, for constantly testing and deploying every change that we made.
                                </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-left no-gutter-left@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://facebook.github.io/react/">
                                                        ReactJS
                                        </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://www.typescriptlang.org/">
                                                        TypeScript
                                        </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://standardjs.com/">
                                                        StandardJS
                                        </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://babeljs.io/">
                                                        Babel
                                        </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://webpack.js.org/">
                                                        Webpack
                                        </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://github.com/axios/axios">
                                                        Axios
                                        </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://www.styled-components.com/">
                                                        Styled Components
                                        </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-right no-gutter-right@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://www.websocket.org/">
                                                        Websockets
                                        </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://expressjs.com/">
                                                        ExpressJS
                                        </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://letsencrypt.org/">
                                                        Let's Encrypt
                                        </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://buddy.works/">
                                                        Buddy.works
                                        </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://www.mongodb.com/">
                                                        MongoDB
                                        </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://mongoosejs.com/">
                                                        Mongoose
                                        </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec c-decors-parent u-bg-double-2-4 g-spacing-top-5@desktop-small">
                        <div class="c-decors-box" aria-hidden="true">
                            <span class="c-decor-calendar c-decor-calendar--left u-paint-5"></span>
                        </div>
                        <div class="l-row">
                            <div class="l-inner l-inner-no-gutters@mobile-medium">
                                <div class="row h-row-align-stretch">
                                    <div class="l-sec__box gr-3 gr-6@mobile-medium no-gutter-left h-gr-fix-center">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                TimeLine
                                </h3>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 g-gutter-top-10 g-gutter-top-5@tablet g-gutter-bottom-10 g-gutter-bottom-5@tablet u-bg-1 u-paint-4">
                                        <div class="l-sec__box__content">
                                            <p class="u-text-centered">
                                                The project took us <strong>6 weeks</strong>.
                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="c-decors-box" aria-hidden="true">
                            <span class="c-photoshop-line c-photoshop-line--bottom"></span>
                        </div>
                    </section>
                    <section class="l-sec l-sec--with-between-decor">
                        <div class="l-row">
                            <div class="l-inner g-gutter-top-10 g-gutter-top-5@desktop-small">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="u-paint-1 t-style-fpn-l-r">Other <strong>React</strong> projects:</h3>
                                        </div>
                                        <div class="l-sec__box__content g-spacing-top-5 g-spacing-top-4@desktop-small c-between-decors-parent">
                                            <span class="c-between-decors">
                                                <span class="c-between-decor c-between-decor--top u-paint-4"></span>
                                                <span class="c-between-decor c-between-decor--bottom u-paint-2 g-gutter-bottom-4@mobile"></span>
                                            </span>
                                            <div class="c-slider-wrapper c-slider-wrapper--portfolio-teasers js-portfolio-teasers-slider">
                                                <div class="c-slider-wrapper__container swiper-container" aria-label="Portfolio teasers slider">
                                                    <ol class="c-portfolio-teasers-list c-portfolio-teasers-list--small swiper-wrapper">

                                                        <li class="c-portfolio-teasers-list__item swiper-slide">
                                                            <div class="c-portfolio-teaser c-portfolio-teaser--small">
                                                                <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/gatedtalent">
                                                                    <div class="c-portfolio-teaser__media">
                                                                        <BgImage
                                                                            title="bgCaseGatedtalentRect"
                                                                            fluid={props.data.bgCaseGatedtalentRect.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div class="c-portfolio-teaser__main">
                                                                        <h2 class="t-style-fpn-l-b-u">
                                                                            GatedTalent
                            </h2>
                                                                        <p class="g-gutter-top-1 u-paint-3">
                                                                            React
                                             JavaScript Single Page App
                                             Front-end Dedicated Team
                            </p>
                                                                    </div>
                                                                    <div class="c-portfolio-teaser__add g-gutter-top-2">
                                                                        <span class="c-cta-btn s-btn-style-1-no-hover">
                                                                            <span class="c-label">Case study</span>
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </li>

                                                        <li class="c-portfolio-teasers-list__item swiper-slide">
                                                            <div class="c-portfolio-teaser c-portfolio-teaser--small">
                                                                <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/my-name-flow">
                                                                    <div class="c-portfolio-teaser__media" >
                                                                        <BgImage
                                                                            title="bgCaseMnfRect"
                                                                            fluid={props.data.bgCaseMnfRect.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div class="c-portfolio-teaser__main">
                                                                        <h2 class="t-style-fpn-l-b-u">
                                                                            My Name Flow
                            </h2>
                                                                        <p class="g-gutter-top-1 u-paint-3">
                                                                            React
                                             JavaScript Single Page App
                            </p>
                                                                    </div>
                                                                    <div class="c-portfolio-teaser__add g-gutter-top-2">
                                                                        <span class="c-cta-btn s-btn-style-1-no-hover">
                                                                            <span class="c-label">Case study</span>
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </li>

                                                        <li class="c-portfolio-teasers-list__item swiper-slide">
                                                            <div class="c-portfolio-teaser c-portfolio-teaser--small">
                                                                <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/blockchain-agreements">
                                                                    <div class="c-portfolio-teaser__media">
                                                                        <BgImage
                                                                            title="bgCaseBlockchainRect"
                                                                            fluid={props.data.bgCaseBlockchainRect.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div class="c-portfolio-teaser__main">
                                                                        <h2 class="t-style-fpn-l-b-u">
                                                                            Ethereum Blockchain Doc Signing App
                            </h2>
                                                                        <p class="g-gutter-top-1 u-paint-3">
                                                                            React
                                             JavaScript Single Page App
                            </p>
                                                                    </div>
                                                                    <div class="c-portfolio-teaser__add g-gutter-top-2">
                                                                        <span class="c-cta-btn s-btn-style-1-no-hover">
                                                                            <span class="c-label">Case study</span>
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                                <div class="c-slider-wrapper__navigation swiper-navigation">
                                                    <span class="c-slider-button c-slider-button--prev js-slider-prev" aria-label="go to next slide"></span>
                                                    <span class="c-slider-button c-slider-button--next js-slider-next" aria-label="go to previous slide"></span>
                                                    <ol class="c-dots-list g-gutter-top-2@mobile g-gutter-bottom-2@mobile">
                                                        <li class="c-dots-list__item">
                                                            <span class="c-dot u-bg-4 u-paint-1"></span>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <Footer />
        </div >
    </>
)

export const fluidCryptocurrencyArbitrageBgImage = graphql`
                                fragment fluidCryptocurrencyArbitrageBgImage on File {
                            childImageSharp {
                        fluid(quality: 90, maxWidth: 4160) {
                            ...GatsbyImageSharpFluid
                        }
                        }
                    }
                    `


export const CryptocurrencyArbitrageQuery = graphql`query {
                        bgCaseGatedtalentRect: file(relativePath: {eq: "bg_case-gatedtalent-rect.jpg" }) {
                            ...fluidCryptocurrencyArbitrageBgImage
                        }
                        bgCaseMnfRect: file(relativePath: {eq: "bg_case-mnf-rect.jpg" }) {
                            ...fluidCryptocurrencyArbitrageBgImage
                        }
                        bgCaseBlockchainRect: file(relativePath: {eq: "bg-case-blockchain-rect.jpg" }) {
                            ...fluidCryptocurrencyArbitrageBgImage
                        }
                        bgCaseCrypto: file(relativePath: {eq: "bg-case-crypto.jpg" }) {
                            ...fluidCryptocurrencyArbitrageBgImage
                        }
                        }
                        `

export default CryptocurrencyArbitrage;