import React from "react"
import Header from '../components/header';
import { graphql, Link } from "gatsby";
import BgImage from '../components/bgImage'

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../static/img/', false, /\.(jpg|svg)$/));

const Works = (props) => (
    <>
        {/* <div className="page-loader" style="transform: translateX(-100%);">
            <div className="logo">
                <div className="loader-circle"></div>
                <div className="loader-line-mask">
                    <div className="loader-line"></div>
                </div>
                <span className="o-object-wrapper">
                    <object type="image/svg+xml" data="static/img/logo_pagepro_loader.svg">Pagepro</object>
                </span>
            </div>
        </div> 
        <div className="curtain"></div>
        <script>document.querySelector('body').classList.add('loading-state');</script> */}
        <div id="page-content">

            <div className="p-our-work">


                <Header />

                <main className="l-main u-paint-4 u-bg-2">
                    <div className="preload-images" style={{ display: 'none' }}>
                        <img src={images['bg_case-gatedtalent-thumb.jpg']} alt="GatedTalent thumbnail" />
                        <img
                            src={images['bg_case-mnf-thumb']}
                            alt="my name flow thumbnail" />
                        <img src={images['bg-case-blockchain-thumb.jpg']}
                            alt="Ethereum Blockchain Doc Signing App thumbnail" />
                        <img src={images['bg-case-crypto-thumb.jpg']} alt="Cryptocurrency Arbitrage thumbnail" />
                        <img src={images['bg-case-310-thumb.jpg']}
                            alt="310 thumbnail" />
                        <img src={images['bg-case-isv-thumb.jpg']}
                            alt="ISV thumbnail" />
                        <img src={images['bg-case-acrf-thumb.jpg.jpg']}
                            alt="acrf thumbnail" />
                        <img src={images['bg_case-otl-thumb.jpg']}
                            alt="Outside the Lines thumbnail" />
                        <img src={images['bg_case-hawksman-thumb.jpg']}
                            alt="Hawksman thumbnail" />
                        <img src={images['bg-case-koszulkowo-thumb.jpg']}
                            alt="Hurt Koszulkowo thumbnail" />
                        <img src={images['bg-case-gatedtalentwebsite-thumb.jpg']} alt="GatedTalent Website thumbnail" />
                        <img src={images['bg_case-karina-personal-thumb.jpg']}
                            alt="Karina thumbnail" />
                        <img src={images['bg_case-wroc-thumb.jpg']}
                            alt="wroc sharp thumbnail" />
                        <img src={images['bg_case-fap-thumb.jpg']}
                            alt="frontendapp thumbnail" />
                        <img src={images['bg_case-krd-thumb.jpg']}
                            alt="krd thumbnail" />
                        <img src={images['bg_case-dekra-thumb.jpg']}
                            alt="dekra thumbnail" />
                    </div>
                    <div class="l-hero l-hero--alt l-hero--with-slider">
                        <div class="l-hero__content row">
                            <div class="l-hero__content__box">
                                <div class="c-scroll-wrapper js-scroll">
                                    <ul class="c-portfolio-teasers-list c-portfolio-teasers-list--rwd-alt js-swing-anim ps-child">



                                        <li class="c-portfolio-teasers-list__item ">
                                            <div class="c-portfolio-teaser">
                                                <Link class="c-portfolio-teaser__inner u-paint-4" to="works/gatedtalent" data-animate-in="true">
                                                    <div class="c-portfolio-teaser__media">
                                                        <BgImage
                                                            title="bgCaseGatedtalentThumb"
                                                            fluid={props.data.bgCaseGatedtalentThumb.childImageSharp.fluid}

                                                        />
                                                    </div>
                                                    <div class="c-portfolio-teaser__main">
                                                        <h2 class="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            GatedTalent
                    </h2>
                                                        <p class="g-gutter-top-1 u-paint-3">
                                                            React<br />
                                                            JavaScript Single Page App<br />
                                                            Front-end Dedicated Team
                    </p>
                                                    </div>
                                                    <div class="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span class="c-cta-btn s-btn-style-1-no-hover">
                                                            <span class="c-label">Case study</span>
                                                        </span>


                                                    </div>
                                                </Link>
                                            </div>
                                        </li>

                                        <li class="c-portfolio-teasers-list__item ">
                                            <div class="c-portfolio-teaser">
                                                <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/my-name-flow" data-animate-in="true">
                                                    <div class="c-portfolio-teaser__media">
                                                        <BgImage
                                                            title="bgCaseMnfThumb"
                                                            fluid={props.data.bgCaseMnfThumb.childImageSharp.fluid}
                                                        />
                                                    </div>
                                                    <div class="c-portfolio-teaser__main">
                                                        <h2 class="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            My Name Flow
                    </h2>
                                                        <p class="g-gutter-top-1 u-paint-3">
                                                            React<br />
                                                            JavaScript Single Page App
                    </p>
                                                    </div>
                                                    <div class="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span class="c-cta-btn s-btn-style-1-no-hover">
                                                            <span class="c-label">Case study</span>
                                                        </span>


                                                    </div>
                                                </Link>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ">
                                            <div className="c-portfolio-teaser">
                                                <Link className="c-portfolio-teaser__inner u-paint-4" to="/works/blockchain-agreements" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media">
                                                        <BgImage
                                                            title="bgCaseBlockchainThumb"
                                                            fluid={props.data.bgCaseBlockchainThumb.childImageSharp.fluid}
                                                        />
                                                    </div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            Ethereum Blockchain Doc Signing App
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            React<br />
                                                            JavaScript Single Page App
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                    </div>
                                                </Link>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ">
                                            <div className="c-portfolio-teaser">
                                                <Link className="c-portfolio-teaser__inner u-paint-4" to="/works/cryptocurrency-arbitrage" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media" >
                                                        <BgImage
                                                            title="bgCaseCryptoThumb"
                                                            fluid={props.data.bgCaseCryptoThumb.childImageSharp.fluid}
                                                        />
                                                    </div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            Cryptocurrency Arbitrage
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            React<br />
                                                            JavaScript Single Page App
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                    </div>
                                                </Link>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ">
                                            <div className="c-portfolio-teaser">
                                                <a className="c-portfolio-teaser__inner u-paint-4" href="310.html" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media">
                                                        <BgImage
                                                            title="bgCase310Thumb"
                                                            fluid={props.data.bgCase310Thumb.childImageSharp.fluid}
                                                        />
                                                    </div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            310 Vincent Street Office Building
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            PSD to HTML conversion<br />
                                                            WordPress Development
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ui-swing-anim">
                                            <div className="c-portfolio-teaser">
                                                <a className="c-portfolio-teaser__inner u-paint-4" href="isv-online.html" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media" style={{ backgroundImage: 'url(static/img/bg-case-isv-thumb.jpg)' }} ></div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            ISV Online
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            PSD to HTML conversion<br />
                                                            WordPress Development
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ui-swing-anim">
                                            <div className="c-portfolio-teaser">
                                                <a className="c-portfolio-teaser__inner u-paint-4" href="acrf.html" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media" style={{ backgroundImage: 'url(static/img/bg-case-acrf-thumb.jpg)' }}></div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            Australian Cancer Research Foundation
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            PSD to HTML conversion<br />
                                                            WordPress Development
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ui-swing-anim">
                                            <div className="c-portfolio-teaser">
                                                <a className="c-portfolio-teaser__inner u-paint-4" href="outside-the-lines.html" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media" style={{ backgroundImage: 'url(static/img/bg_case-otl-thumb.jpg)' }}></div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            Outside The Lines
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            SKETCH to HTML conversion<br />
                                                            WooCommerce Development
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ui-swing-anim">
                                            <div className="c-portfolio-teaser">
                                                <a className="c-portfolio-teaser__inner u-paint-4" href="hawksman.html" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media" style={{ backgroundImage: 'url(static/img/bg_case-hawksman-thumb.jpg)' }}></div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            Hawksman
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            PSD to HTML conversion<br />
                                                            WordPress Development
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ui-swing-anim">
                                            <div className="c-portfolio-teaser">
                                                <a className="c-portfolio-teaser__inner u-paint-4" href="hurt-koszulkowo.html" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media" style={{ backgroundImage: 'url(static/img/bg-case-koszulkowo-thumb.jpg)' }}></div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            Hurt Koszulkowo
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            PSD to HTML conversion<br />
                                                            WordPress Development
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ui-swing-anim">
                                            <div className="c-portfolio-teaser">
                                                <a className="c-portfolio-teaser__inner u-paint-4" href="gatedtalent-website.html" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media" style={{ backgroundImage: 'url(static/img/bg-case-gatedtalentwebsite-thumb.jpg)' }}></div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            GatedTalent Website
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            PSD to HTML conversion<br />
                                                            WordPress Development
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                        <span className="c-ico-label g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="c-ico-label__media" aria-hidden="true">
                                                                <span className="o-icon-wrapper o-icon-wrapper--round u-bg-4 u-paint-2">
                                                                    <span className="o-icon o-icon--right"></span>
                                                                    <span className="c-dash-ico"></span>
                                                                </span>
                                                            </span>
                                                            <span className="c-ico-label__info">
                                                                code samples
                            </span>
                                                        </span>

                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ui-swing-anim">
                                            <div className="c-portfolio-teaser">
                                                <a className="c-portfolio-teaser__inner u-paint-4" href="karina-papadopoulos.html" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media" style={{ backgroundImage: 'url(static/img/bg_case-karina-personal-thumb.jpg)' }}></div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            Karina Papadopoulos
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            PSD to HTML conversion<br />
                                                            WordPress Development
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                        <span className="c-ico-label g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="c-ico-label__media" aria-hidden="true">
                                                                <span className="o-icon-wrapper o-icon-wrapper--round u-bg-4 u-paint-2">
                                                                    <span className="o-icon o-icon--right"></span>
                                                                    <span className="c-dash-ico"></span>
                                                                </span>
                                                            </span>
                                                            <span className="c-ico-label__info">
                                                                code samples
                            </span>
                                                        </span>

                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ui-swing-anim">
                                            <div className="c-portfolio-teaser">
                                                <a className="c-portfolio-teaser__inner u-paint-4" href="wroc-sharp.html" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media" style={{ backgroundImage: 'url(static/img/bg_case-wroc-thumb.jpg)' }}></div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            WROC#
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            PSD to HTML conversion<br />
                                                            WordPress Development
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ui-swing-anim">
                                            <div className="c-portfolio-teaser">
                                                <a className="c-portfolio-teaser__inner u-paint-4" href="frontend-app.html" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media" style={{ backgroundImage: 'url(static/img/bg_case-fap-thumb.jpg)' }}></div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            FrontendApp
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            AngularJS Development
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ui-swing-anim">
                                            <div className="c-portfolio-teaser">
                                                <a className="c-portfolio-teaser__inner u-paint-4" href="krd.html" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media" style={{ backgroundImage: 'url(static/img/bg_case-krd-thumb.jpg)' }}></div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            KRD Economic Information Bureau
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            Front-end Dedicated Team
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ui-swing-anim">
                                            <div className="c-portfolio-teaser">
                                                <a className="c-portfolio-teaser__inner u-paint-4" href="dekra.html" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media" style={{ backgroundImage: 'url(static/img/bg_case-dekra-thumb.jpg)' }}></div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            DEKRAnet
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            Front-end Development<br />
                                                            Styleguide Development
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                        <span className="c-ico-label g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="c-ico-label__media" aria-hidden="true">
                                                                <span className="o-icon-wrapper o-icon-wrapper--round u-bg-4 u-paint-2">
                                                                    <span className="o-icon o-icon--right"></span>
                                                                    <span className="c-dash-ico"></span>
                                                                </span>
                                                            </span>
                                                            <span className="c-ico-label__info">
                                                                code samples
                            </span>
                                                        </span>

                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ui-swing-anim">
                                            <div className="c-portfolio-teaser">
                                                <a className="c-portfolio-teaser__inner u-paint-4" href="woodland-girls.html" data-animate-in="true">
                                                    <div className="c-portfolio-teaser__media" style={{ backgroundImage: 'url(static/img/bg_case-woodland-thumb.jpg)' }}></div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            Woodland Girls
                    </h2>
                                                        <p className="g-gutter-top-1 u-paint-3">
                                                            PSD to HTML conversion<br />
                                                            WordPress Development
                    </p>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2 g-gutter-top-1@mobile">
                                                        <span className="c-cta-btn s-btn-style-1-no-hover">
                                                            <span className="c-label">Case study</span>
                                                        </span>


                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                        <li className="c-portfolio-teasers-list__item ui-swing-anim">
                                            <div className="c-portfolio-teaser c-portfolio-teaser--about">
                                                <a className="c-portfolio-teaser__inner js-trigger-popup-works u-paint-4" href="#">
                                                    <div className="c-portfolio-teaser__media u-bg-1"></div>
                                                    <div className="c-portfolio-teaser__main">
                                                        <h2 className="t-style-fpn-l-b-u u-text-centered@mobile">
                                                            About <br />
                                                            2534 more
                                                </h2>
                                                    </div>
                                                    <div className="c-portfolio-teaser__add g-gutter-top-2">
                                                        <figure className="o-img-wrapper o-img-wrapper--logo-with-shadow">
                                                            <img src="static/img/logo_pagepro_black.svg" className="logo-shadow" />
                                                            <img src="static/img/logo_pagepro_loader.svg" alt="Pagepro logo" />
                                                        </figure>
                                                        <span className="c-cta-btn s-btn-style-2-no-hover">
                                                            <span className="c-label">View more</span>
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="l-hero__foot row">
                            <div className="l-inner">
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
                </main>
            </div>

            <div className="l-popup l-popup--works js-popup-works u-paint-4">
                <div className="l-popup__content">
                    <div className="l-hero l-hero--rwd-alt l-hero--with-overlay l-hero-no-overlay@mobile">
                        <div className="l-inner">
                            <div className="l-hero__content row">
                                <div className="l-hero__content__box gr-12@tablet no-gutter@tablet">
                                    <div className="c-cta-box">
                                        <div className="c-cta-box__title ui-left-on-popup-open">
                                            <h2 className="t-style-fpn-xl-r-u u-text-centered@tablet">
                                                About <strong>2534</strong> that we can't share!
                                    </h2>
                                        </div>
                                        <div className="c-cta-box__content g-gutter-top-3 g-gutter-top-1@landscape-small g-gutter-top-1@mobile g-gutter-bottom-4 g-gutter-bottom-2@landscape-small g-gutter-bottom-2@mobile">
                                            <p className="t-style-fpn-xxl-b u-text-centered@tablet ui-left-on-popup-open ui-delay-800">
                                                About <span className="u-decor-bottom">99%</span> of our projects are hidden under NDA. We respect privacy of our clients (Agencies) - that's why we can not share informations about clients, projects and kind of work that we've provided.
                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="l-popup__actions">
                    <a className="c-close-btn is-active js-close-popup-works">
                        <span className="c-close-btn__inner u-paint-4">
                            <span className="c-close-btn__info">Close popup</span>
                            <span className="c-close-btn__cross"></span>
                        </span>
                    </a>
                </div>
            </div>
        </div>


    </>
)


export const fluidWorksBgImage = graphql`
fragment fluidWorksBgImage on File {
            childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid
        }
        }
      }
      `


export const worksQuery = graphql`
query {
            bgCaseGatedtalentThumb: file(relativePath: {eq: "bg_case-gatedtalent-thumb.jpg" }) {
            ...fluidWorksBgImage
        }
            bgCaseMnfThumb: file(relativePath: {eq: "bg_case-mnf-thumb.jpg" }) {
            ...fluidWorksBgImage
        }
            bgCaseBlockchainThumb: file(relativePath: {eq: "bg-case-blockchain-thumb.jpg" }) {
                ...fluidWorksBgImage
        }
            bgCaseCryptoThumb: file(relativePath: {eq: "bg-case-crypto-thumb.jpg" }) {
                ...fluidWorksBgImage
        }
            bgCase310Thumb: file(relativePath: {eq: "bg-case-310-thumb.jpg" }) {
                ...fluidWorksBgImage
        }
        }
        `



export default Works