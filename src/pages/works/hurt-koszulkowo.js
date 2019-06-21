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

const HurtKoszulkowo = (props) => (
    <><div id="page-content">

        <div class="p-case-study">


            <Header />

            <main class="l-main">
                <BgImage
                    title="bgCaseKoszulkowoWebsite"
                    fluid={props.data.bgCaseKoszulkowoWebsite.childImageSharp.fluid}
                    className="l-hero l-hero--alt l-hero--small l-hero--with-overlay  u-paint-4"
                    height='100vh'
                >
                    <div class="l-inner g-gutter-top-10 g-gutter-bottom-8">
                        <div class="l-hero__head row g-gutter-top-8 g-gutter-top-0@mobile">
                            <div class="l-hero__head__box">
                                <h2 class="t-style-fpn-xxl-b-u">
                                    Hurt Koszulkowo
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
                                <div class="l-sec__box u-paint-1 t-style-fpn-l-r gr-11 gr-12@mobile no-gutter-left no-gutter@mobile">
                                    <div class="l-sec__box__content">
                                        <p>
                                            <strong>Hurt Koszulkowo</strong>
                                        </p>
                                        <p class="u-line-h-s g-gutter-top-1">
                                            Hurt.koszulkowo.com is a Polish wholesale e-commerce website that sells mostly blouses and t-shirts. They have various versions of upper body clothes, distinguished by text and style.
                                    </p>
                                        <p class="u-line-h-s g-gutter-top-1">
                                            Thanks to successful development of first detail e-commerce website (koszulkowo.pl), BG Sp. z o.o. Sp.K (website owner) asked <strong>Pagepro</strong> for help with building the wholesale website  -  hurt.koszulkowo.pl.
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
                                            Hurt.koszulkowo.pl needed to be adjusted especially for companies, which look for wholesalers. Therefore, we had to deliver the tool, where they can publish the products and collect payments from customers, putting emphasis on B2B clients.
                                    </p>
                                        <p>
                                            The most important feature was a tool for sending detailed inquiry. However, our overall goal was to attract clients attention, so we needed to deliver modern looking and interactive website.
                                    </p>
                                        <h3>Our services included:</h3>
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">PSD to HTML conversion</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">WordPress Custom Theme development</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">Custom E-commerce System development</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">Cross browser &amp; device testing</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">WPML plugin implementation</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">WP All Import plugin implementation</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">Yoast Seo plugin implementation</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">Advanced Custom Fields(ACF) PRO implementation</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">Pipedrive integration</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">Google Analytics integration</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">MailChimp integration</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-align-between g-gutter-top-10 g-gutter-bottom-5 g-gutter-top-5@desktop-small">
                                <div class="l-sec__box gr-11 gr-12@mobile no-gutter-left no-gutter@mobile">
                                    <div class="l-sec__box__head">
                                        <h3 class="t-style-fpn-l-r-u">
                                            The Cooperation
                                    </h3>
                                    </div>
                                    <div class="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
                                        <p>
                                            BG Sp. z o.o. Sp.K was actively participating in development process of the website. Becoming wholesaler was quite big change for them. Therefore, to make sure that website features meet new business model requirements, we were working closely together.
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
                                                            Adobe Photoshop
                                                    </span>
                                                    </li>
                                                    <li class="c-dotted-list__item u-paint-3">
                                                        <span class="u-paint-2 g-gutter-left-1">
                                                            SVG Sprites
                                                    </span>
                                                    </li>
                                                    <li class="c-dotted-list__item u-paint-3">
                                                        <span class="u-paint-2 g-gutter-left-1">
                                                            jQuery
                                                    </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="l-sec__box gr-6 gr-12@mobile no-gutter-left g-gutter-top-1@mobile no-gutter@mobile">
                                                <ul class="c-dotted-list">
                                                    <li class="c-dotted-list__item u-paint-3">
                                                        <span class="u-paint-2 g-gutter-left-1">
                                                            jQuery
                                                    </span>
                                                    </li>
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
                                                        <span class="u-paint-2 g-gutter-left-1">
                                                            BrowserStack
                                                    </span>
                                                    </li>
                                                    <li class="c-dotted-list__item u-paint-3">
                                                        <span class="u-paint-2 g-gutter-left-1">
                                                            WordPress
                                                    </span>
                                                    </li>
                                                    <li class="c-dotted-list__item u-paint-3">
                                                        <span class="u-paint-2 g-gutter-left-1">
                                                            Advanced Custom Fields PRO
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
                                            Whole project took us <strong>6 weeks</strong>.
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
                                            Step 1 <strong class="u-paint-1">KICK OFF</strong>
                                        </h3>
                                    </div>
                                    <div class="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
                                        <p>
                                            Firstly, we needed to check if we have all needed materials for coding. Therefore as the first step, <strong>Bartosz (UX/UI Designer)</strong> has started preparation of the design, keeping the style of <strong>koszulkowo.pl website</strong>.
                                    </p>
                                        <p class="g-gutter-top-1">
                                            He delivered PSD &amp; JPG design files, SVG icons, basic requirements and animation examples on different websites. Once initial design was created we passed it to client evaluation.  It’s important for us that client always takes part in our design creation process and we frequently make sure that client accepts every template or part of a design.
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
                                            The project was actually split into 2 stages - HTML/CSS building and Custom E-commerce System on <a href="https://wordpress.org/" target="_blank">WordPress</a> platform development.
                                    </p>
                                        <h3>Front-end Development Stage</h3>
                                        <p>
                                            We always prefer to split <strong>front-end development</strong> from other phases because it is much faster and has less potential risks of bugs appearing. Especially, when we could use <strong>our dedicated tool</strong> for HTML&amp;CSS - SASS starter (<a href="https://github.com/Pagepro/libsasserplate" target="_blank">LibSASSerPlate</a>).
                                    </p>
                                        <h3>Custom E-commerce System Stage</h3>
                                        <p>
                                            After preparing HTML &amp; CSS we've planned to implement static files into <strong>Custom E-commerce System</strong>.
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
                                            After planning project architecture we always start with building HTML. We are making sure if code is split into tiny, easy to reuse <strong>HTML components</strong>.
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
                                            SCSS structure needs to be well-designed and should be refactored during project life time. Using easy to understand <strong>variables</strong> for colors and sizes is a must have. It makes code reusable and easier to understand for other developers.
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
                                            We used <strong>Gridle Breakpoints</strong> to create the tablet and mobile layouts.
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
                                                        <img src={images['koszulkowo-rwd-desktop.jpg']} alt="koszulkowo Desktop Screenshot" />
                                                    </figure>
                                                    <div class="c-devices-box__frame" aria-hidden="true"></div>
                                                </div>
                                            </div>
                                            <div class="c-devices-wrapper__box c-devices-wrapper__box--left u-horizontal-total-left g-spacing-left-5 g-spacing-left-10@tablet g-spacing-left-0@mobile g-gutter-right-half@tablet g-gutter-right-0@mobile g-spacing-top-1@mobile h-z-2">
                                                <div class="c-devices-box c-devices-box--ipad">
                                                    <figure class="c-devices-box__media o-img-wrapper">
                                                        <img src={images['koszulkowo-rwd-tablet.jpg']} alt="koszulkowo Tablet Screenshot" />
                                                    </figure>
                                                    <div class="c-devices-box__frame" aria-hidden="true"></div>
                                                </div>
                                            </div>
                                            <div class="c-devices-wrapper__box c-devices-wrapper__box--right g-spacing-right-5 g-spacing-right-0@mobile g-spacing-top-1@mobile h-z-3">
                                                <div class="c-devices-box c-devices-box--iphone">
                                                    <figure class="c-devices-box__media o-img-wrapper">
                                                        <img src={images['koszulkowo-rwd-mobile.jpg']} alt="koszulkowo Smartphone Screenshot" />
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
                                            Before starting development of <strong>Custom E-commerce System on WordPress</strong> (Back-End works) we always do Q&amp;A stage first. At this stage we're testing the website on all modern browsers.
                                    </p>
                                        <p class="g-gutter-top-1">
                                            Our Q&amp;A assistant is making sure that everything looks the way designer wanted and works smoothly on all devices. We're doing testing on real devices and on emulated versions using <a href="https://www.browserstack.com/" target="_blank">BrowserStack</a>.
                                    </p>
                                        <p class="g-gutter-top-1">
                                            This stage is always conducted before WordPress integration, because it is much <strong>easier and faster</strong> to do bug fixes on static HTML &amp; CSS templates.
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
                                            Step 7 <strong class="u-paint-1">Custom E-commerce System Development</strong>
                                        </h3>
                                        <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            During the Custom E-commerce System &amp; WordPress integration we took the static HTML files and created the backbone of the WordPress site. We're using <a href="https://www.advancedcustomfields.com/pro/" target="_blank">ACF Pro</a> as a background for modules with dedicated content managing settings.
                                    </p>
                                        <p class="g-gutter-top-1">
                                            We've launched the website on test server with some pre populated content just to verify if everything is editable and displayed as it should.
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
                                            Step 8 <strong class="u-paint-1">PRODUCTS IMPORTING &amp; TUTORIAL CALL</strong>
                                        </h3>
                                        <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            After we had made sure that everything is working properly, we face quite a challenge with products import from XLS file. Despite the fact that we used <a href="http://www.wpallimport.com/" target="_blank">“WP All Import”</a> external plugin, we needed to overwrite great part of it.
                                        </p>
                                        <p class="g-gutter-top-1 g-gutter-top-2@desktop-small">
                                            After successful implementation, we always make <strong>tutorial call with screen-sharing</strong> during which we show client how to manage content on created website.
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
                                            In every <strong>E-commerce project</strong>, we put emphasis on testing site, taking on consideration things like: page loading speed, displaying in different devices and on modern browsers.
                                        </p>
                                        <p class="g-gutter-top-1 g-gutter-top-2@desktop-small">
                                            We paid special attention to the way each section of the site could be managed. We tested the functionality and installed the project on our staging server for a client review.
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
                                                    <h3 class="t-style-fpn-l-r-u">Hurt Koszulkowo</h3>
                                                </div>
                                                <div class="c-website-teaser__info__actions g-gutter-left-4 g-gutter-left-0@tablet g-gutter-top-2 g-gutter-top-0@mobile-medium g-gutter-bottom-2 g-gutter-bottom-0@mobile-medium">
                                                    <a class="c-cta-link s-btn-style-3" href="https://hurt.koszulkowo.com/" target="_blank" >
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
                                                                        <span class="c-address__content u-paint-2">hurt.koszulkowo.com</span>
                                                                    </strong>
                                                                </div>
                                                                <figure class="c-devices-box__media o-img-wrapper">
                                                                    <img src={images['koszulkowo-rwd-desktop.jpg']} alt="Koszulkowo Website Home Page Screenshot" />
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
                                                            <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/outside-the-lines">
                                                                <div class="c-portfolio-teaser__media">
                                                                    <BgImage
                                                                        title="bgCaseOtl"
                                                                        fluid={props.data.bgCaseOtl.childImageSharp.fluid}
                                                                        height='400px'
                                                                    />
                                                                </div>
                                                                <div class="c-portfolio-teaser__main">
                                                                    <h2 class="t-style-fpn-l-b-u">
                                                                        Outside The Lines
                                </h2>
                                                                    <p class="g-gutter-top-1 u-paint-3">
                                                                        SKETCH to HTML conversion
                                         WooCommerce Development
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
                                                            <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/310">
                                                                <div class="c-portfolio-teaser__media" >
                                                                    <BgImage
                                                                        title="bgCase310Rect"
                                                                        fluid={props.data.bgCase310Rect.childImageSharp.fluid}
                                                                    />
                                                                </div>
                                                                <div class="c-portfolio-teaser__main">
                                                                    <h2 class="t-style-fpn-l-b-u">
                                                                        310 Vincent Street Office Building
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
                                                            <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/acrf">
                                                                <div class="c-portfolio-teaser__media" >
                                                                    <BgImage
                                                                        title="bgCaseAcrfRect"
                                                                        fluid={props.data.bgCaseAcrfRect.childImageSharp.fluid} />
                                                                </div>
                                                                <div class="c-portfolio-teaser__main">
                                                                    <h2 class="t-style-fpn-l-b-u">
                                                                        Australian Cancer Research Foundation
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

export const fluidHurtKoszulkowoBgImage = graphql`
                                fragment fluidHurtKoszulkowoBgImage on File {
                    childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid
                }
                }
            }
            `


export const HurtKoszulkowoQuery = graphql`query {
                bgCaseKoszulkowoWebsite: file(relativePath: {eq: "bg-case-koszulkowo-website.jpg" }) {
                    ...fluidHurtKoszulkowoBgImage
                }
                bgCaseOtl: file(relativePath: {eq: "bg_case-otl.jpg" }) {
                    ...fluidHurtKoszulkowoBgImage
                }
                bgCase310Rect: file(relativePath: {eq: "bg-case-310-rect.jpg" }) {
                    ...fluidHurtKoszulkowoBgImage
                }
                bgCaseAcrfRect: file(relativePath: {eq: "bg-case-acrf-rect.jpg" }) {
                    ...fluidHurtKoszulkowoBgImage
                }
                bgMiniHero: file(relativePath: {eq: "bg_mini-hero.jpg" }) {
                    ...fluidHurtKoszulkowoBgImage
                }
                }
                `

export default HurtKoszulkowo;