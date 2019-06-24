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

const images = importAll(require.context('../../../static/img/', false, /\.(jpg|svg|png)$/));

const Dekra = (props) => (
    <>
        <div id="page-content">

            <div className="p-about">

                <Header />

                <main className="l-main">

                    <WorksMainBg image={images['bg_case-dekra.jpg']} />

                    <div className="l-sec" id="sec-1">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row row-align-between g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-4@desktop-small">
                                    <div className="l-sec__box u-paint-1 t-style-fpn-l-r gr-5 gr-12@mobile no-gutter-left no-gutter@mobile">
                                        <div className="l-sec__box__content">
                                            <p className="u-line-h-s">
                                                <strong>DEKRA</strong> is one of the world’s leading expert organisations. The company currently maintains a presence in 50 countries in Western and Eastern Europe as well as in the USA, Brazil, North and South Africa, Israel, Japan and China.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                DEKRAs products and services include motor vehicle testing, damage reports, accident analyses and technical reports, safety tests, initial and in-service training, employment agency work, certification, environmental services, materials testing, building surveys, consulting and specialist publications.
                                            </p>
                                            <p className="g-gutter-top-1">
                                                More than 37,000 DEKRAs employees are committed to ensuring long-term safety, quality and environmental protection.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="l-sec g-gutter-top-4 g-spacing-top-minus-4 g-gutter-bottom-4 g-spacing-bottom-minus-4">
                        <div className="l-row c-decors-parent">
                            <div className="c-decors-box" aria-hidden="true">
                                <span className="c-photoshop-line c-photoshop-line--top"></span>
                                <span className="c-photoshop-line c-photoshop-line--bottom"></span>
                                <div className="l-inner--small">
                                    <span className="c-photoshop-line c-photoshop-line--right"></span>
                                    <span className="c-photoshop-line c-photoshop-line--left"></span>
                                    <div className="c-decor-wrapper c-decor-wrapper--top c-decor-wrapper--right g-gutter-right-2 u-vertical-middle-top">
                                        <span className="o-object-wrapper o-object-wrapper--rectangular-marquee">
                                            <object type="image/svg+xml" data={images['shape_1.svg']}>Photoshop select tool</object>
                                        </span>
                                    </div>
                                    <div className="c-decor-wrapper c-decor-wrapper--bottom c-decor-wrapper--left g-gutter-bottom-2 u-horizontal-middle-left">
                                        <span className="o-object-wrapper o-object-wrapper--move-lines">
                                            <object type="image/svg+xml" data={images['shape_2.svg']}>Photoshop move tool</object>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="l-inner">
                                <div className="row row-align-between g-gutter-top-10 g-gutter-top-0@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small g-gutter-bottom-3@mobile">
                                    <div className="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter@mobile">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                The <strong className="u-paint-1">Challenge</strong>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                DEKRA was looking to extend their existing team to <strong>accelerate development speed</strong> of their internal web application. They decided to do all <strong>front-end related works</strong> outside of the company. DEKRA also needed to ensure overall app quality, pixel perfect precision, accessability and stability across all modern browsers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row row-align-center">
                                    <div className="l-sec__box gr-adapt gr-12@tablet no-gutter no-gutter@tablet">
                                        <div className="l-sec__box__content l-inner--small row row-align-center c-decors-parent">
                                            <div className="c-decors-box" aria-hidden="true">
                                                <span className="c-photoshop-line c-photoshop-line--left"></span>
                                                <span className="c-photoshop-line c-photoshop-line--right"></span>
                                                <div className="c-decor-wrapper c-decor-wrapper--bottom c-decor-wrapper--right g-gutter-bottom-8 g-gutter-left-4 u-horizontal-total-right">
                                                    <span className="o-object-wrapper o-object-wrapper--move">
                                                        <object type="image/svg+xml" data={images['shape_3.svg']}>Photoshop drag-move tool</object>
                                                    </span>
                                                </div>
                                            </div>
                                            <figure className="o-video-wrapper o-video-wrapper--default">
                                                <iframe src="https://www.youtube.com/embed/FBp8fUP8Qek" allowfullscreen></iframe>
                                            </figure>
                                            <div className="c-decors-box c-decors-box--alt" aria-hidden="true">
                                                <div className="c-decor-wrapper c-decor-wrapper--bottom c-decor-wrapper--left g-gutter-left-2 g-gutter-bottom-2 u-vertical-middle-bottom">
                                                    <span className="o-object-wrapper o-object-wrapper--cropp">
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
                                                Artur from AF Studio always require pixel perfect precision.

                                                He sticks to the grid so working with him is always fun and easy. We've been communicating a lot to set standard sizes (widths, heights) and margins.
                                            </p>
                                            <p>
                                                Our services contain:
                                            </p>
                                            <ul>
                                                <li>PSD to HTML conversion</li>
                                                <li>Style Guide Development</li>
                                                <li>Gulp tooling automation</li>
                                                <li>Cross browser &amp; device testing</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-4@mobile">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                The Cooperation
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                <a href="http://www.af-studio.pl/" target="_blank">AF Studio</a> for the third time, partnered with <strong>Pagepro</strong> to create a new desktop and mobile experience for Polish DEKRA internal backoffice called <strong>DEKRAnet</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                                    <div className="l-sec__box gr-3 gr-6@mobile no-gutter-left no-gutter-left@mobile">
                                        <ul className="c-dotted-list">
                                            <li className="c-dotted-list__item u-paint-3">
                                                <div className="u-paint-2 g-gutter-left-1">HTML5</div>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <div className="u-paint-2 g-gutter-left-1">CSS3</div>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <div className="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="http://sass-lang.com/libsass">SASS (libsass)</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="l-sec__box gr-3 gr-6@mobile no-gutter-right@mobile">
                                        <ul className="c-dotted-list">
                                            <li className="c-dotted-list__item u-paint-3">
                                                <div className="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://github.com/kss-node/kss-node">KSS Node</a>
                                                </div>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <div className="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://en.bem.info/">BEM</a>
                                                </div>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <div className="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="http://gulpjs.com/">Gulp</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="l-sec__box gr-3 gr-6@mobile no-gutter-left@mobile">
                                        <ul className="c-dotted-list">
                                            <li className="c-dotted-list__item u-paint-3">
                                                <div className="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://css.github.io/csso/">
                                                        CSS Optimizer
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <div className="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://github.com/nfroidure/gulp-iconfont">Icon Font Generation</a>
                                                </div>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <div className="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="http://gridle.org/">GRIDLE Flex Grid system</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="l-sec__box gr-3 gr-6@mobile no-gutter-right no-gutter-right@mobile">
                                        <ul className="c-dotted-list">
                                            <li className="c-dotted-list__item u-paint-3">
                                                <div className="u-paint-2 g-gutter-left-1">FrontendApp</div>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <div className="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="http://browserstack.com">BrowserStack</a>
                                                </div>
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
                                                Whole project tooked us <strong>3 weeks</strong>.
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
                                                Step 1 <strong className="u-paint-1">Kicking off</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                As always, first thing is to check if we have all materials.
                                                Artur provided us with <strong>33 JPG &amp; PSD</strong> design files and 8 SVG icon files.
                                            </p>
                                            <p className="g-gutter-top-1">
                                                We've made sure if we have the latest version of the files by presenting him materials summary on FrontendApp (our internal tool), also we've checked if SVG icons are prepared for web-use.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box c-decors-parent gr-5 gr-12@mobile pull-1 pull-0@mobile no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-4@mobile g-gutter-bottom-5">
                                        <div className="c-decors-box" aria-hidden="true">
                                            <span className="c-photoshop-line c-photoshop-line--left"></span>
                                        </div>
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Step 2 <strong className="u-paint-1">Project Architecture</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                We've listed all sizes, colors, margins, font families and font-sizes. Artur checked if we can use only these to make project standard variables.
                                            </p>
                                            <p className="g-gutter-top-1">
                                                All listed items and icons were displayed and explained in first version of style guide.
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
                                                After preparing project architecutre we always start with building HTML. We are making sure if code is split into tiny, easy to re-use HTML components.
                                            </p>
                                            <h3 className="g-gutter-top-1">BEM Methodology</h3>
                                            <p className="g-gutter-top-1">
                                                BEM (Block, Element, Modifier) is an open source technology for developing websites that need to be created quickly and maintained over many years. BEM is used in the front-end development of all Pagepro services.
                                            </p>
                                            <h3 className="g-gutter-top-1">BEVM: Chainable BEM Modifiers</h3>
                                            <p className="g-gutter-top-1">
                                                Adopting the BEVM convention and (more importantly) introducing chainable modifiers has been instrumental in allowing us to build a super flexible UI Library. This has enabled us to configure our modules in the HTML with a short, concise syntax, reduce the amount of CSS that we need to write and increase our development speed.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-5 pull-1 g-gutter-bottom-5 c-decors-parent h-hide@mobile" role="columnheader">
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
                                                SCSS structure needs to be well designed and should be refactorized during project life time. Using easy to understand variables for colors and sizes is a must have. It makes code reusable and easier to understand for other developers.
                                            </p>
                                            <h3 className="g-gutter-top-1">Flexbox Grid System</h3>
                                            <p className="g-gutter-top-1">
                                                We have been using <a href="http://gridle.org/">Gridle</a> Flex Grid system. This solution is allowing us and client developers to create new, responsive layouts based on our current styles.
                                            </p>
                                            <p className="g-gutter-top-1">
                                                Grid system allows to add breakpoints in CSS and also in HTML using classes with suffixes describing RWD breakpoint.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-align-between" role="row">
                                    <div className="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-4@desktop-small" role="gridcell" aria-label="html code examples">
                                        <div className="l-sec__box__content g-gutter-right-1 g-gutter-right-0@mobile">
                                            <ul className="c-code-example-teasers-list">
                                                <li className="c-code-example-teasers-list__item">
                                                    <div className="c-code-example-teaser u-bg-5">
                                                        <div className="c-code-example-teaser__content">
                                                            <pre><code className="html">{/*&lt;span class=&quot;title&quot;&gt;
                                                             &lt;span class=&quot;title__content&quot;&gt;
                                                            &lt;span class=&quot;label -text-35 -weight-b&quot;&gt;
                                                            Select option
                                                            &lt;/span&gt;
                                                            &lt;span class=&quot;icon icon--select-down&quot;&gt;
                                                            &lt;/span&gt;
                                                            &lt;/span&gt;
                                                            &lt;/span&gt; */}
                                                                {`<span className="title">
    <span className="title__content">
    <span className="label -text-35 -weight-b">
    Select option
    </span>
    <span className="icon icon--select-down">
    </span>
    </span>
    </span>`}
                                                            </code></pre>

                                                        </div>
                                                        <div className="c-code-example-teaser__actions">
                                                            <a className="c-cta-link c-cta-link--with-label u-paint-1-on-hover u-link-disabled" href="#">
                                                                <span className="c-ico-label">
                                                                    <span className="c-ico-label__media" aria-hidden="true">
                                                                        <span className="o-icon-wrapper o-icon-wrapper--round u-bg-2 u-paint-4">
                                                                            <span className="o-icon o-icon--right"></span>
                                                                            <span className="c-dash-ico"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span className="c-ico-label__info">
                                                                        BEM Architecture
                                                                    </span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-code-example-teasers-list__item g-spacing-top-5 g-spacing-top-4@desktop-small">
                                                    <div className="c-code-example-teaser u-bg-5">
                                                        <div className="c-code-example-teaser__content">
                                                            <pre><code className="scss">
                                                                {`.-text-20 {
    font-size: 10px;
    }
    .-text-60 {
    font-size: 20px;
    @include gridle_state (micro) {
    font-size: 18px;
    }
    }`}
                                                            </code></pre>
                                                        </div>
                                                        <div className="c-code-example-teaser__actions">
                                                            <a className="c-cta-link c-cta-link--with-label u-paint-1-on-hover u-link-disabled" href="#">
                                                                <span className="c-ico-label">
                                                                    <span className="c-ico-label__media" aria-hidden="true">
                                                                        <span className="o-icon-wrapper o-icon-wrapper--round u-bg-2 u-paint-4">
                                                                            <span className="o-icon o-icon--right"></span>
                                                                            <span className="c-dash-ico"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span className="c-ico-label__info">
                                                                        BEVM &amp; Gridle
                                                                    </span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-5 gr-12@mobile pull-1 pull-0@mobile no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-4@desktop-small g-gutter-top-5@mobile c-decors-parent" role="gridcell" aria-label="css code examples">
                                        <div className="c-decors-box" aria-hidden="true">
                                            <div className="l-inner--small">
                                                <span className="c-photoshop-line c-photoshop-line--right"></span>
                                                <span className="c-photoshop-line c-photoshop-line--left"></span>
                                            </div>
                                        </div>
                                        <div className="l-sec__box__head h-hide h-show-flex@mobile" aria-hidden="true">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Step 4 <strong className="u-paint-1">CSS coding</strong>
                                            </h3>
                                            <p className="g-gutter-top-3@mobile">
                                                The next phase was the creation of the CSS styles.
                                            </p>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-4@mobile">
                                            <ul className="c-code-example-teasers-list">
                                                <li className="c-code-example-teasers-list__item">
                                                    <div className="c-code-example-teaser u-bg-5">
                                                        <div className="c-code-example-teaser__content">
                                                            <pre><code>{`$color_default:             #232323;
    $color_black:               #000000;
    $color_white:               #ffffff;
    $color_green_1:             #007d40;
    $color_green_2:             #074e2b;
    $color_grey_1:              #545454;
    $color_inputs:              #444;
    $color_input_placeholder:   #c9c9c9;
    $color_orange:              #f26d02;`}</code></pre>
                                                        </div>
                                                        <div className="c-code-example-teaser__actions">
                                                            <a className="c-cta-link c-cta-link--with-label u-paint-1-on-hover u-link-disabled" href="#">
                                                                <span className="c-ico-label">
                                                                    <span className="c-ico-label__media" aria-hidden="true">
                                                                        <span className="o-icon-wrapper o-icon-wrapper--round u-bg-2 u-paint-4">
                                                                            <span className="o-icon o-icon--right"></span>
                                                                            <span className="c-dash-ico"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span className="c-ico-label__info">
                                                                        color variables
                                                                    </span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-code-example-teasers-list__item g-spacing-top-5 g-spacing-top-4@desktop-small">
                                                    <div className="c-code-example-teaser u-bg-5">
                                                        <div className="c-code-example-teaser__content">
                                                            <pre><code>{`$size_inner:                100%;
    $size_gutter:               20px;
    $size_dropdown_icon:        50px;
    $height_footer:             50px;
    $height_footer_mobile:      144px;
    $size_header:               64px;
    $size_loader:               220px;
    $size_filter-range-heading: 100px;
    $size_hamburger:            30px;`}</code></pre>

                                                        </div>
                                                        <div className="c-code-example-teaser__actions">
                                                            <a className="c-cta-link c-cta-link--with-label u-paint-1-on-hover u-link-disabled" href="#">
                                                                <span className="c-ico-label">
                                                                    <span className="c-ico-label__media" aria-hidden="true">
                                                                        <span className="o-icon-wrapper o-icon-wrapper--round u-bg-2 u-paint-4">
                                                                            <span className="o-icon o-icon--right"></span>
                                                                            <span className="c-dash-ico"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span className="c-ico-label__info">
                                                                        size variables
                                                                    </span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-row c-decors-parent g-gutter-top-10 g-gutter-top-5@desktop-small" aria-hidden="true">
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
                                                            <img src={images['pic_screenshot-dekra-01.jpg']} alt="desktop version of the page" />
                                                        </figure>
                                                        <div className="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div className="c-devices-wrapper__box c-devices-wrapper__box--left u-horizontal-total-left g-spacing-left-5 g-spacing-left-10@tablet g-spacing-left-0@mobile g-gutter-right-half@tablet g-gutter-right-0@mobile g-spacing-top-1@mobile h-z-2">
                                                    <div className="c-devices-box c-devices-box--ipad">
                                                        <figure className="c-devices-box__media o-img-wrapper">
                                                            <img src={images['pic_screenshot-dekra-02.jpg']} alt="tablet version of the page" />
                                                        </figure>
                                                        <div className="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div className="c-devices-wrapper__box c-devices-wrapper__box--right g-spacing-right-5 g-spacing-right-0@mobile g-spacing-top-1@mobile h-z-3">
                                                    <div className="c-devices-box c-devices-box--iphone">
                                                        <figure className="c-devices-box__media o-img-wrapper">
                                                            <img src={images['pic_screenshot-dekra-03.jpg']} alt="smartphone version of the page" />
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
                        <div className="l-row c-decors-parent g-gutter-top-5 g-gutter-bottom-5 g-gutter-bottom-0@desktop-small">
                            <div className="c-decors-box" aria-hidden="true">
                                <span className="c-photoshop-line c-photoshop-line--top"></span>

                                <div className="l-inner--small">
                                    <span className="c-photoshop-line c-photoshop-line--right"></span>
                                    <span className="c-photoshop-line c-photoshop-line--left"></span>
                                </div>
                            </div>
                            <div className="l-inner">
                                <div className="row row-align-between">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u row row-align-between">
                                                <span className="gr-adapt no-gutter">
                                                    <span>Step 6 <strong className="u-paint-1">Style guide update</strong></span>
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
                                <span className="c-photoshop-line c-photoshop-line--bottom"></span>
                                <div className="l-inner--small">
                                    <span className="c-photoshop-line c-photoshop-line--right"></span>
                                    <span className="c-photoshop-line c-photoshop-line--left"></span>
                                </div>
                            </div>
                            <div className="l-inner">
                                <div className="row row-align-between">
                                    <div className="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-bottom-5 g-gutter-bottom-0@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                Styleguide was been generated automatically based on comments
                                                in SASS files. At this stage we've checked if everything generates in correct order and is easy to read and understand.
                                            </p>
                                            <p className="g-gutter-top-1">
                                                Styleguide Driven Development is a practice that encourages the separation of UX, Design and Front-end from Backend concerns.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-5 gr-12@mobile pull-1 pull-0@mobile no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-top-1@mobile g-gutter-bottom-5 g-gutter-bottom-4@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                Living style guides are increasingly popular front-end development staples. Integrating a live style guide into your process streamlines workflow, promotes ongoing design cohesion and provides a simple way to visualize how style updates will impact elements site-wide.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row row-align-center">
                                    <div className="l-sec__box gr-adapt gr-12@tablet no-gutter no-gutter@tablet">
                                        <div className="l-sec__box__content c-decors-parent">
                                            <div className="c-decors-box" aria-hidden="true">
                                                <span className="c-photoshop-line c-photoshop-line--left"></span>
                                                <span className="c-photoshop-line c-photoshop-line--right"></span>
                                            </div>
                                            <div className="c-styleguide-teaser" aria-label="visit styleguide page">
                                                <a className="c-styleguide-teaser__inner" href="http://dekra-site.prvsrv.com/styleguide/" target="_blank">
                                                    <div className="c-styleguide-teaser__content">
                                                        <figure className="o-img-wrapper">
                                                            <img src={images['pic_screenshot-dekra-04.jpg']} alt="Styleguide" />
                                                        </figure>
                                                    </div>
                                                    <div className="c-styleguide-teaser__actions">
                                                        <span className="c-cta-btn s-btn-style-2-no-hover">
                                                            <span className="c-label">View styleguide</span>
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
                    <section className="l-sec">
                        <div className="l-row c-decors-parent g-gutter-top-5 g-gutter-bottom-5 g-gutter-bottom-0@desktop-small">
                            <div className="c-decors-box" aria-hidden="true">
                                <span className="c-photoshop-line c-photoshop-line--top"></span>
                                <span className="c-photoshop-line c-photoshop-line--bottom"></span>
                                <div className="l-inner--small">
                                    <span className="c-photoshop-line c-photoshop-line--right"></span>
                                    <span className="c-photoshop-line c-photoshop-line--left"></span>
                                </div>
                            </div>
                            <div className="l-inner">
                                <div className="row row-align-between">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u row row-align-between">
                                                <span className="gr-adapt no-gutter">
                                                    <span>Step 7 <strong className="u-paint-1">Fine tuning...</strong></span>
                                                </span>
                                                <span className="gr-adapt no-gutter">
                                                    <strong className="u-paint-1 u-decor-bottom--alt"><span className="u-text-lower">and</span> The project is ready!</strong>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-row c-decors-parent">
                            <div className="l-inner">
                                <div className="row row-align-between">
                                    <div className="l-sec__box gr-5 gr-12@mobile no-gutter-left no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-bottom-5 g-gutter-bottom-0@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                We did a quality assurance of all pages, then tested the site on mobile and tablet devices. The front-end phase of the project was completed.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-5 gr-12@mobile pull-1 pull-0@mobile no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-top-1@mobile g-gutter-bottom-5 g-gutter-bottom-4@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                We paid attention to both the appearance and the quality of the code, so that it met our coding standards. Finally, we sent a preview of the static HTML files to our client.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec">
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
                                                        Cooperation with Pagepro is always fast, smooth and efficiency oriented. Coworking, whether it was a small or big project, we have always accomplished our goals.
                                                    </p>
                                                </div>
                                                <footer className="c-testimonial__foot g-gutter-top-4  g-gutter-top-3@desktop-small">
                                                    <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round"><img src={images['pic_artur-figurski.jpg']} alt="Artur Figurski" />
                                                    </figure>
                                                    <div className="c-testimonial__foot__info u-text-upper">
                                                        <strong className="u-decor-bottom--alt t-style-fpn-s-r">Artur Figurski</strong>, AF Studio
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
                                                                <Link className="c-portfolio-teaser__inner u-paint-4" to="/works/gatedtalent-website">
                                                                    <div className="c-portfolio-teaser__media" >
                                                                        <BgImage
                                                                            title="bgCaseGatedtalentWebsiteRect"
                                                                            fluid={props.data.bgCaseGatedtalentWebsiteRect.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div className="c-portfolio-teaser__main">
                                                                        <h2 className="t-style-fpn-l-b-u">
                                                                            GatedTalent Website
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

export const fluidDekraBgImage = graphql`
                                fragment fluidDekraBgImage on File {
                    childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid
                }
                }
            }
            `


export const DekraQuery = graphql`query {
                bgCaseKarinaPersonalRect: file(relativePath: {eq: "bg_case-karina-personal-rect.jpg" }) {
                    ...fluidDekraBgImage
                }
                bgCaseGatedtalentWebsiteRect: file(relativePath: {eq: "bg-case-gatedtalentwebsite-rect.jpg" }) {
                    ...fluidDekraBgImage
                }
                bgCaseWrocRect: file(relativePath: {eq: "bg_case-wroc-rect.jpg" }) {
                    ...fluidDekraBgImage
                }
                }
                `

export default Dekra;

