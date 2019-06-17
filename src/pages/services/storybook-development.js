import React from "react"
import Header from '../../components/header';
import Footer from '../../components/footer';
import { graphql, Link } from 'gatsby';
import BgImage from '../../components/bgImage'
import ProjectsAndWorkshop from "../../components/projectsAndWorkshop";

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../../static/img/', false, /\.(jpg|svg)$/));

const StorybookDevelopment = (props) => (
    <>
        <div id="page-content">

            <div className="p-about">

                <Header />

                <main className="l-main">
                    <BgImage
                        title="bgAgencies"
                        fluid={props.data.bgAgencies.childImageSharp.fluid}
                        className="l-hero l-hero--alt l-hero--small l-hero--with-overlay  u-paint-4"
                        height='399px'
                    >
                        <div className="l-inner g-gutter-top-10 g-gutter-bottom-5 g-gutter-bottom-3@mobile">
                            <div className="l-hero__head row row-align-bottom g-gutter-top-8 g-gutter-top-0@mobile">
                                <div className="l-hero__head__box">
                                    <h2 className="t-style-fpn-xxl-b g-spacing-top-2">
                                        Storybook Development
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </BgImage>
                    <section className="l-sec" id="offer--lead-text">
                        <div className="l-row">
                            <div className="l-inner g-gutter-top-5 g-gutter-top-4@desktop-small g-gutter-bottom-1 g-gutter-bottom-1@desktop-small">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head u-paint-1">
                                            <h2 className="t-style-fpn-l-r-u">
                                                <span className="c-ico-label">
                                                    What is Storybook?
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
                                            <div className="l-sec__box gr-2 u-paint-1 t-style-fpn-l-r-u no-gutter-left no-gutter@mobile g-gutter-bottom-2@mobile g-gutter-bottom-1@mobile-small">
                                                <div className="l-sec__box__content o-svg-wrapper--sec">
                                                    <img src={images['storybook.svg']} alt="Storybook development logo" />
                                                </div>
                                            </div>
                                            <div className="l-sec__box gr-9 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile-medium g-spacing-top-1@mobile-small">
                                                <div className="l-sec__box__content">
                                                    <p>
                                                        Storybook is an <strong>open source tool for developing</strong> and <strong>testing application components in isolation</strong>. By providing a convenient environment, Storybook facilitates the creation of new UI components for the <strong>most popular frameworks</strong> such as Angular, React or Vue. In work between many teams, it is very important to not reinvent the wheel but to <strong>share</strong> once created solutions. In this case, a good component library that allows a <strong>quick overview of the controls</strong> and sharing them becomes a <strong>crucial tool</strong> in the project.
                                                    </p>
                                                    <p className="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                        Storybook is not only useful for <strong>developers</strong> but also for <strong>designers</strong>. It enables <strong>quick listing of all components</strong> used in the project together with the possibility of changing their states. Thanks to that, designers can provide <strong>valuable feedback</strong> to developers much faster. If there are any inconsistencies between the components in the project, Storybook will help you locate them. It is a great tool for <strong>quality assurance engineers</strong> as well. The ability to run unit and snapshot tests for components and automatic visual testing <strong>improves the work</strong> on new components.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-1@desktop-small u-paint-5 u-bg-6">
                        <div className="l-row">
                            <div className="l-sec__box gr-12 no-gutter">
                                <div className="l-inner g-gutter-top-3 g-gutter-top-1@desktop-small g-gutter-top-1@desktop-small g-gutter-bottom-4 g-gutter-bottom-3@desktop-small u-paint-5">
                                    <div className="l-sec__box__content u-paint-2">
                                        <div className="l-sec__box__head g-gutter-bottom-2 no-gutter@mobile no-gutter@mobile-small no-gutter@desktop-small">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Why you should consider <strong>using a style guide</strong>?
                                            </h3>
                                        </div>
                                        <div className="row row-align-between g-gutter-top-2@desktop-small g-gutter-bottom-2@desktop-small g-gutter-bottom-0@mobile">
                                            <div className="l-sec__box gr-9 gr-12@mobile no-gutter-right no-gutter-left no-gutter@mobile">
                                                <div className="l-sec__box__content">
                                                    <p>
                                                        When there are more and more functionalities and components in the application, it is difficult to remain consistent and <strong>follow all changes</strong>. Requirements can change very dynamically, and this causes <strong>frequent modifications in design</strong>. Developers are changing projects, UX specialists and designers also, so <strong>one source of truth</strong> is needed for each project. No matter what libraries or frameworks you use. A good collaborative tool between team members is necessary for the <strong>correct flow of information</strong> in the team. In large projects, the key thing is <strong>consistency between different components</strong>. To avoid inconsistencies in design, it is usually a good idea to create <strong>separate documentation</strong> for all of your components. There are many tools for such purposes, and one of the most popular is <strong>Storybook</strong>.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="l-sec__box gr-2 u-paint-1 t-style-fpn-l-r-u no-gutter-left no-gutter-bottom@mobile g-gutter-top-2@mobile">
                                                <div className="l-sec__box__content o-svg-wrapper--sec">
                                                    <img src={images['react-code-review.svg']} alt="Style guide importance logo" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-3@desktop-small u-paint-5">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                What makes Storybook <strong>special</strong>?
                                            </h3>
                                            <p className="g-gutter-top-1">
                                                There are many tools that allow you to create <strong>a style guide for a project</strong>, but most of them only allow you to list the components used in the application. Another problem is that there are many different frameworks and it is difficult to create a universal tool that will handle applications of various types. Storybook deals with these issues very well and has <strong>many other advantages</strong> that are missing from other solutions.
                                            </p>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list g-spacing-bottom-minus-4 g-spacing-bottom-minus-2@desktop-small">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--target"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Testing in isolation</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                The individual components are separated from each other, independent and there is no fear that the styles of a given component will cause defects in other places.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--diamond"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Add-ons</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Storybook itself has many useful features, but it is possible to extend basic functionalities using external add-ons like knobs, viewport switcher or accessibility tools.
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
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Support for many frameworks</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Storybook was initially created only for React.js, but currently supports many other frameworks like Angular, Vue or even React Native. The configuration for each library is simple and allows you to get started quickly.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--building"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Export as a static app</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                As an independent platform, Storybook can be built and published as a static website and placed on any, even the most basic hosting service.
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
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Automated visual testing</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Storybook has several add-ons to help you work with tests such as unit tests or snapshots. With the support for external services integration, the storybook is also an excellent platform for automated testing.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                <span className="o-icon o-icon--plane"></span>
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Track changes</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Storybook allows you to visually track changes and view the history of individual components. With the help of additional add-on, auto-detect code regression is also possible.
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
                                                Hire <strong>dedicated Storybook developers and designers</strong>
                                            </h3>
                                            <p className="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                Do you have <strong>a project to implement</strong>, or want some <strong>expertise</strong>? We create projects where <strong>Storybook plays a key role</strong>, but we also can help you in the configuration of your style guide. Feel free to contact us! We will be glad to answer all your questions!
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
                            Learn more about Storybook development <strong>with us!</strong>
                        </h2>}
                        description={<p className="g-gutter-top-1">
                            Storybook is a convenient tool for us that we use to work on large projects and we love to <strong>share the knowledge</strong> about it. You can meet us at IT conferences and workshops. Our experts also spread their experience in <strong>internal meetups</strong> or by writing <strong>interesting articles</strong> on the blog.
                    </p>}
                    />

                    <section className="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-3@desktop-small u-paint-5">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row u-paint-2">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Other <strong>recommended services</strong>
                                            </h3>
                                            <p className="g-gutter-top-1">
                                                At Pagepro, we do not only help our clients in <strong>the Storybook configuration</strong>. Our main purpose is to create web applications that are also <strong>great for presentations</strong> in Storybook. Our experts can provide <strong>consultation</strong> for you on the technology and frameworks to select for your product.
                                            </p>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list c-info-boxes-list--rwd-alt g-spacing-bottom-minus-4 g-spacing-bottom-minus-2@desktop-small">
                                                <li className="c-info-boxes-list__item c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="l-sec__box__head u-paint-1">
                                                            <h4 className="t-style-fpn-l-r-u">
                                                                <span className="c-ico-label">
                                                                    <span className="c-ico-label__media" aria-hidden="true">
                                                                        <span className="o-icon-wrapper o-icon-wrapper--alt">
                                                                            <span className="o-icon o-icon--international"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span className="c-ico-label__info">
                                                                        Front-end Development
                                                                    </span>
                                                                </span>
                                                            </h4>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                We offer <strong>the best front-end development support</strong> by choosing the right technology for your requirements. <strong>Extensive experience in the front-end area</strong> allows us to simplify integration with the backend and deliver the finished product faster.
                                                            </p>
                                                        </div>
                                                        <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                            <Link className="c-cta-link s-btn-style-3" to="/services/frontend-development">
                                                                <span className="c-label">Read more</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item c-info-boxes-list__item--expanded g-spacing-bottom-5 g-spacing-bottom-3@desktop-small g-gutter-left-1@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="l-sec__box__head u-paint-1">
                                                            <h4 className="t-style-fpn-l-r-u">
                                                                <span className="c-ico-label">
                                                                    <span className="c-ico-label__media" aria-hidden="true">
                                                                        <span className="o-icon-wrapper o-icon-wrapper--alt">
                                                                            <span className="o-icon o-icon--react"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span className="c-ico-label__info">
                                                                        ReactJS Development
                                                                    </span>
                                                                </span>
                                                            </h4>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                React.js is one of the most popular libraries for creating <strong>modern</strong>, <strong>single-page applications</strong>. React allows creating rich user interfaces in a <strong>declarative way</strong>, which is easier to understand for developers and provides <strong>a faster way</strong> to produce a final effect for end users.
                                                            </p>
                                                        </div>
                                                        <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                                            <Link className="c-cta-link s-btn-style-3" to="/services/react-development">
                                                                <span className="c-label">Read more</span>
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
                                                Have a project in mind?
                                            </p>
                                            <p className="g-gutter-top-1 u-text-centered">
                                                Or maybe you are not sure if <strong>Storybook is the right tool</strong> for you?
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

export const fluidStorybookBgImage = graphql`
                            fragment fluidStorybookBgImage on File {
                            childImageSharp {
                                fluid(quality: 90, maxWidth: 4160) {
                                ...GatsbyImageSharpFluid
                                    }
                            }
                        }
                        `


export const StorybookQuery = graphql`query {
                            
                        bgAgencies: file(relativePath: {eq: "bg_agencies.jpg" }) {
                            ...fluidStorybookBgImage
                        }
                        bgCaseGatedtalent: file(relativePath: {eq: "bg_case-gatedtalent-rect.jpg" }) {
                            ...fluidStorybookBgImage
                        }

                        }
                        `

export default StorybookDevelopment;