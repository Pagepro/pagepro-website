import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BgImage from './bgImage'

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../static/img/', false, /\.(jpg|svg)$/));

export default (props) => (
    <StaticQuery
        query={graphql`
query {
      bgCaseGatedtalent: file(relativePath: { eq: "bg_case-gatedtalent-rect.jpg" }) {
        ...fluidProjectsBgImage
      }
      bgCaseMnfRect: file(relativePath: { eq: "bg_case-mnf-rect.jpg" }) {
        ...fluidProjectsBgImage
      }     
      bgCaseFapRect: file(relativePath: {eq: "bg_case-fap-rect.jpg" }) {
        ...fluidProjectsBgImage
      }
        }
        `
        }

        render={data => (
            <>
                <section className="l-sec l-sec--with-between-decor">
                    <div className="l-row">
                        <div className="l-inner g-gutter-top-6 g-gutter-top-3@desktop-small g-gutter-bottom-6 g-gutter-bottom-3@desktop-small">
                            <div className="row">
                                <div className="l-sec__box gr-12 no-gutter">
                                    <div className="l-sec__box__head">
                                        <h2 className="u-paint-1 t-style-fpn-l-r">
                                            Here are some examples of our <strong>Front-end</strong> projects:
                                </h2>
                                    </div>
                                    <div className="l-sec__box__content g-spacing-top-5 g-spacing-top-4@desktop-small c-between-decors-parent">
                                        <div className="c-slider-wrapper c-slider-wrapper--portfolio-teasers js-portfolio-teasers-slider">
                                            <div className="c-slider-wrapper__container swiper-container" aria-label="Portfolio teasers slider">
                                                <ol className="c-portfolio-teasers-list c-portfolio-teasers-list--small swiper-wrapper">
                                                    <li className="c-portfolio-teasers-list__item swiper-slide">
                                                        <div className="c-portfolio-teaser c-portfolio-teaser--small">
                                                            <a className="c-portfolio-teaser__inner u-paint-4" href="gatedtalent.html">
                                                                <div className="c-portfolio-teaser__media" >
                                                                    <BgImage
                                                                        title="bgCaseGatedtalent"
                                                                        fluid={data.bgCaseGatedtalent.childImageSharp.fluid} />
                                                                </div>
                                                                <div className="c-portfolio-teaser__main">
                                                                    <h2 className="t-style-fpn-l-b-u">
                                                                        GatedTalent
                                                            </h2>
                                                                    <p className="g-gutter-top-1 u-paint-3">
                                                                        React Single Page App
                                                            </p>
                                                                </div>
                                                                <div className="c-portfolio-teaser__add g-gutter-top-2">
                                                                    <span className="c-cta-btn s-btn-style-1-no-hover">
                                                                        <span className="c-label">Case study</span>
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li className="c-portfolio-teasers-list__item swiper-slide">
                                                        <div className="c-portfolio-teaser c-portfolio-teaser--small">
                                                            <a className="c-portfolio-teaser__inner u-paint-4" href="my-name-flow.html">
                                                                <div className="c-portfolio-teaser__media" >
                                                                    <BgImage
                                                                        title="bgCaseMnfRect"
                                                                        fluid={data.bgCaseMnfRect.childImageSharp.fluid}
                                                                    />
                                                                </div>
                                                                <div className="c-portfolio-teaser__main">
                                                                    <h2 className="t-style-fpn-l-b-u">
                                                                        MyNameFlow
                                                            </h2>
                                                                    <p className="g-gutter-top-1 u-paint-3">
                                                                        React Single Page App
                                                            </p>
                                                                </div>
                                                                <div className="c-portfolio-teaser__add g-gutter-top-2">
                                                                    <span className="c-cta-btn s-btn-style-1-no-hover">
                                                                        <span className="c-label">Case study</span>
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li className="c-portfolio-teasers-list__item swiper-slide">
                                                        <div className="c-portfolio-teaser c-portfolio-teaser--small">
                                                            <a className="c-portfolio-teaser__inner u-paint-4" href="frontend-app.html">
                                                                <div className="c-portfolio-teaser__media" >
                                                                    <BgImage
                                                                        title="bgCaseFapRect"
                                                                        fluid={data.bgCaseFapRect.childImageSharp.fluid}
                                                                    />
                                                                </div>
                                                                <div className="c-portfolio-teaser__main">
                                                                    <h2 className="t-style-fpn-l-b-u">
                                                                        FrontendApp
                                                            </h2>
                                                                    <p className="g-gutter-top-1 u-paint-3">
                                                                        AngularJS Development
                                                            </p>
                                                                </div>
                                                                <div className="c-portfolio-teaser__add g-gutter-top-2">
                                                                    <span className="c-cta-btn s-btn-style-1-no-hover">
                                                                        <span className="c-label">Case study</span>
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                            <div className="c-slider-wrapper__navigation swiper-navigation">
                                                <span className="c-slider-button c-slider-button--prev js-slider-prev" aria-label="go to next slide"></span>
                                                <span className="c-slider-button c-slider-button--next js-slider-next" aria-label="go to previous slide"></span>
                                                <ol className="c-dots-list g-gutter-top-2@mobile g-gutter-bottom-2@mobile">
                                                    <li className="c-dots-list__item">
                                                        <span className="c-dot u-bg-2 u-paint-1"></span>
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

                <section className="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small u-bg-6">
                    <div className="l-row">
                        <div className="l-inner">
                            <div className="row">
                                <div className="l-sec__box gr-12 no-gutter">
                                    <div className="l-sec__box__head">
                                        {props.header}
                                        {props.description}
                                    </div>
                                    <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                        <ul className="c-info-boxes-list">
                                            <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                    <div className="c-info-box__media c-info-box__media--alt" aria-hidden="true">
                                                        <figure className="o-img-wrapper">
                                                            <img src={images['reactjs-workshop.jpg']} alt="ReactJS open workshop" />
                                                        </figure>
                                                    </div>
                                                    <div className="c-info-box__head">
                                                        <span className="t-style-fpn-s-r-u u-paint-1">
                                                            Open Workshop: Introducing basics of React
                                                            </span>
                                                    </div>
                                                    <div className="c-info-box__content">
                                                        <p>
                                                            16.05.2018, Białystok, Poland.
                                                            </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                    <div className="c-info-box__media c-info-box__media--alt" aria-hidden="true">
                                                        <figure className="o-img-wrapper">
                                                            <img src={images['reactjs-lecture.jpg']} alt="ReactJS lecture at Bialystok University of Technology" />
                                                        </figure>
                                                    </div>
                                                    <div className="c-info-box__head">
                                                        <span className="t-style-fpn-s-r-u u-paint-1">
                                                            A lecture at Bialystok University of Technology
                                                            </span>
                                                    </div>
                                                    <div className="c-info-box__content">
                                                        <p>
                                                            28.05.2018, Białystok, Poland.
                                                            </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="c-info-boxes-list__item">
                                                <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                    <div className="c-info-box__media c-info-box__media--alt" aria-hidden="true">
                                                        <figure className="o-img-wrapper">
                                                            <img src={images['meetjs-react-redux-lecture.jpg']} alt="Advanced React &amp; Redux Patterns - a lecture on MeetJS Summer Special" />
                                                        </figure>
                                                    </div>
                                                    <div className="c-info-box__head">
                                                        <span className="t-style-fpn-s-r-u u-paint-1">
                                                            Advanced React &amp; Redux Patterns - a lecture on MeetJS Summer Special
                                                            </span>
                                                    </div>
                                                    <div className="c-info-box__content">
                                                        <p>
                                                            25.08.2018, Białystok, Poland.
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
            </>
        )}

    />
)


export const fluidProjectsBgImage = graphql`
                            fragment fluidProjectsBgImage on File {
                            childImageSharp {
                                fluid(quality: 90, maxWidth: 4160) {
                                ...GatsbyImageSharpFluid
                                    }
                            }
                        }
                        `