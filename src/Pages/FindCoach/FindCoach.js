import React from "react";
import Banner from "../../Components/Banner/Banner";
import NavBar from "../../Components/NavBar/NavBar";
import CoachArea from "./CoachArea/CoachArea";
import Filters from "./Filters/Filters";

const FindCoach = ({props}) => {
    return (
        <div>
            <NavBar/>
            <Banner bannerText={"Find a Coach"}/>
            <Filters></Filters>
            <CoachArea></CoachArea>
        </div>
    )
} 

export default FindCoach;