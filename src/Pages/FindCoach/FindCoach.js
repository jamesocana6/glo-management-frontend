import React from "react";
import Banner from "../../Components/Banner/Banner";
import NavBar from "../../Components/NavBar/NavBar";
import CoachArea from "./CoachArea/CoachArea";
import Filters from "./Filters/Filters";

const FindCoach = ({ sisters, getSisters }) => {
    return (
        <div>
            <NavBar />
            <Banner bannerText={"Find a Coach"} />
            <Filters></Filters>
            <CoachArea
                sisters={sisters}
                getSisters={getSisters}
            />
        </div>
    )
}

export default FindCoach;