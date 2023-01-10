import React from "react";
import { Link } from "react-router-dom";

const jobOps = [
    {
        date: "1/10/2023",
        jobTitle: "Software Engineer",
        companyName: "Tesla",
        jobLink: "#",
        location: "Remote",
        howToApply: "Message the job poster with resume and I will give it to the recruiter",
        experienceRequired: "Entry-Level",
        industry: "Automotive",
        jobDescription: "",
        poster: "Elon Musk",
    },
    {
        date: "1/12/2023",
        jobTitle: "Software Engineer II",
        companyName: "Apple",
        jobLink: "#",
        location: "Remote",
        howToApply: "Use my name in the referral",
        experienceRequired: "Experienced",
        industry: "Technology",
        jobDescription: "",
        poster: "Steve Jobs",
    },

]

const JobOps = ({ props }) => {

    let jobMap = jobOps.map((job) => {
        return (
            <div>
                <p>{job.jobTitle} - {job.companyName} - {job.experienceRequired} - {job.location} (NEED TO ADD MODAL and MAKE SCROLLABLE)</p>
            </div>
        )
    }) 

    return (
        <div className="container">
            <div className="row">
                <div className="col-9 text-start">
                    <h3>Job Opportunities</h3>
                </div>
                <div className="col text-end">
                    <Link to={"/jobhub/add"}>Add a Job</Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="text-start">
                        {jobMap}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>
                        <p>
                            See all job Opportunities
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobOps;