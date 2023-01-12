import React, { useState, useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import NavBar from "../../Components/NavBar/NavBar";
import JobArea from "./JobArea/JobArea";

const JobHub = ({ props }) => {
    const [jobsList, setJobsList] = useState(null)

    const getJobsList = async () => {
        const response = await fetch("http://localhost:8000/api/jobs/")
        const data = await response.json()

        setJobsList(data)
    }

    return (
        <>
            <div>
                <NavBar />
                <Banner
                    bannerText={"JobHub Page"}
                />
            </div>
            <JobArea
                jobsList={jobsList}
                getJobsList={getJobsList}
            />
        </>
    )
}

export default JobHub;