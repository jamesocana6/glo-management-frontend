import React from "react";
import Banner from "../../Components/Banner/Banner";
import NavBar from "../../Components/NavBar/NavBar";
import JobOps from "./JobOps/JobOps"

const JobHub = ({ props }) => {
    return (
        <>
            <div>
                <NavBar/>
                <Banner/>
                <h1>JobHub Page</h1>
            </div>
            <JobOps />
            <div>
                <h1>Resources TBD</h1>
            </div>
        </>
    )
}

export default JobHub;