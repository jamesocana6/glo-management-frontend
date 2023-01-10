import React from "react";
import Banner from "../../Components/Banner/Banner";
import NavBar from "../../Components/NavBar/NavBar";
import JobArea from "./JobArea/JobArea";

const JobHub = ({ props }) => {
    return (
        <>
            <div>
                <NavBar/>
                <Banner 
                    bannerText={"JobHub Page"}
                />
            </div>
            <JobArea/>
        </>
    )
}

export default JobHub;