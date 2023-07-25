import React from "react";
import JobOps from "../JobOps/JobOps";
import Resources from "../../../Components/Resources/Resources.js"
import "./style.css";

const JobArea = ({ jobsList, resources, title }) => {
    return (
        <div className="container">
            <div className="row gx-5">
                <h1>Job Area</h1>
                
                <div className="col-8">
                    <div className="job-ops">
                        <JobOps
                            jobsList={jobsList}
                        />
                    </div>
                </div>

                <div className="col-4">
                    <div className="job-resources">
                        <Resources resources={resources} title={title} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobArea;