import React from "react";
import JobOps from "../JobOps/JobOps";
import Resources from "../../../Components/Resources/Resources.js"
import "./style.css";

const JobArea = ({ props }) => {
    return (
        <div className="container">
            <div className="row">
                <h1>Job Area</h1>
                <div className="col-8 job-ops">
                    <JobOps/>
                </div>
                <div className="col-4 job-resources">
                    <Resources/>
                </div>
            </div>
        </div>
    )
}

export default JobArea;