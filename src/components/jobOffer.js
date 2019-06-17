import React from 'react';
import { Link } from "gatsby"

const JobOffer = (props) => {
    const { position, icon_svg, short_description, tags, minimum_amount, maximum_amount, slug } = props.job;

    let tagLine;
    if (tags != null) {
        if (tags[0][0] !== '#') {
            tags[0] = "#" + tags[0];
        }
        tagLine = tags.join(' #');

    } else {
        tagLine = null;
    }

    return (
        <>
            {position ? <section className="l-sec">
                <div className="l-row">
                    <div className="l-inner u-decor-bottom u-paint-5">
                        <div className="row row-align-between g-gutter-top-5 g-gutter-bottom-5 u-paint-2">
                            <div className="l-sec__box gr-12 no-gutter">
                                <div className="l-sec__box__inner g-gutter-left-5 g-gutter-left-2@desktop-small g-gutter-left-1@mobile g-gutter-left-0@mobile-medium g-gutter-right-5 g-gutter-right-2@desktop-small g-gutter-right-1@mobile g-gutter-right-0@mobile-medium">
                                    <div className="l-sec__box__head u-paint-1">
                                        <h3 className="t-style-fpn-l-r-u">
                                            <span className="c-ico-label">
                                                <span className="c-ico-label__media" aria-hidden="true">
                                                    <span className="o-icon-wrapper o-icon-wrapper--alt">
                                                        <img src={icon_svg} alt='icon' />
                                                    </span>
                                                </span>
                                                <span className="c-ico-label__info">
                                                    {position}
                                                </span>
                                            </span>
                                        </h3>
                                    </div>
                                    <div className="l-sec__box__content t-wysiwyg g-gutter-top-4 g-gutter-top-3@mobile">
                                        <p>
                                            {short_description}
                                        </p>
                                        <p className="u-paint-3">
                                            {tagLine}
                                        </p>
                                        {minimum_amount ? <p className="u-paint-1">{`Salary: ${minimum_amount} - ${maximum_amount} PLN NET`}</p> : null}
                                    </div>
                                    <div className="l-sec__box__actions l-sec__box__actions--alt g-gutter-top-3">
                                        <Link
                                            target="_blank"
                                            className="c-cta-link s-btn-style-3"
                                            to={`/career/${slug}`}>
                                            <span className="c-label">More Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> : null}
        </>
    );
}

export default JobOffer;


