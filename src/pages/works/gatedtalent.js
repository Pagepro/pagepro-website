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

const Gatedtalent = (props) => (
    <>
        <div id="page-content">

            <div class="p-case-study">


                <Header />

                <main class="l-main">
                    <BgImage
                        title="bgCaseGatedtalent"
                        fluid={props.data.bgCaseGatedtalent.childImageSharp.fluid}
                        className="l-hero l-hero--alt l-hero--small l-hero--with-overlay  u-paint-4"
                        height='100vh'
                    >
                        <div class="l-inner g-gutter-top-10 g-gutter-bottom-8">
                            <div class="l-hero__head row g-gutter-top-8 g-gutter-top-0@mobile">
                                <div class="l-hero__head__box">
                                    <h2 class="t-style-fpn-xxl-b-u">
                                        GatedTalent
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
                                                <strong>GatedTalent</strong> is a platform dedicated to both recruiters and highly experienced executive professionals.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile">
                                        <div class="l-sec__box__content">
                                            <p>
                                                <strong>GatedTalent</strong> platform meets the needs of executives with exceptional skills seeking to engage with executive recruiters over the course of their career. They gain access to career opportunities that typically aren’t made available to the general public and can maintain a confidential relationship with recruiters.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                On the other side, recruiters gain access to senior executives and benefit from <strong>well thought out functionality and intuitive UI</strong> in order to expediate the recruitment process.
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
                                                GatedTalent <strong class="u-paint-1">Explainer Video</strong>
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
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/AVhJ6l4hMUs" allowfullscreen></iframe>
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
                                                GatedTalent <strong>in numbers</strong>
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul class="c-info-boxes-list c-info-boxes-list--rwd-alt g-spacing-bottom-minus-4 g-spacing-bottom-minus-2@desktop-small">
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Countries covered by executive membership</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>75</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item  c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Executive Search firms contracted since October 2017</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>160</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item  c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Countries Executive Search firms contracted from</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>27</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item  c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Compliance messages are in the process of sending out to the world’s senior executives</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>3000000</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <p class="g-gutter-top-1">
                                            Source links: <a target="_blank" href="https://www.gatedtalent.com/metrics/">gatedtalent.com/metrics</a> &amp; <a target="_blank" href="https://www.linkedin.com/company/gatedtalent/">linkedin.com/company/gatedtalent</a>
                                        </p>
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
                                                Requirements
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                The goal for our team was to develop a high quality, built in <strong>ReactJS</strong>, modern <strong>User Interface</strong> for the application.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                First of all, we needed a well designed and user-friendly interface project. Once completed, our <strong>Front-End Developers</strong> have to implement Views connected with <strong>.NET Core REST API</strong> to Database in accordance with customer provided documentation.
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
                                                We have been working on the project since the beginning. Thanks to remarkable cooperation between a great team comprising of .NET Developers, Project Managers, Testers and others, the live version was ready for deployment after 4 months of hard work.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                We provided to the project three <strong>React Developers</strong>, one <strong>HTML &amp; CSS UI Developer</strong> and <strong>UX Designer</strong>. Bartosz (UI/UX Designer) has been responsible for providing overall application user interface design. Joanna (HTML &amp; CSS UI Developer) has been responsible for making the design come alive by implementing every component.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                Then our three other teammates (React Developers) started to add functionalities based on ReactJS. First of all, they consulted Project Managers about overall architecture and had 4 months for MVP deployment. They have been using Visual Studio Team Service to manage their workflow using an Agile methodology. Sprints have a typical duration of two weeks which helps them to manage ongoing challenges.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                The platform is constantly developing and the team continues to work closely on the project adding additional user features and functionality.
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
                                                    <a target="_blank" href="http://redux.js.org/">
                                                        Redux
                                                    </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://github.com/gaearon/redux-thunk">
                                                        ReduX Thunk
                                                    </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://redux-form.com/">
                                                        Redux Form
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-right@mobile">
                                        <ul class="c-dotted-list">
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
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-left@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://sass-lang.com/">
                                                        SASS
                                                    </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://facebook.github.io/jest/">
                                                        JEST
                                                    </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://mochajs.org/">
                                                        Mocha
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-right no-gutter-right@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://www.visualstudio.com/team-services/">
                                                        Visual Studio Team Services
                                                    </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://teamsdemo.office.com/">
                                                        MS Teams
                                                    </a>
                                                </span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">
                                                    <a target="_blank" href="https://www.skype.com/en/">
                                                        and Skype
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
                                                MVP took us <strong>4 months</strong>, then we switched to ongoing development mode.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec l-sec--with-between-decor">
                        <div class="l-row c-between-decors-parent c-decors-parent">
                            <span class="c-between-decors">
                                <span class="c-between-decor c-between-decor--top u-paint-4"></span>
                                <span class="c-between-decor c-between-decor--bottom u-paint-6"></span>
                            </span>
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
                            </div>
                            <div class="l-inner">
                                <div class="row ">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="c-website-teaser g-gutter-top-7 g-gutter-top-5@desktop-small g-gutter-bottom-7 g-gutter-bottom-5@desktop-small">
                                            <div class="c-website-teaser__inner row h-row-align-stretch">
                                                <div class="c-website-teaser__info gr-4 gr-12@mobile-medium no-gutter-left no-gutter@mobile-medium">
                                                    <div class="c-website-teaser__info__head g-gutter-left-4 g-gutter-left-0@tablet g-gutter-top-5 g-gutter-top-0@mobile-medium g-gutter-bottom-3@mobile-medium">
                                                        <h3 class="t-style-fpn-l-r-u">Gated<strong>Talent</strong></h3>
                                                    </div>
                                                    <div class="c-website-teaser__info__actions g-gutter-left-4 g-gutter-left-0@tablet g-gutter-top-2 g-gutter-top-0@mobile-medium g-gutter-bottom-2 g-gutter-bottom-0@mobile-medium">
                                                        <a class="c-cta-link s-btn-style-3" href="https://gatedtalent.com" target="_blank" >
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
                                                                            <span class="c-address__head u-paint-3">https://</span>
                                                                            <span class="c-address__content u-paint-2">www.gatedtalent.com</span>
                                                                        </strong>
                                                                    </div>
                                                                    <figure class="c-devices-box__media o-img-wrapper">
                                                                        <img src={images['gated-talent-website-thumbnail.jpg']} alt="GatedTalent" />
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
                                                                    <div class="c-portfolio-teaser__media" >
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

                                                        <li class="c-portfolio-teasers-list__item swiper-slide">
                                                            <div class="c-portfolio-teaser c-portfolio-teaser--small">
                                                                <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/cryptocurrency-arbitrage">
                                                                    <div class="c-portfolio-teaser__media">
                                                                        <BgImage
                                                                            title="bgCaseCryptoRect"
                                                                            fluid={props.data.bgCaseCryptoRect.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div class="c-portfolio-teaser__main">
                                                                        <h2 class="t-style-fpn-l-b-u">
                                                                            Cryptocurrency Arbitrage
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



        </div>
    </>
)

export const fluidGatedtalentBgImage = graphql`
                                fragment fluidGatedtalentBgImage on File {
                                childImageSharp {
                                    fluid(quality: 90, maxWidth: 4160) {
                                    ...GatsbyImageSharpFluid
                                        }
                                }
                            }
                            `


export const GatedtalentQuery = graphql`query {
                            bgCaseGatedtalent: file(relativePath: {eq: "bg_case-gatedtalent.jpg" }) {
                                ...fluidGatedtalentBgImage
                            }
                            bgCaseMnfRect: file(relativePath: { eq: "bg_case-mnf-rect.jpg" }) {
                                ...fluidGatedtalentBgImage
                            }
                            bgCaseBlockchainRect: file(relativePath: { eq: "bg-case-blockchain-rect.jpg" }) {
                                ...fluidGatedtalentBgImage
                            }
                            bgCaseCryptoRect: file(relativePath: { eq: "bg-case-crypto-rect.jpg" }) {
                                ...fluidGatedtalentBgImage
                            }
                        }
                        `

export default Gatedtalent;