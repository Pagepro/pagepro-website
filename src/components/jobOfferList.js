import React, { Component } from 'react';
import JobOffer from './jobOffer';

class JobList extends Component {
    state = {
        jobList: [
            {
                "id": 8,
                "position": "Test Name 2",
                "author": "dev",
                "short_description": null,
                "icon_svg": null,
                "tags": null,
                "minimum_amount": null,
                "maximum_amount": null
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
                "maximum_amount": "15.000"
            },
            {
                "id": 7,
                "position": "Funky Name",
                "author": "dev",
                "short_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                // "icon_svg": "http:/\/api-pagepro.local\/wp-content\/uploads\/2019\/05\/H15_Konferencja_2501201814-640x360-1.jpg",
                "tags": [
                    "Tag 1",
                    "Tag2"
                ],
                "minimum_amount": "5.000",
                "maximum_amount": "15.000"
            }
        ]
    }

    render() {
        const jobs = this.state.jobList.map((job, id) => <JobOffer key={job.id} job={job} />)
        return (
            <>
                {jobs}
            </>
        );
    }
}

export default JobList;