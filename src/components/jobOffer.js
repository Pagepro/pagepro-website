import React from 'react';
import { Link } from "gatsby"

const JobOffer = (props) => {
    const { position, short_description, tags, minimum_amount, maximum_amount, slug } = props.job;

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
            <h1>{position}</h1>
            <p>{short_description}</p>
            <p>{tagLine}</p>
            {minimum_amount ? <p>{`Salary: ${minimum_amount} - ${maximum_amount} pln net`}</p> : null}
            <Link
                to={`/career/${slug}`}>
                More details
        </Link>
        </>
    );
}

export default JobOffer;
