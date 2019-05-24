import React, { Component } from 'react';

class AboutJobList extends Component {
    state = {
        aboutJobList: [
            {
                "id": 6,
                "position": "Test Name",
                "author": "dev",
                "description_list": [
                    "test1",
                    "test2",
                    "test3",
                    "test4"
                ],
                // "icon_svg": "http:\/\/api-pagepro.local\/wp-content\/uploads\/2019\/05\/H15_Konferencja_2501201814-640x360-1.jpg",
                "location": "test location",
                "tags": [
                    "Tag 1",
                    "Tag2"
                ],
                "long_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "responsibilities": [
                    "RESPONSIBILITIES1",
                    "RESPONSIBILITIES2",
                    "RESPONSIBILITIES3"
                ],
                "requirements": [
                    "REQUIREMENTS1",
                    "REQUIREMENTS2",
                    "REQUIREMENTS3"
                ],
                "nice_to_have": [
                    "NICE TO HAVE1",
                    "NICE TO HAVE2",
                    "NICE TO HAVE3"
                ],
                "minimum_amount": "5.000",
                "maximum_amount": "15.000"
            },
            {
                "id": 7,
                "position": "Funky Name",
                "author": "dev",
                "description_list": [
                    "test1",
                    "test2",
                    "test3",
                    "test4"
                ],
                // "icon_svg": "http:\/\/api-pagepro.local\/wp-content\/uploads\/2019\/05\/H15_Konferencja_2501201814-640x360-1.jpg",
                "location": "test location",
                "tags": [
                    "Tag 1",
                    "Tag2"
                ],
                "long_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "responsibilities": [
                    "RESPONSIBILITIES1",
                    "RESPONSIBILITIES2",
                    "RESPONSIBILITIES3"
                ],
                "requirements": [
                    "REQUIREMENTS1",
                    "REQUIREMENTS2",
                    "REQUIREMENTS3"
                ],
                "nice_to_have": [
                    "NICE TO HAVE1",
                    "NICE TO HAVE2",
                    "NICE TO HAVE3"
                ],
                "minimum_amount": "5.000",
                "maximum_amount": "15.000"
            },
            {
                "id": 8,
                "position": "Test Name",
                "author": "dev",
                "description_list": [
                    "test1",
                    "test2",
                    "test3",
                    "test4"
                ],
                // "icon_svg": "http:\/\/api-pagepro.local\/wp-content\/uploads\/2019\/05\/H15_Konferencja_2501201814-640x360-1.jpg",
                "location": "test location",
                "tags": [
                    "Tag 1",
                    "Tag2"
                ],
                "long_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "responsibilities": [
                    "RESPONSIBILITIES1",
                    "RESPONSIBILITIES2",
                    "RESPONSIBILITIES3"
                ],
                "requirements": [
                    "REQUIREMENTS1",
                    "REQUIREMENTS2",
                    "REQUIREMENTS3"
                ],
                "nice_to_have": [
                    "NICE TO HAVE1",
                    "NICE TO HAVE2",
                    "NICE TO HAVE3"
                ],
                "minimum_amount": "5.000",
                "maximum_amount": "15.000"
            }
        ]
    }

    render() {
        console.log(this.props.jobId);
        const aboutJob = this.state.aboutJobList.find(job => job.id === this.props.jobId);

        const { position, long_description, minimum_amount, maximum_amount, location, responsibilities, requirements, nice_to_have } = aboutJob;

        return (
            <>
                <section>
                    <h1>{position}</h1>
                    <p>{long_description}</p>
                    <p>{`Salary: ${minimum_amount} - ${maximum_amount}`}</p>
                    <p>Location: {location}</p>
                </section>

                <section>
                    <div>
                        <p>responsibilities</p>
                        <ul>
                            {responsibilities.map((item, id) => <li key={id}>{item}</li>)}
                        </ul>
                    </div>
                    <div>
                        <p>requirements</p>
                        <ul>
                            {requirements.map((item, id) => <li key={id}>{item}</li>)}
                        </ul>
                    </div>
                    <div>
                        <p>nice to have</p>
                        <ul>
                            {nice_to_have.map((item, id) => <li key={id}>{item}</li>)}
                        </ul>
                    </div>
                </section>
            </>
        );
    }
}

export default AboutJobList;
