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

const IsvOnline = (props) => (
    <>
        <div id="page-content">

            <div class="p-case-study">


                <Header />

                <main class="l-main">

                    <BgImage
                        title="bgCaseIsvWebsite"
                        fluid={props.data.bgCaseIsvWebsite.childImageSharp.fluid}
                        className="l-hero l-hero--alt l-hero--small l-hero--with-overlay  u-paint-4"
                        height='100vh'
                    >
                        <div class="l-inner g-gutter-top-10 g-gutter-bottom-8">
                            <div class="l-hero__head row g-gutter-top-8 g-gutter-top-0@mobile">
                                <div class="l-hero__head__box">
                                    <h2 class="t-style-fpn-xxl-b-u">
                                        ISV Online
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

                    <section class="l-sec">
                        <div class="l-row c-decors-parent">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
                                <span class="c-photoshop-line c-photoshop-line--bottom"></span>
                                <div class="l-inner--small">
                                    <span class="c-photoshop-line c-photoshop-line--right"></span>
                                    <div class="c-decor-wrapper c-decor-wrapper--top c-decor-wrapper--right g-gutter-top-3 g-gutter-right-4 u-horizontal-middle-right">
                                        <span class="o-object-wrapper o-object-wrapper--path">
                                            <object type="image/svg+xml" data={images['shape_5.svg']}>Photoshop curve tool</object>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="l-inner">
                                <div class="row row-align-between g-gutter-top-10 g-gutter-top-5@desktop-small">
                                    <div class="l-sec__box gr-11 gr-12@mobile no-gutter-left no-gutter@mobile">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Requirements
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                The purpose of this project was to redesign the website, in order to achieve a modern look and a more intuitive navigation. We also had to keep in mind that basically, most of the previous content had to be migrated. That had a great impact.
                                            </p>
                                            <h3>Our services included:</h3>
                                            <ul class="c-dotted-list">
                                                <li class="c-dotted-list__item u-paint-3">
                                                    <span class="u-paint-2 g-gutter-left-1">Adobe XD project preparation</span>
                                                </li>
                                                <li class="c-dotted-list__item u-paint-3">
                                                    <span class="u-paint-2 g-gutter-left-1">PSD to HTML conversion</span>
                                                </li>
                                                <li class="c-dotted-list__item u-paint-3">
                                                    <span class="u-paint-2 g-gutter-left-1">WordPress Custom Theme development</span>
                                                </li>
                                                <li class="c-dotted-list__item u-paint-3">
                                                    <span class="u-paint-2 g-gutter-left-1">Cross browser &amp; device testing</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-align-between g-gutter-top-10 g-gutter-bottom-5 g-gutter-top-5@desktop-small">
                                    <div class="l-sec__box gr-11 gr-12@mobile no-gutter-left no-gutter@mobile">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Delivery
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                Pagepro provided four very talented specialists: <strong>Joanna (Front-End Developer), <strong>Maciej (WordPress/Back-End Developer)</strong>, <strong>Bartosz (Designer)</strong> and </strong><strong>Marek (Project Manager)</strong>.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                The whole project was managed by two great employees from ISV Software Ltd - <strong>Amanda (Managing Director)</strong> and <strong>Steve (IT Director)</strong>. The cooperation with them was smooth, especially thanks to clear communication and quick decision making.
                                            </p>
                                            <div class="row row-align-between g-gutter-top-2@desktop-small">
                                                <div class="l-sec__box gr-6 gr-12@mobile no-gutter-left no-gutter@mobile">
                                                    <ul class="c-dotted-list">
                                                        <li class="c-dotted-list__item u-paint-3">
                                                            <span class="u-paint-2 g-gutter-left-1">
                                                                HTML5
                                                            </span>
                                                        </li>
                                                        <li class="c-dotted-list__item u-paint-3">
                                                            <span class="u-paint-2 g-gutter-left-1">
                                                                CSS3
                                                            </span>
                                                        </li>
                                                        <li class="c-dotted-list__item u-paint-3">
                                                            <span class="u-paint-2 g-gutter-left-1">
                                                                SASS
                                                            </span>
                                                        </li>
                                                        <li class="c-dotted-list__item u-paint-3">
                                                            <span class="u-paint-2 g-gutter-left-1">
                                                                WordPress
                                                            </span>
                                                        </li>
                                                        <li class="c-dotted-list__item u-paint-3">
                                                            <span class="u-paint-2 g-gutter-left-1">
                                                                ACF Pro
                                                            </span>
                                                        </li>
                                                        <li class="c-dotted-list__item u-paint-3">
                                                            <span class="u-paint-2 g-gutter-left-1">
                                                                Underscores
                                                            </span>
                                                        </li>
                                                        <li class="c-dotted-list__item u-paint-3">
                                                            <span class="u-paint-2 g-gutter-left-1">
                                                                jQuery
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="l-sec__box gr-6 gr-12@mobile no-gutter-left g-gutter-top-1@mobile no-gutter@mobile u-m-top-0">
                                                    <ul class="c-dotted-list">
                                                        <li class="c-dotted-list__item u-paint-3">
                                                            <span class="u-paint-2 g-gutter-left-1">
                                                                GULP
                                                            </span>
                                                        </li>
                                                        <li class="c-dotted-list__item u-paint-3">
                                                            <span class="u-paint-2 g-gutter-left-1">
                                                                BrowserStack
                                                            </span>
                                                        </li>
                                                        <li class="c-dotted-list__item u-paint-3">
                                                            <span class="u-paint-2 g-gutter-left-1">
                                                                JavaScript
                                                            </span>
                                                        </li>
                                                        <li class="c-dotted-list__item u-paint-3">
                                                            <span class="u-paint-2 g-gutter-left-1">
                                                                Swiper
                                                            </span>
                                                        </li>
                                                        <li class="c-dotted-list__item u-paint-3">
                                                            <span class="u-paint-2 g-gutter-left-1">
                                                                Adobe XD
                                                            </span>
                                                        </li>
                                                        <li class="c-dotted-list__item u-paint-3">
                                                            <span class="u-paint-2 g-gutter-left-1">
                                                                ScrollReveal
                                                            </span>
                                                        </li>
                                                        <li class="c-dotted-list__item u-paint-3">
                                                            <span class="u-paint-2 g-gutter-left-1">
                                                                Featherlight
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec c-decors-parent u-bg-double-2-4">
                        <div class="c-decors-box" aria-hidden="true">
                            <span class="c-decor-calendar c-decor-calendar--left u-paint-5"></span>
                        </div>
                        <div class="l-row">
                            <div class="l-inner l-inner-no-gutters@mobile-medium">
                                <div class="row h-row-align-stretch">
                                    <div class="l-sec__box gr-3 gr-6@mobile-medium no-gutter-left h-gr-fix-center">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Time frame
                                            </h3>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 g-gutter-top-10 g-gutter-top-5@tablet g-gutter-bottom-10 g-gutter-bottom-5@tablet u-bg-1 u-paint-4">
                                        <div class="l-sec__box__content">
                                            <p class="u-text-centered">
                                                Whole project took us <strong>8 weeks</strong>.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-3 no-gutter u-bg-2 hide@mobile-medium">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec">
                        <div class="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
                                <div class="l-inner">
                                    <div class="row row-align-between">
                                        <div class="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div class="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            <span class="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row c-decors-parent">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
                                <span class="c-photoshop-line c-photoshop-line--bottom"></span>
                                <div class="l-inner--small">
                                    <span class="c-photoshop-line c-photoshop-line--right"></span>
                                </div>
                            </div>
                            <div class="l-inner g-gutter-top-5@mobile">
                                <div class="row row-align-between">
                                    <div class="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter@mobile g-gutter-top-5 g-gutter-bottom-5">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Step 1 <strong class="u-paint-1">MATERIALS GATHERING AND DESIGN PREPARATION</strong>
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                The first step, we needed to gather proper images and information about key objectives for our client, like to make the "Request demo" button more prominent as it was supposed to open dedicated request form.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                Secondly, we needed to prepare a fresh design based on the previous version of the website. Hence, we made sure that everything on new templates maintains brand colours.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                Once we got precisely described <strong>UX/UI functionalities</strong>, we prepared well-designed project in <strong>Adobe XD</strong>. Moving forward, we started with setting up development environments and installing essential tools for the project.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box c-decors-parent gr-5 gr-12@mobile pull-1 pull-0@mobile no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-4@mobile g-gutter-bottom-5">
                                        <div class="c-decors-box" aria-hidden="true">
                                            <span class="c-photoshop-line c-photoshop-line--left"></span>
                                        </div>
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Step 2 <strong class="u-paint-1">Management</strong>
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                After managing the initial design and the description of particular functionalities like Forms, Sliders, Documents uploading, we started with defining scope of work in <strong>TeamWork</strong> (Project Management Tool). In other words, we divided actions that needed to be taken, into well-described tasks. Depending on the type, each of the created tasks was assigned to proper member of our team.
                                            </p>
                                            <p>
                                                During the management process, we work in <strong>Agile methodology</strong>. That helps us with adjusting solutions to every newly encountered obstacle. Moreover, we have divided the project into two stages:
                                            </p>
                                            <h3>Front-end Development Stage</h3>
                                            <p>
                                                We always prefer to split <strong>front-end development</strong> from other phases because it is much faster and has less potential risks of bugs appearing. Especially, when we could use <strong>our dedicated tool</strong> for HTML&amp;CSS - SASS starter (<a href="https://github.com/Pagepro/libsasserplate" target="_blank">LibSASSerPlate</a>).
                                            </p>
                                            <h3>WordPress Development Stage</h3>
                                            <p>
                                                Once we prepared HTML&amp;CSS + main JavaScript code, we have planned to implement static files into <strong>WordPress</strong> custom theme.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div class="c-decors-box">
                                <div class="l-inner">
                                    <div class="row row-align-between">
                                        <div class="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div class="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            <span class="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div style={{ backgroundPosition: 'relative' }}>
                        <BgImage
                            title="bgMiniHero"
                            fluid={props.data.bgMiniHero.childImageSharp.fluid}
                            className="l-mini-hero  c-decors-parent"
                            height='50vh'>
                            <div class="c-decors-box" aria-hidden="true">
                                <div class="l-inner--small">
                                    <div class="c-decor-wrapper c-decor-wrapper--bottom c-decor-wrapper--right u-horizontal-middle-right u-vertical-middle-bottom">
                                        <span class="o-object-wrapper o-object-wrapper--code">
                                            <object type="image/svg+xml" data={images['shape_6.svg']}>HTML tag</object>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </BgImage>
                    </div>
                    <section class="l-sec">
                        <div class="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div class="c-decors-box" aria-hidden="true">
                                <div class="l-inner">
                                    <div class="row row-align-between">
                                        <div class="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div class="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            <span class="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row c-decors-parent g-gutter-top-5" aria-hidden="true">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
                                <div class="l-inner">
                                    <div class="row row-align-between">
                                        <div class="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div class="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            <span class="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row" role="grid">
                            <div class="l-inner">
                                <div class="row row-align-between" role="row">
                                    <div class="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter@mobile" role="columnheader">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Step 3 <strong class="u-paint-1">HTML coding</strong>
                                            </h3>
                                            <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                Front-End phase always starts with building <strong>Website structure</strong> in HTML. We emphasise creating HTML components to be as much reusable as possible. In order to make clean and clear code, we use BEM Methodology to maintain order in project.
                                            </p>
                                            <h3 class="g-gutter-top-1">BEM Methodology</h3>
                                            <p class="g-gutter-top-1">
                                                BEM (Block, Element, Modifier) is an open source technology for developing websites that need to be created quickly and maintained over many years. <strong>BEM</strong> is used in the front-end development of all Pagepro services.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-5 gr-12@mobile pull-1 pull-0@mobile c-decors-parent no-gutter@mobile g-gutter-top-4@mobile" role="columnheader">
                                        <div class="c-decors-box" aria-hidden="true">
                                            <div class="l-inner--small">
                                                <span class="c-photoshop-line c-photoshop-line--right"></span>
                                                <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            </div>
                                        </div>
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Step 4 <strong class="u-paint-1">(S)CSS coding</strong>
                                            </h3>
                                            <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                In Pagepro we use SCCS to write styles code, as it allows us to achieve great efficiency and reduces the risk of future issues on different browsers.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                Nowadays, features like <strong>mixins</strong> or <strong>variables</strong> for <strong>colors</strong>, <strong>sizes</strong> and <strong>breakpoints</strong> are a “must have” standard in Front-End Development. It makes the code reusable and easier to understand for other developers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row c-decors-parent g-gutter-top-5" aria-hidden="true">
                            <div class="c-decors-box">
                                <div class="l-inner">
                                    <div class="row row-align-between">
                                        <div class="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div class="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            <span class="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec l-sec--with-media-to-right u-bg-1 u-paint-4 g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row">
                                    <div class="l-sec__box gr-6 gr-8@mobile gr-12@mobile-medium no-gutter-left no-gutter@mobile no-gutter@mobile-medium">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Step 5 <strong>Responsive version</strong>
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p class="g-gutter-right-8@desktop-small g-gutter-right-0@tablet">
                                                We always declare Breakpoints values as <strong>SCSS variables</strong> for different devices that allows us to make them reusable and keep standardization of our templates.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-align-right row-align-center@mobile g-spacing-top-minus-8 g-spacing-top-minus-7@desktop-small g-spacing-top-3@tablet">
                                    <div class="l-sec__box gr-adapt gr-12@mobile no-gutter no-gutter@mobile">
                                        <div class="l-sec__box__content">
                                            <div class="c-devices-wrapper" aria-label="samples of responsive web design of the page">
                                                <div class="c-devices-wrapper__box c-devices-wrapper__box--main h-z-1">
                                                    <div class="c-devices-box c-devices-box--imac">
                                                        <figure class="c-devices-box__media o-img-wrapper">
                                                            <img src={images['isv-rwd-desktop.jpg']} alt="ISV Desktop Screenshot" />
                                                        </figure>
                                                        <div class="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div class="c-devices-wrapper__box c-devices-wrapper__box--left u-horizontal-total-left g-spacing-left-5 g-spacing-left-10@tablet g-spacing-left-0@mobile g-gutter-right-half@tablet g-gutter-right-0@mobile g-spacing-top-1@mobile h-z-2">
                                                    <div class="c-devices-box c-devices-box--ipad">
                                                        <figure class="c-devices-box__media o-img-wrapper">
                                                            <img src={images['isv-rwd-tablet.jpg']} alt="ISV Tablet Screenshot" />
                                                        </figure>
                                                        <div class="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div class="c-devices-wrapper__box c-devices-wrapper__box--right g-spacing-right-5 g-spacing-right-0@mobile g-spacing-top-1@mobile h-z-3">
                                                    <div class="c-devices-box c-devices-box--iphone">
                                                        <figure class="c-devices-box__media o-img-wrapper">
                                                            <img src={images['isv-rwd-mobile.jpg']} alt="ISV Smartphone Screenshot" />
                                                        </figure>
                                                        <div class="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec">
                        <div class="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div class="c-decors-box" aria-hidden="true">
                                <div class="l-inner">
                                    <div class="row row-align-between">
                                        <div class="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div class="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            <span class="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row c-decors-parent g-gutter-top-5" aria-hidden="true">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
                                <div class="l-inner">
                                    <div class="row row-align-between">
                                        <div class="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div class="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            <span class="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row" role="grid">
                            <div class="l-inner">
                                <div class="row row-align-between" role="row">
                                    <div class="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter@mobile" role="columnheader">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Step 6 <strong class="u-paint-1">First Q&amp;A Stage</strong>
                                            </h3>
                                            <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                We always conduct comprehensive <strong>Q&amp;A</strong> phase after delivering complete Front-End code. Most of all, we are making sure that particular website is working properly on different devices and on all modern browsers, including Chrome, FireFox, Safari and Internet Explorer.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                As a tool, we use <a href="https://www.browserstack.com/" title="BrowserStack" target="_blank">BrowserStack</a> for checking compatibility on multiple desktop and mobile browsers. Moreover, we are using real devices to check website functionalities. At least two devices with iOS, two with Android system and two with Windows Operating System.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-5 gr-12@mobile pull-1 pull-0@mobile no-gutter@mobile c-decors-parent g-spacing-top-4@mobile" role="columnheader">
                                        <div class="c-decors-box" aria-hidden="true">
                                            <div class="l-inner--small">
                                                <span class="c-photoshop-line c-photoshop-line--right"></span>
                                                <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            </div>
                                        </div>
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Step 7 <strong class="u-paint-1">JavaScript Coding</strong>
                                            </h3>
                                            <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                On <strong>isv.online</strong> project we kept everything simple. For that reason, regarding to JavaScript programming, we didn’t have to write a lot of fancy code. Instead, we used mainly tools like <a href="http://idangero.us/swiper/" target="_blank">Swiper</a>, <a href="https://scrollrevealjs.org/" target="_blank">ScrollReveal</a>, <a href="https://noelboss.github.io/featherlight/" target="_blank">Featherlight</a> and jQuery JavaScript library.
                                            </p>
                                            <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                Swiper helped us with carousels and sliders, Featherlight with putting youtube video in iframe pop-up on the homepage. Finally, we used jQuery JavaScript library and ScrollReveal for different animations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--bottom"></span>
                                <div class="l-inner">
                                    <div class="row row-align-between">
                                        <div class="gr-5 no-gutter-left g-gutter-top-10"></div>
                                        <div class="c-decors-parent gr-5 pull-1 g-gutter-top-10">
                                            <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            <span class="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec">
                        <div class="l-row c-decors-parent g-gutter-top-5" aria-hidden="true">
                            <div class="c-decors-box" aria-hidden="true">
                                <div class="l-inner">
                                    <div class="row row-align-between">
                                        <div class="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div class="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            <span class="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row" role="grid">
                            <div class="l-inner">
                                <div class="row row-align-between" role="row">
                                    <div class="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter@mobile" role="columnheader">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Step 8 <strong class="u-paint-1">WORDPRESS DEVELOPMENT</strong>
                                            </h3>
                                            <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                Our WP Developer's first task, was to prepare <a href="https://underscores.me/" target="_blank">Underscores</a> WordPress Starter for theme development. He had also used <a href="https://www.advancedcustomfields.com/pro/" target="_blank">ACF Pro</a> plugin in order to make Custom Fields and make almost everything on the website customizable.
                                                </p>
                                            <p class="g-gutter-top-1 g-gutter-top-2@desktop-small">
                                                We put emphasis on preparing settings for content management to be intuitive and clear, especially for non-technical user.
                                                </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-5 gr-12@mobile pull-1 pull-0@mobile no-gutter@mobile c-decors-parent g-spacing-top-4@mobile" role="columnheader">
                                        <div class="c-decors-box" aria-hidden="true">
                                            <div class="l-inner--small">
                                                <span class="c-photoshop-line c-photoshop-line--right"></span>
                                                <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            </div>
                                        </div>
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Step 9 <strong class="u-paint-1">FINAL Q&amp;A AND UAT</strong>
                                            </h3>
                                            <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                When everything was successfully implemented, we went through the settings with the client and explained how to manage the content. We made sure that everything is clear and meets the client’s needs.
                                                </p>
                                            <p class="g-gutter-top-1 g-gutter-top-2@desktop-small">
                                                Before live deployment we give client at least one week for checking if the whole content is applied properly.
                                                </p>
                                            <p class="g-gutter-top-1 g-gutter-top-2@desktop-small">
                                                The whole process of creating the website described above was being made on development environment. Once client is happy with the results and we get his approval, we migrate everything from development environment to production.
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--bottom"></span>
                                <div class="l-inner">
                                    <div class="row row-align-between">
                                        <div class="gr-5 no-gutter-left g-gutter-top-10"></div>
                                        <div class="c-decors-parent gr-5 pull-1 g-gutter-top-10">
                                            <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            <span class="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec l-sec--with-between-decor">
                        <div class="l-row c-between-decors-parent">
                            <span class="c-between-decors">
                                <span class="c-between-decor c-between-decor--top u-paint-4"></span>
                                <span class="c-between-decor c-between-decor--bottom u-paint-6"></span>
                            </span>
                            <div class="l-inner">
                                <div class="row ">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="c-website-teaser g-gutter-top-7 g-gutter-top-6@mobile g-gutter-bottom-7 g-gutter-bottom-6@mobile">
                                            <div class="c-website-teaser__inner row h-row-align-stretch">
                                                <div class="c-website-teaser__info gr-4 gr-12@mobile-medium no-gutter-left no-gutter@mobile-medium">
                                                    <div class="c-website-teaser__info__head g-gutter-left-4 g-gutter-left-0@tablet g-gutter-top-5 g-gutter-top-0@mobile-medium g-gutter-bottom-3@mobile-medium">
                                                        <h3 class="t-style-fpn-l-r-u">ISV Online</h3>
                                                    </div>
                                                    <div class="c-website-teaser__info__actions g-gutter-left-4 g-gutter-left-0@tablet g-gutter-top-2 g-gutter-top-0@mobile-medium g-gutter-bottom-2 g-gutter-bottom-0@mobile-medium">
                                                        <a class="c-cta-link s-btn-style-3" href="https://isv.online/" target="_blank" >
                                                            <span class="c-label">Visit website</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="c-website-teaser__media gr-8 gr-12@mobile-medium no-gutter no-gutter@mobile-medium">
                                                    <div class="c-website-teaser__media__content g-gutter-right-4 g-gutter-right-0@tablet g-gutter-bottom-6@mobile-medium">
                                                        <div class="c-devices-wrapper">
                                                            <div class="c-devices-wrapper__box">
                                                                <div class="c-devices-box c-devices-box--browser">
                                                                    <div class="c-devices-box__frame">
                                                                        <strong class="c-address">
                                                                            <span class="c-address__head u-paint-3">http://</span>
                                                                            <span class="c-address__content u-paint-2">isv.online/</span>
                                                                        </strong>
                                                                    </div>
                                                                    <figure class="c-devices-box__media o-img-wrapper">
                                                                        <img src={images['isv-rwd-desktop.jpg']} alt="isv Website Home Page Screenshot" />
                                                                    </figure>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec l-sec--with-between-decor">
                        <div class="l-row">
                            <div class="l-inner g-gutter-top-10 g-gutter-top-5@desktop-small">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="u-paint-1 t-style-fpn-l-r">Other <strong>WordPress</strong> Projects:</h3>
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
                                                                <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/karina-papadopoulos">
                                                                    <div class="c-portfolio-teaser__media" >
                                                                        <BgImage
                                                                            title="bgCaseKarinaPersonalRect"
                                                                            fluid={props.data.bgCaseKarinaPersonalRect.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div class="c-portfolio-teaser__main">
                                                                        <h2 class="t-style-fpn-l-b-u">
                                                                            Karina Papadopoulos
                                        </h2>
                                                                        <p class="g-gutter-top-1 u-paint-3">
                                                                            PSD to HTML conversion
                                             WordPress Development
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
                                                                <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/wroc-sharp">
                                                                    <div class="c-portfolio-teaser__media" >
                                                                        <BgImage
                                                                            title="bgCaseWrocRect"
                                                                            fluid={props.data.bgCaseWrocRect.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div class="c-portfolio-teaser__main">
                                                                        <h2 class="t-style-fpn-l-b-u">
                                                                            WROC#
                                        </h2>
                                                                        <p class="g-gutter-top-1 u-paint-3">
                                                                            PSD to HTML conversion
                                             WordPress Development
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
                                                                <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/hawksman">
                                                                    <div class="c-portfolio-teaser__media" >
                                                                        <BgImage
                                                                            title="bgCaseHawksmanThumb"
                                                                            fluid={props.data.bgCaseHawksmanThumb.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div class="c-portfolio-teaser__main">
                                                                        <h2 class="t-style-fpn-l-b-u">
                                                                            Hawksman
                                        </h2>
                                                                        <p class="g-gutter-top-1 u-paint-3">
                                                                            PSD to HTML conversion
                                             WordPress Development
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


        </div>
    </>
)

export const fluidIsvOnlineBgImage = graphql`
                                fragment fluidIsvOnlineBgImage on File {
                                    childImageSharp {
                                fluid(quality: 90, maxWidth: 4160) {
                                    ...GatsbyImageSharpFluid
                                }
                                }
                            }
                            `


export const IsvOnlineQuery = graphql`query {
                                bgCaseHawksmanThumb: file(relativePath: {eq: "bg_case-hawksman-thumb.jpg" }) {
                                    ...fluidIsvOnlineBgImage
                                }
                                bgCaseWrocRect: file(relativePath: {eq: "bg_case-wroc-rect.jpg" }) {
                                    ...fluidIsvOnlineBgImage
                                }
                                bgCaseKarinaPersonalRect: file(relativePath: {eq: "bg_case-karina-personal-rect.jpg" }) {
                                    ...fluidIsvOnlineBgImage
                                }
                                bgCaseIsvWebsite: file(relativePath: {eq: "bg-case-isv-website.jpg" }) {
                                    ...fluidIsvOnlineBgImage
                                }
                                bgMiniHero: file(relativePath: {eq: "bg_mini-hero.jpg" }) {
                                    ...fluidPage310BgImage
                                }
                                }
                                `

export default IsvOnline;