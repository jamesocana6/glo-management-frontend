import React, { useState, useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import JobArea from "./JobArea/JobArea";
import { API_BASE_URL } from "../../utils/constants"

const JobHub = ({ resources, title }) => {

    const [jobsList, setJobsList] = useState(null)

    const getJobsList = async () => {
        const response = await fetch(`${API_BASE_URL}/api/jobs/recent/`)
        const data = await response.json()
        setJobsList(data)
    }
    
    useEffect(() => {
        getJobsList();
      }, []);

    return (
        <>
            <div>
                <Banner
                    bannerText={"JobHub Page"}
                />
            </div>
            <JobArea
                title={title}
                resources={resources}
                jobsList={jobsList}
            />
        </>
    )
}

export default JobHub;