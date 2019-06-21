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

const images = importAll(require.context('../../../static/img/', false, /\.(jpg|svg|png)$/));

const Wroc = (props) => (
    <>
        <div id="page-content">

            <div class="p-case-study">


                <Header />

                <main class="l-main">
                    <BgImage
                        title="bgCaseWroc"
                        fluid={props.data.bgCaseWroc.childImageSharp.fluid}
                        className="l-hero l-hero--alt l-hero--small l-hero--with-overlay  u-paint-4"
                        height='100vh'
                    >
                        <div class="l-inner g-gutter-top-10 g-gutter-bottom-8">
                            <div class="l-hero__head row g-gutter-top-8 g-gutter-top-0@mobile">
                                <div class="l-hero__head__box">
                                    <h2 class="t-style-fpn-xxl-b-u">
                                        WROC#
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
                                                <strong>WROC#</strong> conference is a really unique opportunity for industry specialists, .NET enthusiasts, and all thirsty for knowledge to see well-known and respected experts. Their goal is to bring together bright minds and give inspiring talks that are focused on subjects and issues close to the .NET web developer’s heart.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile">
                                        <div class="l-sec__box__content">
                                            <p>
                                                <strong>Objectivity</strong> had to create a visual communication for the second edition of WROC# .NET conference. They created a set of prints, fully responsive  webdesigns, promo animations and social content based on dedicated illustrations.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                The second stage was to implement designs as <strong>WordPress theme</strong>. Objectivity decided to contact Pagepro and do this part together.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="l-sec g-gutter-top-4 g-spacing-top-minus-4 g-gutter-bottom-6">
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
                                                DESKTOP <strong class="u-paint-1">walkthrough</strong>
                                            </h3>
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
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/26EI16oPsjw" allowfullscreen></iframe>
                                            </figure>
                                            <div class="c-decors-box c-decors-box--alt" aria-hidden="true">
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
                    <section class="l-sec g-spacing-top-minus-6">
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
                                            <ul>
                                                <li>Convert PSD into HTML/CSS templates</li>
                                                <li>Implement static files into WordPress Theme</li>
                                                <li>Style Guide Development</li>
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
                                                <strong>Objectivity</strong> dev team was fully booked, they needed
                                                to focus on projects for their core clients. They decided to outsource
                                                whole development part of this project to Pagepro.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-left no-gutter-left@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <div class="u-paint-2 g-gutter-left-1">HTML5</div>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <div class="u-paint-2 g-gutter-left-1">CSS3</div>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <div class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="http://sass-lang.com/libsass">SASS (libsass)</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-right@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <div class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://github.com/kss-node/kss-node">KSS Node</a>
                                                </div>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <div class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="http://wordpress.org/">WordPress</a>
                                                </div>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <div class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="http://gulpjs.com/">Gulp</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-left@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <div class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://css.github.io/csso/">
                                                        CSS Optimizer
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <div class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://github.com/nfroidure/gulp-iconfont">Icon Font Generation</a>
                                                </div>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <div class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://en.bem.info/">BEM</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-right no-gutter-right@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <div class="u-paint-2 g-gutter-left-1">FrontendApp</div>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <div class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="http://browserstack.com">BrowserStack</a>
                                                </div>
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
                                                Step 1 <strong class="u-paint-1">Kicking off</strong>
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                As always, first thing was to check if we have all materials.
                                                Objectivity provided us well ogranized Photoshop files for web-designs and Illustrator files for vector images.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                We've made sure if we have the latest version of the files by presenting them materials summary on FrontendApp (our internal tool), also we've checked if SVG icons are prepared for web-use.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box c-decors-parent gr-5 gr-12@mobile pull-1 pull-0@mobile no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-4@mobile g-gutter-bottom-5">
                                        <div class="c-decors-box" aria-hidden="true">
                                            <span class="c-photoshop-line c-photoshop-line--left"></span>
                                        </div>
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Step 2 <strong class="u-paint-1">Project Architecture</strong>
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                We've listed all sizes, colors, margins, font families and font sizes.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                Objectivity provided us specs for animations, so we exported Ilustrator vectors to SVG and started to prepare reusable animations.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                All listed items and icons were displayed and explained in first version of style guide.
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
                                                Step 3 <strong class="u-paint-1">HTML &amp; (S)CSS coding</strong>
                                            </h3>
                                            <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                After preparing project architecutre we started to build HTML &amp; CSS.
                                            </p>
                                            <h3 class="g-gutter-top-1">BEM Methodology</h3>
                                            <p class="g-gutter-top-1">
                                                BEM (Block, Element, Modifier) is an open source technology for developing websites that need to be created quickly and maintained over many years. BEM is used in the front-end development of all Pagepro services.
                                            </p>
                                            <h3 class="g-gutter-top-1">Well designed SCSS</h3>
                                            <p class="g-gutter-top-1">
                                                SCSS structure needs to be well designed and should be refactorized during project life time. Using easy to understand variables for colors and sizes is a must have. It makes code reusable and easier to understand for other developers.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-5 pull-1 g-gutter-bottom-5 g-gutter-bottom-0@desktop-small c-decors-parent h-hide@mobile" role="columnheader">
                                        <div class="c-decors-box" aria-hidden="true">
                                            <div class="l-inner--small">
                                                <span class="c-photoshop-line c-photoshop-line--right"></span>
                                                <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            </div>
                                        </div>
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Step 4 <strong class="u-paint-1">Animations</strong>
                                            </h3>
                                            <p class="g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                WROC# website needs to be attractive for target audience- developers.
                                                We cound't release the project without smooth front-end animations.
                                            </p>
                                            <h3 class="g-gutter-top-1">On Scroll Animations</h3>
                                            <p class="g-gutter-top-1">
                                                Some of website vector images had to be animated on scroll.
                                                Two most important animations was: event date block animation (to correspond with WROC# brand identification) and analog clock animation on Agenda Section.
                                            </p>
                                            <h3 class="g-gutter-top-1">Typing Animations</h3>
                                            <p class="g-gutter-top-1">
                                                We have been using <a target="_blank" href="http://www.mattboldt.com/demos/typed-js/">Typed.js</a> jQuery plugin to develop typing animations for hero section.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-align-between" role="row">
                                    <div class="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-4@desktop-small" role="gridcell" aria-label="html code examples">
                                        <div class="l-sec__box__content g-gutter-right-1 g-gutter-right-0@mobile">
                                            <ul class="c-code-example-teasers-list">
                                                <li class="c-code-example-teasers-list__item">
                                                    <div class="c-code-example-teaser u-bg-5">
                                                        <div class="c-code-example-teaser__content">
                                                            <pre><code class="html">&lt;li class=&quot;gadgets-list__item&quot;&gt;
                                                            &lt;div class=&quot;gadget gadget--flop&quot;&gt;
                                                            &lt;figure&gt;
                                                            &lt;img src=&quot;gadget-flop.png&quot; alt=&quot;&quot;&gt;
                                                            &lt;/figure&gt;
                                                            &lt;/div&gt;
            &lt;/li&gt;</code></pre>
                                                        </div>
                                                        <div class="c-code-example-teaser__actions">
                                                            <a class="c-cta-link c-cta-link--with-label u-paint-1-on-hover" href="#">
                                                                <span class="c-ico-label">
                                                                    <span class="c-ico-label__media" aria-hidden="true">
                                                                        <span class="o-icon-wrapper o-icon-wrapper--round u-bg-2 u-paint-4">
                                                                            <span class="o-icon o-icon--right"></span>
                                                                            <span class="c-dash-ico"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="c-ico-label__info">
                                                                        BEM
                                                                    </span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-code-example-teasers-list__item g-spacing-top-5 g-spacing-top-4@desktop-small">
                                                    <div class="c-code-example-teaser u-bg-5">
                                                        <div class="c-code-example-teaser__content">
                                                            <pre><code class="scss">
                                                                $color_white:             #fff;
                                                                $color_grey_1:            #e4e4e4;
                                                                $color_grey_2:            #a8a8a8;
                                                                $color_grey_3:            #797b7b;
                                                                $color_black:             #000;
                                                                $color_blue_3:            #3e67aa;
                                                                $color_blue_2:            #007cb6;
                                                                $color_blue_1:            #008cc9;
                                                                $color_orange:            #ff4721;
                                                            </code></pre>
                                                        </div>
                                                        <div class="c-code-example-teaser__actions">
                                                            <a class="c-cta-link c-cta-link--with-label u-paint-1-on-hover" href="#">
                                                                <span class="c-ico-label">
                                                                    <span class="c-ico-label__media" aria-hidden="true">
                                                                        <span class="o-icon-wrapper o-icon-wrapper--round u-bg-2 u-paint-4">
                                                                            <span class="o-icon o-icon--right"></span>
                                                                            <span class="c-dash-ico"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="c-ico-label__info">
                                                                        Color Variables
                                                                    </span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-5 gr-12@mobile pull-1 pull-0@mobile no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-4@desktop-small g-gutter-top-5@mobile c-decors-parent" role="gridcell" aria-label="css code examples">
                                        <div class="c-decors-box" aria-hidden="true">
                                            <div class="l-inner--small">
                                                <span class="c-photoshop-line c-photoshop-line--right"></span>
                                                <span class="c-photoshop-line c-photoshop-line--left"></span>
                                            </div>
                                        </div>
                                        <div class="l-sec__box__head h-hide h-show-flex@mobile" aria-hidden="true">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Step 4 <strong class="u-paint-1">CSS coding</strong>
                                            </h3>
                                            <p class="g-gutter-top-3@mobile">
                                                The next phase was the creation of the CSS styles.
                                            </p>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-3@mobile">
                                            <ul class="c-code-example-teasers-list">
                                                <li class="c-code-example-teasers-list__item">
                                                    <div class="c-code-example-teaser u-bg-5">
                                                        <div class="c-code-example-teaser__content">
                                                            <figure class="o-video-wrapper">
                                                                <iframe width="420" height="315" src="https://www.youtube.com/embed/3MmcJBAk9EQ" allowfullscreen></iframe>
                                                            </figure>
                                                        </div>
                                                        <div class="c-code-example-teaser__actions">
                                                            <span class="c-ico-label">
                                                                <span class="c-ico-label__media" aria-hidden="true">
                                                                    <span class="o-icon-wrapper o-icon-wrapper--round u-bg-2 u-paint-4">
                                                                        <span class="o-icon o-icon--video"></span>
                                                                    </span>
                                                                </span>
                                                                <span class="c-ico-label__info u-text-upper">
                                                                    Animations
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row c-decors-parent g-gutter-top-10 g-gutter-top-5@desktop-small" aria-hidden="true">
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
                                                We used SASS Breakpoints to create <br class="hide show@mobile" />the tablet and mobile layouts.
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
                                                            <img src={images['pic_screenshot-wroc-01.jpg']} alt="desktop version of the page" />
                                                        </figure>
                                                        <div class="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div class="c-devices-wrapper__box c-devices-wrapper__box--left u-horizontal-total-left g-spacing-left-5 g-spacing-left-10@tablet g-spacing-left-0@mobile g-gutter-right-half@tablet g-gutter-right-0@mobile g-spacing-top-1@mobile h-z-2">
                                                    <div class="c-devices-box c-devices-box--ipad">
                                                        <figure class="c-devices-box__media o-img-wrapper">
                                                            <img src={images['pic_screenshot-wroc-02.jpg']} alt="tablet version of the page" />
                                                        </figure>
                                                        <div class="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div class="c-devices-wrapper__box c-devices-wrapper__box--right g-spacing-right-5 g-spacing-right-0@mobile g-spacing-top-1@mobile h-z-3">
                                                    <div class="c-devices-box c-devices-box--iphone">
                                                        <figure class="c-devices-box__media o-img-wrapper">
                                                            <img src={images['pic_screenshot-wroc-03.jpg']} alt="smartphone version of the page" />
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
                    <section class="l-sec g-gutter-top-4 g-spacing-top-minus-4 g-gutter-bottom-6">
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
                                <div class="row row-align-between g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small g-gutter-bottom-3@mobile">
                                    <div class="l-sec__box gr-5 gr-12@tablet no-gutter-left no-gutter@tablet">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Smartphone <strong class="u-paint-1">walkthrough</strong>
                                            </h3>
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
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ME5shWgwhK0" allowfullscreen></iframe>
                                            </figure>
                                            <div class="c-decors-box c-decors-box--alt" aria-hidden="true">
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
                    <section class="l-sec g-spacing-top-minus-6">
                        <div class="l-row c-decors-parent g-gutter-top-5 g-gutter-bottom-5 g-gutter-bottom-0@desktop-small">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
                                <div class="l-inner--small">
                                    <span class="c-photoshop-line c-photoshop-line--right"></span>
                                    <span class="c-photoshop-line c-photoshop-line--left"></span>
                                </div>
                            </div>
                            <div class="l-inner">
                                <div class="row row-align-between">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u row row-align-between">
                                                <span class="gr-adapt no-gutter">
                                                    <span>Step 6 <strong class="u-paint-1">Style guide update</strong></span>
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
                                <span class="c-photoshop-line c-photoshop-line--bottom"></span>
                                <div class="l-inner--small">
                                    <span class="c-photoshop-line c-photoshop-line--right"></span>
                                    <span class="c-photoshop-line c-photoshop-line--left"></span>
                                </div>
                            </div>
                            <div class="l-inner">
                                <div class="row row-align-between">
                                    <div class="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-bottom-5 g-gutter-bottom-0@mobile">
                                        <div class="l-sec__box__content">
                                            <p>
                                                Styleguide was been generated automatically based on comments
                                                in SASS files. At this stage we've checked if everything generates in correct order and is easy to read and understand.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                Styleguide Driven Development is a practice that encourages the separation of UX, Design and Front-end from Backend concerns.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-5 gr-12@mobile pull-1 pull-0@mobile no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-top-1@mobile g-gutter-bottom-5 g-gutter-bottom-3@mobile">
                                        <div class="l-sec__box__content">
                                            <p>
                                                Living style guides are increasingly popular front-end development staples. Integrating a live style guide into your process streamlines workflow, promotes ongoing design cohesion and provides a simple way to visualize how style updates will impact elements site-wide.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row row-align-center">
                                    <div class="l-sec__box gr-adapt gr-12@tablet no-gutter no-gutter@tablet">
                                        <div class="l-sec__box__content c-decors-parent">
                                            <div class="c-decors-box" aria-hidden="true">
                                                <span class="c-photoshop-line c-photoshop-line--left"></span>
                                                <span class="c-photoshop-line c-photoshop-line--right"></span>
                                            </div>
                                            <div class="c-styleguide-teaser" aria-label="visit styleguide page">
                                                <a class="c-styleguide-teaser__inner" href="http://wroc-sharp.prvsrv.com/styleguide/" target="_blank">
                                                    <div class="c-styleguide-teaser__content">
                                                        <figure class="o-img-wrapper">
                                                            <img src={images['pic_screenshot-wroc-04.jpg']} alt="Styleguide" />
                                                        </figure>
                                                    </div>
                                                    <div class="c-styleguide-teaser__actions">
                                                        <span class="c-cta-btn s-btn-style-2-no-hover">
                                                            <span class="c-label">View styleguide</span>
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec">
                        <div class="l-row c-decors-parent g-gutter-top-5 g-gutter-bottom-5 g-gutter-bottom-0@desktop-small">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
                            </div>
                            <div class="l-inner">
                                <div class="row row-align-between">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u row row-align-between">
                                                <span class="gr-adapt no-gutter">
                                                    <span>Step 7 <strong class="u-paint-1">Fine tuning...</strong></span>
                                                </span>
                                                <span class="gr-adapt no-gutter">
                                                    <strong class="u-paint-1 u-decor-bottom--alt"><span class="u-text-lower">and</span> The project is ready!</strong>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-row c-decors-parent">
                            <div class="l-inner">
                                <div class="row row-align-between">
                                    <div class="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-bottom-5 g-gutter-bottom-0@mobile">
                                        <div class="l-sec__box__content">
                                            <p>
                                                We did a quality assurance of all pages, then tested the site on mobile and tablet devices. The front-end phase of the project was completed.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-5 gr-12@mobile pull-1 pull-0@mobile no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-top-1@mobile g-gutter-bottom-5">
                                        <div class="l-sec__box__content">
                                            <p>
                                                We paid attention to both the appearance and the quality of the code, so that it met our coding standards. Finally, we sent a preview of the static HTML files to our client.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec">
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
                                                        <strong>Very reliable, flexible and uncomplicated.</strong> Their team produced great results, helping us kick start our WordPress project.
                                                    </p>
                                                </div>
                                                <footer class="c-testimonial__foot g-gutter-top-4  g-gutter-top-3@desktop-small">
                                                    <figure class="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                        <img src={images['pic_urszula-koper.png']} alt="Urszula Koper" />
                                                    </figure>
                                                    <div class="c-testimonial__foot__info u-text-upper">
                                                        <strong class="u-decor-bottom--alt t-style-fpn-s-r">Urszula Koper</strong>, Objectivity
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
                                                        <h3 class="t-style-fpn-l-r-u">WROC#</h3>
                                                    </div>
                                                    <div class="c-website-teaser__info__actions g-gutter-left-4 g-gutter-left-0@tablet g-gutter-top-2 g-gutter-top-0@mobile-medium g-gutter-bottom-2 g-gutter-bottom-0@mobile-medium">
                                                        <a class="c-cta-link s-btn-style-3" href="http://wrocsharp.com" target="_blank" >
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
                                                                            <span class="c-address__content u-paint-2">wrocsharp.com</span>
                                                                        </strong>
                                                                    </div>
                                                                    <figure class="c-devices-box__media o-img-wrapper">
                                                                        <img src={images['pic_screenshot-wrocsharp-01.jpg']} alt="WrocSharp ScreenshotKoper" />
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
                                                                <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/gatedtalent-website">
                                                                    <div class="c-portfolio-teaser__media" >
                                                                        <BgImage
                                                                            title="bgCaseGatedtalentWebsiteRect"
                                                                            fluid={props.data.bgCaseGatedtalentWebsiteRect.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div class="c-portfolio-teaser__main">
                                                                        <h2 class="t-style-fpn-l-b-u">
                                                                            GatedTalent Website
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

export const fluidWrocBgImage = graphql`
                                fragment fluidWrocBgImage on File {
                    childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid
                }
                }
            }
            `


export const WrocQuery = graphql`query {
                bgCaseHawksmanThumb: file(relativePath: {eq: "bg_case-hawksman-thumb.jpg" }) {
                    ...fluidWrocBgImage
                }
                bgCaseWroc: file(relativePath: {eq: "bg_case-wroc.jpg" }) {
                    ...fluidWrocBgImage
                }
                bgCaseKarinaPersonalRect: file(relativePath: {eq: "bg_case-karina-personal-rect.jpg" }) {
                    ...fluidWrocBgImage
                }
                bgMiniHero: file(relativePath: {eq: "bg_mini-hero.jpg" }) {
                    ...fluidWrocBgImage
                }
                bgCaseGatedtalentWebsiteRect: file(relativePath: {eq: "bg-case-gatedtalentwebsite-rect.jpg" }) {
                    ...fluidKarinaPapadopoulosBgImage
                }
                }
                `

export default Wroc;