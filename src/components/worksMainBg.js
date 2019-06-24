import React from 'react';
import { Link } from 'gatsby';

const WorksMainBg = ({ image }) => {
    return (
        <>
            <div className="l-hero l-hero--alt l-hero--with-overlay u-bg-2 u-paint-4" style={{ backgroundImage: `url(${image})` }}>
                <div className="l-inner g-gutter-top-10 g-gutter-bottom-8">
                    <div className="l-hero__head row g-gutter-top-8 g-gutter-top-0@mobile">
                        <div className="l-hero__head__box">
                            <h2 className="t-style-fpn-xxl-b-u">
                                Woodland Girls
                        </h2>
                        </div>
                    </div>
                    <div className="l-hero__foot row">
                        <div className="l-inner">
                            <div className="l-row row row-align-between row-align-middle">
                                <div className="l-hero__foot__box gr-adapt no-gutter-left">
                                    <Link className="c-ico-link c-ico-link--anim u-paint-4 u-paint-1-on-hover" to="#sec-1">
                                        <span className="o-icon o-icon--down"></span>
                                        <span className="c-label t-style-fpn-s-b u-line-h-m">Scroll for more</span>
                                    </Link>
                                </div>
                                <div className="l-hero__foot__box gr-adapt no-gutter-right">
                                    <a className="c-cta-link s-btn-style-2" href="our-work.html" data-animate-out="true">
                                        <span className="c-label">Back to works</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorksMainBg;