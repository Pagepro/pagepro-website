import React from "react"
import Header from '../../components/header';
import Footer from '../../components/footer';
import { graphql } from 'gatsby';
import BgImage from '../../components/bgImage'
import bgAgencies from '../../../static/img/bg_agencies.jpg'


function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../../static/img/', false, /\.(jpg|svg)$/));

const WordPressDevelopment = (props) => (
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
                                        WordPress Development
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
                                WordPress Development
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
                    <section className="l-sec"
                        id="offer--lead-text">
                        <div className="l-row">
                            <div className="l-inner g-gutter-top-5 g-gutter-top-4@desktop-small g-gutter-bottom-1 g-gutter-bottom-1@desktop-small">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head u-paint-1">
                                            <h3 className="t-style-fpn-l-r-u">
                                                <span className="c-ico-label">
                                                    What is WordPress?
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="l-sec"
                        id="offer--intro-text">
                        <div className="l-row">
                            <div className="l-sec__box gr-12 no-gutter">
                                <div className="l-inner g-gutter-top-3 g-gutter-top-1@desktop-small g-gutter-bottom-4 g-gutter-bottom-3@desktop-small u-paint-5">
                                    <div className="l-sec__box__content u-paint-2">
                                        <div className="row row-align-between g-gutter-top-2@desktop-small g-gutter-bottom-2@desktop-small">
                                            <div className="l-sec__box gr-2 gr-12@mobile u-paint-1 t-style-fpn-l-r-u no-gutter-left no-gutter@mobile g-gutter-bottom-2@mobile g-gutter-bottom-1@mobile-small">
                                                <div className="l-sec__box__content o-svg-wrapper--sec">
                                                <img src={images['wordpress.svg']} alt="WordPress logo" />
                                                </div>
                                            </div>
                                            <div className="l-sec__box gr-9 gr-12@mobile no-gutter-right no-gutter@mobile g-spacing-top-3@mobile-medium g-spacing-top-1@mobile-small">
                                                <div className="l-sec__box__content">
                                                    <p>
                                                        <strong>WordPress is an open source content management system</strong>
                                                        which allows to create and manage websites with ease. Initially released in
                                                        2003 as a blogging platform, today it powers nearly 30 percent of entire
                                                        web and is capable of creating any type of website, from niche blog to
                                                        full-featured business website of the world biggest brand.
                                                    </p>
                                                    <p className="g-gutter-top-1 g-gutter-top-1@desktop-small">
                                                        WordPress embodies elegance and ease of use. Maintained by numerous open
                                                        source contributors from all around the world it gets better everyday.
                                                        People with a limited tech experience can use it “out of the box”, but the
                                                        real magic comes with ability to customize the platform in remarkable ways.
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
                                            <h3 className="t-style-fpn-l-r-u">
                                                Core benefits of using <strong>WordPress</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">
                                                                Free
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                It's hard to imagine, but WordPress, the most popular CMS in the
                                                                world is open-source software. It means that you can use It free of
                                                                charge, no more monthly or annual license fees. That makes
                                                                WordPress the most cost-effective web development solution
                                                                available on the market.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Reliable</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                WordPress has a stable code base, rich infrastructure and
                                                                continuous development which make it one of the most solid and
                                                                safe-to-use pieces of software out there. At the same time
                                                                WordPress is a continually evolving piece of software. Security
                                                                improvements and new functionalities are added on regular basis.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">SEO</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Google loves WordPress. Thanks to simple and clean code, that
                                                                creates pages optimized for indexing out of the box, websites
                                                                builtwith WordPress are really SEO friendly. With additional care
                                                                provided by our developers your website can get to the top ranks of
                                                                search engines in no time.
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
                                                                Easy to Use
                                                            </span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                WordPress is considered to be the most user-friendly CMS out there.
                                                                It is quick and simple to manage, and doesn’t require extensive
                                                                knowledge of coding for managing the content. Adding new pages,
                                                                blog posts, images and editing existing content will be a breeze
                                                                for you and your employees. Before you know it, you’ll be feeling
                                                                like a pro.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Versatile</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                WordPress is all about flexibility. We can easily add all manner of
                                                                powerful functionality to your website, such as ecommerce,
                                                                multilingual management, CRM integration, web tracking system,
                                                                social media integration and much, much more. There are limitless
                                                                ways to customize all of these tools to produce unique solution
                                                                that perfectly reflects your business needs.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__head">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">Scalability</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                With WordPress, the site can grow as the business grows because of
                                                                the outstanding scalability of this platform. It can serve tens of
                                                                thousands of logged-in users at a time and deliver hundreds of
                                                                millions of monthly page views, without compromising its
                                                                performance. For this reason, WordPress serves as an ideal platform
                                                                for businesses that foresee extensive growth in the future.
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
                                                Our <strong>WordPress</strong> Tech Stack
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media"
                                                            aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://www.advancedcustomfields.com/pro/"
                                                                    target="_blank">
                                                                    <img src={images['acf.svg']} alt="ACF logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">ACF Pro</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                <strong>Advanced Custom Fields Pro</strong> is a WordPress plugin
                                                                which allows us to take full control of website’s content. We can
                                                                add extra content fields to your WordPress edit screens. These
                                                                include repeatable blocks, intuitive galleries, custom settings
                                                                pages and reusable fields. Such features allow us to build highly
                                                                customized websites at lighting speed.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media"
                                                            aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                <a href="https://wpml.org/"
                                                                    target="_blank">
                                                                    <img src={images['wpml.svg']} alt="WPML logo" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">WPML</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                With this tool we will make your business go global. <strong>WPML
                                                                    provides advanced features for translation management</strong>.
                                                                Building and maintaining website accessible in multiple languages
                                                                was never that easy. It’s powerful enough for corporate platforms,
                                                                yet simple blogs.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media"
                                                            aria-hidden="true">
                                                            <div className="o-svg-wrapper o-svg-wrapper--default">
                                                                <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                    <a href="https://woocommerce.com/"
                                                                        target="_blank">
                                                                    <img src={images['woocommerce.svg']} alt="WooCommerce logo" />
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">WooCommerce</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Do you wonder what is the best way to turn your website into
                                                                <strong>fully functional online store</strong>? WooCommerce is the
                                                                best bet. The most popular eCommerce solution let you sell digital
                                                                and physical products, manage inventory, shipping, take secure
                                                                payments and sort taxes automatically.
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
                    <section className="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small u-bg-6">
                        <div className="l-row">
                            <div className="l-inner">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="t-style-fpn-l-r-u">
                                                WordPress <strong>Related Services</strong>
                                            </h3>
                                        </div>
                                        <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                                            <ul className="c-info-boxes-list">
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media"
                                                            aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                    <img src={images['wordpress-website.svg']} alt="WordPress website" />
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">WordPress Websites</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Do you want to outsource building your business website from
                                                                scratch? We are here to help. Pagepro’s experienced WordPress
                                                                development team is ready to create platform that will meet your
                                                                expectations. With professional, well-polished platform you will
                                                                build online presence at the drop of a hat.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item g-spacing-bottom-3@mobile">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media"
                                                            aria-hidden="true">
                                                            <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                    <img src={images['support.svg']} alt="Technical support" />
                                                            </figure>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">WordPress Support Retainers</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Here at Pagepro, we know that it takes a lot of work to properly
                                                                maintain website. Not to mention further development. We can take
                                                                care of everything necessary and free your mind to focus on things
                                                                that really matter for your business. Don’t let your online hub
                                                                catch dust.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="c-info-boxes-list__item">
                                                    <div className="c-info-box g-gutter-right-3 g-gutter-right-0@mobile">
                                                        <div className="c-info-box__media"
                                                            aria-hidden="true">
                                                            <div className="o-svg-wrapper o-svg-wrapper--default">
                                                                <figure className="o-svg-wrapper o-svg-wrapper--default">
                                                                    <img src={images['react-code-review.svg']} alt="Code review" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="c-info-box__head g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <span className="t-style-fpn-s-r-u u-paint-1">WordPress code review</span>
                                                        </div>
                                                        <div className="c-info-box__content g-gutter-top-2 g-gutter-top-1@mobile">
                                                            <p>
                                                                Keeping your codebase clean and simple is the best investment for
                                                                long time prosperity in the software world. Our experts can closely
                                                                inspect your WordPress code, point out problem areas and room for
                                                                improvement. With professional guidance, you will be able to keep
                                                                your website in top notch shape.
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
                    <section className="l-sec l-sec--with-between-decor">
                        <div className="l-row">
                            <div className="l-inner g-gutter-top-6 g-gutter-top-3@desktop-small g-gutter-bottom-6 g-gutter-bottom-3@desktop-small">
                                <div className="row">
                                    <div className="l-sec__box gr-12 no-gutter">
                                        <div className="l-sec__box__head">
                                            <h3 className="u-paint-1 t-style-fpn-l-r">Here are some examples of our <strong>WordPress</strong>
                                                projects:</h3>
                                        </div>
                                        <div className="l-sec__box__content g-spacing-top-5 g-spacing-top-4@desktop-small c-between-decors-parent">
                                            <div className="c-slider-wrapper c-slider-wrapper--portfolio-teasers js-portfolio-teasers-slider">
                                                <div className="c-slider-wrapper__container swiper-container"
                                                    aria-label="Portfolio teasers slider">
                                                    <ol className="c-portfolio-teasers-list c-portfolio-teasers-list--small swiper-wrapper">
                                                        <li className="c-portfolio-teasers-list__item swiper-slide">
                                                            <div className="c-portfolio-teaser c-portfolio-teaser--small">
                                                                <a className="c-portfolio-teaser__inner u-paint-4"
                                                                    href="310.html">
                                                                    <div className="c-portfolio-teaser__media">
                                                                            <BgImage
                                                                        title="bgCase310Rect"
                                                                        fluid={props.data.bgCase310Rect.childImageSharp.fluid}
                                                                    />
                                                                        </div>
                                                                    <div className="c-portfolio-teaser__main">
                                                                        <h2 className="t-style-fpn-l-b-u">
                                                                            310 VINCENT STREET OFFICE BUILDING
                                                                        </h2>
                                                                        <p className="g-gutter-top-1 u-paint-3">
                                                                            PSD to HTML conversion <br />
                                                                            WordPress Development
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
                                                                <a className="c-portfolio-teaser__inner u-paint-4"
                                                                    href="acrf.html">
                                                                    <div className="c-portfolio-teaser__media">
                                                                             <BgImage
                                                                        title="bgCaseAcrfRect"
                                                                        fluid={props.data.bgCaseAcrfRect.childImageSharp.fluid} />
                                                                        </div>
                                                                    <div className="c-portfolio-teaser__main">
                                                                        <h2 className="t-style-fpn-l-b-u">
                                                                            ACRF
                                                                        </h2>
                                                                        <p className="g-gutter-top-1 u-paint-3">
                                                                            Sketch to HTML conversion <br />
                                                                            WordPress Development
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
                                                                <a className="c-portfolio-teaser__inner u-paint-4"
                                                                    href="karina-papadopoulos.html">
                                                                    <div className="c-portfolio-teaser__media">
                                                                            <BgImage
                                                                        title="bgCaseKarinaPersonalRect"
                                                                        fluid={props.data.bgCaseKarinaPersonalRect.childImageSharp.fluid} />
                                                                        </div>
                                                                    <div className="c-portfolio-teaser__main">
                                                                        <h2 className="t-style-fpn-l-b-u">
                                                                            Karina Papadopoulos
                                                                        </h2>
                                                                        <p className="g-gutter-top-1 u-paint-3">
                                                                            PSD to HTML conversion <br />
                                                                            WordPress Development
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
                                                    <span className="c-slider-button c-slider-button--prev js-slider-prev"
                                                        aria-label="go to next slide"></span>
                                                    <span className="c-slider-button c-slider-button--next js-slider-next"
                                                        aria-label="go to previous slide"></span>
                                                    <ol className="c-dots-list g-gutter-top-2@mobile g-gutter-bottom-2@mobile">
                                                        <li className="c-dots-list__item">
                                                            <span className="c-dot u-bg-1 u-paint-2"></span>
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
                    <div className="l-sec l-sec--with-slider u-bg-1 u-paint-4">
                <div className="l-row">
                    <div className="l-inner l-inner-no-gutters@desktop-small">
                        <div className="row row-align-center">
                            <div className="l-sec__box gr-10 gr-12@desktop-small no-gutter no-gutter@desktop-small">
                                <div className="l-sec__box__content">
                                    <div className="c-slider-wrapper c-slider-wrapper--testimonials js-testimonials-slider g-gutter-top-8 g-gutter-top-5@desktop-small g-gutter-bottom-8 g-gutter-bottom-5@desktop-small">
                                        <div className="c-slider-wrapper__container swiper-container" aria-label="testimonials slider">
                                            <ol className="c-testimonials-list swiper-wrapper swiper-wrapper--alt">
                                                <li className="c-testimonials-list__item swiper-slide">
                                                    <blockquote className="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-bottom-5 g-gutter-bottom-3@mobile g-gutter-left-4 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-right-4 g-gutter-right-2@desktop-small g-gutter-right-1@mobile" aria-label="Testimonial">
                                                        <div className="c-testimonial__content t-style-fpn-m-ri u-line-h-m c-chat-decor-parent">
                                                            <p className="t-style-fpn-xl-ri-u">
                                                                Chris and his team are <strong>very talented front-end developers</strong>. The level of commitment, quality and service level that they provide is hard to find.<br  className="hide@tablet"/> We <strong>highly recommend</strong> them as a trusted partner.
                                                            </p>
                                                            <span className="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                <span className="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                <span className="c-chat-decor__line c-chat-decor__line--right"></span>
                                                            </span>
                                                        </div>
                                                        <footer className="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                            <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                    <img src={images['pic_ilona-filipi.jpg']} alt="Ilona Filipi" />
                                                            </figure>
                                                            <div className="c-testimonial__foot__info u-text-upper">
                                                                <strong className="u-decor-bottom--alt t-style-fpn-s-r">Ilona Filipi</strong><br />
                                                                Managing Director<br />
                                                                Moove, London
                                                            </div>
                                                        </footer>
                                                    </blockquote>
                                                </li>
                                                <li className="c-testimonials-list__item swiper-slide">
                                                    <blockquote className="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-bottom-5 g-gutter-bottom-3@mobile g-gutter-left-4 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-right-4 g-gutter-right-2@desktop-small g-gutter-right-1@mobile" aria-label="Testimonial">
                                                        <div className="c-testimonial__content t-style-fpn-m-ri u-line-h-m c-chat-decor-parent">
                                                            <p className="u-line-h-m">
                                                                I would like to recommend Pagepro as a high qualified <strong>Front-end development</strong> partner.
                                                                For past three years, RevSquare was using Pagepro services to satisfy needs for clients from 10 different countries. During this time Pagepro provided high quality services, big support with good prices and communication skills.
                                                            </p>
                                                            <span className="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                <span className="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                <span className="c-chat-decor__line c-chat-decor__line--right"></span>
                                                            </span>
                                                        </div>
                                                        <footer className="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                            <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                    <img src={images['pic_guillaume-pousseo.jpg']} alt="Guillaume Pousseo" />
                                                            </figure>
                                                            <div className="c-testimonial__foot__info u-text-upper">
                                                                <strong className="u-decor-bottom--alt t-style-fpn-s-r">Guillaume Pousseo</strong> <br />CTO<br />
                                                                RevSquare, New York City
                                                            </div>
                                                        </footer>
                                                    </blockquote>
                                                </li>
                                                <li className="c-testimonials-list__item g-gutter-right-3 g-gutter-right-0@tablet swiper-slide">
                                                    <blockquote className="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-left-2@tablet g-gutter-left-1@mobile g-gutter-right-2@tablet g-gutter-right-1@mobile" aria-label="Testimonial">
                                                        <div className="c-testimonial__content t-style-fpn-m-ri c-chat-decor-parent">
                                                            <p className="u-line-h-m">
                                                                The website was delivered on time and on budget. Redfox Media’s multiple touchpoints led to comprehensive communication and a unified vision that is rare for fixed-price projects. Differing time zones led to logistical challenges, <strong>but their experience and work ethic compensated for any issues</strong>.
                                                            </p>
                                                            <span className="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                <span className="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                <span className="c-chat-decor__line c-chat-decor__line--right"></span>
                                                            </span>
                                                        </div>
                                                        <footer className="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                            <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                    <img src={images['pic-lance-redgrave.jpg']} alt="Lance Redgrave" />
                                                            </figure>
                                                            <div className="c-testimonial__foot__info u-text-upper">
                                                                <strong className="u-decor-bottom--alt t-style-fpn-s-r">Lance Redgrave</strong> <br />CEO <br />Redfox Media, Sydney
                                                            </div>
                                                        </footer>
                                                    </blockquote>
                                                </li>
                                                <li className="c-testimonials-list__item swiper-slide">
                                                    <blockquote className="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-bottom-5 g-gutter-bottom-3@mobile g-gutter-left-4 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-right-4 g-gutter-right-2@desktop-small g-gutter-right-1@mobile" aria-label="Testimonial">
                                                        <div className="c-testimonial__content t-style-fpn-m-ri u-line-h-m c-chat-decor-parent">
                                                            <p className="u-line-h-m">
                                                                We’ve had the ultimate good fortune of working with Chris and his team since 2015, building dozens upon dozens of sites. <strong>They deliver exactly when they say they will</strong> and it’s always pixel-perfect. But not only that, they prefer to under-promise and over-deliver!
                                                            </p>
                                                            <span className="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                <span className="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                <span className="c-chat-decor__line c-chat-decor__line--right"></span>
                                                            </span>
                                                        </div>
                                                        <footer className="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                            <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                    <img src={images['pic_michal-kenderski.jpg']} alt="Michal Kenderski" />
                                                        </figure>
                                                        <div className="c-testimonial__foot__info u-text-upper">
                                                            <strong className="u-decor-bottom--alt t-style-fpn-s-r">Michal Kenderski</strong> <br />CEO<br />
                                                            Republik-Media, London
                                                        </div>
                                                        </footer>
                                                    </blockquote>
                                                </li>
                                                <li className="c-testimonials-list__item swiper-slide">
                                                    <blockquote className="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-bottom-5 g-gutter-bottom-3@mobile g-gutter-left-4 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-right-4 g-gutter-right-2@desktop-small g-gutter-right-1@mobile" aria-label="Testimonial">
                                                        <div className="c-testimonial__content t-style-fpn-m-ri u-line-h-m c-chat-decor-parent">
                                                            <p className="u-line-h-m">
                                                                Chris and his team came on board at the last minute to help us out with a complex and challenging project. <strong>They proved to be an invaluable resource.</strong> Pagepro is great at problem solving, very organised and deliver in a timely fashion. I’d recommend them highly and will look forward to working with them again on future projects.
                                                            </p>
                                                            <span className="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                <span className="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                <span className="c-chat-decor__line c-chat-decor__line--right"></span>
                                                            </span>
                                                        </div>
                                                        <footer className="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                            <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                    <img src={images['pic_carole-egerton.jpg']} alt="Carole Egerton" />
                                                            </figure>
                                                            <div className="c-testimonial__foot__info u-text-upper">
                                                                <strong className="u-decor-bottom--alt t-style-fpn-s-r">Carole Egerton</strong> <br />Managing Director<br />Baffle &amp; Zander, London
                                                            </div>
                                                        </footer>
                                                    </blockquote>
                                                </li>
                                                <li className="c-testimonials-list__item swiper-slide">
                                                    <blockquote className="c-testimonial c-testimonial--alt c-testimonial--no-borders g-gutter-bottom-5 g-gutter-bottom-3@mobile g-gutter-left-4 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-right-4 g-gutter-right-2@desktop-small g-gutter-right-1@mobile" aria-label="Testimonial">
                                                        <div className="c-testimonial__content c-chat-decor-parent">
                                                            <p className="t-style-fpn-xl-ri-u">
                                                                <strong>They are more than a great development team.</strong> They are a partner that helps create high quality applications.
                                                            </p>
                                                            <span className="c-chat-decor g-gutter-top-3 g-gutter-top-2@mobile" aria-hidden="true">
                                                                <span className="c-chat-decor__line c-chat-decor__line--left g-gutter-left-2"></span>
                                                                <span className="c-chat-decor__line c-chat-decor__line--right"></span>
                                                            </span>
                                                        </div>
                                                        <footer className="c-testimonial__foot g-gutter-top-4 g-gutter-top-2@mobile">
                                                            <figure className="c-testimonial__foot__media o-img-wrapper o-img-wrapper--round">
                                                                    <img src={images['pic_paul-horrocks.jpg']} alt="John Horrocks" />
                                                            </figure>
                                                            <div className="c-testimonial__foot__info u-text-upper">
                                                                <strong className="u-decor-bottom--alt t-style-fpn-s-r">John Horrocks</strong><br />
                                                                Rocksurance<br />
                                                                New York City
                                                            </div>
                                                        </footer>
                                                    </blockquote>
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="c-slider-wrapper__navigation swiper-navigation">
                                            <span className="c-slider-button c-slider-button--prev js-slider-prev" aria-label="go to next slide"></span>
                                            <span className="c-slider-button c-slider-button--next js-slider-next" aria-label="go to previous slide"></span>
                                            <ol className="c-dots-list">
                                                <li className="c-dots-list__item">
                                                    <span className="c-dot u-bg-4 u-paint-2"></span>
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
            
                    <section className="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10
                     g-gutter-bottom-5@desktop-small u-bg-4">
                <div className="l-inner">
                    <div className="l-sec__box__head">
                        <h3 className="t-style-fpn-l-r-u">Frequently <strong>asked questions</strong>
                        </h3>
                    </div>
                    <div className="l-sec__box__content g-gutter-top-5 g-gutter-top-3@desktop-small">
                        <ul className="c-accordion">
                            <li className="c-accordion__card">
                                <a href="#" className="c-accordion__cta-wrapper js-accordion-toggle">
                                    <span className="c-accordion__cta-ico u-bg-1"></span>
                                    <span className="c-accordion__cta t-style-fpn-s-r-u u-paint-2">
                                        Can you show me an example of a WordPress theme both
                                        front and back end?
                                    </span>
                                </a>
                                <div className="c-accordion__content-wrapper">
                                    <div className="c-accordion__content">
                                        <p>
                                            Yes. Please contact us and we will send a link to a demo
                                            WordPress administration panel.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="c-accordion__card">
                                <a href="#" className="c-accordion__cta-wrapper js-accordion-toggle">
                                    <span className="c-accordion__cta-ico u-bg-1"></span>
                                    <span className="c-accordion__cta t-style-fpn-s-r-u u-paint-2">
                                        Can you create WordPress plugins?
                                    </span>
                                </a>
                                <div className="c-accordion__content-wrapper">
                                    <div className="c-accordion__content">
                                        <p>
                                            Yes. Please send detailed instructions and designs and
                                            we will provide a quote for building a WordPress plugin.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="c-accordion__card">
                                <a href="#" className="c-accordion__cta-wrapper js-accordion-toggle">
                                    <span className="c-accordion__cta-ico u-bg-1"></span>
                                    <span className="c-accordion__cta t-style-fpn-s-r-u u-paint-2">
                                        Will I be able to upgrade my WordPress site if I use
                                        your theme?
                                    </span>
                                </a>
                                <div className="c-accordion__content-wrapper t-wysiwyg">
                                    <div className="c-accordion__content">
                                        <p>
                                            We follow the best practices for WordPress theme
                                            development:
                                        </p>
                                        <ul>
                                            <li>
                                                We never touch core WordPress files
                                            </li>
                                            <li>
                                                We use WordPress plugin API for modifying the
                                                administration panel behavior
                                            </li>
                                            <li>
                                                We don't use deprecated WordPress functions and features
                                            </li>
                                        </ul>
                                        <p>
                                            However, we cannot guarantee full compatibility of our
                                            code with future
                                            WordPress and plugin versions. That’s why we prefer to
                                            make the WordPress core and/or plugin upgrades for you.
                                            Just contact us and we will review the needed upgrades
                                            and we will advise you how to proceed.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="c-accordion__card">
                                <a href="#" className="c-accordion__cta-wrapper js-accordion-toggle">
                                    <span className="c-accordion__cta-ico u-bg-1"></span>
                                    <span className="c-accordion__cta t-style-fpn-s-r-u u-paint-2">
                                        Can I populate the content of my site on
                                        your staging server?
                                        Will you help me in migrating the content to my
                                        live site when I am ready?
                                    </span>
                                </a>
                                <div className="c-accordion__content-wrapper">
                                    <div className="c-accordion__content">
                                        <p>
                                            Yes. Feel free to populate the content on our staging
                                            server. Once you are ready we will be glad to help you
                                            with moving the whole site to your server.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="c-accordion__card">
                                <a href="#" className="c-accordion__cta-wrapper js-accordion-toggle">
                                    <span className="c-accordion__cta-ico u-bg-1"></span>
                                    <span className="c-accordion__cta t-style-fpn-s-r-u u-paint-2">
                                        Can you create e-commerce WordPress sites?
                                    </span>
                                </a>
                                <div className="c-accordion__content-wrapper">
                                    <div className="c-accordion__content">
                                        <p>
                                            Yes. We have experience with several WordPress eCommerce
                                            plugins and we will be glad to create a fully functional
                                            WordPress store.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="c-accordion__card">
                                <a href="#" className="c-accordion__cta-wrapper js-accordion-toggle">
                                    <span className="c-accordion__cta-ico u-bg-1"></span>
                                    <span className="c-accordion__cta t-style-fpn-s-r-u u-paint-2">
                                        Do you provide support for the WordPress
                                        theme after its creation?
                                    </span>
                                </a>
                                <div className="c-accordion__content-wrapper">
                                    <div className="c-accordion__content">
                                        <p>
                                            Yes. We provide support. Please contact us and we will
                                            send you a contract.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="c-accordion__card">
                                <a href="#" className="c-accordion__cta-wrapper js-accordion-toggle">
                                    <span className="c-accordion__cta-ico u-bg-1"></span>
                                    <span className="c-accordion__cta t-style-fpn-s-r-u u-paint-2">
                                        Can you customize premium WordPress themes?
                                    </span>
                                </a>
                                <div className="c-accordion__content-wrapper">
                                    <div className="c-accordion__content">
                                        <p>
                                            No, we prefer to create the WordPress themes from
                                            scratch because only then can we guarantee the best
                                            quality and pixel perfect results.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="c-accordion__card">
                                <a href="#" className="c-accordion__cta-wrapper js-accordion-toggle">
                                    <span className="c-accordion__cta-ico u-bg-1"></span>
                                    <span className="c-accordion__cta t-style-fpn-s-r-u u-paint-2">
                                        Can you make
                                        updates
                                        to existing WordPress
                                        themes?
                                    </span>
                                </a>
                                <div className="c-accordion__content-wrapper">
                                    <div className="c-accordion__content">
                                        <p>
                                            Yes. Making updates to existing WordPress sites requires
                                            detailed investigation of the code’s quality and
                                            features of the theme. Please send us a message and we
                                            will review your requirements and get back to you with
                                            more information.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="c-accordion__card">
                                <a href="#" className="c-accordion__cta-wrapper js-accordion-toggle">
                                    <span className="c-accordion__cta-ico u-bg-1"></span>
                                    <span className="c-accordion__cta t-style-fpn-s-r-u u-paint-2">
                                        Can you create a WordPress theme from
                                        existing markup?
                                    </span>
                                </a>
                                <div className="c-accordion__content-wrapper">
                                    <div className="c-accordion__content">
                                        <p>
                                            We’ll review the base code and let you know whether we
                                            can use it. We may provide a quote for improving it, or
                                            refuse to work with it if it’s not built according to
                                            the best front-end coding practices.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="c-accordion__card">
                                <a href="#" className="c-accordion__cta-wrapper js-accordion-toggle">
                                    <span className="c-accordion__cta-ico u-bg-1"></span>
                                    <span className="c-accordion__cta t-style-fpn-s-r-u u-paint-2">
                                        Can you install the project on my server upon completion?
                                    </span>
                                </a>
                                <div className="c-accordion__content-wrapper t-wysiwyg">
                                    <div className="c-accordion__content">
                                        <p>
                                            Yes. Usually, we install the WordPress theme on our
                                            staging server but if you provide us with credentials to
                                            your server we can install the project there too. We
                                            need the following in order to setup the site:
                                        </p>
                                        <ul>
                                            <li>
                                                FTP/SFTP credentials (host, username, password, FTP directory)
                                            </li>
                                            <li>
                                                MySQL database login credentials (host,
                                                username, password, database name)
                                            </li>
                                            <li>
                                                HTTP URL for the FTP directory If you provide us with hosting control panel
                                                credentials we will not need additional FTP and MySQL details.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="c-accordion__card">
                                <a href="#" className="c-accordion__cta-wrapper js-accordion-toggle">
                                    <span className="c-accordion__cta-ico u-bg-1"></span>
                                    <span className="c-accordion__cta t-style-fpn-s-r-u u-paint-2">
                                        What can I expect upon delivery?
                                    </span>
                                </a>
                                <div className="c-accordion__content-wrapper">
                                    <div className="c-accordion__content">
                                        <p>
                                            After the completion of the project, we provide you with
                                            an archive containing the WordPress theme files and a
                                            MySQL dump file. The archive also includes: - All
                                            plugins which are requested and used for the project -
                                            Readme file that explains how to use the theme
                                            Additionally, if you need the static HTML files we can
                                            provide them as well. Please note that further changes
                                            requested to the WordPress site will not be applied to
                                            the static version of the
                                            files.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
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
                                                <input className="u-paint-2" required type="text" name="msg_name" id="contact_full-name" value=""/>
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
                                                <input className="u-paint-2" required type="email" name="msg_email" id="contact_email" value=""/>
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
                                                <input className="u-paint-2" type="text" name="msg_company" id="contact_company" value=""/>
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
                                                <input className="u-paint-2" type="text" name="msg_phone" id="contact_phone" value=""/>
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

export const fluidWordPressBgImage = graphql`
                            fragment fluidWordPressBgImage on File {
                            childImageSharp {
                                fluid(quality: 90, maxWidth: 4160) {
                                ...GatsbyImageSharpFluid
                                    }
                            }
                        }
                        `


export const wordPressjsQuery = graphql`query {

                        bgAgencies: file(relativePath: {eq: "bg_agencies.jpg" }) {
                            ...fluidWordPressBgImage
                        }
                        bgCase310Rect: file(relativePath: {eq: "bg-case-310-rect.jpg" }) {
                            ...fluidWordPressBgImage
                        }
                        bgCaseAcrfRect: file(relativePath: {eq: "bg-case-acrf-rect.jpg" }) {
                            ...fluidWordPressBgImage
                        }
                        bgCaseKarinaPersonalRect: file(relativePath: {eq: "bg_case-karina-personal-rect.jpg" }) {
                            ...fluidWordPressBgImage
                        }

                        }
                        `

export default WordPressDevelopment;