import React from "react"
import Navigation from '../../components/navigation';
import AboutJobList from '../../components/aboutJob';

const JobDetails = ({ location }) => (

    <>
        <Navigation />
        <AboutJobList jobId={location.state.jobId} />
    </>
)


export default JobDetails;