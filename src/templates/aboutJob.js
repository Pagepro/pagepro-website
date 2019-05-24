import React, { Component } from 'react';
import Navigation from "../components/navigation"

class AboutJob extends Component {

    render() {

        const { position, long_description, minimum_amount, maximum_amount, location, responsibilities, requirements, nice_to_have } = this.props.pageContext;

        return (
            <>
                <Navigation />
                <section>
                    <h1>{position}</h1>
                    <p>{long_description}</p>
                    <p>{`Salary: ${minimum_amount} - ${maximum_amount} pln net`}</p>
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

export default AboutJob;
