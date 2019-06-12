import React, { Component } from 'react';
import JobOffer from './jobOffer';

class JobOfferList extends Component {
    state = {
        jobList: [
            {
                "id": 8,
                "position": "Test Name Null",
                "author": "dev",
                "short_description": null,
                "icon_svg": null,
                "tags": null,
                "minimum_amount": null,
                "maximum_amount": null,
                "slug": "test-name-2"
            },
            {
                "id": 6,
                "position": "Test Name",
                "author": "dev",
                "short_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                // "icon_svg": "http:/\/api-pagepro.local\/wp-content\/uploads\/2019\/05\/H15_Konferencja_2501201814-640x360-1.jpg",
                "tags": [
                    "Tag 1",
                    "Tag2"
                ],
                "minimum_amount": "5.000",
                "maximum_amount": "15.000",
                "slug": "test-name"
            },
        ]
    }

    render() {
        const jobs = this.state.jobList.map(job => <JobOffer key={job.id} job={job} />)
        return (
            <>
                <section className="l-sec g-gutter-top-5 g-gutter-top-5@desktop-small g-gutter-bottom-5 g-gutter-bottom-2@desktop-small">
                    <div className="l-row">
                        <div className="l-inner">
                            <div className="row">
                                <div className="l-sec__box gr-12 no-gutter">
                                    <div className="l-sec__box__head">
                                        <h3 className="t-style-fpn-l-r-u">
                                            Open <strong>positions</strong> in Białystok
                                            </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {jobs}
            </>
        );
    }
}

export default JobOfferList;