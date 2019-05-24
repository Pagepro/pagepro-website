import React from "react"
import Navigation from '../../components/navigation';
import AboutJobList from '../../components/aboutJob';

const JobDetails = ({ location }) => {
    if (location.state) {
        const jobId = location.state.jobId
        return (
            <>
                <Navigation />
                <AboutJobList jobId={jobId} />
            </>
        )
    }
    return `null`
}


export default JobDetails;