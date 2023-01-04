import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Filters from "./Filters/Filters";

const FindCoach = ({props}) => {
    return (
        <div>
            <NavBar/>
            <h1>FindCoach Page</h1>
            <Filters></Filters>
        </div>
    )
} 

export default FindCoach;