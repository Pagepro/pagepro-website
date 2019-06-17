import React from "react"
import Header from '../../components/header';
import Footer from '../../components/footer';
import { graphql } from 'gatsby';
import BgImage from '../../components/bgImage'
import ProjectsAndWorkshop from "../../components/projectsAndWorkshop";

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../../static/img/', false, /\.(jpg|svg)$/));

const ReactNativeDevelopment = (props) => (
    <>
        <div id="page-content">

            <div class="p-about">


                <Header />

                <main class="l-main">
                    <BgImage
                        title="bgAgencies"
                        fluid={props.data.bgAgencies.childImageSharp.fluid}
                        className="l-hero l-hero--alt l-hero--small l-hero--with-overlay u-paint-4"
                        height='399px' >
                        <div class="l-inner g-gutter-top-10 g-gutter-bottom-5 g-gutter-bottom-3@mobile">
                            <div class="l-hero__head row row-align-bottom g-gutter-top-8 g-gutter-top-0@mobile">
                                <div class="l-hero__head__box">
                                    <h2 class="t-style-fpn-xxl-b g-spacing-top-2">
                                        React Native Development
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
                                                    What is React Native?
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
                                            <div class="l-sec__box gr-2 gr-12@mobile u-paint-1 t-style-fpn-l-r-u no-gutter-left no-gutter@mobile g-gutter-bottom-2@mobile g-gutter-bottom-1@mobile-small">
                                                <div class="l-sec__box__content o-svg-wrapper--sec">
                                                    <img src={images['react-native.svg']} alt="React Native logo" />
                                                    >
                                                </div>
                                            </div>
                                            <div class="l-sec__box gr-9 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile-medium g-spacing-top-1@mobile-small">
                                                <div class="l-sec__box__content">
                                                    <p>
                                                        <strong>React Native is a modern and open sourced framework for creating native mobile applications on iOS and Android.</strong> By using React Native, web developers are able to create a native experience between different platforms with familiar technologies like <strong>JavaScript</strong> and <strong>JSX</strong>. It was developed by <strong>Facebook</strong> and it uses the same design as <strong>React.js</strong>, which is widely adopted in plenty of companies.
                                                    </p>
                                                    <p class="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                        The main difference between React Native and React.js is they focus on <strong>different targets</strong>. Developers who create rich mobile applications in React.js can use the same concept and most of their tools with React Native. By providing a bridge between JavaScript and native core, React Native gives a performance boost and allows mobile apps to be created easier than in traditional way. The <strong>declarative approach</strong> allows the focus to be on the business purpose instead of thinking about how the idea should be developed.
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
                                                Why we love <strong>React Native at Pagepro?</strong>
                                            </h3>
                                            <p class="g-gutter-top-1">
                                                In opposite to other libraries like PhoneGap or Ionic, React Native doesn't rely on device's WebView but instead, it provides <strong>real native views</strong> for each platform. Because we create a truly native app, we are free of problems associated with hybrid solutions. React Native gives clients a faster time to market with all the advantages of applications written in a traditional way.
                                            </p>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul class="c-info-boxes-list g-spacing-bottom-minus-4 g-spacing-bottom-minus-2@desktop-small">
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span class="o-icon o-icon--people"></span>
                                                            </span>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span class="t-style-fpn-s-r-u u-paint-1">Open Source</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                React Native is open source library with a great community and it is free to use. Developers can use it, therefore, avoiding problems with a license.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span class="o-icon o-icon--screen-js"></span>
                                                            </span>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span class="t-style-fpn-s-r-u u-paint-1">Cross-Platform</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                React Native allows you to create an application for Android and iOS and provides the ability to re-use most of the code between these platforms.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span class="o-icon o-icon--screen-idea"></span>
                                                            </span>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span class="t-style-fpn-s-r-u u-paint-1">Modular Architecture</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                A declarative way of creating apps in React Native allows you to build projects with a more flexible, web-style approach to development.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span class="o-icon o-icon--chart-grow"></span>
                                                            </span>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span class="t-style-fpn-s-r-u u-paint-1">Good Performance</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                React Native uses real, native controls for building user interfaces in both platforms, which avoids performance problems.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span class="o-icon o-icon--settings"></span>
                                                            </span>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span class="t-style-fpn-s-r-u u-paint-1">Live Reload</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                React Native comes with useful tools and features such as live reloading which allows you to significantly speed up the work on the project.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <span class="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span class="o-icon o-icon--dollar-molecule"></span>
                                                            </span>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span class="t-style-fpn-s-r-u u-paint-1">Live Updates</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                You don't have to wait for app stores' approvals for your updates. This mechanism is similar to web applications.
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
                    <section class="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-3@desktop-small">
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                We are not alone in <strong>our choice</strong>
                                            </h3>
                                            <p class="g-gutter-top-1">
                                                React Native has become a <strong>major alternative</strong> to creating mobile apps for many clients. The possibility of reusing most of the code between different platforms provides a faster way to produce a final effect for end users. Every year, more and more companies choose this solution and even the largest players base their products on React Native.
                                            </p>
                                            <p class="g-gutter-top-1 g-gutter-top-2@mobile u-text-centered">
                                                <strong class="t-style-fpn-s-s">We use the same technology stack as the largest companies in the industry!</strong>
                                            </p>
                                        </div>
                                        <div class="l-sec__box gr-12 g-gutter-top-4 g-gutter-top-3@mobile u-paint-4">
                                            <ul class="c-info-boxes-list c-info-boxes-list--alt">
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile u-text-centered">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['facebook.svg']} alt="Facebook logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">Facebook</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile u-text-centered">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['instagram.svg']} alt="Instagram logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">Instagram</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile u-text-centered">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['tesla.svg']} alt="Tesla logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">Tesla</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile u-text-centered">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['pinterest.svg']} alt="Pinterest logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">Pinterest</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile u-text-centered">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['skype.svg']} alt="Skype logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">Skype</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile u-text-centered">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['uber.svg']} alt="Uber logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">Uber</h4>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-0@mobile u-text-centered">
                                                        <div class="c-info-box__media" aria-hidden="true">
                                                            <figure class="o-svg-wrapper o-svg-wrapper--default">
                                                                <img src={images['salesforce.svg']} alt="Salesforce logo" />
                                                            </figure>
                                                        </div>
                                                        <div class="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <h4 class="t-style-fpn-s-r-u u-paint-1">Salesforce</h4>
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
                                                Cross-Platform <strong>capability</strong>
                                            </h3>
                                            <p class="g-gutter-top-1">
                                                The central goal of React Native is <strong>“Learn Once, Write Anywhere”</strong>. It doesn't mean that we use the same codebase in every platform but most of them. Some specific mechanisms don't exist everywhere like SnapshotView control which is specially designed only for iOS devices. But <strong>switching between particular parts is easy</strong> in React Native and it is made in a declarative way.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-gutter-top-4 g-gutter-top-3@mobile">
                                    <div class="l-sec__box gr-3 gr-12@mobile u-paint-1 t-style-fpn-l-r-u no-gutter-left no-gutter@mobile">
                                        <div class="l-sec__box__content u-text-right u-text-left@mobile">
                                            <p>
                                                ANDROID
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-8 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-2@mobile">
                                        <div class="l-sec__box__content">
                                            <p>
                                                Forget about problems with many webviews. Forget about poor performance and animation freezing. React Native for Android provides a <strong>consistent experience</strong> for thousands of devices and allows you to enjoy your application starting from small screens and ending up on big TV's.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-gutter-top-3 g-gutter-top-2@mobile">
                                    <div class="l-sec__box gr-3 gr-12@mobile u-paint-1 t-style-fpn-l-r-u no-gutter-left no-gutter@mobile">
                                        <div class="l-sec__box__content u-text-right u-text-left@mobile">
                                            <p>
                                                IOS
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-8 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-2@mobile">
                                        <div class="l-sec__box__content">
                                            <p>
                                                React Native for iOS gives access to the most important <strong>Apple services</strong> and provides a set of ready-made controls that are compatible with the official guidelines. Creating native applications for iOS using React Native is faster and reduces costs.
                                            </p>
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
                                                Let's do <strong>something amazing together!</strong>
                                            </h3>
                                            <p class="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                Are you looking for proven and <strong>efficient solutions</strong>? We will help you to estimate your project and you will be present with us at <strong>every stage of design</strong>.
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
                            Learn more <strong>with us!</strong>
                        </h2>}
                        description={<p class="g-gutter-top-1">
                            We love sharing our knowledge with others and we do it in <strong>different ways</strong>. Our developers are experts in React Native development and often <strong>participate in conferences and workshops</strong>. They also teach each other in internal training, do speak at meetups and write interesting articles on the blog.
                    </p>}
                    />
                    <section class="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small u-bg-5">
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-xl-r-u u-paint-1 u-text-centered">
                                                Still in doubts?
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-align-center g-gutter-top-4 g-gutter-top-3@desktop-small g-gutter-top-2@mobile">
                                    <div class="l-sec__box gr-6 gr-12@mobile-big no-gutter@mobile-big">
                                        <div class="l-sec__box__content t-style-fpn-s-r u-line-h-m">
                                            <p class="u-text-centered">
                                                Not sure if our solution fit for you?
                                            </p>
                                            <p class="g-gutter-top-1 u-text-centered">
                                                <strong class="t-style-fpn-s-s">Give us a chance to discuss your ideas more.</strong>
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
                                                <span class="c-label">Request a quote</span>
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

export const fluidReactNativeBgImage = graphql`
                            fragment fluidReactNativeBgImage on File {
                            childImageSharp {
                                fluid(quality: 90, maxWidth: 4160) {
                                ...GatsbyImageSharpFluid
                                    }
                            }
                        }
                        `


export const ReactNativeQuery = graphql`query {
                            
                        bgAgencies: file(relativePath: {eq: "bg_agencies.jpg" }) {
                            ...fluidReactNativeBgImage
                        }

                        }
                        `

export default ReactNativeDevelopment;