import React from "react"
import Header from '../../components/header';
import Footer from '../../components/footer';
import { graphql } from 'gatsby';
// import BgImage from '../../components/bgImage'
import ProjectsAndWorkshop from "../../components/projectsAndWorkshop";
import bgAgencies from '../../../static/img/bg_agencies.jpg'


function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../../static/img/', false, /\.(jpg|svg)$/));

const ReactNativeDevelopment = (props) => (
    <>
        <div id="page-content">

            <div className="p-about">


                <Header />

                <main className="l-main">
                    {/* <BgImage
                        title="bgAgencies"
                        fluid={props.data.bgAgencies.childImageSharp.fluid}
                        className="l-hero l-hero--alt l-hero--small l-hero--with-overlay  u-paint-4"
                        height='399px'
                    >
                        <div className="l-inner g-gutter-top-10 g-gutter-bottom-5 g-gutter-bottom-3@mobile">
                            <div className="l-hero__head row row-align-bottom g-gutter-top-8 g-gutter-top-0@mobile">
                                <div className="l-hero__head__box">
                                    <h2 className="t-style-fpn-xxl-b g-spacing-top-2">
                                        Node.js Development
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </BgImage> */}
                    <div class="l-hero l-hero--alt l-hero--small l-hero--with-overlay u-bg-2 u-paint-4" style={{ backgroundImage: `url(${bgAgencies})`, backgroundPosition: '100% 50%' }}>
                        <div class="l-inner g-gutter-top-10 g-gutter-bottom-5 g-gutter-bottom-3@mobile">
                            <div class="l-hero__head row row-align-bottom g-gutter-top-8 g-gutter-top-0@mobile">
                                <div class="l-hero__head__box">
                                    <h2 class="t-style-fpn-xxl-b g-spacing-top-2">
                                        Node.js Development
                            </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="l-sec" id="offer--lead-text">
                        <div className="l-row">
                            <div className="l-inner g-gutter-top-5 g-gutter-top-4@desktop-small g-gutter-bottom-1 g-gutter-bottom-1@desktop-small">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head u-paint-1">
                                            <h2 className="t-style-fpn-l-r-u">
                                                <span className="c-ico-label">
                                                    What is Node.js?
                                        </span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec" id="offer--intro-text">
                        <div className="l-row">
                            <div className="l-sec__box gr-12 no-gutter">
                                <div className="l-inner g-gutter-top-3 g-gutter-top-1@desktop-small g-gutter-bottom-4 g-gutter-bottom-3@desktop-small u-paint-5">
                                    <div className="l-sec__box__content u-paint-2">
                                        <div className="row row-align-between g-gutter-top-2@desktop-small g-gutter-bottom-2@desktop-small">
                                            <div className="l-sec__box gr-2 gr-12@mobile u-paint-1 t-style-fpn-l-r-u no-gutter-left no-gutter@mobile g-gutter-bottom-2@mobile g-gutter-bottom-1@mobile-small">
                                                <div className="l-sec__box__content o-svg-wrapper--sec">
                                                    <img src={images['nodejs.svg']} alt="Node.js logo" />
                                                </div>
                                            </div>
                                            <div className="l-sec__box gr-9 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile-medium g-spacing-top-1@mobile-small">
                                                <div className="l-sec__box__content">
                                                    <p>
                                                        <strong>Node.js is an open source environment that executes JavaScript code outside of a browser</strong>. It is very fast and lightweight ecosystem because it uses under the hood the <strong>JavaScript V8 engine from Google</strong>. The principal objective of Node.js is to provide an efficient solution for developing <strong>scalable</strong> and <strong>maintainable</strong> network applications. This cannot be done without <strong>JavaScript</strong> which is truly asynchronous language and heart of Node.js. If you are looking for an environment which allows building real-time, cross-platform and reliable applications Node.js is an <strong>ideal choice</strong>.
                                            </p>
                                                    <p className="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                        Node.js is a perfect tool for building modern, <strong>server-side web and network applications</strong> because it uses an event-driven, non-blocking I/O model that makes it <strong>lightweight and effective</strong>. But web apps don't have to be the only target. By providing modules to work with file system, developers can also use Node.js for <strong>creating shell scripts</strong> for task automation. This makes Node.js a powerful weapon not only in the hands of programmers but also as a great instrument for DevOps engineers and system administrators.
                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-3@desktop-small u-paint-5 u-bg-6">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Why we did choose <strong>Node.js in Pagepro?</strong>
                                            </h3>
                                            <p className="g-gutter-top-1">
                                                We are JavaScript experts and we chose Node.js as a fundamental tool for creating our <strong>back-end services</strong>. Node.js allows us to create <strong>rich network apps</strong> with the same language that we use on the browser. This allows achieving our purposes faster than in other languages. With Node.js we get an efficient platform to help us resolve most of the difficulties that arise during the development of the web apps. When creating applications in React.js, Node.js allows us to use <strong>server-side rendering</strong>, which significantly improves performance and has a positive impact on SEO. Whether it is a back-end, <strong>streaming or microservice application</strong>, choosing Node.js brings <strong>many benefits</strong>.
                                    </p>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list g-spacing-bottom-minus-4 g-spacing-bottom-minus-2@desktop-small">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--people"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Open Source</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Node.js is an open source environment with a large community, it is free to use and easy to install. The community of Node.js is open and friendly, enthusiastic to share any packages of code.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--screen-js"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Cross-Platform compatibility</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Node.js allows you to create an application for different platforms without worrying about compatibility. JavaScript can run across multiple operating systems and flush their inconsistencies.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--dollar-molecule"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">RealTime and Scalability</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Node.js has event-driven and non-blocking I/O model which allows handling concurrent requests without difficulties and scales easily than most of the other solutions.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--chart-grow"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">High performance</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Node.js uses one of the fastest and most dynamic runtimes - V8 engine. Applications in Node.js are fast even when performing multiple operations at the same time.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--screen-idea"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Rapid Development</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Using the same codebase between different platforms and the same language on front-end and back-end sides gives clients a faster time to market.
                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--settings"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">External packages and extensions</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Node.js has the biggest package manager in the software world in own ecosystem - NPM. Any developer can publish personal modules in a public repository. Each module usually takes care of one task, so it is very effective.
                                                    </p>
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
                    <section className="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-3@desktop-small">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                When to consider <strong>Node.js?</strong>
                                            </h3>
                                            <p className="g-gutter-top-1">
                                                Node.js can be used in <strong>many common tasks</strong> performed on the back-end like presenting records from the databases, serving websites, communicating with the file system or providing API services. But they are areas where <strong>Node.js really shines</strong>.
                                    </p>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-4 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">
                                                                Real-time chatbots or chat apps
                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">
                                                                Multiplayer and online games
                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">
                                                                Server-side web apps
                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-3">
                                            <ul className="c-info-boxes-list">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">
                                                                Data streaming
                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">
                                                                Big data manipulation apps
                                                    </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">
                                                                Microservices architecture
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
                    </section>
                    <section className="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-2@desktop-small">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Our Tech Stack Used in <strong>Node.js Development</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box gr-12 g-gutter-top-5 g-gutter-top-3@desktop-small u-paint-4">
                                            <ul className="c-info-boxes-list c-info-boxes-list--alt">
                                                <li className="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['react.svg']} alt="React logo" />
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">React</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['react-native.svg']} alt="React Native logo" />
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">React Native</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['webpack.svg']} alt="Webpack logo" />
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Webpack</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['javascript.svg']} alt="JavaScript logo" />
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">JavaScript ES6</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-0@mobile t-left">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['gulp.svg']} alt="Gulp logo" />
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 className="t-style-fpn-s-r-u u-paint-1">Gulp</h4>
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
                    <section className="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-3@desktop-small u-bg-6">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Work with Node.js <strong>developers who know their craft</strong>
                                            </h3>
                                            <p className="g-gutter-top-1">
                                                Because we are true enthusiasts of web technologies, we develop every project with <strong>great attention to details</strong>. At Pagepro, we help small or large companies build real-time network applications that are fast and scalable and satisfy their requirements. Our team are experienced enough in using the <strong>advanced Node.js programming architecture</strong> to improve the functionalities and features of the product so that it can work more efficiently for your industry. We listen carefully to your comments at every stage of product creation and we also try to surprise you with our ideas.
                                    </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-gutter-top-4 g-gutter-top-3@mobile">
                                    <div className="l-sec__box gr-6 gr-12@mobile u-paint-1 t-style-fpn-l-r-u no-gutter-left no-gutter@mobile">
                                        <div className="l-sec__box__content u-text-right u-text-left@mobile">
                                            <p>
                                                Dedicated Teams
                                    </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-6 g-gutter-top-3@mobile gr-12@mobile u-paint-1 t-style-fpn-l-r-u no-gutter-right g-gutter-left-5 no-gutter-left@mobile">
                                        <div className="l-sec__box__content u-text-left">
                                            <p>
                                                Competitive Pricing
                                    </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-gutter-top-4 g-gutter-top-3@mobile">
                                    <div className="l-sec__box gr-6 gr-12@mobile u-paint-1 t-style-fpn-l-r-u no-gutter-left no-gutter@mobile">
                                        <div className="l-sec__box__content u-text-right u-text-left@mobile">
                                            <p>
                                                Experience and Expertise
                                    </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-6 gr-12@mobile g-gutter-top-3@mobile u-paint-1 t-style-fpn-l-r-u no-gutter-right g-gutter-left-5 no-gutter-left@mobile">
                                        <div className="l-sec__box__content u-text-left">
                                            <p>
                                                Strong project management
                                    </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-gutter-top-4 g-gutter-top-3@mobile">
                                    <div className="l-sec__box gr-6 gr-12@mobile u-paint-1 t-style-fpn-l-r-u no-gutter-left no-gutter@mobile">
                                        <div className="l-sec__box__content u-text-right u-text-left@mobile">
                                            <p>
                                                Continuous communication
                                    </p>
                                        </div>
                                    </div>
                                    <div className="l-sec__box gr-6 gr-12@mobile g-gutter-top-3@mobile u-paint-1 t-style-fpn-l-r-u no-gutter-right g-gutter-left-5 no-gutter-left@mobile">
                                        <div className="l-sec__box__content u-text-left">
                                            <p>
                                                Customized services
                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Pagepro <strong>in numbers</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list c-info-boxes-list--rwd-alt g-spacing-bottom-minus-4 g-spacing-bottom-minus-2@desktop-small">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u">Projects done in 2018</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong className="t-style-fpn-xxxl-l u-paint-1" data-counter>176</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u">PSD converted into HTML in 2018</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong className="t-style-fpn-xxxl-l u-paint-1" data-counter>1757</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u">WordPress Projects in 2018</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong className="t-style-fpn-xxxl-l u-paint-1" data-counter>38</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u">Commits per week</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong className="t-style-fpn-xxxl-l u-paint-1" data-counter>1124</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u">Years in business</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong className="t-style-fpn-xxxl-l u-paint-1" data-counter>10</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u">Team members</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong className="t-style-fpn-xxxl-l u-paint-1" data-counter>18</strong>
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

                    <section className="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-3@desktop-small u-bg-6">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Have <strong>an awesome idea?</strong>
                                            </h3>
                                            <p className="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                Do you have a <strong>Node.js project to implement</strong>? Feel free to share your idea with us! We will be glad to answer all your questions and we will help you to <strong>estimate your project</strong>.
                                    </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-gutter-top-3">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__content">
                                            <form className="f-form f-form--contact js__form--contact">
                                                <fieldset>
                                                    <div className="f-form__row row">
                                                        <div className="f-form__box gr-6 gr-12@tablet no-gutter-left no-gutter@tablet">
                                                            <div className="row">
                                                                <div className="gr-6 gr-12@mobile no-gutter-left no-gutter@mobile">
                                                                    <div className="f-form__section">
                                                                        <div className="f-field f-field--anim f-field--input">
                                                                            <div className="f-label-wrapper">
                                                                                <label className="t-style-fpn-xxs-r u-paint-3" for="contact_full-name">Full Name</label>
                                                                            </div>
                                                                            <div className="f-input-wrapper f-input-wrapper--person u-paint-3">
                                                                                <input className="u-paint-2" required type="text" name="msg_name" id="contact_full-name" value="" />
                                                                                <span className="o-icon o-icon--user u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="f-form__section g-spacing-top-2 g-spacing-top-1@mobile">
                                                                        <div className="f-field f-field--anim f-field--input">
                                                                            <div className="f-label-wrapper">
                                                                                <label className="t-style-fpn-xxs-r u-paint-3" for="contact_email">E-mail Address</label>
                                                                            </div>
                                                                            <div className="f-input-wrapper f-input-wrapper--mail u-paint-3">
                                                                                <input className="u-paint-2" required type="email" name="msg_email" id="contact_email" value="" />
                                                                                <span className="o-icon o-icon--mail u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-1@mobile">
                                                                    <div className="f-form__section">
                                                                        <div className="f-field f-field--anim f-field--input">
                                                                            <div className="f-label-wrapper">
                                                                                <label className="t-style-fpn-xxs-r u-paint-3" for="contact_company">Company</label>
                                                                            </div>
                                                                            <div className="f-input-wrapper f-input-wrapper--company u-paint-3">
                                                                                <input className="u-paint-2" type="text" name="msg_company" id="contact_company" value="" />
                                                                                <span className="o-icon o-icon--building u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="f-form__section g-spacing-top-2 g-spacing-top-1@mobile">
                                                                        <div className="f-field f-field--anim f-field--input">
                                                                            <div className="f-label-wrapper">
                                                                                <label className="t-style-fpn-xxs-r u-paint-3" for="contact_phone">Phone Number</label>
                                                                            </div>
                                                                            <div className="f-input-wrapper f-input-wrapper--phone u-paint-3">
                                                                                <input className="u-paint-2" type="text" name="msg_phone" id="contact_phone" value="" />
                                                                                <span className="o-icon o-icon--phone u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="f-form__box f-form__box--stretch gr-6 gr-12@tablet no-gutter-right no-gutter@tablet g-spacing-top-2@tablet g-spacing-top-1@mobile">
                                                            <div className="row">
                                                                <div className="gr-12 no-gutter">
                                                                    <div className="f-form__section">
                                                                        <div className="f-field f-field--anim f-field--textarea">
                                                                            <div className="f-label-wrapper">
                                                                                <label className="t-style-fpn-xxs-r u-paint-3" for="contact_description">Message</label>
                                                                            </div>
                                                                            <div className="f-textarea-wrapper u-paint-3">
                                                                                <textarea className="u-paint-2" required id="contact_description" name="msg_content"></textarea>
                                                                                <span className="o-icon o-icon--comment u-paint-1"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="f-form__row row row-align-right g-gutter-top-3">
                                                        <div className="f-form__box gr-adapt no-gutter">
                                                            <button className="c-btn s-btn-style-4">
                                                                <span className="c-label">Send a message</span>
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
                        header={<h2 className="t-style-fpn-l-r-u">
                            Learn the latest technologies <strong>with us!</strong>
                        </h2>}
                        description={<p className="g-gutter-top-1">
                            Node.js is one of our <strong>core competencies</strong> and we love to share the knowledge about it. We do this in different ways like participating in <strong>conferences</strong> or <strong>workshops</strong>. Our experts also spread their experience in <strong>internal meetups</strong> or by <strong>writing interesting articles on the blog</strong>.
                    </p>}
                    />

                    <section className="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small u-bg-5">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-xl-r-u u-paint-1 u-text-centered">
                                                Still in doubts?
                                    </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-align-center g-gutter-top-4 g-gutter-top-3@desktop-small g-gutter-top-2@mobile">
                                    <div className="l-sec__box gr-6 gr-12@mobile-big no-gutter@mobile-big">
                                        <div className="l-sec__box__content t-style-fpn-s-r u-line-h-m">
                                            <p className="u-text-centered">
                                                Do you have a <strong>project to implement</strong>?
                                    </p>
                                            <p className="u-text-centered">
                                                Or maybe you are not sure if Node.js is the right tool for you?
                                    </p>
                                            <p className="g-gutter-top-1 u-text-centered">
                                                <strong className="t-style-fpn-s-s">Please feel free to share your doubts with us.</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-align-center g-gutter-top-4 g-gutter-top-3@desktop-small">
                                    <div className="l-sec__box gr-6">
                                        <div className="l-sec__box__actions c-decors-parent">
                                            <div className="c-decors-box" aria-hidden="true">
                                                <div className="c-decor-wrapper c-decor-wrapper--center-vertical c-decor-wrapper--right">
                                                    <span className="c-plane-decor u-paint-4">
                                                        <span className="o-icon o-icon--plane"></span>
                                                    </span>
                                                </div>
                                            </div>
                                            <a className="c-cta-link s-btn-style-3" href="contact.html">
                                                <span className="c-label">Contact us</span>
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

export const fluidNodejsBgImage = graphql`
                            fragment fluidNodejsBgImage on File {
                            childImageSharp {
                                fluid(quality: 90, maxWidth: 4160) {
                                ...GatsbyImageSharpFluid
                                    }
                            }
                        }
                        `


export const NodejsQuery = graphql`query {

                        bgAgencies: file(relativePath: {eq: "bg_agencies.jpg" }) {
                            ...fluidNodejsBgImage
                        }

                        }
                        `

export default ReactNativeDevelopment;