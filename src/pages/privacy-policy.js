import React from "react"
import Header from '../components/header';
import Footer from '../components/footer';
import BgImage from '../components/bgImage';
import { Link } from 'gatsby'


const PrivacyPolicy = (props) => (
    <>
        <div class="p-privacy">

            <Header />



            <main class="l-main">

                <BgImage
                    title="bgAgencies"
                    fluid={props.data.bgAgencies.childImageSharp.fluid}
                    height='399px'
                    className="l-hero l-hero--alt l-hero--small l-hero--with-overlay  u-paint-4" >

                    <div class="l-inner g-gutter-top-10 g-gutter-bottom-5">
                        <div class="l-hero__head row row-align-bottom g-gutter-top-8">
                            <div class="l-hero__head__box">
                                <h2 class="t-style-fpn-xxl-b g-spacing-top-2">
                                    Privacy Policy
                            </h2>
                            </div>
                        </div>
                    </div>

                </BgImage>

                <section class="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small">
                    <div class="l-row">
                        <div class="l-inner">
                            <div class="row">
                                <div class="l-sec__box">
                                    <div class="l-sec__box__head">
                                        <h3 class="t-style-fpn-l-r-u">
                                            General
                                    </h3>
                                    </div>
                                    <div class="l-sec__box__content g-gutter-top-2 g-gutter-top-2@desktop-small">
                                        <ol class="c-ordered-list">
                                            <li>This Privacy Policy (called “Policy” from now on) is for information purposes only and is entitled to help users understand their obligations and rights in the frame of the European General Data Protection Regulation. (called “GDPR” from now on).</li>
                                            <li>This Policy is valid from <strong class="u-paint-1">May 25, 2018</strong>.</li>
                                            <li>The personal data administrator is Pagepro sp. z o.o. (from now on called “Administrator”) with headquarters in Poland (ul. Dąbrowskiego 28, 15-872 Białystok) registered in the XII Division of the National Entrepreneurs Court in Białystok (KRS 0000667902; NIP 542-327-00-57; Regon 366771509) represented by: Krzysztof Łojniewski. Email address: <a href="mailto:gdpr@pagepro.co">gdpr@pagepro.co</a>, Phone number:<span class="u-paint-1"> +48 888 641 098</span></li>
                                            <li>Customers’ and Users’ personal data is stored and processed in accordance with the GDPR requirements. The term “Personal Data” is used according to GDPR’s personal data definition.</li>
                                            <li>The administrator makes all the necessary efforts to protect the interests of individuals and organizations sharing their personal and corporate information. As well, ensures that the data is gathered and stored in agreement with GDPR, and will serve only the specific purposes for which a specific consent has been provided.</li>
                                            <li class="t-wysiwyg">
                                                <p>The administrator understands the importance of the privacy levels demanded from the site visitors and users in current and potential cooperation agreements, as well as customers, sharing personal data making use of the following:</p>
                                                <ul>
                                                    <li>The official website <a href="https://pagepro.co">pagepro.co</a>&nbsp;and all its subpages</li>
                                                    <li>
                                                        <p>Social platforms:</p>
                                                        <ul class="nested-list">
                                                            <li><a href="https://facebook.com">facebook.com</a>, including all subdomains under the “Facebook” brand, regulated by its own policies: <a href="https://facebook.com/legal/terms">facebook.com/legal/terms</a></li>
                                                            <li><a href="https://linkedin.com">linkedin.com</a>, including all subdomains under the “LinkedIn” brand, regulated by its own policies:&nbsp;<a href="https://linkedin.com/legal/user-agreement">linkedin.com/legal/user-agreement</a></li>
                                                            <li><a href="https://instagram.com">instagram.com</a>, including all subdomains under the “Instagram” brand, regulated by its own policies: <a href="https://help.instagram.com/478745558852511">help.instagram.com/478745558852511</a></li>
                                                            <li><a href="https://twitter.com">twitter.com</a>, including all subdomains under the “Twitter” brand, regulated by its own policies: <a href="https://twitter.com/en/tos">twitter.com/en/tos</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <div class="l-sec__box g-gutter-top-5">
                                    <div class="l-sec__box__head">
                                        <h3 class="t-style-fpn-l-r-u">
                                            Scope and goal of personal data gathering, processing and storing
                                    </h3>
                                    </div>
                                    <div class="l-sec__box__content g-gutter-top-1">
                                        <ol class="c-ordered-list">
                                            <li>Everytime personal information is gathered, stored and/or processed by the Administrator, it is done strictly according to the GDPR regulations.</li>
                                            <li class="t-wysiwyg">
                                                <p>The most common cases for which the Administrator gathers, stores and process personal data are:</p>
                                                <ul>
                                                    <li>Recruitment</li>
                                                    <li>Business Development</li>
                                                    <li>After-sales Management</li>
                                                    <li>Marketing</li>
                                                    <li>Event Management</li>
                                                    <li>Accounting</li>
                                                </ul>
                                            </li>
                                            <li class="g-gutter-top-1">In case personal data is planned to be collected for other purposes, a special consent from customers and/or users for each specific purpose will be requested.</li>
                                            <li>All personal data collected is strictly for internal use only, and won’t be shared with any other external parties.</li>
                                            <li class="t-wysiwyg">
                                                <p>After the proper consent has been granted, the Administrator can collect, process and store the following data:</p>
                                                <ul>
                                                    <li>Name and Surname</li>
                                                    <li>E-mail address</li>
                                                    <li>Telefon number</li>
                                                    <li>Physical address</li>
                                                    <li>URL addresses linking to personal data</li>
                                                    <li>Previous Employment and Education details</li>
                                                    <li>Bank account number (for customers only)</li>
                                                    <li>Any other invoicing data (for customers only)</li>
                                                    <li>Company details (for customers only)</li>
                                                    <li>Contact person details (for customers only)</li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <div class="l-sec__box g-gutter-top-5">
                                    <div class="l-sec__box__head">
                                        <h3 class="t-style-fpn-l-r-u">
                                            Data Control and Edit Rights
                                    </h3>
                                    </div>
                                    <div class="l-sec__box__content g-gutter-top-1">
                                        <ol class="c-ordered-list">
                                            <li>Customers and users have the right to request access their personal data and request it’s edition at anytime.</li>
                                            <li>Customers and users have the right to re-define the scope in which their personal data can be processed and stored.</li>
                                            <li>Customers and users have the right to request the deletion of their personal data from the Administrator’s database at anytime.</li>
                                            <li>Customers and users have the right to request to be forgotten according to the GDPR’s Art. 17.</li>
                                            <li>In the case a customer or user is requesting to access, edit or delete their personal data, the administrator can ask for additional information in order to verify the identity of the requester and to avoid any misuse of the editing and/or deleting rights.</li>
                                            <li>For security and tracking purposes, customers and users must request to perform any of the changes mentioned in 3.1 and 3.2 or to request the deletion of their personal data by sending the request in a written form to: <a href="mailto:gdpr@pagepro.co">gdpr@pagepro.co</a>.</li>
                                            <li>All requests mentioned in point number three, sent directly to the administrator in a written form, will be treated within 72 hours.</li>
                                        </ol>
                                    </div>
                                </div>

                                <div class="l-sec__box g-gutter-top-5">
                                    <div class="l-sec__box__head">
                                        <h3 class="t-style-fpn-l-r-u">
                                            Contact with the Administrator
                                    </h3>
                                    </div>
                                    <div class="l-sec__box__content g-gutter-top-1">
                                        <ol class="c-ordered-list">
                                            <li>Customers and users have the right to contact the administrator at anytime, making use of any of the communication means stated in the point number one of the Policy. However all official requests should be done in written form making use of the e-mail address <a href="mailto:gdpr@pagepro.co">gdpr@pagepro.co</a>.</li>
                                            <li>The Administrator will store all correspondence with customers and users for statistical purposes and also in the frame of potential allegations regarding edition or deletion requests.</li>
                                        </ol>
                                    </div>
                                </div>

                                <div class="l-sec__box g-gutter-top-5">
                                    <div class="l-sec__box__head">
                                        <h3 class="t-style-fpn-l-r-u">
                                            Security
                                    </h3>
                                    </div>
                                    <div class="l-sec__box__content">
                                        <ol class="c-ordered-list g-gutter-top-1">
                                            <li class="t-wysiwyg">
                                                <p>The Administrator makes sure all necessary technical means are implemented in order to keep all stored Customers and Users data safe from external agents. Specially to avoid:</p>
                                                <ul>
                                                    <li>Data disclosure to non-authorized persons</li>
                                                    <li>Data leaks out of the Administrator’s business tools</li>
                                                    <li>Data theft</li>
                                                </ul>
                                            </li>
                                            <li class="g-gutter-top-1">The Administrator makes sure all necessary technical means are implemented to avoid data edition or deletion by non-authorized persons</li>
                                            <li class="t-wysiwyg">
                                                <p>The security measures to comply with 5.1 and 5.2 are:</p>
                                                <ul>
                                                    <li>HTTPS Protocols</li>
                                                    <li>Data Encryption</li>
                                                    <li>Password Policy</li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                <div class="l-sec__box g-gutter-top-5">
                                    <div class="l-sec__box__head">
                                        <h3 class="t-style-fpn-l-r-u">
                                            Miscellaneous
                                    </h3>
                                    </div>
                                    <div class="l-sec__box__content g-gutter-top-1">
                                        <ol class="c-ordered-list">
                                            <li>The website makes reference to external websites or third party services. The Administrator strongly recommends to get familiar with the privacy policy and terms of use of each one of those external sites and/or third party services since they are in no way under the administrator’s scope of liability.</li>
                                            <li>The Administrator reserves the right to perform any changes in the Policy, which can be necessary (but not limited) due to legal changes, especially in the frame of the GDPR requirements, having impact in our obligations and/or customers and users rights.</li>
                                            <li>If any change in the Policy is performed, a clear announcement informing about the changes implemented will be published.</li>
                                            <li>The current Policy should be treated as a general reference document, for general information purposes only. It is not a legal document or a contract. In case any doubts, concerns or questions emerge after reading it, please contact the Administrator.</li>
                                        </ol>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>


                <section class="l-sec g-gutter-top-10 g-gutter-top-5@desktop-small g-gutter-bottom-10 g-gutter-bottom-5@desktop-small u-bg-5">
                    <div class="l-row">
                        <div class="l-inner">
                            <div class="row">
                                <div class="l-sec__box gr-12 no-gutter">
                                    <div class="l-sec__box__head">
                                        <h3 class="t-style-fpn-xl-r-u u-paint-1 u-text-centered">
                                            Achieve success with us!
                                                </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-align-center g-gutter-top-4 g-gutter-top-3@desktop-small">
                                <div class="l-sec__box gr-6 gr-12@mobile-big no-gutter@mobile-big">
                                    <div class="l-sec__box__content t-style-fpn-s-r u-line-h-m">
                                        <p class="u-text-centered">
                                            Need a qualified software development team to take your project from where it is now, to where you want it to be?
                                                </p>
                                        <p class="g-gutter-top-3 g-gutter-top-2@desktop-small u-text-centered">
                                            <strong class="t-style-fpn-s-s">Talk to us and get the ball rolling.</strong>
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
                                        <Link class="c-cta-link s-btn-style-3" to="/contact">
                                            <span class="c-label">Contact Us</span>
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

export const privacyPolicyQuery = graphql`
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

export default PrivacyPolicy