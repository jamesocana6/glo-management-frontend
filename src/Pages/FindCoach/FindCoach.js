import React, { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import NavBar from "../../Components/NavBar/NavBar";
import CoachArea from "./CoachArea/CoachArea";
import CoachFilter from "./CoachFilter/CoachFilter";

const FindCoach = ({ sisters, getSisters, onSisterFilterSubmit }) => {
    const [filter, setFilter] = useState({
        position: '',
        company: '',
        location: '',
    })

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilter({ ...filter, [event.target.name]: event.target.value })
    }

    const handleFilterSubmit = (event) => {
        event.preventDefault()
        // console.log("filter", filter)
        onSisterFilterSubmit(filter)
    }

    console.log(filter)
    return (
        <div>
            <NavBar />
            <Banner bannerText={"Find a Coach"} />
            <CoachFilter
                handleFilterChange={handleFilterChange}
                handleFilterSubmit={handleFilterSubmit}
            />
            <CoachArea
                sisters={sisters}
                getSisters={getSisters}
            />
        </div>
    )
}

export default FindCoach;