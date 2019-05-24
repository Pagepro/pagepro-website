exports.createPages = ({ actions: { createPage } }) => {
    const jobsDetails = require("./job-offers-id.json")
    jobsDetails.forEach(jobDetails => {
        createPage({
            path: `/career/job-details-${jobDetails.id}/`,
            component: require.resolve("./src/templates/aboutJob.js"),
            context: {
                position: jobDetails.position,
                long_description: jobDetails.long_description,
                minimum_amount: jobDetails.minimum_amount,
                maximum_amount: jobDetails.maximum_amount,
                location: jobDetails.location,
                responsibilities: jobDetails.responsibilities,
                requirements: jobDetails.requirements,
                nice_to_have: jobDetails.nice_to_have
            },
        })
    })
}








/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
