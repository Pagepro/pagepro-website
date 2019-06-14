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

    let redirectionsTab = [
        { f: `pagepro.co/index.html`, t: `pagepro.co/` },
        { f: `/our-work.html`, t: `/works` },
        { f: `/services.html`, t: `/services` },
        { f: `/about.html`, t: `/about` },
        { f: `/career.html`, t: `/career` },
        { f: `/contact.html`, t: `/contact` },
    ]

    redirectionsTab.forEach(({ f, t }) => {
        createRedirect({
            fromPath: f,
            toPath: t,
            isPernament: true,
            redirectInBrowser: true,
        })
        console.log('\nRedirecting:\n' + f + '\nTo:\n' + t + '\n');
    })

}








/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
