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

const Acrf = (props) => (
    <>
        <div id="page-content">

            <div className="p-case-study">

                <Header />

                <main className="l-main">
                    <WorksMainBg image={images['bg-case-acrf-website.jpg']} />

                    <div className="l-sec" id="sec-1">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row row-align-between g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-4@desktop-small">
                                    <div className="l-sec__box u-paint-1 t-style-fpn-l-r gr-5 gr-12@mobile no-gutter-left no-gutter@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                <strong>Australian Cancer Research Foundation</strong>
                                            </p>
                                            <p className="u-line-h-s g-gutter-top-1">
                                                Dedicated to funding promising Australian cancer research projects.
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
                                                We had to implement website based on provided comprehensive <strong>technical specification</strong> and corresponding design in <strong>Sketch</strong>. After we received a design, we broke the project into <strong>sprints</strong> to deliver the <strong>Front-End/Back-End</strong>, essentially transforming Redfox Media specification and design into a high-quality website.
                                            </p>
                                            <h3>Our services contain:</h3>
                                            <ul className="c-dotted-list">
                                                <li className="c-dotted-list__item u-paint-3">
                                                    <span className="u-paint-2 g-gutter-left-1">Sketch to HTML conversion</span>
                                                </li>
                                                <li className="c-dotted-list__item u-paint-3">
                                                    <span className="u-paint-2 g-gutter-left-1">WordPress Custom Theme development</span>
                                                </li>
                                                <li className="c-dotted-list__item u-paint-3">
                                                    <span className="u-paint-2 g-gutter-left-1">Cross browser & device testing</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-4@mobile">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                THE COOPERATION
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                Our team includes 4 people - <strong>Project Manager</strong> (Krzysztof), <strong>WordPress Developer</strong> (Karol) and two <strong>Front-End Developers</strong> (Katarzyna and Marek). On the <strong>Redfox Media</strong> side, the team was built by <strong>Technical Manager/Designer</strong> (Lance) and  <strong>Back-End Developer</strong> (Patrick).
                                            </p>
                                            <p className="g-gutter-top-1">
                                                Lance has prepared both very detailed <strong>documentation</strong> for the project and beautiful <strong>design</strong>. Our team was astounded by his various skills that turned out to be very helpful during the whole process of <strong>website development</strong> and <strong>project management</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-align-between g-gutter-top-10 g-gutter-bottom-5 g-gutter-top-5@desktop-small">
                                    <div className="l-sec__box gr-12 gr-12@mobile no-gutter-left no-gutter@mobile">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                communication
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                Despite the fact that our office is situated on the other side of the globe and we have 10 hours difference, the communication went surprisingly smooth between our teams. Thanks to <strong>TeamWork (project management tool)</strong> we could organize our work and manage the project tasks without any inaccuracies.
                                            </p>
                                            <h3>Technologies and Tools we used:</h3>
                                            <div className="row row-align-between g-gutter-top-2@desktop-small">
                                                <div className="l-sec__box gr-6 gr-12@mobile no-gutter-left no-gutter@mobile">
                                                    <h4>Front-End</h4>
                                                    <ul className="c-dotted-list">
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                HTML
                                                            </span>
                                                        </li>
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                CSS3
                                                            </span>
                                                        </li>
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                SASS
                                                            </span>
                                                        </li>
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                JavaScript
                                                            </span>
                                                        </li>
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                jQuery
                                                            </span>
                                                        </li>
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                GULP
                                                            </span>
                                                        </li>
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                Scroll Animations
                                                            </span>
                                                        </li>
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                Parallax Effect
                                                            </span>
                                                        </li>
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                BrowserStack
                                                            </span>
                                                        </li>
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                LibSASSerPlate
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="l-sec__box gr-6 gr-12@mobile no-gutter-left g-gutter-top-1@mobile no-gutter@mobile u-m-top-0">
                                                    <h4>Back-End</h4>
                                                    <ul className="c-dotted-list">
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                WordPress
                                                            </span>
                                                        </li>
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                ACF PRO
                                                            </span>
                                                        </li>
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                Underscores
                                                            </span>
                                                        </li>
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                PHP 7.2
                                                            </span>
                                                        </li>
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                FacetWP
                                                            </span>
                                                        </li>
                                                        <li className="c-dotted-list__item u-paint-3">
                                                            <span className="u-paint-2 g-gutter-left-1">
                                                                SearchWP
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
                                                Whole project took us <strong>6 weeks</strong>.
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
                                                Step 1 <strong className="u-paint-1">Materials Gathering</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                At the beginning of our project, we received <strong>specification</strong> with <strong>design</strong> in <strong>Sketch</strong>. Our first move was to prepare a Style Guide for reusable components starting from <strong>Form Styles</strong> and plan for <strong>Grid system</strong>.
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
                                                After managing initial Style Guide, Krzysztof prepared initial Sprints. In general, the project was divided into two stages:
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
                                                Front-End phase always starts with building <strong>Website structure</strong> in HTML. We emphasise creating HTML components to be as much reusable as possible. In order to make clean and clear code, we use BEM Methodology to maintain order in project.
                                            </p>
                                            <h3 className="g-gutter-top-1">BEM Methodology</h3>
                                            <p className="g-gutter-top-1">
                                                BEM (Block, Element, Modifier) is an open source technology for developing websites that need to be created quickly and maintained over many years. <strong>BEM</strong> is used in the front-end development of all Pagepro services.
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
                                                Nowadays, features like <strong>mixins</strong> or <strong>variables</strong> for <strong>colors</strong>, <strong>sizes</strong> and <strong>breakpoints</strong> are a “must have” standard in Front-End Development. It makes code reusable and easier to understand for other developers.
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
                                                We always declare Breakpoints values as SCSS variables for different devices that allows us to make them reusable and keep standardization of our templates.
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
                                                            <img src={images['acrf-rwd-desktop.jpg']} alt="ACRF Desktop Screenshot" />
                                                        </figure>
                                                        <div className="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div className="c-devices-wrapper__box c-devices-wrapper__box--left u-horizontal-total-left g-spacing-left-5 g-spacing-left-10@tablet g-spacing-left-0@mobile g-gutter-right-half@tablet g-gutter-right-0@mobile g-spacing-top-1@mobile h-z-2">
                                                    <div className="c-devices-box c-devices-box--ipad">
                                                        <figure className="c-devices-box__media o-img-wrapper">
                                                            <img src={images['acrf-rwd-tablet.jpg']} alt="ACRF Tablet Screenshot" />
                                                        </figure>
                                                        <div className="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div className="c-devices-wrapper__box c-devices-wrapper__box--right g-spacing-right-5 g-spacing-right-0@mobile g-spacing-top-1@mobile h-z-3">
                                                    <div className="c-devices-box c-devices-box--iphone">
                                                        <figure className="c-devices-box__media o-img-wrapper">
                                                            <img src={images['acrf-rwd-mobile.jpg']} alt="ACRF Smartphone Screenshot" />
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
                                                We always conduct comprehensive Q&amp;A phase after delivering complete Front-End code. Most of all, we are making sure that particular website is working properly on different devices and on all modern browsers, including Chrome, FireFox, Safari and Internet Explorer.
                                            </p>
                                            <p className="g-gutter-top-1">
                                                As a tool, we use <a href="https://www.browserstack.com/" title="BrowserStack" target="_blank">BrowserStack</a> for checking compatibility on multiple desktop and mobile browsers. Moreover, we are using real devices to check website functionalities. At least two devices with iOS, two with Android system and two with Windows Operating System.
                                            </p>
                                            <p className="g-gutter-top-1">
                                                We always use <strong>W3C Validator</strong> validator to validate our code. Besides, we are using <strong>Pixel Perfect plugin</strong> for website’s current layout comparison to the provided design.Our Q&A assistant had been working hard to find all bugs before he handed the code to WP Developer and WordPress Development phase has begun.
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
                        <div className="l-row c-decors-parent g-gutter-top-5" aria-hidden="true">
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
                        <div className="l-row" role="grid">
                            <div className="l-inner">
                                <div className="row row-align-between" role="row">
                                    <div className="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter@mobile" role="columnheader">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Step 8 <strong className="u-paint-1">FINAL Q&amp;A AND UAT</strong>
                                            </h3>
                                            <p className="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                When everything was successfully implemented, we went with the client through the settings and explained how to manage the content. We made sure that everything is clear and meets the client’s needs.
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
                                                Step 9 <strong className="u-paint-1">Live Deployment &amp; SLA</strong>
                                            </h3>
                                            <p className="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                The whole process of creating the website described above was being made on development environment. Once client is happy with the results and we get his approval, we migrate everything from development environment to production. It is the last step of our website creation process but not least. After that we provide support service to our clients and help them to develop new features to the website.
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
                        <div className="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div className="c-decors-box" aria-hidden="true">
                                <span className="c-photoshop-line c-photoshop-line--top"></span>
                            </div>
                        </div>
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__content">
                                            <blockquote className="c-testimonial g-gutter-top-5 g-gutter-bottom-5 g-gutter-left-4 g-gutter-left-0@tablet g-gutter-right-4 g-gutter-right-0@tablet" aria-label="Testimonial">
                                                <div className="c-testimonial__head u-paint-1">
                                                    <h3 className="t-style-fpn-l-r">Testimonial:</h3>
                                                </div>
                                                <div className="c-testimonial__content t-style-fpn-m-ri g-gutter-top-4 g-gutter-top-3@desktop-small">
                                                    <p className="u-line-h-m">
                                                        The website was delivered on time and on budget. Redfox Media's multiple touchpoints led to comprehensive communication and a unified vision that is rare for fixed-price projects. Differing time zones led to logistical challenges, but their experience and work ethic compensated for any issues.
                                                    </p>
                                                </div>
                                                <footer className="c-testimonial__foot g-gutter-top-4  g-gutter-top-3@desktop-small">
                                                    <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                        <img src={images['pic-lance-redgrave.jpg']} alt="Lance Redgrave" />
                                                    </figure>
                                                    <div className="c-testimonial__foot__info u-text-upper">
                                                        <strong className="u-decor-bottom--alt t-style-fpn-s-r">Lance Redgrave</strong>. CEO of Redfox, Sydney
                                                    </div>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
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
                                                        <h3 className="t-style-fpn-l-r-u">ACRF</h3>
                                                    </div>
                                                    <div className="c-website-teaser__info__actions g-gutter-left-4 g-gutter-left-0@tablet g-gutter-top-2 g-gutter-top-0@mobile-medium g-gutter-bottom-2 g-gutter-bottom-0@mobile-medium">
                                                        <a className="c-cta-link s-btn-style-3" href="https://www.acrf.com.au" target="_blank" >
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
                                                                            <span className="c-address__content u-paint-2">acrf.com.au</span>
                                                                        </strong>
                                                                    </div>
                                                                    <figure className="c-devices-box__media o-img-wrapper">
                                                                        <img src={images['acrf-rwd-desktop.jpg']} alt="ACRF Website Home Page Screenshot" />
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

export const fluidAcrfBgImage = graphql`
                                fragment fluidAcrfBgImage on File {
                    childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid
                }
                }
            }
            `


export const AcrfQuery = graphql`query {
                    bgCaseHawksmanThumb: file(relativePath: {eq: "bg_case-hawksman-thumb.jpg" }) {
                    ...fluidAcrfBgImage
                }
                bgCaseWrocRect: file(relativePath: {eq: "bg_case-wroc-rect.jpg" }) {
                    ...fluidAcrfBgImage
                }
                bgCaseKarinaPersonalRect: file(relativePath: {eq: "bg_case-karina-personal-rect.jpg" }) {
                    ...fluidAcrfBgImage
                }
                }
                `

export default Acrf;