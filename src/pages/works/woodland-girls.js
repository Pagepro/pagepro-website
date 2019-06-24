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

const Woodland = (props) => (
    <>
        <div id="page-content">

            <div className="p-case-study">
                <Header />
                <main className="l-main">

                    <WorksMainBg image={images['bg_case-woodland.jpg']} />

                    <div className="l-sec" id="sec-1">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row row-align-between g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-4@desktop-small">
                                    <div className="l-sec__box u-paint-1 t-style-fpn-l-r gr-5 gr-12@mobile no-gutter-left no-gutter@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                <strong>Real girls with real lives.</strong>
                                            </p>
                                            <p className="u-line-h-s g-gutter-top-1">
                                                Woodland Girls is a lovely duet of Mom (photographer) and Daughter (model). Inspired by nature, calmness and majesty of the landscape.
                                </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                <strong>Mom - Karina</strong>
                                                A Polish native, had an amazing time in China, currently based in Germany. She is a Fine Art Master since 2005 related to the fashion, unique image maker, stylist, obsessive lover of artisan moments, timeless storyteller in love with the universe of vintage.
                                </p>
                                            <p className="g-gutter-top-1">
                                                <strong>Daughter - Konstantina</strong>
                                                A Polish and Greek native, child of the forest and sea, adventurer, curator of all happy things, milk lover, fast – moving fairy, eternal dreamer, a rare gem who believes in magic.
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
                                <div className="row row-align-between g-gutter-top-10 g-gutter-top-0@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
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
                                                Woodland Girls needed fast, responsive, <strong>image focused</strong> website with easy to manage CMS.
                                </p>
                                            <p className="g-gutter-top-1">
                                                We built a beautiful, <strong>responsive HTML5</strong> site from scratch to showcase Woodland photographs. Rather than simply displaying the photos, our team created an immersive storytelling site.
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
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Y2Hpe6gz2L4" allowfullscreen></iframe>
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
                                                After discovery stage we decided to prepare WordPress driven HTML5 responsive website with CSS and JavaScript animations.
                                </p>
                                            <p>
                                                Our services contain:
                                </p>
                                            <ul>
                                                <li>PSD to HTML conversion</li>
                                                <li>WordPress Custom Theme development</li>
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
                                                <strong>Marta Staroń</strong> (<a href="http://leshaya.eu/" target="_blank">Leshaya</a>) partnered with <strong>Pagepro</strong> to create modern website for Woodland Girls. Leshaya picked up Pagepro for the fourth time and she is planning to hire us for her futher web development projects.
                                </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                                    <div className="l-sec__box gr-3 gr-6@mobile no-gutter-left no-gutter-left@mobile">
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
                                    <div className="l-sec__box gr-3 gr-6@mobile no-gutter-right@mobile">
                                        <ul className="c-dotted-list">
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">JavaScript</span>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">jQuery</span>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">GULP</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="l-sec__box gr-3 gr-6@mobile no-gutter-left@mobile">
                                        <ul className="c-dotted-list">
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">
                                                    Scroll Animations
                                    </span>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">
                                                    Paralax Effect
                                    </span>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">BrowserStack</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="l-sec__box gr-3 gr-6@mobile no-gutter-right no-gutter-right@mobile">
                                        <ul className="c-dotted-list">
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">Litmus</span>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">FrontendApp</span>
                                            </li>
                                            <li className="c-dotted-list__item u-paint-3">
                                                <span className="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="http://wordpress.org/">WordPress</a>
                                                </span>
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
                                                Step 1 <strong className="u-paint-1">Kicking off</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                First thing was to <strong>check if we have all materials</strong>.
                                                Marta provided us with: PSD &amp; JPG design files, SVG icons, basic requirements and animation examples on different websites.
                                </p>
                                            <p>
                                                We've made sure if we <strong>have the latest version</strong> of the files by presenting her materials summary on FrontendApp (our internal tool), also we've checked if SVG icons are prepared for web-use.
                                </p>
                                            <p>
                                                After reviewing the materials, we've prepared list of questions and suggestions, we asked Marta to do <strong>the kick off call</strong> for making sure if we understand all her specific requirements.
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
                                                The project was actually split in 2 stages - HTML/CSS building and WordPress development.
                                </p>
                                            <h3>Front-end Development Stage</h3>
                                            <p>
                                                We always like to split front-end development from other phases because it is much faster to prepare CSS &amp; HTML using front-end tooling, like our own <strong>SASS starter</strong> (<a href="https://github.com/Pagepro/libsasserplate" target="_blank">LibSASSerPlate</a>).
                                </p>
                                            <h3>WordPress Development Stage</h3>
                                            <p>
                                                After preparing HTML&amp;CSS we've planed to implement static files into WordPress custom theme.
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
                                                After planning project architecutre we always start with building HTML. We are making sure if code is split into tiny, easy to re-use HTML components.
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
                                                SCSS structure needs to be well designed and should be refactorized during project life time. Using easy to understand variables for colors and sizes is a must have. It makes code reusable and easier to understand for other developers.
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
                                                            <img src={images['pic_screenshot-woodland-03.jpg']} alt="desktop version of the page" />
                                                        </figure>
                                                        <div className="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div className="c-devices-wrapper__box c-devices-wrapper__box--left u-horizontal-total-left g-spacing-left-5 g-spacing-left-10@tablet g-spacing-left-0@mobile g-gutter-right-half@tablet g-gutter-right-0@mobile g-spacing-top-1@mobile h-z-2">
                                                    <div className="c-devices-box c-devices-box--ipad">
                                                        <figure className="c-devices-box__media o-img-wrapper">
                                                            <img src={images['pic_screenshot-woodland-04.jpg']} alt="tablet version of the page" />
                                                        </figure>
                                                        <div className="c-devices-box__frame" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div className="c-devices-wrapper__box c-devices-wrapper__box--right g-spacing-right-5 g-spacing-right-0@mobile g-spacing-top-1@mobile h-z-3">
                                                    <div className="c-devices-box c-devices-box--iphone">
                                                        <figure className="c-devices-box__media o-img-wrapper">
                                                            <img src={images['pic_screenshot-woodland-05.jpg']} alt="smartphone version of the page" />
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
                                                Before starting WordPress development we always do first Q&amp;A stage.
                                                At this stage we're testing the website on all modern browsers.
                                </p>
                                            <p className="g-gutter-top-1">
                                                Our Q&amp;A assistant is making sure that everything looks the way designer wanted and works smoothly on all devices. We're doing testing on real devices and on emulated versions using BrowserStack.
                                </p>
                                            <p className="g-gutter-top-1">
                                                This stage is always conducted before WP integration, because it is much easier and faster to do bugfixes on static HTML &amp; CSS templates.
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
                                                During the WordPress integration we took the static HTML files and created the backbone of the WordPress site. We're using <a href="http://underscores.me/" target="_blank">Underscores</a> as a starter for developing custom theme.
                                </p>
                                            <p className="g-gutter-top-1">
                                                We've lunched the website on test server with some prepopulated content just to verify if everything is editable and displayed as it should.
                                </p>
                                            <p className="g-gutter-top-1">
                                                After successful implementation we've prepared short instruction describing steps needed to update content on the website.
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
                                    <span className="c-photoshop-line c-photoshop-line--left"></span>
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
                                                Once the development was completed, we've done Speed optimalisation.
                                                We've tested the project on a majority of devices and browsers. There were a few small issues which had to be fixed.
                                </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-5 gr-12@mobile pull-1 pull-0@mobile no-gutter-left@mobile no-gutter-right@mobile g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-top-1@mobile g-gutter-bottom-5 g-gutter-bottom-4@mobile">
                                        <div className="l-sec__box__content">
                                            <p>
                                                We paid special attention to the way each section of the site could be managed. We tested the functionality and installed the project on our staging server for a client review.
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
                                            <figure className="o-img-wrapper">
                                                <img src={images['pic_screenshot-woodland-01.jpg']} alt="Google Page Speed Insights" />
                                            </figure>
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
                                                        <strong>Pagepro was my first and the best choice</strong>. Their knowledge, skills and experience are very impressive. <strong>They pay attention to details</strong> and do their best to deliver expected product on expert standard. As a visual designer I can confirm that Pagepro can bring my design to live in the way as it was designed or even better. <strong>I truly recommend Pagepro</strong> as open-minded specialists with great abilities.
                                        </p>
                                                </div>
                                                <footer className="c-testimonial__foot g-gutter-top-4  g-gutter-top-3@desktop-small">
                                                    <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                        <img src={images['pic_marta-staron.jpg']} alt="Marta Staroń" />
                                                    </figure>
                                                    <div className="c-testimonial__foot__info u-text-upper">
                                                        <strong className="u-decor-bottom--alt t-style-fpn-s-r">Marta Staroń</strong>. Freelance Designer
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
                                                        <h3 className="t-style-fpn-l-r-u">WoodlandGirls</h3>
                                                    </div>
                                                    <div className="c-website-teaser__info__actions g-gutter-left-4 g-gutter-left-0@tablet g-gutter-top-2 g-gutter-top-0@mobile-medium g-gutter-bottom-2 g-gutter-bottom-0@mobile-medium">
                                                        <a className="c-cta-link s-btn-style-3" href="http://woodlandgirls.com" target="_blank" >
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
                                                                            <span className="c-address__content u-paint-2">woodlandgirls.com</span>
                                                                        </strong>
                                                                    </div>
                                                                    <figure className="c-devices-box__media o-img-wrapper">
                                                                        <img src={images['pic_screenshot-woodland-06.jpg']} alt="WoodlandGrils Screenshot" />
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

export const fluidWoodlandBgImage = graphql`
                                fragment fluidWoodlandBgImage on File {
                childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        `


export const WoodlandQuery = graphql`query {
                bgCaseKarinaPersonalRect: file(relativePath: {eq: "bg_case-karina-personal-rect.jpg" }) {
                ...fluidWoodlandBgImage
                }
                bgCaseHawksmanThumb: file(relativePath: {eq: "bg_case-hawksman-thumb.jpg" }) {
                    ...fluidWoodlandBgImage
                }
                bgCaseWrocRect: file(relativePath: {eq: "bg_case-wroc-rect.jpg" }) {
                    ...fluidWoodlandBgImage
                }
                }
                `

export default Woodland;

