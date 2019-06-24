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

const images = importAll(require.context('../../../static/img/', false, /\.(jpg|svg|png)$/));

const Krd = (props) => (
    <>
        <div id="page-content">

            <div class="p-case-study">


                <Header />

                <main class="l-main">
                    <BgImage
                        title="bgCaseKrd"
                        fluid={props.data.bgCaseKrd.childImageSharp.fluid}
                        className="l-hero l-hero--alt l-hero--small l-hero--with-overlay  u-paint-4"
                        height='100vh'
                    >
                        <div class="l-inner g-gutter-top-10 g-gutter-bottom-8">
                            <div class="l-hero__head row g-gutter-top-8 g-gutter-top-0@mobile">
                                <div class="l-hero__head__box">
                                    <h2 class="t-style-fpn-xxl-b-u">
                                        KRD Economic <br />Information <br />Bureau
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
                                                <strong>KRD Economic Information Bureau</strong> was established on 4 August 2003. It provides its services to all business entities: sole traders, small and medium enterprises as well as large corporations. KRD has created an economic information exchange system which consolidates all the branches of economy.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile">
                                        <div class="l-sec__box__content">
                                            <p>
                                                KRD’s statutory tasks include the acceptance, storage and provision of access to economic information and data. These tasks are performed via the Internet, making KRD always available. Informations on debtors are submitted to the KRD database by entrepreneurs from all sectors of economy, irrespective of company size and legal form, as well as by natural persons, communes and institutions. The suppliers of information are at the same time recipients of this information; consequently, the debtors listed in KRD cease to be anonymous and lose their credibility in business relations.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                Portfolio KRD Group brands include: KRD BIG, Kaczmarski Inkasso, Rzetelna Firma, Via Lex, NFG and FairPay.pl.
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
                                                The <strong class="u-paint-1">Challenge</strong>
                                            </h3>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile">
                                        <div class="l-sec__box__content">
                                            <p>
                                                In second half of 2012, KRD needed to <strong>expand their front-end development capacity</strong> to help manage big number of web software projects (marketing automation tools, mailings, etc.).
                                            </p>
                                            <p class="g-gutter-top-1">
                                                KRD needed the new development resources on-board quickly to meet the tight schedue. KRD was keen to find a reliable, well trained partner.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                <strong>Pagepro</strong> was quickly shortlisted and asked to prove its <strong>maturity and ability to deliver</strong> by doing first, small project. After a selection process - to review Pagepro's capabilities, performance and efficency - Pagepro was selected as KRD's partner.
                                            </p>
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
                                            <figure class="o-img-wrapper">
                                                <img src={images['pic_screenshot-krd-01.jpg']} alt="KRD screenshot" />
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
                                <div class="row row-align-between g-gutter-top-10 g-gutter-top-5@desktop-small">
                                    <div class="l-sec__box gr-6 gr-12@mobile no-gutter-left no-gutter@mobile">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Requirements
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content t-wysiwyg g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                KRD releases about <strong>300 landing pages per year</strong>. Projects are small, but their websites have big traffic, so quality of delivered products need to be very high.
                                            </p>
                                            <p>
                                                We are making sure if our deliveries are light-weight and <strong>optimised for speed</strong>, mobile and accessability standards.
                                            </p>
                                            <p>
                                                Our services contain:
                                            </p>
                                            <ul>
                                                <li>PSD to HTML conversion</li>
                                                <li>PSD to EMAIL conversion</li>
                                                <li>Cross browser &amp; device testing</li>
                                                <li>Front-end dedicated team</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-4@mobile">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                The Cooperation
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <p>
                                                At the beginning KRD requested Pagepro to provide <strong>small, dedicated team</strong> for KRD’s projects (Project Manager, Front-end developer, Quality Assistant).
                                            </p>
                                            <p class="g-gutter-top-1">
                                                After a few weeks, Pagepro and KRD found that the companies were <strong>natural partners</strong> and KRD decided to do more projects with Pagepro.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                Almost every project contains one or more mailings, that needs to be tested and optimized for many email clients - both mobile and desktop - and especially for different versions of <strong>Microsoft Outlook</strong>. It's quite a challange considering the specifics of those programs and the fact, that they use different engines to generate content on a client side. Thanks to that, and short realization time, Pagepro build a small team of developers specializing in creating emails.
                                            </p>
                                            <p class="g-gutter-top-1">
                                                Now Pagepro is providing a big, dedicated, <strong>self-organizing team</strong> which supports KRD’s projects. Pagepro’s high technical and organisational skills <strong>increased the speed</strong> of completing KRD’s projects by 30%.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-gutter-top-5 g-gutter-top-3@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-left no-gutter-left@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">HTML5</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">CSS3</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">SASS</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-right@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">JavaScript</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">jQuery</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">GULP</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-left@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">BrowserStack</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">Litmus</span>
                                            </li>
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">FrontendApp</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="l-sec__box gr-3 gr-6@mobile no-gutter-right no-gutter-right@mobile">
                                        <ul class="c-dotted-list">
                                            <li class="c-dotted-list__item u-paint-3">
                                                <span class="u-paint-2 g-gutter-left-1">CAMINO</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec c-decors-parent u-bg-double-2-4">
                        <div class="c-decors-box" aria-hidden="true">
                            <span class="c-decor-calendar c-decor-calendar--left u-paint-5"></span>
                        </div>
                        <div class="l-row">
                            <div class="l-inner l-inner-no-gutters@mobile-medium">
                                <div class="row h-row-align-stretch">
                                    <div class="l-sec__box gr-3 gr-6@mobile-medium no-gutter-left h-gr-fix-center">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                Partnership
                                            </h3>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-6 g-gutter-top-10 g-gutter-top-5@tablet g-gutter-bottom-10 g-gutter-bottom-5@tablet u-bg-1 u-paint-4">
                                        <div class="l-sec__box__content">
                                            <p class="u-text-centered">
                                                We've been working together for more than <strong>4 years</strong>.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="l-sec__box gr-3 no-gutter u-bg-2 hide@mobile-medium">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="l-sec g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                        <div class="l-row c-decors-parent g-gutter-top-10 g-gutter-top-5@desktop-small" aria-hidden="true">
                            <div class="c-decors-box" aria-hidden="true">
                                <span class="c-photoshop-line c-photoshop-line--top"></span>
                            </div>
                        </div>
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__head">
                                            <h3 class="t-style-fpn-l-r-u">
                                                PARTNERSHIP <strong>in numbers</strong>
                                            </h3>
                                        </div>
                                        <div class="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul class="c-info-boxes-list c-info-boxes-list--rwd-alt g-spacing-bottom-minus-4 g-spacing-bottom-minus-2@desktop-small">
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Projects together</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>241</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Years of cooperation</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>4</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Project files uploaded</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>538</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">Team members involved</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>6</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">PSD to HTML Projects</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>144</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="c-info-boxes-list__item g-spacing-bottom-5 g-spacing-bottom-3@desktop-small">
                                                    <div class="c-info-box g-gutter-right-3 g-gutter-right-1@mobile">
                                                        <div class="c-info-box__head">
                                                            <span class="t-style-fpn-s-r-u">PSD to E-mail Projects</span>
                                                        </div>
                                                        <div class="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <strong class="t-style-fpn-xxxl-l u-paint-1" data-counter>97</strong>
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
                    <section class="l-sec">
                        <div class="l-row">
                            <div class="l-inner">
                                <div class="row">
                                    <div class="l-sec__box gr-12 no-gutter">
                                        <div class="l-sec__box__content">
                                            <blockquote class="c-testimonial g-gutter-top-5 g-gutter-bottom-5 g-gutter-left-4 g-gutter-left-0@tablet g-gutter-right-4 g-gutter-right-0@tablet" aria-label="Testimonial">
                                                <div class="c-testimonial__head u-paint-1">
                                                    <h3 class="t-style-fpn-l-r">Testimonial:</h3>
                                                </div>
                                                <div class="c-testimonial__content t-style-fpn-m-ri g-gutter-top-4 g-gutter-top-3@desktop-small">
                                                    <p class="u-line-h-m">
                                                        Pagepro helped us greatly with our everyday tasks by providing access to <strong>skillful manpower</strong>. Their ability to handle problems with precision and pursuit of delivering highest quality possible, extends our team here in KRD. Also constant communication while dealing with tasks helps us achieve everyday goals with an ease. <strong>We are very happy to work with professionals</strong> at Pagepro.
                                                    </p>
                                                </div>
                                                <footer class="c-testimonial__foot g-gutter-top-4  g-gutter-top-3@desktop-small">
                                                    <figure class="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                        <img src={images['pic_dawid-galczynski.png']} alt="Dawid Galczynski" />
                                                    </figure>
                                                    <div class="c-testimonial__foot__info u-text-upper">
                                                        <strong class="u-decor-bottom--alt t-style-fpn-s-r">Dawid Galczynski</strong>. Design Leader at KRD
                                                    </div>
                                                </footer>
                                            </blockquote>
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
                                                                <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/gatedtalent-website">
                                                                    <div class="c-portfolio-teaser__media" >
                                                                        <BgImage
                                                                            title="bgCaseGatedtalentWebsiteRect"
                                                                            fluid={props.data.bgCaseGatedtalentWebsiteRect.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div class="c-portfolio-teaser__main">
                                                                        <h2 class="t-style-fpn-l-b-u">
                                                                            GatedTalent Website
                                        </h2>
                                                                        <p class="g-gutter-top-1 u-paint-3">
                                                                            PSD to HTML conversion
                                             WordPress Development
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
                                                                <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/wroc-sharp">
                                                                    <div class="c-portfolio-teaser__media" >
                                                                        <BgImage
                                                                            title="bgCaseWrocRect"
                                                                            fluid={props.data.bgCaseWrocRect.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div class="c-portfolio-teaser__main">
                                                                        <h2 class="t-style-fpn-l-b-u">
                                                                            WROC#
                                        </h2>
                                                                        <p class="g-gutter-top-1 u-paint-3">
                                                                            PSD to HTML conversion
                                             WordPress Development
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
                                                                <Link class="c-portfolio-teaser__inner u-paint-4" to="/works/karina-papadopoulos">
                                                                    <div class="c-portfolio-teaser__media" >
                                                                        <BgImage
                                                                            title="bgCaseKarinaPersonalRect"
                                                                            fluid={props.data.bgCaseKarinaPersonalRect.childImageSharp.fluid} />
                                                                    </div>
                                                                    <div class="c-portfolio-teaser__main">
                                                                        <h2 class="t-style-fpn-l-b-u">
                                                                            Karina Papadopoulos
                                        </h2>
                                                                        <p class="g-gutter-top-1 u-paint-3">
                                                                            PSD to HTML conversion
                                             WordPress Development
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

export const fluidKrdBgImage = graphql`
                                fragment fluidKrdBgImage on File {
                    childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid
                }
                }
            }
            `


export const KrdQuery = graphql`query {
                bgCaseKarinaPersonalRect: file(relativePath: {eq: "bg_case-karina-personal-rect.jpg" }) {
                    ...fluidKrdBgImage
                }
                bgCaseKrd: file(relativePath: {eq: "bg_case-krd.jpg" }) {
                    ...fluidKrdBgImage
                }
                bgCaseGatedtalentWebsiteRect: file(relativePath: {eq: "bg-case-gatedtalentwebsite-rect.jpg" }) {
                    ...fluidKrdBgImage
                }
                bgCaseWrocRect: file(relativePath: {eq: "bg_case-wroc-rect.jpg" }) {
                    ...fluidKrdBgImage
                }
                }
                `

export default Krd;