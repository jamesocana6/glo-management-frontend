import React from "react";
import Banner from "../../Components/Banner/Banner";
import NavBar from "../../Components/NavBar/NavBar";

const AddJob = ({props}) => {
    return (
        <div>
            <NavBar/>
            <Banner bannerText={"Add a Job"}/>
        </div>
    )
} 

export default AddJob;