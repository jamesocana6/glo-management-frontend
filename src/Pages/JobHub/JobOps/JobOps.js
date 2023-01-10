import React from "react";
import { Link } from "react-router-dom";

const JobOps = ({ props }) => {
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
            <p>
                Title @ Company 1 location <br></br>
                Title @ Company 2<br></br>
                Add a Job (link)<br></br>
                See all job Opportunities<br></br>
            </p>
        </div>
    )
}

export default JobOps;