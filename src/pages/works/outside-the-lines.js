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

const OutsideTheLines = (props) => (
    <>
        <div id="page-content">

            <div class="p-case-study">


                <Header />

                <main class="l-main">
                    <BgImage
                        title="bgCaseOtl"
                        fluid={props.data.bgCaseOtl.childImageSharp.fluid}
                        className="l-hero l-hero--alt l-hero--small l-hero--with-overlay  u-paint-4"
                        height='100vh'
                    >
                        <div class="l-inner g-gutter-top-10 g-gutter-bottom-8">
                            <div class="l-hero__head row g-gutter-top-8 g-gutter-top-0@mobile">
                                <div class="l-hero__head__box">
                                    <h2 class="t-style-fpn-xxl-b-u">
                                        Outside The Lines
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
                                                <strong>Outside The Lines</strong>
                                            </p>
                                            <p class="u-line-h-s g-gutter-top-1">
                                                Outside the lines is a British brand established by two friends who share a&nbsp;vision to create a collection that doesn't compromise on quality or design and would appeal to parents and children alike.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile">
                                        <div class="l-sec__box__content">
                                            <p>
                                                Outside the lines is a collection of beautifully considered clothes for girls who know their own style.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                With a passion for soft muted tones, our love of print, quality fabrics and an unwavering focus on hidden detail, the collection is feminine, comfortable and fun with pieces to suit aspects of every girls life. Little extra touches make it individual and unquestionably special.
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
                                                Outside the lines were about to release a new collection, we had to deliver the tool where they can publish the products and collect payments from customers.
                                            </p>
                                            <p>
                                                Our services contain:
                                            </p>
                                            <ul>
                                                <li>PSD to HTML conversion</li>
                                                <li>WordPress Custom Theme development</li>
                                                <li>WooCommerce Implementation</li>
                                                <li>Wishlist</li>
                                                <li>Custom Lookbook Plugin</li>
                                                <li>Custom Press Plugin </li>
                                                <li>PayPal Integration</li>
                                                <li>Stripe Integration</li>
                                                <li>MailChimp Integration</li>
                                                <li>Instagram Social Feed</li>
                                                <li>Cross browser &amp; device testing</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-4@mobile">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                The Cooperation
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                <strong><a href="https://republik-media.com/" target="_blank">Republik Media</a></strong> partnered with <strong>Pagepro</strong> to create fast and user-friendly eCommerce website for Outside The Lines. After this project, Pagepro became one of the main web development vendors for Republik.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-left no-gutter-left@mobile">
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
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-right@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://www.sketchapp.com/">Sketch</a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://www.invisionapp.com/">InvisionApp</a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">SVG Sprites</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-left@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    Webpack
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    GULP
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">BrowserStack</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-right no-gutter-right@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://woocommerce.com/">WooCommerce</a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="http://wordpress.org/">WordPress</a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">Advanced Custom Fields PRO</span>
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
                                                MVP Version took us <strong>6 weeks</strong>.
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
                                                Step 1 <strong class="u-paint-1">Kicking off</strong>
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                First thing was to <strong>check if we have all needed materials</strong>.
                                                Republik agency provided us with: SKETCH &amp; JPG design files, SVG icons, basic requirements and animation examples on different websites.
                                            </p>
                                            <p>
                                                We've made sure if we <strong>have the latest version</strong> of the files by presenting  materials summary on FrontendApp (our internal tool), also we've checked if SVG icons are prepared for web-use.
                                            </p>
                                            <p>
                                                After reviewing the materials, we've prepared list of questions and suggestions, we asked to do <strong>the kick off call</strong> for making sure if we understand all her specific requirements.
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
                                                The project was actually split in 2 stages - HTML/CSS building and WooCommerce development.
                                            </p>
                                            <h3>Front-end Development Stage</h3>
                                            <p>
                                                We always like to split front-end development from other phases because it is much faster to prepare CSS &amp; HTML using front-end tooling, like our own <strong>SASS starter</strong> (<a href="https://github.com/Pagepro/libsasserplate" target="_blank">LibSASSerPlate</a>).
                                            </p>
                                            <h3>WooCommerce Development Stage</h3>
                                            <p>
                                                After preparing HTML&amp;CSS we've planed to implement static files into WooCommerce custom theme.
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
                                                After planning project architecutre we always start with building HTML. We are making sure if code is split into tiny, easy to re-use HTML components.
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
                                                SCSS structure needs to be well designed and should be refactorized during project life time. Using easy to understand variables for colors and sizes is a must have. It makes code reusable and easier to understand for other developers.
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
                                                            <img src={images['pic_screenshot-otl-01.jpg']} alt="Outside The Lines Desktop Screenshot" />
                                                        </figure>
                                                        <div class="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div class="c-devices-wrapper__box c-devices-wrapper__box--left u-horizontal-total-left g-spacing-left-5 g-spacing-left-10@tablet g-spacing-left-0@mobile g-gutter-right-half@tablet g-gutter-right-0@mobile g-spacing-top-1@mobile h-z-2">
                                                    <div class="c-devices-box c-devices-box--ipad">
                                                        <figure class="c-devices-box__media o-img-wrapper">
                                                            <img src={images['pic_screenshot-otl-02.jpg']} alt="Outside The Lines Tablet Screenshot" />
                                                        </figure>
                                                        <div class="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div class="c-devices-wrapper__box c-devices-wrapper__box--right g-spacing-right-5 g-spacing-right-0@mobile g-spacing-top-1@mobile h-z-3">
                                                    <div class="c-devices-box c-devices-box--iphone">
                                                        <figure class="c-devices-box__media o-img-wrapper">
                                                            <img src={images['pic_screenshot-otl-03.jpg']} alt="Outside The Lines Smartphone Screenshot" />
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
                                                Before starting WooCommerce development we always do first Q&amp;A stage.
                                                At this stage we're testing the website on all modern browsers.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                Our Q&amp;A assistant is making sure that everything looks the way designer wanted and works smoothly on all devices. We're doing testing on real devices and on emulated versions using BrowserStack.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                This stage is always conducted before WC integration, because it is much easier and faster to do bugfixes on static HTML &amp; CSS templates.
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
                                                Step 7 <strong class="u-paint-1">WooCommerce Development</strong>
                                            </h3>
                                            <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                During the WooCommerce &amp; WordPress integration we took the static HTML files and created the backbone of the WordPress site. We're using <a href="http://underscores.me/" target="_blank">Underscores</a> as a starter for developing custom theme.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                We've lunched the website on test server with some prepopulated content just to verify if everything is editable and displayed as it should.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                After successful implementation we've prepared short instruction describing steps needed to update content on the website.
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
                                                Step 8 <strong class="u-paint-1">Custom options and&nbsp;integrations</strong>
                                            </h3>
                                            <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                When native WooCommerce functionalities were working we could start with custom options.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                The most challenging thing was to adjust the look of the cart and checkout process. Republik Media required design changes to improve website conversions.
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
                                                Step 9 <strong class="u-paint-1">Final Q&amp;A and&nbsp;Optimalisation</strong>
                                            </h3>
                                            <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                Once the development was completed, we've tested the project on a majority of devices and browsers. There were a few small issues which had to be fixed.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                We paid special attention to the way each section of the site could be managed. We tested the functionality and installed the project on our staging server for a client review.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div class="c-decors-box" aria-hidden="true">
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
                        <div class="l-row c-decors-parent g-gutter-top-5 g-gutter-top-0@desktop-small" aria-hidden="true">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
                            </div>
                        </div>
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__content">
                                            <blockquote class="c-testimonial g-gutter-top-5 g-gutter-bottom-5 g-gutter-left-4 g-gutter-left-0@tablet g-gutter-right-4 g-gutter-right-0@tablet" aria-label="Testimonial">
                                                <div class="c-testimonial__head u-paint-1">
                                                    <h3 class="t-style-fpn-l-r">Testimonial:</h3>
                                                </div>
                                                <div class="c-testimonial__content t-style-fpn-m-ri g-gutter-top-4 g-gutter-top-3@desktop-small">
                                                    <p class="u-line-h-m">
                                                        We’ve had the ultimate good fortune of working with Chris and his team since 2015, building dozens upon dozens of sites. <strong>They deliver exactly when they say they will</strong> and it’s always pixel-perfect. But not only that, they prefer to under-promise and over-deliver!
                                                    </p>
                                                </div>
                                                <footer class="c-testimonial__foot g-gutter-top-4  g-gutter-top-3@desktop-small">
                                                    <figure class="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                        <img src={images['pic_michal-kenderski.jpg']} alt="Michal Kenderski" />
                                                    </figure>
                                                    <div class="c-testimonial__foot__info u-text-upper">
                                                        <strong class="u-decor-bottom--alt t-style-fpn-s-r">Michal Kenderski</strong>. CEO of Republik-Media, London
                                                    </div>
                                                </footer>
                                            </blockquote>
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
                                                        <h3 class="t-style-fpn-l-r-u">Outside The Lines</h3>
                                                    </div>
                                                    <div class="c-website-teaser__info__actions g-gutter-left-4 g-gutter-left-0@tablet g-gutter-top-2 g-gutter-top-0@mobile-medium g-gutter-bottom-2 g-gutter-bottom-0@mobile-medium">
                                                        <a class="c-cta-link s-btn-style-3" href="http://outside-the-lines.co.uk/" target="_blank" >
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
                                                                            <span class="c-address__content u-paint-2">outside-the-lines.co.uk</span>
                                                                        </strong>
                                                                    </div>
                                                                    <figure class="c-devices-box__media o-img-wrapper">
                                                                        <img src={images['pic_screenshot-otl-04.jpg']} alt="Outside The Lines Home Page Screenshot" />
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

                                                        <li class="c-portfolio-teasers-list__item swiper-slide">
                                                            <div class="c-portfolio-teaser c-portfolio-teaser--small">
                                                                <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/gatedtalent">
                                                                    <div class="c-portfolio-teaser__media" >
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

export const fluidOutsideTheLinesImage = graphql`
                                fragment fluidOutsideTheLinesImage on File {
                    childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid
                }
                }
            }
            `


export const OutsideTheLinesQuery = graphql`query {
                    bgCaseHawksmanThumb: file(relativePath: {eq: "bg_case-hawksman-thumb.jpg" }) {
                    ...fluidOutsideTheLinesImage
                    }
                    bgCaseGatedtalentRect: file(relativePath: {eq: "bg_case-gatedtalent-rect.jpg" }) {
                        ...fluidMynameFlowBgImage
                    }
                    bgCaseKarinaPersonalRect: file(relativePath: {eq: "bg_case-karina-personal-rect.jpg" }) {
                        ...fluidOutsideTheLinesImage
                    }
                    bgCaseOtl: file(relativePath: {eq: "bg_case-otl.jpg" }) {
                        ...fluidOutsideTheLinesImage
                    }
                    bgMiniHero: file(relativePath: {eq: "bg_mini-hero.jpg" }) {
                        ...fluidOutsideTheLinesImage
                    }
                    }
                    `

export default OutsideTheLines;