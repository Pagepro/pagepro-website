import React from "react"
import Header from '../../components/header';
import Footer from '../../components/footer';
import { graphql, Link } from 'gatsby';
import BgImage from '../../components/bgImage'
import ProjectsAndWorkshop from '../../components/projectsAndWorkshop';

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../../static/img/', false, /\.(jpg|svg)$/));

const FrontendDevelopment = (props) => (
    <>
        <div id="page-content">

            <div class="p-about">


                <Header />



                <main class="l-main">

                    <BgImage
                        title="bgAgencies"
                        fluid={props.data.bgAgencies.childImageSharp.fluid}
                        className="l-hero l-hero--alt l-hero--small l-hero--with-overlay  u-paint-4"
                        height='399px'
                    >
                        <div class="l-inner g-gutter-top-10 g-gutter-bottom-5 g-gutter-bottom-3@mobile">
                            <div class="l-hero__head row row-align-bottom g-gutter-top-8 g-gutter-top-0@mobile">
                                <div class="l-hero__head__box">
                                    <h2 class="t-style-fpn-xxl-b g-spacing-top-2">
                                        Front-end Development
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </BgImage>

                    <section class="l-sec" id="offer--lead-text">
                        <div class="l-row">
                            <div class="l-inner g-gutter-top-5 g-gutter-top-4@desktop-small g-gutter-bottom-1 g-gutter-bottom-1@desktop-small">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head u-paint-1">
                                            <h2 class="t-style-fpn-l-r-u">
                                                <span class="c-ico-label">
                                                    What is Front-end development?
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec" id="offer--intro-text">
                        <div class="l-row">
                            <div class="l-sec__box gr-12 no-gutter">
                                <div class="l-inner g-gutter-top-3 g-gutter-top-1@desktop-small g-gutter-bottom-4 g-gutter-bottom-3@desktop-small u-paint-5">
                                    <div class="l-sec__box__content u-paint-2">
                                        <div class="row row-align-between g-gutter-top-2@desktop-small g-gutter-bottom-2@desktop-small">
                                            <div class="l-sec__box gr-2 u-paint-1 t-style-fpn-l-r-u no-gutter-left no-gutter@mobile g-gutter-bottom-2@mobile g-gutter-bottom-1@mobile-small">
                                                <div class="l-sec__box__content o-svg-wrapper--sec">
                                                    <img src={images['frontend-code.svg']} alt="Front-end development logo" />
                                                </div>
                                            </div>
                                            <div class="l-sec__box gr-9 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile-medium g-spacing-top-1@mobile-small">
                                                <div class="l-sec__box__content">
                                                    <p>
                                                        Front-end, in general, is <strong>the visual part of the application that users interact with</strong>. This part of web development allows creating <strong>various interfaces</strong> for <strong>different devices</strong> and consists of technologies like <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong>. If we want our project to succeed, the front-end cannot be repulsive to end users. Design and development have to deliver an engaging and <strong>unique experience</strong> to customers. With Pagepro you can expect that your idea will be turned into a real and unique product.
                                                    </p>
                                                    <p class="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                        Front-end application development always needs <strong>JavaScript expertise</strong>. This language has become <strong>one of the most popular</strong> for creating rich web applications. JavaScript includes huge numbers of libraries and frameworks, making development <strong>supremely efficient</strong> but also <strong>requires experienced programmers</strong> who can handle different approaches. At Pagepro we have a broad experience in different technologies and <strong>our developers are highly specialised in JavaScript</strong> and also in various libraries like <strong>React.js</strong>. Extensive experience in the front-end area allows us to simplify integration with the backend and deliver the finished product faster.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-1@desktop-small u-paint-5 u-bg-6">
                        <div class="l-row">
                            <div class="l-sec__box gr-12 no-gutter">
                                <div class="l-inner g-gutter-top-3 g-gutter-top-1@desktop-small g-gutter-top-1@desktop-small g-gutter-bottom-4 g-gutter-bottom-3@desktop-small u-paint-5">
                                    <div class="l-sec__box__content u-paint-2">
                                        <div class="l-sec__box__head g-gutter-bottom-2 no-gutter@mobile no-gutter@mobile-small no-gutter@desktop-small">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Why Front-end development is <strong>so important</strong>?
                                            </h3>
                                        </div>
                                        <div class="row row-align-between g-gutter-top-2@desktop-small g-gutter-bottom-2@desktop-small g-gutter-bottom-0@mobile">
                                            <div class="l-sec__box gr-9 gr-12@mobile no-gutter-right no-gutter-left no-gutter@mobile">
                                                <div class="l-sec__box__content">
                                                    <p>
                                                        The success of a particular web application depends primarily on <strong>how the front-end part was designed</strong>. If the front-end will be unattractive, unintuitive and complicated, potential clients will quickly be discouraged and will not want to return to the site or app anymore. <strong>The user interface is the only way you can communicate with your clients accessing your site remotely</strong>.
                                                    </p>
                                                    <p class="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                        <strong>Front-end and back-end are two parts of the same apple</strong>. At the beginning of the Internet, developers created these both parts of the web applications. But nowadays <strong>applications are getting more complex and require more specialized knowledge</strong>. A top-level expert must have many skills to implement really <strong>useful and fancy interfaces</strong>. There are many technologies that are part of the front-end and only real professionals are able to combine them all to create unique projects. Starting from simple widgets and ending with complex applications - <strong>front-end really matters!</strong>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="l-sec__box gr-2 u-paint-1 t-style-fpn-l-r-u no-gutter-left no-gutter-bottom@mobile g-gutter-top-2@mobile">
                                                <div class="l-sec__box__content o-svg-wrapper--sec">
                                                    <img src={images['react-code-review.svg']} alt="Front-end importance logo" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec">
                        <div class="l-row">
                            <div class="l-inner g-gutter-top-5 g-gutter-top-4@desktop-small g-gutter-bottom-1 g-gutter-bottom-1@desktop-small">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head u-paint-1">
                                            <h2 class="t-style-fpn-l-r-u">
                                                <span class="c-ico-label">
                                                    Great experience
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec">
                        <div class="l-row">
                            <div class="l-sec__box gr-12 no-gutter">
                                <div class="l-inner g-gutter-top-3 g-gutter-top-1@desktop-small g-gutter-bottom-4 g-gutter-bottom-3@desktop-small u-paint-5">
                                    <div class="l-sec__box__content u-paint-2">
                                        <div class="row row-align-between g-gutter-top-2@desktop-small g-gutter-bottom-2@desktop-small">
                                            <div class="l-sec__box gr-2 u-paint-1 t-style-fpn-l-r-u no-gutter-left no-gutter@mobile g-gutter-bottom-2@mobile g-gutter-bottom-1@mobile-small">
                                                <div class="l-sec__box__content o-svg-wrapper--sec">
                                                    <img src={images['bio.svg']} alt="Our experience logo" />
                                                </div>
                                            </div>
                                            <div class="l-sec__box gr-9 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile-medium g-spacing-top-1@mobile-small">
                                                <div class="l-sec__box__content">
                                                    <p>
                                                        Every project, even the smallest one becomes <strong>something unique for us</strong>. We have learned that each project comes with <strong>new challenges</strong> that provide us with <strong>valuable knowledge</strong> for future purposes. Every day we discover new areas in which we would like to try our strength and if something goes wrong, we are <strong>not afraid to accept criticism</strong> and draw constructive conclusions. We make mistakes like everyone, but we do not give up and learn from the best. For <strong>more than 10 years</strong> we have worked in <strong>close cooperation with worldwide agencies</strong> for whom we have delivered the best solutions which we are proud of. We also feel good in the <strong>UK marketplace</strong>, where we have the pleasure to work with fantastic people for <strong>over six years</strong>.
                                                    </p>
                                                    <p class="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                        We are not afraid to <strong>undertake difficult challenges</strong>. Our portfolio already includes projects like cryptocurrency stock exchange, medical & financial data processing, CRM systems and also we were touching on exciting 3D renderings! As you can see, we have already dealt with really <strong>diverse projects</strong>, but the front-end is the most important for us. Our developers are real <strong>front-end enthusiasts</strong> who not only explore new approaches but also love to share their knowledge with others. We pay attention to <strong>the smallest details</strong> and we can provide a <strong>very good quality-price ratio</strong>.
                                                    </p>
                                                    <p class="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                        We <strong>take care of each other</strong>, and each member of our team is <strong>strongly motivated</strong> to do their best. If you come to <strong>work with joy</strong> and you cannot wait for the next project, what could be better?
                                                    </p>
                                                    <p class="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                        If you are looking for <strong>real professionals</strong> who put their heart into their work, then you can stop looking. You just <strong>found us</strong>.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-3@desktop-small u-paint-5 u-bg-6">
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row u-paint-2">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Our <strong>Front-end services</strong>
                                            </h3>
                                            <p class="g-gutter-top-1">
                                                Pagepro provides <strong>front-end architecture and design services</strong> to build top-class solutions to meet your business needs. Our team of proficient front-end developers helps to create <strong>user-friendly applications</strong> of different types with the benefits of the latest technology trends. Our offer of front-end programming services includes:
                                            </p>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul class="c-info-boxes-list c-info-boxes-list--rwd-alt g-spacing-bottom-minus-4 g-spacing-bottom-minus-2@desktop-small">
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span class="o-icon o-icon--react"></span>
                                                            </span>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span class="t-style-fpn-s-r-u u-paint-1">Single Page Applications</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                By using cutting-edge front-end technologies and <strong>React.js as a foundation</strong>, we can deliver scalable and easy to maintain SPA projects. Each solution is made with great attention to detail which we control to make it <strong>look equally marvelous</strong> on small mobile screens and large desktops.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span class="o-icon o-icon--screen-idea"></span>
                                                            </span>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span class="t-style-fpn-s-r-u u-paint-1">PWA</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                A new trend that we implemented in our projects so that even simple websites can <strong>imitate the behavior of native applications</strong>. With React.js our PWA apps are <strong>blazingly fast</strong>, <strong>painless to update</strong> and <strong>provide the same user experience on many devices</strong>.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div class="c-info-box__media g-gutter-left-1 no-gutter@mobile" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span class="o-icon o-icon--chart-wordpress"></span>
                                                            </span>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span class="t-style-fpn-s-r-u u-paint-1">WordPress Development</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                WordPress is very important for us because <strong>it powers more than 30% of all websites</strong> on the Internet! We can offer our clients not only simple theme changes but we can also develop a <strong>complex plugin</strong>, build a <strong>business website from scratch</strong> and provide <strong>an effective e-commerce solution</strong> for your online store.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span class="o-icon o-icon--mailing"></span>
                                                            </span>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span class="t-style-fpn-s-r-u u-paint-1">PSD to HTML</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Our experts can turn even the most complex design ideas into beautiful, semantic and a web standard compliant <strong>HTML5/CSS3 template</strong>. We have large-scale experience and <strong>proven expertise in PSD to responsive and cross-browser HTML conversion</strong>.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="row row-align-center g-gutter-top-4 g-gutter-top-3@desktop-small g-gutter-top-2@mobile">
                                                <div class="l-sec__box gr-6 gr-12@mobile-big no-gutter@mobile-big">
                                                    <p class="u-text-centered">
                                                        Feel free to <strong>ask us about anything</strong>, even dealing with the most extraordinary ideas. Our team of professionals will be <strong>happy to talk about your needs</strong>!
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="row row-align-center g-gutter-top-3">
                                                <div class="l-sec__box gr-6">
                                                    <div class="l-sec__box__actions c-decors-parent">
                                                        <div class="c-decors-box" aria-hidden="true">
                                                            <div class="c-decor-wrapper c-decor-wrapper--center-vertical c-decor-wrapper--right">
                                                                <span class="c-plane-decor u-paint-4">
                                                                    <span class="o-icon o-icon--plane"></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a class="c-cta-link s-btn-style-3" href="contact.html">
                                                            <span class="c-label">Contact us</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-2@desktop-small">
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Key <strong>technologies</strong>
                                            </h3>
                                            <p class="g-gutter-top-1">
                                                The Pagepro team consists of professionals working in various front-end areas for many years. We have been <strong>creating amazing applications</strong> since the beginning of the HTML5 revolution and constantly adapt <strong>new web technologies</strong> in our projects. Being up to date with new technologies, we have created a <strong>team of experienced programmers</strong> who are not afraid of <strong>ambitious challenges</strong>. The variety of skills of our developers allows us to find the <strong>right direction</strong> even with the most complex requirements. We develop every project with <strong>great attention to detail</strong> and we know how to create applications that are not only useful but also <strong>full of beautifully and smooth animations</strong>.
                                            </p>
                                        </div>
                                        <div class="l-sec__box gr-12 g-gutter-top-5 g-gutter-top-3@desktop-small u-paint-4">
                                            <ul class="c-info-boxes-list c-info-boxes-list--alt">
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile t-center l-sec__box__content">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['html5.svg']} alt="HTML5 logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">HTML5</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile t-center l-sec__box__content">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['css.svg']} alt="CSS3 logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">CSS3</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile t-center l-sec__box__content">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['javascript.svg']} alt="JavaScript logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">JavaScript ES6</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile t-center l-sec__box__content">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['react.svg']} alt="React logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">React</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile t-center l-sec__box__content">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['react-native.svg']} alt="React Native logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">React Native</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile t-center l-sec__box__content">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default"><img src={images['frontend-code.svg']} alt="SVG logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">SVG</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile t-center l-sec__box__content">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default"><img src={images['sass.svg']} alt="Sass logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">Sass</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile t-center l-sec__box__content">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['storybook.svg']} alt="Storybook logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">StoryBook</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile t-center l-sec__box__content">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['typescript.svg']} alt="TypeScript logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">TypeScript</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Pagepro <strong>in numbers</strong>
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul class="c-info-boxes-list c-info-boxes-list--rwd-alt g-spacing-bottom-minus-4 g-spacing-bottom-minus-2@desktop-small">
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Projects done in 2018</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>176</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">PSD converted into HTML in 2018</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>1757</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">WordPress Projects in 2018</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>38</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Commits per week</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>1124</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Years in business</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>10</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Team members</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>18</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-3@desktop-small u-bg-6">
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Hire <strong>dedicated front-end developers</strong>
                                            </h3>
                                            <p class="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                Have an awesome idea, or <strong>want some expertise?</strong> Our team of experienced front-end developers is <strong>ready to meet your requirements</strong>. Looking for easy to maintain custom solutions? Feel free to <strong>contact us!</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-gutter-top-3">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__content">
                                            <form class="f-form f-form--contact js__form--contact">
                                                <fieldset>
                                                    <div class="f-form__row row">
                                                        <div class="f-form__box gr-6 gr-12@tablet no-gutter-left no-gutter@tablet">
                                                            <div class="row">
                                                                <div class="gr-6 gr-12@mobile no-gutter-left no-gutter@mobile">
                                                                    <div class="f-form__section">
                                                                        <div class="f-field f-field--anim f-field--input">
                                                                            <div class="f-label-wrapper">
                                                                                <label class="t-style-fpn-xxs-r u-paint-3" for="contact_full-name">Full Name</label>
                                                                            </div>
                                                                            <div class="f-input-wrapper f-input-wrapper--person u-paint-3">
                                                                                <input class="u-paint-2" required type="text" name="msg_name" id="contact_full-name" value="" />
                                                                                <span class="o-icon o-icon--user u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="f-form__section g-spacing-top-2 g-spacing-top-1@mobile">
                                                                        <div class="f-field f-field--anim f-field--input">
                                                                            <div class="f-label-wrapper">
                                                                                <label class="t-style-fpn-xxs-r u-paint-3" for="contact_email">E-mail Address</label>
                                                                            </div>
                                                                            <div class="f-input-wrapper f-input-wrapper--mail u-paint-3">
                                                                                <input class="u-paint-2" required type="email" name="msg_email" id="contact_email" value="" />
                                                                                <span class="o-icon o-icon--mail u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-1@mobile">
                                                                    <div class="f-form__section">
                                                                        <div class="f-field f-field--anim f-field--input">
                                                                            <div class="f-label-wrapper">
                                                                                <label class="t-style-fpn-xxs-r u-paint-3" for="contact_company">Company</label>
                                                                            </div>
                                                                            <div class="f-input-wrapper f-input-wrapper--company u-paint-3">
                                                                                <input class="u-paint-2" type="text" name="msg_company" id="contact_company" value="" />
                                                                                <span class="o-icon o-icon--building u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="f-form__section g-spacing-top-2 g-spacing-top-1@mobile">
                                                                        <div class="f-field f-field--anim f-field--input">
                                                                            <div class="f-label-wrapper">
                                                                                <label class="t-style-fpn-xxs-r u-paint-3" for="contact_phone">Phone Number</label>
                                                                            </div>
                                                                            <div class="f-input-wrapper f-input-wrapper--phone u-paint-3">
                                                                                <input class="u-paint-2" type="text" name="msg_phone" id="contact_phone" value="" />
                                                                                <span class="o-icon o-icon--phone u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="f-form__box f-form__box--stretch gr-6 gr-12@tablet no-gutter-right no-gutter@tablet g-spacing-top-2@tablet g-spacing-top-1@mobile">
                                                            <div class="row">
                                                                <div class="gr-12 no-gutter">
                                                                    <div class="f-form__section">
                                                                        <div class="f-field f-field--anim f-field--textarea">
                                                                            <div class="f-label-wrapper">
                                                                                <label class="t-style-fpn-xxs-r u-paint-3" for="contact_description">Message</label>
                                                                            </div>
                                                                            <div class="f-textarea-wrapper u-paint-3">
                                                                                <textarea class="u-paint-2" required id="contact_description" name="msg_content"></textarea>
                                                                                <span class="o-icon o-icon--comment u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="f-form__row row row-align-right g-gutter-top-3">
                                                        <div class="f-form__box gr-adapt no-gutter">
                                                            <button class="c-btn s-btn-style-4">
                                                                <span class="c-label">Send a message</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <ProjectsAndWorkshop
                        header={<h2 class="t-style-fpn-l-r-u">
                            Learn more about Front-end development <strong>with us!</strong>
                        </h2>}
                        description={<p class="g-gutter-top-1">
                            At Pagepro we deliver <strong>top quality applications</strong> and if you want to know how we achieve it, you can always <strong>follow us at conferences or workshops</strong>. We also recommend reading our blog, which is also <strong>a great place where we promote our knowledge</strong>.
                                    </p>}
                    />
                    <div class="l-sec u-bg-1 u-paint-4 g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small g-gutter-bottom-0@tablet">
                        <div class="l-row">
                            <div class="l-inner l-inner-no-gutters@tablet">
                                <div class="row row-align-center">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head g-gutter-left-2@tablet g-gutter-left-1@mobile g-gutter-right-2@tablet g-gutter-right-1@mobile">
                                            <h2 class="t-style-fpn-l-r-u">
                                                See what <strong>our partners have to say</strong>
                                            </h2>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-top-0@tablet">
                                            <div class="c-slider-wrapper c-slider-wrapper--testimonials-alt js-testimonials-alt-slider">
                                                <div class="c-slider-wrapper__container swiper-container g-gutter-top-3@tablet" aria-label="Portfolio teasers slider">
                                                    <ol class="c-testimonials-list c-testimonials-list--alt swiper-wrapper">
                                                        <li class="c-testimonials-list__item g-gutter-right-3 g-gutter-right-0@tablet swiper-slide">
                                                            <blockquote class="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-left-2@tablet g-gutter-left-1@mobile g-gutter-right-2@tablet g-gutter-right-1@mobile" aria-label="Testimonial">
                                                                <div class="c-testimonial__content t-style-fpn-m-ri c-chat-decor-parent">
                                                                    <p class="u-line-h-m">
                                                                        Chris and his team are <strong>very talented front-end developers</strong>. The level of commitment, quality and service level that they provide is hard to find. We <strong>highly recommend</strong> them as a trusted partner.
                                                                    </p>
                                                                    <span class="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                        <span class="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                        <span class="c-chat-decor__line c-chat-decor__line--right"></span>
                                                                    </span>
                                                                </div>
                                                                <footer class="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                                    <figure class="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round"
                                                                    >
                                                                        <img src={images['pic_ilona-filipi.jpg']} alt="Ilona Filipi" />
                                                                    </figure>
                                                                    <div class="c-testimonial__foot__info u-text-upper">
                                                                        <strong class="u-decor-bottom--alt t-style-fpn-s-r">Ilona Filipi</strong> <br />
                                                                        Managing Director <br />
                                                                        Moove, London
                                                                    </div>
                                                                </footer>
                                                            </blockquote>
                                                        </li>
                                                        <li class="c-testimonials-list__item g-gutter-right-3 g-gutter-right-0@tablet swiper-slide">
                                                            <blockquote class="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-left-2@tablet g-gutter-left-1@mobile g-gutter-right-2@tablet g-gutter-right-1@mobile" aria-label="Testimonial">
                                                                <div class="c-testimonial__content t-style-fpn-m-ri c-chat-decor-parent">
                                                                    <p class="u-line-h-m">
                                                                        I would like to recommend Pagepro as a high qualified <strong>Front-end development</strong> partner.
                                                                        For past three years, RevSquare was using Pagepro services to satisfy needs for clients from 10 different countries. During this time Pagepro provided high quality services, big support with good prices and communication skills.
                                                                    </p>
                                                                    <span class="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                        <span class="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                        <span class="c-chat-decor__line c-chat-decor__line--right"></span>
                                                                    </span>
                                                                </div>
                                                                <footer class="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                                    <figure class="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                        <img src={images['pic_guillaume-pousseo.jpg']} alt="Guillaume Pousseo" />
                                                                    </figure>
                                                                    <div class="c-testimonial__foot__info u-text-upper">
                                                                        <strong class="u-decor-bottom--alt t-style-fpn-s-r">Guillaume Pousseo</strong> <br />CTO <br />
                                                                        RevSquare, New York City
                                                                    </div>
                                                                </footer>
                                                            </blockquote>
                                                        </li>
                                                        <li class="c-testimonials-list__item g-gutter-right-3 g-gutter-right-0@tablet swiper-slide">
                                                            <blockquote class="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-left-2@tablet g-gutter-left-1@mobile g-gutter-right-2@tablet g-gutter-right-1@mobile" aria-label="Testimonial">
                                                                <div class="c-testimonial__content t-style-fpn-m-ri c-chat-decor-parent">
                                                                    <p class="u-line-h-m">
                                                                        The website was delivered on time and on budget. Redfox Media’s multiple touchpoints led to comprehensive communication and a unified vision that is rare for fixed-price projects. Differing time zones led to logistical challenges, <strong>but their experience and work ethic compensated for any issues</strong>.
                                                                    </p>
                                                                    <span class="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                        <span class="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                        <span class="c-chat-decor__line c-chat-decor__line--right"></span>
                                                                    </span>
                                                                </div>
                                                                <footer class="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                                    <figure class="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                        <img src={images['pic-lance-redgrave.jpg']} alt="Lance Redgrave" />
                                                                    </figure>
                                                                    <div class="c-testimonial__foot__info u-text-upper">
                                                                        <strong class="u-decor-bottom--alt t-style-fpn-s-r">Lance Redgrave</strong> <br />CEO <br />Redfox Media, Sydney
                                                                    </div>
                                                                </footer>
                                                            </blockquote>
                                                        </li>
                                                        <li class="c-testimonials-list__item g-gutter-right-3 g-gutter-right-0@tablet swiper-slide">
                                                            <blockquote class="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-left-2@tablet g-gutter-left-1@mobile g-gutter-right-2@tablet g-gutter-right-1@mobile" aria-label="Testimonial">
                                                                <div class="c-testimonial__content t-style-fpn-m-ri c-chat-decor-parent">
                                                                    <p class="u-line-h-m">
                                                                        We’ve had the ultimate good fortune of working with Chris and his team since 2015, building dozens upon dozens of sites. <strong>They deliver exactly when they say they will</strong> and it’s always pixel-perfect. But not only that, they prefer to under-promise and over-deliver!
                                                                    </p>
                                                                    <span class="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                        <span class="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                        <span class="c-chat-decor__line c-chat-decor__line--right"></span>
                                                                    </span>
                                                                </div>
                                                                <footer class="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                                    <figure class="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                        <img src={images['pic_michal-kenderski.jpg']} alt="Michal Kenderski" />
                                                                    </figure>
                                                                    <div class="c-testimonial__foot__info u-text-upper">
                                                                        <strong class="u-decor-bottom--alt t-style-fpn-s-r">Michal Kenderski</strong> <br />CEO <br />
                                                                        Republik-Media, London
                                                                    </div>
                                                                </footer>
                                                            </blockquote>
                                                        </li>
                                                        <li class="c-testimonials-list__item g-gutter-right-3 g-gutter-right-0@tablet swiper-slide">
                                                            <blockquote class="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-left-2@tablet g-gutter-left-1@mobile g-gutter-right-2@tablet g-gutter-right-1@mobile" aria-label="Testimonial">
                                                                <div class="c-testimonial__content t-style-fpn-m-ri c-chat-decor-parent">
                                                                    <p class="u-line-h-m">
                                                                        Pagepro came on board at the last minute to help us out with a complex project. <strong>They proved to be an invaluable resource.</strong> They are great at problem solving, very organised and deliver in a timely fashion. I’d recommend them highly and will look forward to working with them again on future projects.
                                                                    </p>
                                                                    <span class="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                        <span class="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                        <span class="c-chat-decor__line c-chat-decor__line--right"></span>
                                                                    </span>
                                                                </div>
                                                                <footer class="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                                    <figure class="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                        <img src={images['pic_carole-egerton.jpg']} alt="Carole Egerton" />
                                                                    </figure>
                                                                    <div class="c-testimonial__foot__info u-text-upper">
                                                                        <strong class="u-decor-bottom--alt t-style-fpn-s-r">Carole Egerton</strong> <br />Managing Director <br />Baffle &amp; Zander, London
                                                                    </div>
                                                                </footer>
                                                            </blockquote>
                                                        </li>
                                                        <li class="c-testimonials-list__item g-gutter-right-3 g-gutter-right-0@tablet swiper-slide">
                                                            <blockquote class="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-left-2@tablet g-gutter-left-1@mobile g-gutter-right-2@tablet g-gutter-right-1@mobile" aria-label="Testimonial">
                                                                <div class="c-testimonial__content t-style-fpn-m-ri c-chat-decor-parent">
                                                                    <p class="u-line-h-m">
                                                                        <strong>They are more than a great development team.</strong> They are a partner that helps create high quality applications.
                                                                    </p>
                                                                    <span class="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                        <span class="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                        <span class="c-chat-decor__line c-chat-decor__line--right"></span>
                                                                    </span>
                                                                </div>
                                                                <footer class="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                                    <figure class="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                        <img src={images['pic_paul-horrocks.jpg']} alt="John Horrocks" />
                                                                    </figure>
                                                                    <div class="c-testimonial__foot__info u-text-upper">
                                                                        <strong class="u-decor-bottom--alt t-style-fpn-s-r">John Horrocks</strong><br />
                                                                        Rocksurance<br />
                                                                        New York City
                                                                    </div>
                                                                </footer>
                                                            </blockquote>
                                                        </li>
                                                    </ol>
                                                </div>
                                                <div class="c-slider-wrapper__navigation swiper-navigation g-gutter-top-5 g-gutter-top-3@mobile g-gutter-bottom-5@tablet">
                                                    <span class="c-slider-button c-slider-button--prev js-slider-prev" aria-label="go to next slide"></span>
                                                    <span class="c-slider-button c-slider-button--next js-slider-next" aria-label="go to previous slide"></span>
                                                    <ol class="c-dots-list">
                                                        <li class="c-dots-list__item">
                                                            <span class="c-dot u-bg-4 u-paint-2"></span>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-3@desktop-small u-paint-5 u-bg-6">
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row u-paint-2">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Other <strong>recommended services</strong>
                                            </h3>
                                            <p class="g-gutter-top-1">
                                                We offer the best front-end development services by choosing <strong>the right technology for your requirements</strong>. Our experts can provide <strong>consultation</strong> for you on the technology and frameworks to select for your product.
                                            </p>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul class="c-info-boxes-list c-info-boxes-list--rwd-alt g-spacing-bottom-minus-4 g-spacing-bottom-minus-2@desktop-small">
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div class="l-sec__box__head u-paint-1">
                                                            <h4 class="t-style-fpn-l-r-u">
                                                                <span class="c-ico-label">
                                                                    <span class="c-ico-label__media" aria-hidden="true">
                                                                        <span class="o-icon-wrapper o-icon-wrapper--alt">
                                                                            <span class="o-icon o-icon--react"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="c-ico-label__info">
                                                                        ReactJS Development
                                                                    </span>
                                                                </span>
                                                            </h4>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                React.js is <strong>one of the most popular libraries</strong> for creating modern, single-page applications. React allows creating <strong>rich user interfaces in a declarative way</strong>, which is easier to understand for developers and provides <strong>a faster way to produce a final effect</strong> for end users.
                                                            </p>
                                                        </div>
                                                        <div class="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                            <Link class="c-cta-link s-btn-style-3" to="/services/react-development">
                                                                <span class="c-label">Read more</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div class="l-sec__box__head u-paint-1">
                                                            <h4 class="t-style-fpn-l-r-u">
                                                                <span class="c-ico-label">
                                                                    <span class="c-ico-label__media" aria-hidden="true">
                                                                        <span class="o-icon-wrapper o-icon-wrapper--alt">
                                                                            <span class="o-icon o-icon--nodejs"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="c-ico-label__info">
                                                                        Node.JS Development
                                                                    </span>
                                                                </span>
                                                            </h4>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Node.js is <strong>an open source environment</strong> that executes JavaScript code outside of a browser. Node.js really shines when it comes to creating <strong>data streaming applications</strong> or <strong>server-side web apps</strong>. By using <strong>an extraordinarily fast V8 engine</strong>, Node.js apps perform <strong>multiple operations at the same time</strong>.
                                                            </p>
                                                        </div>
                                                        <div class="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                            <Link class="c-cta-link s-btn-style-3" to="/services/nodejs-development">
                                                                <span class="c-label">Read more</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small u-bg-5">
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-xl-r-u u-paint-1 u-text-centered">
                                                Have a project in mind?
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-align-center g-gutter-top-4 g-gutter-top-3@desktop-small g-gutter-top-2@mobile">
                                    <div class="l-sec__box gr-6 gr-12@mobile-big no-gutter@mobile-big">
                                        <div class="l-sec__box__content t-style-fpn-s-r u-line-h-m">
                                            <p class="u-text-centered">
                                                We are ready to <strong>share our knowledge and expertise with you</strong>.
                                            </p>
                                            <p class="g-gutter-top-1 u-text-centered">
                                                <strong class="t-style-fpn-s-s">Let's build something amazing together!</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-align-center g-gutter-top-4 g-gutter-top-3@desktop-small">
                                    <div class="l-sec__box gr-6">
                                        <div class="l-sec__box__actions c-decors-parent">
                                            <div class="c-decors-box" aria-hidden="true">
                                                <div class="c-decor-wrapper c-decor-wrapper--center-vertical c-decor-wrapper--right">
                                                    <span class="c-plane-decor u-paint-4">
                                                        <span class="o-icon o-icon--plane"></span>
                                                    </span>
                                                </div>
                                            </div>
                                            <a class="c-cta-link s-btn-style-3" href="contact.html">
                                                <span class="c-label">Contact us</span>
                                            </a>
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

export const fluidFrontendBgImage = graphql`
fragment fluidFrontendBgImage on File {
            childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid
        }
        }
      }
      `


export const FrontendQuery = graphql`
query {
      bgAgencies: file(relativePath: {eq: "bg_agencies.jpg" }) {
        ...fluidFrontendBgImage
    }
        }
        `

export default FrontendDevelopment;

