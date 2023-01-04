import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import CoachArea from "./CoachArea/CoachArea";
import Filters from "./Filters/Filters";

const FindCoach = ({props}) => {
    return (
        <div>
            <NavBar/>
            <h1>FindCoach Page</h1>
            <Filters></Filters>
            <CoachArea></CoachArea>
        </div>
    )
} 

export default FindCoach;