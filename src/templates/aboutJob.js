import React, { Component } from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import Instagram from "../components/instagram"
import BgImage from '../components/bgImage'

class AboutJob extends Component {

    render() {

        const { position, long_description, minimum_amount, maximum_amount, location, responsibilities, requirements, nice_to_have } = this.props.pageContext;

        return (
            <>
                <div id="page-content">

                    <div className="p-about">


                        <Header />

                        <main className="l-main">
                            <BgImage
                                title="bgAgencies"
                                fluid={this.props.data.bgAgencies.childImageSharp.fluid}
                                height='454px'
                                className="l-hero l-hero--alt l-hero--small l-hero--with-overlay  u-paint-4" >
                                <div className="l-inner g-gutter-top-8 g-gutter-bottom-10">
                                    <div className="l-hero__head row row-align-bottom g-gutter-top-8">
                                        <div className="l-hero__head__box">
                                            <strong className="t-style-fpn-xl-r-u">CAREER</strong>
                                            <h2 className="t-style-fpn-xxl-b g-spacing-top-1">
                                                {position}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </BgImage>
                            <section className="l-sec" id="career--lead-text">
                                <div className="l-row">
                                    <div className="l-inner g-gutter-top-5 g-gutter-top-4@desktop-small g-gutter-bottom-1 g-gutter-bottom-1@desktop-small">
                                        <div className="row">
                                            <div className="l-sec__box gr-12 no-gutter">
                                                <div className="l-sec__box__head u-paint-1">
                                                    <h3 className="t-style-fpn-l-r-u">
                                                        <span className="c-ico-label">
                                                            {position + ' ' + location}
                                                        </span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="l-sec" id="career--intro-text">
                                <div className="l-row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-inner g-gutter-top-3 g-gutter-top-3@desktop-small g-gutter-bottom-4 g-gutter-bottom-3@desktop-small u-paint-5">
                                            <div className="l-sec__box__content u-paint-2">
                                                <div className="row h-row-align-stretch u-paint-2">
                                                    <p>
                                                        {long_description}
                                                    </p>
                                                    {minimum_amount ? <p className="g-gutter-top-2 g-gutter-top-1@desktop-small u-paint-1">
                                                        Salary: <strong>{minimum_amount} - {maximum_amount} PLN NET </strong> per month. <br />
                                                        Location: <strong>{location}</strong>.
                                                    </p> : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="l-sec u-bg-6" id="career--requirements">
                                <div className="l-row">
                                    <div className="l-inner">
                                        <div className="row">
                                            <div className="l-sec__box gr-12 no-gutter u-paint-5">
                                                <div className="l-sec__box__content g-gutter-top-2 g-gutter-bottom-1">
                                                    <ul className="c-info-boxes-list">
                                                        <li className="c-info-boxes-list__item">
                                                            <div className="c-info-box g-gutter-right-3 g-gutter-right-1@desktop-small">
                                                                {responsibilities ? <div>
                                                                    <div className="c-info-box__head g-gutter-top-2">
                                                                        <h4 className="t-style-fpn-s-r-u u-paint-1">Responsibilities</h4>
                                                                    </div>
                                                                    <div class="c-info-box__content t-wysiwyg g-gutter-top-2 u-paint-2">
                                                                        <ul>
                                                                            {responsibilities.map((item, id) => <li key={id}>{item}</li>)}
                                                                        </ul>
                                                                    </div>
                                                                </div> : null}
                                                            </div>
                                                        </li>
                                                        <li className="c-info-boxes-list__item">
                                                            <div className="c-info-box g-gutter-right-3 g-gutter-right-1@desktop-small">
                                                                {requirements ? <div>
                                                                    <div className="c-info-box__head g-gutter-top-2">
                                                                        <h4 className="t-style-fpn-s-r-u u-paint-1">REQUIREMENTS</h4>
                                                                    </div>
                                                                    <div class="c-info-box__content t-wysiwyg g-gutter-top-2 u-paint-2">
                                                                        <ul>
                                                                            {requirements.map((item, id) => <li key={id}>{item}</li>)}
                                                                        </ul>
                                                                    </div>
                                                                </div> : null}
                                                            </div>
                                                        </li>
                                                        <li className="c-info-boxes-list__item">
                                                            <div className="c-info-box g-gutter-right-3 g-gutter-right-1@desktop-small">
                                                                {nice_to_have ? <div>
                                                                    <div className="c-info-box__head g-gutter-top-2">
                                                                        <h4 className="t-style-fpn-s-r-u u-paint-1">NICE TO HAVE</h4>
                                                                    </div>
                                                                    <div class="c-info-box__content t-wysiwyg g-gutter-top-2 u-paint-2">
                                                                        <ul>
                                                                            {nice_to_have.map((item, id) => <li key={id}>{item}</li>)}
                                                                        </ul>
                                                                    </div>
                                                                </div> : null}
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row h-row-align-stretch u-paint-2">
                                            <p>
                                                <strong>Sounds interesting?</strong> Join our team today!
                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="l-sec__box gr-12 no-gutter">
                                                <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-1 g-gutter-bottom-5 u-paint-5">
                                                    <a href="mailto:javascript@pagepro.co" className="c-cta-link s-btn-style-3">
                                                        <span className="c-label">APPLY NOW!</span>
                                                    </a>
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
                                                        Working at <strong>Pagepro</strong>
                                                    </h3>
                                                </div>
                                                <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                    <ul className="c-info-boxes-list">
                                                        <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                            <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                                <div className="c-info-box__media" aria-hidden="true">
                                                                    <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                        <span className="o-icon o-icon--international u-m-left-3"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <h4 className="t-style-fpn-s-r-u u-paint-1">International Projects</h4>
                                                                </div>
                                                                <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <p>
                                                                        <strong>We work with clients all over the world</strong>, usually with top-notch startups from UK&amp;US with the hottest tech stack.
                                        </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                            <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                                <div className="c-info-box__media" aria-hidden="true">
                                                                    <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                        <span className="o-icon o-icon--review"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <h4 className="t-style-fpn-s-r-u u-paint-1">Code Review</h4>
                                                                </div>
                                                                <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <p>
                                                                        Working with front-end experts and getting feedback from their code reviews <strong>will grow your pump your skills dramatically</strong>.
                                        </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="c-info-boxes-list__item">
                                                            <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                                <div className="c-info-box__media" aria-hidden="true">
                                                                    <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                        <span className="o-icon o-icon--react"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <h4 className="t-style-fpn-s-r-u u-paint-1">Latest Technologies</h4>
                                                                </div>
                                                                <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <p>
                                                                        Clients sometimes like to support legacy technologies, that is fine, but not in Pagepro. <strong>Every project we need to grow our developer's skills</strong>.
                                        </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="l-sec__box gr-12 no-gutter">
                                                <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                    <ul className="c-info-boxes-list">
                                                        <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                            <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                                <div className="c-info-box__media" aria-hidden="true">
                                                                    <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                        <span className="o-icon o-icon--chart-grow u-m-left-3"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <h4 className="t-style-fpn-s-r-u u-paint-1">Extreme Learning Speed</h4>
                                                                </div>
                                                                <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <p>
                                                                        <strong>The key to working at Pagepro is learning.</strong> Every 3 months we set new learning goals for you and every month we are checking on your progress.
                                        </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                            <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                                <div className="c-info-box__media" aria-hidden="true">
                                                                    <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                        <span className="o-icon o-icon--screen-idea u-m-left-3"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <h4 className="t-style-fpn-s-r-u u-paint-1">Career Path <a href="https://docs.google.com/spreadsheets/d/1LvNnEJtfCSGJ-DaF1NCEtKoJzhss7v2TfXhKAXmdpJo/edit?usp=sharing" className="t-lower" target="_blank">(preview)</a></h4>
                                                                </div>
                                                                <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <p>
                                                                        Every position at Pagepro is <strong>well described with clear requirements</strong>.
                                                                        You always know what stage are you are at now, and what you need to improve to be promoted.
                                        </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="c-info-boxes-list__item">
                                                            <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                                <div className="c-info-box__media" aria-hidden="true">
                                                                    <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                        <span className="o-icon o-icon--money"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <h4 className="t-style-fpn-s-r-u u-paint-1">Internal Trainings</h4>
                                                                </div>
                                                                <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <p>
                                                                        Every Friday you can work on non comercial projects to <strong>develop your skills</strong> in selected areas.
                                                                        Fridays are also spent on knowledge exchanging and sharing ideas.
                                        </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="l-sec__box gr-12 no-gutter">
                                                <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                                    <ul className="c-info-boxes-list">
                                                        <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                            <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                                <div className="c-info-box__media" aria-hidden="true">
                                                                    <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                        <span className="o-icon o-icon--screen-code u-m-left-3"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <h4 className="t-style-fpn-s-r-u u-paint-1">Best tools</h4>
                                                                </div>
                                                                <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <p>
                                                                        You will have the advantage of working on a brand new <strong>Apple Macbook</strong> with two flat-screen monitors. We will help you to configure and install the best software.
                                        </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                            <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                                <div className="c-info-box__media" aria-hidden="true">
                                                                    <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                        <span className="o-icon o-icon--screen-js u-m-left-3"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <h4 className="t-style-fpn-s-r-u u-paint-1">Flexible Working Hours</h4>
                                                                </div>
                                                                <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <p>
                                                                        Let's adjust your plan to work efficiently at the office or <strong>work remotly</strong> from any place in the world with an internet connection.
                                        </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="c-info-boxes-list__item">
                                                            <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                                <div className="c-info-box__media" aria-hidden="true">
                                                                    <span className="o-icon-wrapper o-icon-wrapper--big o-icon-wrapper--alt u-paint-1">
                                                                        <span className="o-icon o-icon--chart-wordpress u-m-left-3"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <h4 className="t-style-fpn-s-r-u u-paint-1">Other Bonuses</h4>
                                                                </div>
                                                                <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                                    <p>
                                                                        Free lunch every day, attending awesome company events and <strong>international conference trips</strong> are just some of the perks of being a member of the team.
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

                            <Instagram />
                        </main>
                    </div>

                    <Footer />


                </div>

            </>
        );
    }
}

export const aboutJobQuery = graphql`
    query {
        bgAgencies: file(relativePath: { eq: "bg_agencies.jpg" }) {
            childImageSharp {
              fluid(quality: 80, maxWidth: 4160) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    `

export default AboutJob;
