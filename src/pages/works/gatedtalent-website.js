import React from "react"
import Header from '../../components/header';
import Footer from '../../components/footer';
import { graphql, Link } from 'gatsby';
import BgImage from '../../components/bgImage'
import WorksMainBg from '../../components/worksMainBg'

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../../static/img/', false, /\.(jpg|svg)$/));

const GatedtalentWebsite = (props) => (
    <>
        <div id="page-content">

            <div className="p-case-study">

                <Header />

                <main className="l-main">

                    <WorksMainBg image={images['bg-case-gatedtalent-website.jpg']} />

                    <div className="l-sec" id="sec-1">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row row-align-between g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-4@desktop-small">
                                    <div className="l-sec__box u-paint-1 t-style-fpn-l-r gr-5 gr-12@mobile no-gutter-left no-gutter@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                <strong>GatedTalent - Executive Search & Online Talent Acquisition Portal</strong>
                                            </p>
                                            <p className="u-line-h-s g-gutter-top-1">
                                                Connecting highly experienced and talented executives with recruiters, who are offering only top level positions.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                Pagepro Team was atthe same time working on User Interface in ReactJs for GatedTalent application and creating GT Website.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="l-sec">
                        <div className="l-row c-decors-parent">
                            <div className="c-decors-box" aria-hidden="true">
                                <span className="c-photoshop-line c-photoshop-line--top"></span>
                                <span className="c-photoshop-line c-photoshop-line--bottom"></span>
                                <div className="l-inner--small">
                                    <span className="c-photoshop-line c-photoshop-line--right"></span>
                                    <span className="c-photoshop-line c-photoshop-line--left"></span>
                                    <div className="c-decor-wrapper c-decor-wrapper--top c-decor-wrapper--right g-gutter-top-3 g-gutter-right-4 u-horizontal-middle-right">
                                        <span className="o-object-wrapper o-object-wrapper--path">
                                            <object type="image/svg+xml" data={images['shape_5.svg']}>Photoshop curve tool</object>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-inner">
                                <div className="row row-align-between g-gutter-top-10 g-gutter-top-5@desktop-small">
                                    <div className="l-sec__box gr-6 gr-12@mobile no-gutter-left no-gutter@mobile">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Requirements
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                Dillistone Group Plc company needed well designed website based on WordPress CMS Platform for their product - GatedTalent application. Our goal was to deliver clean and modern looking website, which would proudly represent their idea, providing easy access to information about product features and enable user registration or loginin to the platform.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-4@mobile">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Delivery
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                Pagepro provided four very talented specialist, Chris (Project Manager), Karol (WordPress/Back-End Developer), Bartosz (Designer) and Kate (Front-End Developer). The team was hard working, taking over hours in order to deliver fully completed website on time. As a result, the whole process including making design, coding, testing and deploying -  took them one month.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                                    <div className="l-sec__box gr-2 gr-6@mobile no-gutter-left no-gutter-left@mobile">
                                        <ul className="c-dotted-list">
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">HTML5</span>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">CSS3</span>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">SASS</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="l-sec__box gr-2 gr-6@mobile no-gutter-right@mobile">
                                        <ul className="c-dotted-list">
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="http://wordpress.org/">WordPress</a>
                                                </span>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">ACF Pro</span>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">Underscores</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="l-sec__box gr-2 gr-6@mobile no-gutter-left@mobile">
                                        <ul className="c-dotted-list">
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">
                                                    WPML
                                                </span>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">
                                                    AMP
                                                </span>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">JQuery</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="l-sec__box gr-2 gr-6@mobile no-gutter-right no-gutter-right@mobile">
                                        <ul className="c-dotted-list">
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">GULP</span>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">BrowserStack</span>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">
                                                    JavaScript
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="l-sec__box gr-2 gr-6@mobile  no-gutter-left@mobile">
                                        <ul className="c-dotted-list">
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">Adobe Experience Design</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec c-decors-parent u-bg-double-2-4">
                        <div className="c-decors-box" aria-hidden="true">
                            <span className="c-decor-calendar c-decor-calendar--left u-paint-5"></span>
                        </div>
                        <div className="l-row">
                            <div className="l-inner l-inner-no-gutters@mobile-medium">
                                <div className="row h-row-align-stretch">
                                    <div className="l-sec__box gr-3 gr-6@mobile-medium no-gutter-left h-gr-fix-center">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Time frame
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-6 g-gutter-top-10 g-gutter-top-5@tablet g-gutter-bottom-10 g-gutter-bottom-5@tablet u-bg-1 u-paint-4">
                                        <div className="l-sec__box__content">
                                            <p className="u-text-centered">
                                                Whole project took us <strong>12 weeks</strong>.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-3 no-gutter u-bg-2 hide@mobile-medium">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec">
                        <div className="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div className="c-decors-box" aria-hidden="true">
                                <span className="c-photoshop-line c-photoshop-line--top"></span>
                                <div className="l-inner">
                                    <div className="row row-align-between">
                                        <div className="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div className="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span className="c-photoshop-line c-photoshop-line--left"></span>
                                            <span className="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-row c-decors-parent">
                            <div className="c-decors-box" aria-hidden="true">
                                <span className="c-photoshop-line c-photoshop-line--top"></span>
                                <span className="c-photoshop-line c-photoshop-line--bottom"></span>
                                <div className="l-inner--small">
                                    <span className="c-photoshop-line c-photoshop-line--right"></span>
                                </div>
                            </div>
                            <div className="l-inner g-gutter-top-5@mobile">
                                <div className="row row-align-between">
                                    <div className="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter@mobile g-gutter-top-5 g-gutter-bottom-5">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Step 1 <strong className="u-paint-1">Materials Gathering and Design Preparing</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
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
                                    <div className="l-sec__box c-decors-parent gr-5 gr-12@mobile pull-1 pull-0@mobile no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-4@mobile g-gutter-bottom-5">
                                        <div className="c-decors-box" aria-hidden="true">
                                            <span className="c-photoshop-line c-photoshop-line--left"></span>
                                        </div>
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Step 2 <strong className="u-paint-1">Management</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
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
                        <div className="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div className="c-decors-box">
                                <div className="l-inner">
                                    <div className="row row-align-between">
                                        <div className="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div className="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span className="c-photoshop-line c-photoshop-line--left"></span>
                                            <span className="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="l-mini-hero u-bg-2 c-decors-parent" aria-hidden="true" style={{ backgroundImage: `url(${images['bg_mini-hero.jpg']})` }}>
                        <div className="c-decors-box" aria-hidden="true">
                            <div className="l-inner--small">
                                <div className="c-decor-wrapper c-decor-wrapper--bottom c-decor-wrapper--right u-horizontal-middle-right u-vertical-middle-bottom">
                                    <span className="o-object-wrapper o-object-wrapper--code">
                                        <object type="image/svg+xml" data={images['shape_6.svg']}>HTML tag</object>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="l-sec">
                        <div className="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div className="c-decors-box" aria-hidden="true">
                                <div className="l-inner">
                                    <div className="row row-align-between">
                                        <div className="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div className="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span className="c-photoshop-line c-photoshop-line--left"></span>
                                            <span className="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-row c-decors-parent g-gutter-top-5" aria-hidden="true">
                            <div className="c-decors-box" aria-hidden="true">
                                <span className="c-photoshop-line c-photoshop-line--top"></span>
                                <div className="l-inner">
                                    <div className="row row-align-between">
                                        <div className="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div className="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span className="c-photoshop-line c-photoshop-line--left"></span>
                                            <span className="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-row" role="grid">
                            <div className="l-inner">
                                <div className="row row-align-between" role="row">
                                    <div className="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter@mobile" role="columnheader">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Step 3 <strong className="u-paint-1">HTML coding</strong>
                                            </h3>
                                            <p className="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                Front-End phase always starts with building Website structure in HTML. We emphasise creating HTML components to be as much reusable as possible. In order to make clean and clear code, we use BEM Methodology to maintain order in project.
                                            </p>
                                            <h3 className="g-gutter-top-1">BEM Methodology</h3>
                                            <p className="g-gutter-top-1">
                                                BEM (Block, Element, Modifier) is an open source technology for developing websites that need to be created quickly and maintained over many years. BEM is used in the front-end development of all Pagepro services.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-5 gr-12@mobile pull-1 pull-0@mobile c-decors-parent no-gutter@mobile g-gutter-top-4@mobile" role="columnheader">
                                        <div className="c-decors-box" aria-hidden="true">
                                            <div className="l-inner--small">
                                                <span className="c-photoshop-line c-photoshop-line--right"></span>
                                                <span className="c-photoshop-line c-photoshop-line--left"></span>
                                            </div>
                                        </div>
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Step 4 <strong className="u-paint-1">(S)CSS coding</strong>
                                            </h3>
                                            <p className="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                In Pagepro we are using SCCS to writing styles code, as it allows us to achieve great efficiency and reduces risk of future issues on different browsers.
                                            </p>
                                            <p className="g-gutter-top-1">
                                                Nowadays, features like mixins or variables for colors, sizes and breakpoints are a “must have” standard in Front-End Development. It makes code reusable and easier to understand for other developers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-row c-decors-parent g-gutter-top-5" aria-hidden="true">
                            <div className="c-decors-box">
                                <div className="l-inner">
                                    <div className="row row-align-between">
                                        <div className="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div className="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span className="c-photoshop-line c-photoshop-line--left"></span>
                                            <span className="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec l-sec--with-media-to-right u-bg-1 u-paint-4 g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-6 gr-8@mobile gr-12@mobile-medium no-gutter-left no-gutter@mobile no-gutter@mobile-medium">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Step 5 <strong>Responsive version</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p className="g-gutter-right-8@desktop-small g-gutter-right-0@tablet">
                                                We used Gridle Breakpoints to create <br className="hide show@mobile" />the tablet and mobile layouts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-align-right row-align-center@mobile g-spacing-top-minus-8 g-spacing-top-minus-7@desktop-small g-spacing-top-3@tablet">
                                    <div className="l-sec__box gr-adapt gr-12@mobile no-gutter no-gutter@mobile">
                                        <div className="l-sec__box__content">
                                            <div className="c-devices-wrapper" aria-label="samples of responsive web design of the page">
                                                <div className="c-devices-wrapper__box c-devices-wrapper__box--main h-z-1">
                                                    <div className="c-devices-box c-devices-box--imac">
                                                        <figure className="c-devices-box__media o-img-wrapper">
                                                            <img src={images['gatedtalentwebsite-rwd-desktop.jpg']} alt="Hawksman Desktop Screenshot" />
                                                        </figure>
                                                        <div className="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div className="c-devices-wrapper__box c-devices-wrapper__box--left u-horizontal-total-left g-spacing-left-5 g-spacing-left-10@tablet g-spacing-left-0@mobile g-gutter-right-half@tablet g-gutter-right-0@mobile g-spacing-top-1@mobile h-z-2">
                                                    <div className="c-devices-box c-devices-box--ipad">
                                                        <figure className="c-devices-box__media o-img-wrapper">
                                                            <img src={images['gatedtalentwebsite-rwd-tablet.jpg']} alt="Hawksman Tablet Screenshot" />
                                                        </figure>
                                                        <div className="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div className="c-devices-wrapper__box c-devices-wrapper__box--right g-spacing-right-5 g-spacing-right-0@mobile g-spacing-top-1@mobile h-z-3">
                                                    <div className="c-devices-box c-devices-box--iphone">
                                                        <figure className="c-devices-box__media o-img-wrapper">
                                                            <img src={images['gatedtalentwebsite-rwd-phone.jpg']} alt="Hawksman Smartphone Screenshot" />
                                                        </figure>
                                                        <div className="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec">
                        <div className="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div className="c-decors-box" aria-hidden="true">
                                <div className="l-inner">
                                    <div className="row row-align-between">
                                        <div className="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div className="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span className="c-photoshop-line c-photoshop-line--left"></span>
                                            <span className="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-row c-decors-parent g-gutter-top-5" aria-hidden="true">
                            <div className="c-decors-box" aria-hidden="true">
                                <span className="c-photoshop-line c-photoshop-line--top"></span>
                                <div className="l-inner">
                                    <div className="row row-align-between">
                                        <div className="gr-5 no-gutter-left g-gutter-top-5"></div>
                                        <div className="c-decors-parent gr-5 pull-1 g-gutter-top-5">
                                            <span className="c-photoshop-line c-photoshop-line--left"></span>
                                            <span className="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-row" role="grid">
                            <div className="l-inner">
                                <div className="row row-align-between" role="row">
                                    <div className="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter@mobile" role="columnheader">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Step 6 <strong className="u-paint-1">First Q&amp;A Stage</strong>
                                            </h3>
                                            <p className="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                We always conduct comprehensive Q&amp;A phase after delivering complete Front-End code. Most of all, we are making sure that particular website is working properly on different devices and on all modern browsers.
                                            </p>
                                            <p className="g-gutter-top-1">
                                                As a tool, we use <a href="https://www.browserstack.com/" title="Browserstack" target="_blank">BrowserStack</a> for checking compatibility on multiple desktop and mobile browsers. Moreover, we are using real devices to check website functionalities. At least two devices with iOS, two with Android system and two with Windows Operating System.
                                            </p>
                                            <p className="g-gutter-top-1">
                                                Our Q&amp;A assistant had been working hard to find all bugs before he handed the code to WP Developer and WordPress Development phase has begun.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-5 gr-12@mobile pull-1 pull-0@mobile no-gutter@mobile c-decors-parent g-spacing-top-4@mobile" role="columnheader">
                                        <div className="c-decors-box" aria-hidden="true">
                                            <div className="l-inner--small">
                                                <span className="c-photoshop-line c-photoshop-line--right"></span>
                                                <span className="c-photoshop-line c-photoshop-line--left"></span>
                                            </div>
                                        </div>
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Step 7 <strong className="u-paint-1">WordPress Development</strong>
                                            </h3>
                                            <p className="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                As initial action our that our <strong>WP Developer</strong> took, was to prepare <a href="https://underscores.me/" title="Underscores" target="_blank">Underscores</a> WordPress Starter for theme development.  He had also used <a href="#https://www.advancedcustomfields.com/pro/" title="ACF Pro" target="_blank">ACF Pro</a> plugin in order to make Custom Fields and make almost everything on the website customizable.
                                            </p>
                                            <p className="g-gutter-top-1">
                                                Furthermore, the <a href="https://wpml.org/" title="WordPress Multilingual Plugin" target="_blank">WordPress Multilingual Plugin</a> was set up, which helps to manage site in different languages. When WordPress structure was ready, we focused on applying static elements from previous phase of the project.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div className="c-decors-box" aria-hidden="true">
                                <span className="c-photoshop-line c-photoshop-line--bottom"></span>
                                <div className="l-inner">
                                    <div className="row row-align-between">
                                        <div className="gr-5 no-gutter-left g-gutter-top-10"></div>
                                        <div className="c-decors-parent gr-5 pull-1 g-gutter-top-10">
                                            <span className="c-photoshop-line c-photoshop-line--left"></span>
                                            <span className="c-photoshop-line c-photoshop-line--right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec">
                        <div className="l-row c-decors-parent g-gutter-top-5 g-gutter-top-4@desktop-small g-gutter-bottom-5 g-gutter-bottom-0@desktop-small">
                            <div className="c-decors-box" aria-hidden="true">
                                <div className="l-inner--small">
                                    <span className="c-photoshop-line c-photoshop-line--right"></span>
                                </div>
                            </div>
                            <div className="l-inner">
                                <div className="row row-align-between">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u row row-align-between">
                                                <span className="gr-adapt no-gutter">
                                                    <span>Step 8 <strong className="u-paint-1">Final Q&amp;A and Optimalisation</strong></span>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-row c-decors-parent">
                            <div className="c-decors-box" aria-hidden="true">
                                <span className="c-photoshop-line c-photoshop-line--top"></span>
                                <div className="l-inner--small">
                                    <span className="c-photoshop-line c-photoshop-line--right"></span>
                                </div>
                            </div>
                            <div className="l-inner">
                                <div className="row row-align-between">
                                    <div className="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-bottom-5 g-gutter-bottom-0@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                When everything was successfully implemented, we went with the client through the settings and explained how to manage the content. We made sure that everything is clear and meets the client’s needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="l-sec">
                        <div className="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div className="c-decors-box" aria-hidden="true">
                                <span className="c-photoshop-line c-photoshop-line--top"></span>
                            </div>
                        </div>

                    </section>
                    <section className="l-sec l-sec--with-between-decor">
                        <div className="l-row c-between-decors-parent">
                            <span className="c-between-decors">
                                <span className="c-between-decor c-between-decor--top u-paint-4"></span>
                                <span className="c-between-decor c-between-decor--bottom u-paint-6"></span>
                            </span>
                            <div className="l-inner">
                                <div className="row ">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="c-website-teaser g-gutter-top-7 g-gutter-top-6@mobile g-gutter-bottom-7 g-gutter-bottom-6@mobile">
                                            <div className="c-website-teaser__inner row h-row-align-stretch">
                                                <div className="c-website-teaser__info gr-4 gr-12@mobile-medium no-gutter-left no-gutter@mobile-medium">
                                                    <div className="c-website-teaser__info__head g-gutter-left-4 g-gutter-left-0@tablet g-gutter-top-5 g-gutter-top-0@mobile-medium g-gutter-bottom-3@mobile-medium">
                                                        <h3 className="t-style-fpn-l-r-u">GatedTalent Website</h3>
                                                    </div>
                                                    <div className="c-website-teaser__info__actions g-gutter-left-4 g-gutter-left-0@tablet g-gutter-top-2 g-gutter-top-0@mobile-medium g-gutter-bottom-2 g-gutter-bottom-0@mobile-medium">
                                                        <a className="c-cta-link s-btn-style-3" href="https://www.gatedtalent.com/" target="_blank" >
                                                            <span className="c-label">Visit website</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="c-website-teaser__media gr-8 gr-12@mobile-medium no-gutter no-gutter@mobile-medium">
                                                    <div className="c-website-teaser__media__content g-gutter-right-4 g-gutter-right-0@tablet g-gutter-bottom-6@mobile-medium">
                                                        <div className="c-devices-wrapper">
                                                            <div className="c-devices-wrapper__box">
                                                                <div className="c-devices-box c-devices-box--browser">
                                                                    <div className="c-devices-box__frame">
                                                                        <strong className="c-address">
                                                                            <span className="c-address__head u-paint-3">http://</span>
                                                                            <span className="c-address__content u-paint-2">gatedtalent.com</span>
                                                                        </strong>
                                                                    </div>
                                                                    <figure className="c-devices-box__media o-img-wrapper">
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
                    <section className="l-sec l-sec--with-between-decor">
                        <div className="l-row">
                            <div className="l-inner g-gutter-top-10 g-gutter-top-5@desktop-small">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="u-paint-1 t-style-fpn-l-r">Other works:</h3>
                                        </div>
                                        <div className="l-sec__box__content g-spacing-top-5 g-spacing-top-4@desktop-small c-between-decors-parent">
                                            <span className="c-between-decors">
                                                <span className="c-between-decor c-between-decor--top u-paint-4"></span>
                                                <span className="c-between-decor c-between-decor--bottom u-paint-2 g-gutter-bottom-4@mobile"></span>
                                            </span>
                                            <div className="c-slider-wrapper c-slider-wrapper--portfolio-teasers js-portfolio-teasers-slider">
                                                <div className="c-slider-wrapper__container swiper-container" aria-label="Portfolio teasers slider">
                                                    <ol className="c-portfolio-teasers-list c-portfolio-teasers-list--small swiper-wrapper">

                                                        <li className="c-portfolio-teasers-list__item swiper-slide">
                                                            <div className="c-portfolio-teaser c-portfolio-teaser--small">
                                                                <Link className="c-portfolio-teaser__inner u-paint-4" to="/works/karina-papadopoulos">
                                                                    <div className="c-portfolio-teaser__media" >
                                                                        <BgImage
                                                                            title="bgCaseKarinaPersonalRect"
                                                                            fluid={props.data.bgCaseKarinaPersonalRect.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div className="c-portfolio-teaser__main">
                                                                        <h2 className="t-style-fpn-l-b-u">
                                                                            Karina Papadopoulos
                                        </h2>
                                                                        <p className="g-gutter-top-1 u-paint-3">
                                                                            PSD to HTML conversion
                                             WordPress Development
                                        </p>
                                                                    </div>
                                                                    <div className="c-portfolio-teaser__add g-gutter-top-2">
                                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                                            <span className="c-label">Case study</span>
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </li>

                                                        <li className="c-portfolio-teasers-list__item swiper-slide">
                                                            <div className="c-portfolio-teaser c-portfolio-teaser--small">
                                                                <Link className="c-portfolio-teaser__inner u-paint-4" to="/works/wroc-sharp">
                                                                    <div className="c-portfolio-teaser__media" >
                                                                        <BgImage
                                                                            title="bgCaseWrocRect"
                                                                            fluid={props.data.bgCaseWrocRect.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div className="c-portfolio-teaser__main">
                                                                        <h2 className="t-style-fpn-l-b-u">
                                                                            WROC#
                                        </h2>
                                                                        <p className="g-gutter-top-1 u-paint-3">
                                                                            PSD to HTML conversion
                                             WordPress Development
                                        </p>
                                                                    </div>
                                                                    <div className="c-portfolio-teaser__add g-gutter-top-2">
                                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                                            <span className="c-label">Case study</span>
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </li>

                                                        <li className="c-portfolio-teasers-list__item swiper-slide">
                                                            <div className="c-portfolio-teaser c-portfolio-teaser--small">
                                                                <Link className="c-portfolio-teaser__inner u-paint-4" to="/works/hawksman">
                                                                    <div className="c-portfolio-teaser__media" >
                                                                        <BgImage
                                                                            title="bgCaseHawksmanThumb"
                                                                            fluid={props.data.bgCaseHawksmanThumb.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div className="c-portfolio-teaser__main">
                                                                        <h2 className="t-style-fpn-l-b-u">
                                                                            Hawksman
                                        </h2>
                                                                        <p className="g-gutter-top-1 u-paint-3">
                                                                            PSD to HTML conversion
                                             WordPress Development
                                        </p>
                                                                    </div>
                                                                    <div className="c-portfolio-teaser__add g-gutter-top-2">
                                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                                            <span className="c-label">Case study</span>
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                                <div className="c-slider-wrapper__navigation swiper-navigation">
                                                    <span className="c-slider-button c-slider-button--prev js-slider-prev" aria-label="go to next slide"></span>
                                                    <span className="c-slider-button c-slider-button--next js-slider-next" aria-label="go to previous slide"></span>
                                                    <ol className="c-dots-list g-gutter-top-2@mobile g-gutter-bottom-2@mobile">
                                                        <li className="c-dots-list__item">
                                                            <span className="c-dot u-bg-4 u-paint-1"></span>
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
                }
                `

export default GatedtalentWebsite;

