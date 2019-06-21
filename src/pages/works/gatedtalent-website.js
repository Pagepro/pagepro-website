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

const GatedtalentWebsite = (props) => (
    <>
        <div id="page-content">

            <div class="p-case-study">

                <Header />

                <main class="l-main">
                    <BgImage
                        title="bgCaseGatedtalentWebsite"
                        fluid={props.data.bgCaseGatedtalentWebsite.childImageSharp.fluid}
                        className="l-hero l-hero--alt l-hero--small l-hero--with-overlay  u-paint-4"
                        height='100vh'
                    >
                        <div class="l-inner g-gutter-top-10 g-gutter-bottom-8">
                            <div class="l-hero__head row g-gutter-top-8 g-gutter-top-0@mobile">
                                <div class="l-hero__head__box">
                                    <h2 class="t-style-fpn-xxl-b-u">
                                        Gatedtalent Website
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
                                            <p>
                                                <strong>GatedTalent - Executive Search & Online Talent Acquisition Portal</strong>
                                            </p>
                                            <p class="u-line-h-s g-gutter-top-1">
                                                Connecting highly experienced and talented executives with recruiters, who are offering only top level positions.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile">
                                        <div class="l-sec__box__content">
                                            <p>
                                                Pagepro Team was atthe same time working on User Interface in ReactJs for GatedTalent application and creating GT Website.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                <div class="row row-align-between g-gutter-top-10 g-gutter-top-5@desktop-small">
                                    <div class="l-sec__box gr-6 gr-12@mobile no-gutter-left no-gutter@mobile">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Requirements
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                Dillistone Group Plc company needed well designed website based on WordPress CMS Platform for their product - GatedTalent application. Our goal was to deliver clean and modern looking website, which would proudly represent their idea, providing easy access to information about product features and enable user registration or loginin to the platform.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-4@mobile">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Delivery
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                Pagepro provided four very talented specialist, Chris (Project Manager), Karol (WordPress/Back-End Developer), Bartosz (Designer) and Kate (Front-End Developer). The team was hard working, taking over hours in order to deliver fully completed website on time. As a result, the whole process including making design, coding, testing and deploying -  took them one month.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                                    <div class="l-sec__box gr-2 gr-6@mobile no-gutter-left no-gutter-left@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">HTML5</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">CSS3</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">SASS</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-2 gr-6@mobile no-gutter-right@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="http://wordpress.org/">WordPress</a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">ACF Pro</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">Underscores</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-2 gr-6@mobile no-gutter-left@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    WPML
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    AMP
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">JQuery</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-2 gr-6@mobile no-gutter-right no-gutter-right@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">GULP</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">BrowserStack</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    JavaScript
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-2 gr-6@mobile  no-gutter-left@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">Adobe Experience Design</span>
                                            </li>
                                        </ul>
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
                                                Whole project took us <strong>12 weeks</strong>.
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
                                                Step 1 <strong class="u-paint-1">Materials Gathering and Design Preparing</strong>
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                At the beginning of our project, Bartosz needed to perform exceptional designs that were supposed to meet the needs of Dillistone Group Plc company managers.
                                            </p>
                                            <p>
                                                Graphic project creation required few phases: starting with benchmarking, then preparing mockups, images in JPG, SVG icons and finally, making a final design with Adobe Experience Design.
                                            </p>
                                            <p>
                                                As soon as we ensured that our overall idea met the client’s needs and Bartosz’s graphic project was accepted, he passed it to Kate - our Front-end Developer.
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
                                                After managing initial design and description of particular functionalities like Forms, Youtube videos displaying, Log-In Site etc., the project was divided into two stages:
                                            </p>
                                            <h3>Front-end Development Stage</h3>
                                            <p>
                                                We always prefer to split front-end development from other phases because it is much faster and has less potential risks of bugs appearing. Especially, when we could use our dedicated tool for HTML&amp;CSS - SASS starter (<a href="https://github.com/Pagepro/libsasserplate" target="_blank">LibSASSerPlate</a>).
                                            </p>
                                            <h3>WordPress Development Stage</h3>
                                            <p>
                                                Once we prepared HTML&amp;CSS + main JavaScript code, we have planned to implement static files into WordPress custom theme.
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
                                                Front-End phase always starts with building Website structure in HTML. We emphasise creating HTML components to be as much reusable as possible. In order to make clean and clear code, we use BEM Methodology to maintain order in project.
                                            </p>
                                            <h3 class="g-gutter-top-1">BEM Methodology</h3>
                                            <p class="g-gutter-top-1">
                                                BEM (Block, Element, Modifier) is an open source technology for developing websites that need to be created quickly and maintained over many years. BEM is used in the front-end development of all Pagepro services.
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
                                                In Pagepro we are using SCCS to writing styles code, as it allows us to achieve great efficiency and reduces risk of future issues on different browsers.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                Nowadays, features like mixins or variables for colors, sizes and breakpoints are a “must have” standard in Front-End Development. It makes code reusable and easier to understand for other developers.
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
                                                We used Gridle Breakpoints to create <br class="hide show@mobile" />the tablet and mobile layouts.
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
                                                            <img src={images['gatedtalentwebsite-rwd-desktop.jpg']} alt="Hawksman Desktop Screenshot" />
                                                        </figure>
                                                        <div class="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div class="c-devices-wrapper__box c-devices-wrapper__box--left u-horizontal-total-left g-spacing-left-5 g-spacing-left-10@tablet g-spacing-left-0@mobile g-gutter-right-half@tablet g-gutter-right-0@mobile g-spacing-top-1@mobile h-z-2">
                                                    <div class="c-devices-box c-devices-box--ipad">
                                                        <figure class="c-devices-box__media o-img-wrapper">
                                                            <img src={images['gatedtalentwebsite-rwd-tablet.jpg']} alt="Hawksman Tablet Screenshot" />
                                                        </figure>
                                                        <div class="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div class="c-devices-wrapper__box c-devices-wrapper__box--right g-spacing-right-5 g-spacing-right-0@mobile g-spacing-top-1@mobile h-z-3">
                                                    <div class="c-devices-box c-devices-box--iphone">
                                                        <figure class="c-devices-box__media o-img-wrapper">
                                                            <img src={images['gatedtalentwebsite-rwd-phone.jpg']} alt="Hawksman Smartphone Screenshot" />
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
                                                We always conduct comprehensive Q&amp;A phase after delivering complete Front-End code. Most of all, we are making sure that particular website is working properly on different devices and on all modern browsers.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                As a tool, we use <a href="https://www.browserstack.com/" title="Browserstack" target="_blank">BrowserStack</a> for checking compatibility on multiple desktop and mobile browsers. Moreover, we are using real devices to check website functionalities. At least two devices with iOS, two with Android system and two with Windows Operating System.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                Our Q&amp;A assistant had been working hard to find all bugs before he handed the code to WP Developer and WordPress Development phase has begun.
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
                                                Step 7 <strong class="u-paint-1">WordPress Development</strong>
                                            </h3>
                                            <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                As initial action our that our <strong>WP Developer</strong> took, was to prepare <a href="https://underscores.me/" title="Underscores" target="_blank">Underscores</a> WordPress Starter for theme development.  He had also used <a href="#https://www.advancedcustomfields.com/pro/" title="ACF Pro" target="_blank">ACF Pro</a> plugin in order to make Custom Fields and make almost everything on the website customizable.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                Furthermore, the <a href="https://wpml.org/" title="WordPress Multilingual Plugin" target="_blank">WordPress Multilingual Plugin</a> was set up, which helps to manage site in different languages. When WordPress structure was ready, we focused on applying static elements from previous phase of the project.
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
                        <div class="l-row c-decors-parent g-gutter-top-5 g-gutter-top-4@desktop-small g-gutter-bottom-5 g-gutter-bottom-0@desktop-small">
                            <div class="c-decors-box" aria-hidden="true">
                                <div class="l-inner--small">
                                    <span class="c-photoshop-line c-photoshop-line--right"></span>
                                </div>
                            </div>
                            <div class="l-inner">
                                <div class="row row-align-between">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u row row-align-between">
                                                <span class="gr-adapt no-gutter">
                                                    <span>Step 8 <strong class="u-paint-1">Final Q&amp;A and Optimalisation</strong></span>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row c-decors-parent">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
                                <div class="l-inner--small">
                                    <span class="c-photoshop-line c-photoshop-line--right"></span>
                                </div>
                            </div>
                            <div class="l-inner">
                                <div class="row row-align-between">
                                    <div class="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-bottom-5 g-gutter-bottom-0@mobile">
                                        <div class="l-sec__box__content">
                                            <p>
                                                When everything was successfully implemented, we went with the client through the settings and explained how to manage the content. We made sure that everything is clear and meets the client’s needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="l-sec">
                        <div class="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
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
                                                        <h3 class="t-style-fpn-l-r-u">GatedTalent Website</h3>
                                                    </div>
                                                    <div class="c-website-teaser__info__actions g-gutter-left-4 g-gutter-left-0@tablet g-gutter-top-2 g-gutter-top-0@mobile-medium g-gutter-bottom-2 g-gutter-bottom-0@mobile-medium">
                                                        <a class="c-cta-link s-btn-style-3" href="https://www.gatedtalent.com/" target="_blank" >
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
                                                                            <span class="c-address__content u-paint-2">gatedtalent.com</span>
                                                                        </strong>
                                                                    </div>
                                                                    <figure class="c-devices-box__media o-img-wrapper">
                                                                        <img src={images['gatedtalentwebsite-rwd-desktop.jpg']} alt="GatedTalent Website Home Page Screenshot" />
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
                                            <h3 class="u-paint-1 t-style-fpn-l-r">Other works:</h3>
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

export const fluidGatedtalentWebsiteBgImage = graphql`
                                fragment fluidGatedtalentWebsiteBgImage on File {
                    childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid
                }
                }
            }
            `


export const GatedtalentWebsiteQuery = graphql`query {
                    bgCaseHawksmanThumb: file(relativePath: {eq: "bg_case-hawksman-thumb.jpg" }) {
                    ...fluidGatedtalentWebsiteBgImage
                }
                bgCaseWrocRect: file(relativePath: {eq: "bg_case-wroc-rect.jpg" }) {
                    ...fluidGatedtalentWebsiteBgImage
                }
                bgCaseKarinaPersonalRect: file(relativePath: {eq: "bg_case-karina-personal-rect.jpg" }) {
                    ...fluidGatedtalentWebsiteBgImage
                }
                bgCaseGatedtalentWebsite: file(relativePath: {eq: "bg-case-gatedtalent-website.jpg" }) {
                    ...fluidGatedtalentWebsiteBgImage
                }
                bgMiniHero: file(relativePath: {eq: "bg_mini-hero.jpg" }) {
                    ...fluidGatedtalentWebsiteBgImage
                }
                }
                `

export default GatedtalentWebsite;