import React from "react"
import { graphql, Link } from "gatsby"
import Footer from '../components/footer'
import BgImage from '../components/bgImage'
import Header from '../components/header'


function importAll(r) {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../static/img/', false, /\.(jpg|svg)$/));

const IndexPage = (props) => (
  <>
    {/* <div className="page-loader" style={{ transform: "translateX(-100%)" }}>
      <div className="logo">
        <div className="loader-circle"></div>
        <div className="loader-line-mask">
          <div className="loader-line"></div>
        </div>
        <span className="o-object-wrapper">
          <object type="image/svg+xml" data="../../public/img/logo_pagepro_loader.svg">Pagepro</object>
        </span>
      </div>
    </div>
    <div className="curtain"></div>
    <script>document.querySelector('body').classList.add('loading-state');</script> */}
    <div id="page-content">

      <div className="p-home">

        <Header />

        <main>
          <div className="l-hero l-hero--rwd-alt l-hero--with-overlay l-hero-no-overlay@mobile l-main u-paint-4">
            <div className="c-video-box"
              datavideo="../../media/home-page.mp4"
              dataposter="../../media/home-page-poster.jpg"
              datasrcs="../../media/home-page.mp4,../media/home-page.webm"
            ></div>
            <div className="l-inner">
              <div className="l-hero__content row">
                <div className="l-hero__content__box gr-12@tablet no-gutter@tablet">
                  <div className="c-cta-box">
                    <div className="c-cta-box__content g-gutter-top-3 g-gutter-top-1@landscape-small g-gutter-top-1@mobile g-gutter-bottom-1 g-gutter-bottom-2@landscape-small g-gutter-bottom-1@mobile">
                      <h1 className="t-style-fpn-xxl-alt-b u-text-centered@tablet">
                        Front-end development agency, <br className="u-hide-m" />
                        trusted by digital leaders worldwide.
                                </h1>
                    </div>
                    <div className="c-cta-box__title g-gutter-bottom-3">
                      <p className="t-style-fpn-l-r u-line-h-s u-block-t u-text-centered@tablet">
                        We are creative, in love with details, and we don't take shortcuts
                                </p>
                    </div>
                    <div className="c-cta-box__actions">
                      <p className="u-text-centered@tablet">
                        <span className="g-gr gr-adapt no-gutter gr-12@mobile-small no-gutter@mobile-small">
                          <Link className="c-cta-link s-btn-style-1 g-spacing-bottom-1@mobile-small" to='/works'>
                            <span className="c-label">Show featured projects</span>
                          </Link>
                        </span>
                        <span className="g-gr gr-adapt no-gutter gr-12@mobile-small no-gutter@mobile-small wrap@mobile-small">
                          <span className="t-style-fpn-m-ri g-spacing-left-1 g-spacing-left-0@mobile-small">or</span>
                          <Link className="c-link-default t-style-fpn-s-b u-line-h-m u-paint-4 u-paint-1-on-hover u-decor-bottom--alt u-decor-bottom-hover g-spacing-left-1 g-spacing-left-0@mobile-small g-spacing-top-1@mobile-small" to="/services">View services</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-hero__foot row row-align-center@mobile">
                <div className="l-hero__foot__box hide@mobile">
                  <ul className="c-testimonial-list js__testimontials" data-active="0" data-delay="6000">
                    <li className="c-testimonial-list__item">
                      <blockquote className="c-testimonial-teaser u-paint-3" aria-label="Testimonial">
                        <figure className="c-testimonial-teaser__media o-img-wrapper o-img-wrapper--round">
                          <img src={images['pic_ilona-filipi-small.jpg']} alt="Ilona Filipi" />
                        </figure>
                        <div className="c-testimonial-teaser__info">
                          <div className="c-testimonial-teaser__info__content">
                            <p className="t-style-fpn-m-ri">
                              The level of commitment, quality and service level that they provide is hard to find.
                                            </p>
                          </div>
                          <footer className="c-testimonial-teaser__info__foot u-text-upper">
                            <strong className="u-decor-bottom--alt t-style-fpn-s-r">Ilona Filipi</strong>. Moove, London
                                        </footer>
                        </div>
                      </blockquote>
                    </li>
                    <li className="c-testimonial-list__item">
                      <blockquote className="c-testimonial-teaser u-paint-3" aria-label="Testimonial">
                        <figure className="c-testimonial-teaser__media o-img-wrapper o-img-wrapper--round">
                          <img src={images['pic_guillaume-pousseo-small.jpg']} alt="Guillaume Pousseo" />
                        </figure>
                        <div className="c-testimonial-teaser__info">
                          <div className="c-testimonial-teaser__info__content">
                            <p className="t-style-fpn-m-ri">
                              High quality services, big support with good prices and communication skills.
                                            </p>
                          </div>
                          <footer className="c-testimonial-teaser__info__foot u-text-upper">
                            <strong className="u-decor-bottom--alt t-style-fpn-s-r">Guillaume Pousseo</strong>. REVSQUARE, NYC
                                        </footer>
                        </div>
                      </blockquote>
                    </li>
                    <li className="c-testimonial-list__item">
                      <blockquote className="c-testimonial-teaser u-paint-3" aria-label="Testimonial">
                        <figure className="c-testimonial-teaser__media o-img-wrapper o-img-wrapper--round">
                          <img src={images['pic-lance-redgrave-small.jpg']} alt="Lance Redgrave" />
                        </figure>
                        <div className="c-testimonial-teaser__info">
                          <div className="c-testimonial-teaser__info__content">
                            <p className="t-style-fpn-m-ri">
                              The website was delivered on time and on budget.
                                            </p>
                          </div>
                          <footer className="c-testimonial-teaser__info__foot u-text-upper">
                            <strong className="u-decor-bottom--alt t-style-fpn-s-r">Lance Redgrave</strong>. Redfox Media, Sydney
                                        </footer>
                        </div>
                      </blockquote>
                    </li>
                    <li className="c-testimonial-list__item">
                      <blockquote className="c-testimonial-teaser u-paint-3" aria-label="Testimonial">
                        <figure className="c-testimonial-teaser__media o-img-wrapper o-img-wrapper--round">
                          <img src={images['pic_michal-kenderski-small.jpg']} alt="Michal Kenderski" />
                        </figure>
                        <div className="c-testimonial-teaser__info">
                          <div className="c-testimonial-teaser__info__content">
                            <p className="t-style-fpn-m-ri">
                              They deliver exactly when they say they will.
                                            </p>
                          </div>
                          <footer className="c-testimonial-teaser__info__foot u-text-upper">
                            <strong className="u-decor-bottom--alt t-style-fpn-s-r">Michal Kenderski</strong>. Republik-Media, London
                                        </footer>
                        </div>
                      </blockquote>
                    </li>
                    <li className="c-testimonial-list__item">
                      <blockquote className="c-testimonial-teaser u-paint-3" aria-label="Testimonial">
                        <figure className="c-testimonial-teaser__media o-img-wrapper o-img-wrapper--round">
                          <img src={images['pic_carole-egerton-small.jpg']} alt="Carole Egerton" />
                        </figure>
                        <div className="c-testimonial-teaser__info">
                          <div className="c-testimonial-teaser__info__content">
                            <p className="t-style-fpn-m-ri">
                              They proved to be an invaluable resource.
                                            </p>
                          </div>
                          <footer className="c-testimonial-teaser__info__foot u-text-upper">
                            <strong className="u-decor-bottom--alt t-style-fpn-s-r">Carole Egerton</strong>. Baffle &amp; Zander, London
                                        </footer>
                        </div>
                      </blockquote>
                    </li>
                    <li className="c-testimonial-list__item">
                      <blockquote className="c-testimonial-teaser u-paint-3" aria-label="Testimonial">
                        <figure className="c-testimonial-teaser__media o-img-wrapper o-img-wrapper--round">
                          <img src={images['pic_paul-horrocks-small.jpg']} alt="Paul Horrocks" />
                        </figure>
                        <div className="c-testimonial-teaser__info">
                          <div className="c-testimonial-teaser__info__content">
                            <p className="t-style-fpn-m-ri">
                              They are more than a great development team.
                                            </p>
                          </div>
                          <footer className="c-testimonial-teaser__info__foot u-text-upper">
                            <strong className="u-decor-bottom--alt t-style-fpn-s-r">John Horrocks</strong>. Rocksurance, NYC
                                        </footer>
                        </div>
                      </blockquote>
                    </li>
                  </ul>
                </div>
                <div className="l-hero__foot__box">
                  <ul className="c-socials-list ui-hover-opacity">
                    <li className="c-socials-list__item">
                      <a className="c-social u-paint-4" target="_blank" href="http://www.facebook.com/thisispagepro">
                        <span className="u-info">Visit our Facebook page</span>
                        <span className="o-icon o-icon--facebook"></span>
                      </a>
                    </li>
                    <li className="c-socials-list__item">
                      <a className="c-social u-paint-4" target="_blank" href="https://www.linkedin.com/company/pagepro">
                        <span className="u-info">Visit our Linkedin</span>
                        <span className="o-icon o-icon--linkedin"></span>
                      </a>
                    </li>
                    <li className="c-socials-list__item">
                      <a className="c-social u-paint-4" target="_blank" href="https://github.com/pagepro">
                        <span className="u-info">Visit our Github page</span>
                        <span className="o-icon o-icon--github"></span>
                      </a>
                    </li>
                    <li className="c-socials-list__item--instagram">
                      <a className="c-social u-paint-4" target="_blank" href="https://www.instagram.com/pagepro_/">
                        <span className="u-info">Visit our Instagram page</span>
                        <span className="o-icon o-icon--instagram"></span>
                      </a>
                    </li>
                    <li className="c-socials-list__item--slideshare">
                      <a className="c-social u-paint-4" target="_blank" href="http://www.slideshare.net/Pagepro">
                        <span className="u-info">Visit our Slideshare page</span>
                        <span className="o-icon o-icon--slideshare"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section className="l-sec g-gutter-top-6 g-gutter-top-5@desktop-small g-gutter-bottom-6 g-gutter-bottom-5@desktop-small">
            <div className="l-row">
              <div className="l-inner">
                <div className="row">
                  <div className="l-sec__box gr-12 no-gutter">
                    <div className="l-sec__box__head">
                      <h3 className="t-style-fpn-l-r-u">
                        How <strong>can we help?</strong>
                      </h3>
                    </div>
                    <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                      <ul className="c-info-boxes-list c-info-boxes-list--alt">
                        <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                          <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                            <div className="c-info-box__media o-icon-wrapper--big" aria-hidden="true">
                              <figure className="o-svg-wrapper o-svg-wrapper--default">
                                <img src={images['react.svg']} alt="React logo" />
                              </figure>
                            </div>
                            <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile t-left">
                              <h3 className="t-style-fpn-l-r-u">React js</h3>
                              <p className="t-style-fpn-s-r-u">Development</p>
                            </div>
                          </div>
                        </li>
                        <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                          <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                            <div className="c-info-box__media o-icon-wrapper--big" aria-hidden="true">
                              <figure className="o-svg-wrapper o-svg-wrapper--default">
                                <img src={images['react-native.svg']} alt="React Native logo" />
                              </figure>
                            </div>
                            <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile t-left">
                              <h3 className="t-style-fpn-l-r-u">React Native</h3>
                              <p className="t-style-fpn-s-r-u">Development</p>
                            </div>
                          </div>
                        </li>
                        <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                          <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                            <div className="c-info-box__media o-icon-wrapper--big" aria-hidden="true">
                              <figure className="o-svg-wrapper o-svg-wrapper--default">
                                <img src={images['frontend-code.svg']} alt="Front-End icon" />
                              </figure>
                            </div>
                            <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile t-left">
                              <h3 className="t-style-fpn-l-r-u">Front-end</h3>
                              <p className="t-style-fpn-s-r-u">Development</p>
                            </div>
                          </div>
                        </li>
                        <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                          <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                            <div className="c-info-box__media o-icon-wrapper--big" aria-hidden="true">
                              <figure className="o-svg-wrapper o-svg-wrapper--default">
                                <img src={images['wordpress.svg']} alt="Wordpress logo" />
                              </figure>
                            </div>
                            <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile t-left">
                              <h3 className="t-style-fpn-l-r-u">WordPress</h3>
                              <p className="t-style-fpn-s-r-u">Development</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-4">
                      <Link className="c-cta-link s-btn-style-3" to="/services">
                        <span className="c-label">View services</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <BgImage
              title="bgSectionClients"
              fluid={props.data.bgSectionClients.childImageSharp.fluid}
              height='700px'
              className="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-5@desktop-small"
              children={
                <div className="l-row">
                  <div className="l-inner">
                    <div className="row">
                      <div className="l-sec__box gr-12 no-gutter u-paint-4">
                        <ul>
                          <li className="gr-6 gr-12@tablet g-gutter-right-3 no-gutter no-gutter@tablet">
                            <h3 lass="t-style-fpn-s-l-u">Reliable for</h3>
                            <h3 className="g-gutter-top-1 t-style-fpn-l-r-u"><strong>Agencies</strong></h3>
                            <p className="g-gutter-top-1">
                              We’ve been working with agencies since the beginning. Not only do we know what agencies come to expect, we pride ourselves on our reputation for reliability.
                              </p>
                          </li>
                          <li className="gr-6 gr-12@tablet prefix-6 prefix-0@tablet g-gutter-left-3 no-gutter no-gutter@tablet g-gutter-top-2@tablet">
                            <h3 lass="t-style-fpn-s-l-u">Rapid for</h3>
                            <h3 className="g-gutter-top-1 t-style-fpn-l-r-u"><strong>Startups</strong></h3>
                            <p className="g-gutter-top-1">
                              You or your company get the benefit of years of experience without the constant overhead. We provide you with advise and a crack team of top front-end developers.
                              </p>
                          </li>
                          <li className="gr-6 gr-12@tablet g-gutter-right-3 no-gutter no-gutter@tablet g-gutter-top-2@tablet">
                            <h3 lass="t-style-fpn-s-l-u">Solid for</h3>
                            <h3 className="g-gutter-top-1 t-style-fpn-l-r-u"><strong>Established teams</strong></h3>
                            <p className="g-gutter-top-1">
                              We help bring to life valuable software products, no matter if the companies are small or big enterprises.
                              </p>
                          </li>
                          <li className="gr-6 gr-12@tablet prefix-6 prefix-0@tablet g-gutter-left-3 no-gutter no-gutter@tablet g-gutter-top-2@tablet">
                            <h3 lass="t-style-fpn-s-l-u">Helpful for</h3>
                            <h3 className="g-gutter-top-1 t-style-fpn-l-r-u"><strong>Software houses</strong></h3>
                            <p className="g-gutter-top-1">
                              We can provide experienced developers with tech stack you're looking for.
                              </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </section>

          <section className="l-sec g-gutter-top-6 g-gutter-top-5@desktop-small g-gutter-bottom-6 g-gutter-bottom-5@desktop-small">
            <div className="l-row">
              <div className="l-inner">
                <div className="row">
                  <div className="l-sec__box gr-12 no-gutter">
                    <div className="l-sec__box__head">
                      <h3 className="t-style-fpn-l-r-u">
                        Standalone <strong>services</strong>
                      </h3>
                    </div>
                    <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                      <ul className="c-info-boxes-list c-info-boxes-list--alt">
                        <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile t-left">
                          <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                            <div className="c-info-box__media o-icon-wrapper--big" aria-hidden="true">
                              <figure className="o-svg-wrapper o-svg-wrapper--default">
                                <img src={images['react-code-review.svg']} alt="Icon react code review" />
                              </figure>
                            </div>
                            <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile t-left">
                              <h3 className="t-style-fpn-l-r-u">React</h3>
                              <p className="t-style-fpn-s-r-u">Code Review</p>
                            </div>
                          </div>
                        </li>
                        <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile t-left">
                          <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                            <div className="c-info-box__media o-icon-wrapper--big" aria-hidden="true">
                              <figure className="o-svg-wrapper o-svg-wrapper--default">
                                <img src={images['discovery-workshop.svg']} alt="Icon dicovery workshop" />
                              </figure>
                            </div>
                            <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile t-left">
                              <h3 className="t-style-fpn-l-r-u">Discovery</h3>
                              <p className="t-style-fpn-s-r-u">Workshop</p>
                            </div>
                          </div>
                        </li>
                        <li className="c-info-boxes-list__item">
                          <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                            <div className="c-info-box__media o-icon-wrapper--big" aria-hidden="true">
                              <figure className="o-svg-wrapper o-svg-wrapper--default">
                                <img src={images['react-training.svg']} alt="Icon react training" />
                              </figure>
                            </div>
                            <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile t-left">
                              <h3 className="t-style-fpn-l-r-u">React</h3>
                              <p className="t-style-fpn-s-r-u">Training</p>
                            </div>
                          </div>
                        </li>
                        <li className="c-info-boxes-list__item">
                          <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile t-left">
                            <div className="c-info-box__media o-icon-wrapper--big" aria-hidden="true">
                              <figure className="o-svg-wrapper o-svg-wrapper--default">
                                <img src={images['team.svg']} alt="Icon team" />
                              </figure>
                            </div>
                            <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile t-left">
                              <h3 className="t-style-fpn-l-r-u">Dedicated</h3>
                              <p className="t-style-fpn-s-r-u">Teams</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-4">
                      <Link className="c-cta-link s-btn-style-3" to="/services">
                        <span className="c-label">View services</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="l-sec u-bg-1">
            <div className="l-row">
              <div className="l-inner g-gutter-top-5 g-gutter-bottom-6">
                <div className="row">
                  <div className="l-sec__box gr-12 no-gutter">
                    <div className="l-sec__box__head">
                      <h3 className="u-paint-4 t-style-fpn-l-r-u">Latest <strong>works</strong></h3>
                    </div>
                    <div className="l-sec__box__content g-spacing-top-3 g-spacing-top-4@desktop-small c-between-decors-parent">
                      <div className="c-slider-wrapper c-slider-wrapper--portfolio-teasers js-portfolio-teasers-slider">
                        <div className="c-slider-wrapper__container swiper-container " aria-label="Portfolio teasers slider">
                          <ol className="c-portfolio-teasers-list c-portfolio-teasers-list--small c-portfolio-teasers-list--multiple-lines swiper-wrapper">
                            <li className="c-portfolio-teasers-list__item swiper-slide">
                              <div className="c-portfolio-teaser c-portfolio-teaser--small">
                                <a className="c-portfolio-teaser__inner u-paint-4" href="gatedtalent.html">
                                  <div className="c-portfolio-teaser__media">
                                    <BgImage
                                      title="bgCaseGatedtalent"
                                      fluid={props.data.bgCaseGatedtalent.childImageSharp.fluid}
                                      height='400px'
                                    />

                                  </div>
                                  <div className="c-portfolio-teaser__main">
                                    <h2 className="t-style-fpn-l-b-u">
                                      GatedTalent
                                                    </h2>
                                    <p className="g-gutter-top-1 u-paint-3">
                                      React<br />JavaScript Single Page App
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
                                  <div className="c-portfolio-teaser__media">
                                    <BgImage
                                      title="bgCaseMnfRect"
                                      fluid={props.data.bgCaseMnfRect.childImageSharp.fluid}
                                      height='400px'
                                    />
                                  </div>
                                  <div className="c-portfolio-teaser__main">
                                    <h2 className="t-style-fpn-l-b-u">
                                      MyNameFlow
                                                    </h2>
                                    <p className="g-gutter-top-1 u-paint-3">
                                      React<br />JavaScript Single Page App
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
                                <a className="c-portfolio-teaser__inner u-paint-4" href="blockchain-agreements.html">
                                  <div className="c-portfolio-teaser__media">
                                    <BgImage
                                      title="bgCaseBlockchainRect"
                                      fluid={props.data.bgCaseBlockchainRect.childImageSharp.fluid}
                                      height='400px'
                                    />
                                  </div>
                                  <div className="c-portfolio-teaser__main">
                                    <h2 className="t-style-fpn-l-b-u">
                                      Ethereum Blockchain Doc Signing App
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
                                <a className="c-portfolio-teaser__inner u-paint-4" href="acrf.html">
                                  <div className="c-portfolio-teaser__media" >
                                    <BgImage
                                      title="bgCaseAcrfRect"
                                      fluid={props.data.bgCaseAcrfRect.childImageSharp.fluid}
                                      height='400px'
                                    />
                                  </div>
                                  <div className="c-portfolio-teaser__main">
                                    <h2 className="t-style-fpn-l-b-u">
                                      ACRF
                                                    </h2>
                                    <p className="g-gutter-top-1 u-paint-3">
                                      SKETCH to HTML conversion<br />Wordpress Development
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
                                <a className="c-portfolio-teaser__inner u-paint-4" href="gatedtalent-website.html">
                                  <div className="c-portfolio-teaser__media">
                                    <BgImage
                                      title="bgCaseGatedtalentwebsiteRect"
                                      fluid={props.data.bgCaseGatedtalentwebsiteRect.childImageSharp.fluid}
                                      height='400px'
                                    />
                                  </div>
                                  <div className="c-portfolio-teaser__main">
                                    <h2 className="t-style-fpn-l-b-u">
                                      GatedTalent Website
                                                    </h2>
                                    <p className="g-gutter-top-1 u-paint-3">
                                      PSD to HTML conversion<br />WooCommerce Development
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
                                <a className="c-portfolio-teaser__inner u-paint-4" href="outside-the-lines.html">
                                  <div className="c-portfolio-teaser__media">
                                    <BgImage
                                      title="bgCaseOtl"
                                      fluid={props.data.bgCaseOtl.childImageSharp.fluid}
                                      height='400px'
                                    /></div>
                                  <div className="c-portfolio-teaser__main">
                                    <h2 className="t-style-fpn-l-b-u">
                                      Outside The Lines
                                                    </h2>
                                    <p className="g-gutter-top-1 u-paint-3">
                                      SKETCH to HTML conversion<br />WooCommerce Development
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
                          <ol className="c-dots-list c-dots-list--bigger g-gutter-top-2@mobile g-gutter-bottom-2@mobile">
                            <li className="c-dots-list__item">
                              <span className="c-dot u-bg-4"></span>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-2">
                      <Link className="c-cta-link s-btn-style-1 u-bg-2 u-bg-2-on-hover" to="/works">
                        <span className="c-label">More projects</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-5@desktop-small">
            <div className="l-row">
              <div className="l-inner">
                <div className="row">
                  <div className="l-sec__box gr-12 no-gutter u-paint-4">
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
                              <img src={images['redux.svg']} alt="Redux logo" />
                            </figure>
                          </div>
                          <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                            <h4 className="t-style-fpn-s-r-u u-paint-1">Redux</h4>
                          </div>
                        </div>
                      </li>
                      <li className="c-info-boxes-list__item c-info-boxes-list__item--responsive g-spacing-bottom-3@desktop-small">
                        <div className="c-info-box g-gutter-right-0@mobile t-left">
                          <div className="c-info-box__media" aria-hidden="true">
                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                              <img src={images['mobx.svg']} alt="Mobx logo" />
                            </figure>
                          </div>
                          <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                            <h4 className="t-style-fpn-s-r-u u-paint-1">Mobx</h4>
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
                              <img src={images['nodejs.svg']} alt="NodeJS logo" />
                            </figure>
                          </div>
                          <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                            <h4 className="t-style-fpn-s-r-u u-paint-1">NodeJS</h4>
                          </div>
                        </div>
                      </li>
                    </ul>
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

export const fluidHomeBgImage = graphql`
    fragment fluidHomeBgImage on File {
      childImageSharp {
        fluid(quality: 80, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
`
export const homeQuery = graphql`
  query {
    bgCaseAcrfRect: file(relativePath: { eq: "bg-case-acrf-rect.jpg" }) {
      ...fluidHomeBgImage
    }
    bgSectionClients: file(relativePath: { eq: "bg_section-clients.jpg" }) {
      ...fluidHomeBgImage
    }
    bgCaseGatedtalent: file(relativePath: { eq: "bg_case-gatedtalent-rect.jpg" }) {
      ...fluidHomeBgImage
    }
    bgCaseMnfRect: file(relativePath: { eq: "bg_case-mnf-rect.jpg" }) {
      ...fluidHomeBgImage
    }
    bgCaseGatedtalentwebsiteRect: file(relativePath: { eq: "bg-case-gatedtalentwebsite-rect.jpg" }) {
      ...fluidHomeBgImage
    }
    bgCaseBlockchainRect: file(relativePath: { eq: "bg-case-blockchain-rect.jpg" }) {
      ...fluidHomeBgImage
    }
    bgCaseOtl: file(relativePath: { eq: "bg_case-otl.jpg" }) {
      ...fluidHomeBgImage
    }
   }
`


export default IndexPage