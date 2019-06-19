/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ actions: { createPage, createRedirect } }) => {
    const jobsDetails = require("./job-offers_slug.json")
    jobsDetails.forEach(jobDetails => {
        createPage({
            path: `/career/${jobDetails.slug}`,
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

    const redirect = require('./src/redirections.js');

    redirect.redirectionsTab.forEach(({ f, t }) => {
        createRedirect({
            fromPath: f,
            toPath: t,
            isPernament: true,
            redirectInBrowser: true,
        })
    })
}



