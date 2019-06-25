import React from "react"
import Header from '../components/header';
import Footer from '../components/footer';
// import BgImage from '../components/bgImage';
import { graphql, Link } from "gatsby";
import bgAgencies from '../../static/img/bg_agencies.jpg'

const Cookies = (props) => (
    <>
        <div className="p-cookies">

            <Header />


            <main className="l-main">
                {/* <BgImage
                    title="bgAgencies"
                    fluid={props.data.bgAgencies.childImageSharp.fluid}
                    height='399px'
                    className="l-hero l-hero--alt l-hero--small l-hero--with-overlay u-paint-4" >

                    <div className="l-inner g-gutter-top-10 g-gutter-bottom-5">
                        <div className="l-hero__head row row-align-bottom g-gutter-top-8">
                            <div className="l-hero__head__box">
                                <h2 className="t-style-fpn-xxl-b g-spacing-top-2">
                                    Cookies Policy
                            </h2>
                            </div>
                        </div>
                    </div>
                </BgImage> */}
                <div class="l-hero l-hero--alt l-hero--small l-hero--with-overlay u-bg-2 u-paint-4" style={{ backgroundImage: `url(${bgAgencies})`, backgroundPosition: '100% 50%' }}>
                    <div class="l-inner g-gutter-top-10 g-gutter-bottom-5">
                        <div class="l-hero__head row row-align-bottom g-gutter-top-8">
                            <div class="l-hero__head__box">
                                <h2 class="t-style-fpn-xxl-b g-spacing-top-2">
                                    Privacy Policy
                        </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                    <div className="l-row">
                        <div className="l-inner">
                            <div className="row">
                                <div className="l-sec__box">
                                    <div className="l-sec__box__head">
                                        <h3 className="t-style-fpn-l-r-u">
                                            What are <strong>"cookies"</strong>?
                                    </h3>
                                    </div>
                                    <div className="l-sec__box__content g-gutter-top-2 g-gutter-top-2@desktop-small">
                                        <p>
                                            Cookies are data files stored in end user devices and used by web browsers. They are designed to help recognize the end user device in order to display information based on the users’ personal preferences. “Cookies” normally contain the web address, storage time in the device, and a unique reference number.
                                    </p>
                                    </div>
                                </div>
                                <div className="l-sec__box g-gutter-top-5">
                                    <div className="l-sec__box__head">
                                        <h3 className="t-style-fpn-l-r-u">
                                            What do we <strong>use “cookies”</strong> for?
                                    </h3>
                                    </div>
                                    <div className="l-sec__box__content g-gutter-top-2 g-gutter-top-2@desktop-small">
                                        <p>
                                            The purpose of cookies is to keep track of end user visits and activity. For example, online retailers use cookies to keep track of the items in a user’s shopping cart as the user explores the site further. Without cookies, your shopping cart would reset to zero every time you clicked a new link on the site. Different types of cookies keep track of different activities. Session cookies are used only when you actively navigate a website; once you leave the site, the session cookie disappears. Tracking cookies can be used to create long-term records of multiple visits to the same site. Authentication cookies track whether a user is logged in, and if so, under what name.
                                    </p>
                                    </div>
                                </div>
                                <div className="l-sec__box g-gutter-top-5">
                                    <div className="l-sec__box__head">
                                        <h3 className="t-style-fpn-l-r-u">
                                            How do we use cookies?
                                    </h3>
                                    </div>
                                    <div className="l-sec__box__content g-gutter-top-2 g-gutter-top-2@desktop-small">
                                        <p>
                                            Pagepro uses cookies for a variety of external services. Here is a list of cookies used by our website and the respective purposes they serve:
                                    </p>
                                    </div>
                                    <div className="g-gutter-top-1">
                                        <table border="1" cellpadding="10" cellspacing="1" className="c-table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="c-table__cell c-table__cell--header">Our Cookies</th>
                                                    <th scope="col" className="c-table__cell c-table__cell--header">Name</th>
                                                    <th scope="col" className="c-table__cell c-table__cell--header">Purpose</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="c-table__cell">
                                                        <p>Google Analytics*</p>
                                                    </td>
                                                    <td className="c-table__cell">
                                                        <p>_ga<br />
                                                            _gd</p>
                                                    </td>
                                                    <td className="c-table__cell">
                                                        <p>These are third-party cookies used by Google that allow us to use the Google Analytics service. These cookies are used for anonymous visitor tracking on our website. We use Google Analytics to compile reports and improve the site.</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="c-table__cell">Mautic**</td>
                                                    <td className="c-table__cell">mautic_referer_idAchieve
                                                mautic_session_id<br />
                                                        mtc_id<br />
                                                        mtc_sid</td>
                                                    <td className="c-table__cell">These are third-party cookies used by Mautic that allow us to use the Mautic service. We use Mautic to support our marketing activities.</td>
                                                </tr>
                                                <tr>
                                                    <td className="c-table__cell">Tawk***</td>
                                                    <td className="c-table__cell">TawkConnectionTime<br />
                                                        __tawkuuid</td>
                                                    <td className="c-table__cell">These are third-party cookies used by Tawk that allow us to use the Tawk service. We use Tawk for real-time communication with our customers via our website.</td>
                                                </tr>
                                                <tr>
                                                    <td className="c-table__cell">Django</td>
                                                    <td className="c-table__cell">django_language</td>
                                                    <td className="c-table__cell">This is a first-party cookie used by us. This cookie stores the language of the website.</td>
                                                </tr>
                                                <tr>
                                                    <td className="c-table__cell">Clutch</td>
                                                    <td className="c-table__cell">__cfduid<br />
                                                        __hssc<br />
                                                        _ _hssrc<br />
                                                        __hstc<br />
                                                        _ga<br />
                                                        _gid<br />
                                                        hubspotutk</td>
                                                    <td className="c-table__cell">These are third-party cookies used by Clutch that allow us to use the Clutch widget on our website.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="c-table__legend g-gutter-top-1">
                                            <p>*For more information on Google Analytics, visit the official Google Analytics website.</p>
                                            <p>**For more information on Mautic, visit the official Mautic website.</p>
                                            <p>***For more information on Tawk, visit the official Tawk website.</p>
                                            <p>****For more information on Clutch, visit the official Clutch website.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="l-sec__box g-gutter-top-5">
                                    <div className="l-sec__box__head">
                                        <h3 className="t-style-fpn-l-r-u">
                                            Enabling and Disabling Cookies
                                    </h3>
                                    </div>
                                    <div className="l-sec__box__content g-gutter-top-2 g-gutter-top-2@desktop-small">
                                        <ol className="c-ordered-list">
                                            <li>
                                                <p className="t-style-fpn-s-r-u">Open your browser.</p>
                                            </li>
                                            <li>
                                                <p className="t-style-fpn-s-r-u">Find where the cookies are stored.</p>
                                                <p>Each browser manages cookies in a different location. For example, in Internet Explorer, you can find them by clicking “Tools,” and then “Internet Options.” From there, select “General” and “Browsing history” and “Settings.” In Chrome, choose “Preferences” from the Chrome menu in the navigation bar, which will display your settings. Then use the “Advanced” option to display “Privacy and security.” From there, open “Content settings” and “Cookies.”</p>
                                            </li>
                                            <li>
                                                <p className="t-style-fpn-s-r-u">Manage your cookies.
                                            </p><p>Every browser gives you a range of options for enabling or deleting cookies. Internet Explorer, for instance, allows you to manage cookies under “Privacy” and “Advanced.” In Chrome, find where cookies are stored as outlined above, then select your management options under “Cookies.”</p>
                                            </li>
                                        </ol>
                                        <p className="g-gutter-top-1">
                                            Disabling all browser cookies could make some websites difficult to navigate. However, settings controlling or limiting third-party and tracking cookies can help protect your privacy.
                                    </p>
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
                                            Achieve success with us!
                                                </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-align-center g-gutter-top-4 g-gutter-top-3@desktop-small">
                                <div className="l-sec__box gr-6 gr-12@mobile-big no-gutter@mobile-big">
                                    <div className="l-sec__box__content t-style-fpn-s-r u-line-h-m">
                                        <p className="u-text-centered">
                                            Need a qualified software development team to take your project from where it is now, to where you want it to be?
                                                </p>
                                        <p className="g-gutter-top-3 g-gutter-top-2@desktop-small u-text-centered">
                                            <strong className="t-style-fpn-s-s">Talk to us and get the ball rolling.</strong>
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
                                        <Link className="c-cta-link s-btn-style-3" to="/contact">
                                            <span className="c-label">Contact Us</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>

    </>
)

export const cookiesQuery = graphql`
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

export default Cookies