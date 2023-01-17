import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import JobModal from "../JobModal/JobModal";

const JobOps = ({ jobsList, getJobsList }) => {
    console.log('JobOps.js: jobsList', jobsList)

    useEffect(() => {
        getJobsList()
    }, [])

    const loaded = () => {
        let allJobs = jobsList.map((job, index) => {
            return (
                //CHANGE id={"jobModal"+post.date} to post.id
                <div style={{ backgroundColor: 'orange' }} key={job.date} data-bs-toggle="modal" data-bs-target={"#jobModal"+job.date}>
                    <p>
                        {job.jobTitle} - {job.companyName} - {job.experienceRequired} - {job.location}
                        <JobModal post={job} postIdx={index} />
                    </p>
                </div>
            )
        })

        return (
            <div>
                {allJobs}
            </div>
        )
    }

    const loading = () => {
        return (
            <div>
                There are no jobs..
            </div>
        )
    }

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
                    <div className="text-start overflow-auto" style={{height: 30 +"vh"}}>
                        {jobsList ? loaded() : loading()}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>
                        <p>
                            {/* See all job Opportunities */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobOps;