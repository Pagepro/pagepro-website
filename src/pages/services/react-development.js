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

const ReactDevelopment = (props) => (
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
                                        React Development
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
                                                    What is React?
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
                                                    <img src={images['react.svg']} alt="React logo" />
                                                </div>
                                            </div>
                                            <div className="l-sec__box gr-9 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile-medium g-spacing-top-1@mobile-small">
                                                <div className="l-sec__box__content">
                                                    <p>
                                                        <strong>React.js is the trendiest library used to create user interface</strong> in modern single-page applications. It was designed by Facebook to satisfy their needs of adjustability, extensibility and convenience. Now React is driving force behind products of the most successful companies like <strong>Airbnb</strong>, <strong>Instagram</strong> and <strong>Netflix</strong>.
                                                    </p>
                                                    <p className="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                        This technology is all about building interface with small, reusable components that are easy to maintain. In contrast to traditional JavaScript applications, React allows us to write code in declarative style. It takes care of the inner workings of updating the browser and lets us focus on developing application’s features.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small u-bg-6">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h2 className="t-style-fpn-l-r-u">
                                                Core benefits of using <strong>React</strong>
                                            </h2>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">
                                                                Modularity
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Building interface with <strong>React components</strong> allows to really embrace agile approach to ever-changing business requirements. One component can be seamlessly modified without breaking the others. Thanks to this, we are able to deliver products that suits needs of our customers without unexpected delays and errors.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Performance</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                One of the React’s strongest suit is its <strong>blazing performance</strong>. Thanks to sophisticated algorithms, React performs costly updates of the browser content only when necessary. Composable architecture makes even the most complex remain really smooth and highly interactive.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Ecosystem</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                React’s ecosystem is one of <strong>the most rapidly growing open-source environment</strong> in web development history. Number of projects built around this technology increase exponentially each month. Developers has access to a lot of innovative, polished solutions used across the world. Such a tendency is the best guarantee of long-term support and further development of this awesome library.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">
                                                                Effective testing
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Testing of applications is straightforward thanks to one-way data flow and single responsibility rule embodied in React’s components. Predictable data flow and functional programming concepts widely used in React development make error detection possible at an early stage of development. All of this results in effective team work and project maintainability.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Versatility</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                React’s only concern is view layer, so it is great for building interfaces regardless of application’s size and complexity. Moreover, such an approach give us a free hand to choose all of the other tools required to meet development goals. Our stack will be precisely selected with yours project needs in mind.
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
                                            <h2 className="t-style-fpn-l-r-u">
                                                Our <strong>React</strong> Tech Stack
                                            </h2>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://redux.js.org/" target="_blank">
                                                                    <img src={images['redux.svg']} alt="Redux logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Redux</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                A predictable state container for JavaScript apps. Inspired by Flux architecture, provides a uni-directional way of updating Views and handling user actions. Redux promotes simple yet effective rules of <strong>state management</strong> which enforces encapsulation and immutability. Thanks to this, maintaining React apps gets even easier.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://facebook.github.io/react-native/" target="_blank">
                                                                    <img src={images['react.svg']} alt="React logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">React Native</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                A framework that allows to create real and exciting mobile apps that are powered with React’s magic. Thanks to <strong>cross-platform</strong> building, with one codebase we can build apps supported on both <strong>Android</strong> and <strong>iOS</strong>. This saves a lot of our time and your money.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <div className="o-svg-wrapper o-svg-wrapper--default">
                                                                <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                    <a href="https://www.styled-components.com/" target="_blank">
                                                                        <img src={images['screen-code.svg']} alt="Screen Code" />
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Styled components</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                A library that brings together CSS and power of JavaScript. It lets us apply modern styling solutions straight into React’s components and solves many of the maintainability problems associated with traditional CSS at the same time.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://github.com/storybooks/storybook" target="_blank">
                                                                    <img src={images['storybook.svg']} alt="Storybook logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Storybook</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                A tool that simplifies creating and maintaining a UI documentation site which includes actual, up-to-date components. Storybook provides access to interactive list of components that were created in the past. It makes adoption of UI patterns at Pagepro so much easier. No one reinvents the wheel, which saves time and increases consistency.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <div className="o-svg-wrapper o-svg-wrapper--default">
                                                                <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                    <a href="https://jestjs.io/" target="_blank">
                                                                        <img src={images['jest.svg']} alt="Jest logo" />
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Jest + Enzyme + Sinon</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                To ensure that our projects are error free, <strong>we use highly effective testing tools</strong> stack. Facebook’s Jest provides a test running environment, recognizable for its high performance. Airbnb’s Enzyme makes it easier to assert, manipulate and traverse React components. Sinon is our choice for creating spies, stubs and mocks that lead to even faster and more reliable tests.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media" aria-hidden="true">
                                                            <div className="o-svg-wrapper o-svg-wrapper--default">
                                                                <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                    <a href="https://webpack.js.org/" target="_blank">
                                                                        <img src={images['webpack.svg']} alt="Webpack logo" />
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Webpack</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Before shipping <strong>React code, it has to be transpilled</strong> into form understandable by the browsers, including legacy ones. Moreover, modern front end applications come with many non-code static assets such as CSS, images and fonts. With stable production deploys in mind, we use Webpack, a module bundler tool that automatizes the complex building process.
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

                    <ProjectsAndWorkshop
                        header={<h2 class="t-style-fpn-l-r-u">
                            Spreading our <strong>knowledge</strong>
                        </h2>}
                        description={<p class="g-gutter-top-1 g-gutter-top-1@desktop-small">
                            Teaching is a part of our company's DNA: we do internal lectures and workshops, speak at meetups and conferences, write blog posts.
                    </p>}
                    />

                    <section className="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-3@desktop-small u-bg-6">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                Let's <strong>work together</strong>
                                            </h3>
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
                </main>
            </div>



            <Footer />


        </div>
    </>
)

export const fluidReactBgImage = graphql`
                            fragment fluidReactBgImage on File {
                            childImageSharp {
                                fluid(quality: 90, maxWidth: 4160) {
                                ...GatsbyImageSharpFluid
                                    }
                            }
                        }
                        `


export const ReactQuery = graphql`query {
                            
                        bgAgencies: file(relativePath: {eq: "bg_agencies.jpg" }) {
                            ...fluidReactBgImage
                        }

                        }
                        `

export default ReactDevelopment;