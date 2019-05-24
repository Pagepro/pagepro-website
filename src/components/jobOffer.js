import React from 'react';
import { Link } from "gatsby"

const JobOffer = (props) => {
    const { position, short_description, tags, minimum_amount, maximum_amount, id } = props.job;

    let tagLine;
    if (tags != null) {
        for (let i = 0; i < tags.length; i++) {
            tags[i] = "#" + tags[i];
        }

        tagLine = tags.join(' ');
    } else {
        tagLine = null;
    }

    return (
        <>
            <h1>{position}</h1>
            <p>{short_description}</p>
            <p>{tagLine}</p>
            {minimum_amount ? <p>{`Salary: ${minimum_amount} - ${maximum_amount}`}</p> : null}
            <Link state={{ jobId: id }}
                to='career/job-details'>
                More details
        </Link>
        </>
    );
}

export default JobOffer;
