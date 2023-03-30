import React, { useState } from "react";

import Banner from "../../Components/Banner/Banner";
import NavBar from "../../Components/NavBar/NavBar";
import CoachArea from "./CoachArea/CoachArea";
import CoachFilter from "./CoachFilter/CoachFilter";

const FindCoach = ({ filteredMembers, getMembers, onMemberFilterSubmit }) => {
    const [filter, setFilter] = useState({
        position: '',
        company: '',
        location: '',
    })

    const handleFilterChange = (event) => {
        // console.log(event.target.value)
        setFilter({ ...filter, [event.target.name]: event.target.value })
    }

    const handleFilterSubmit = (event) => {
        // console.log("filter", filter)
        event.preventDefault()
        onMemberFilterSubmit(filter)
    }

    // console.log('Filter Input', filter)
    return (
        <div>
            <NavBar />
            <Banner bannerText={"Find a Coach"} />
            <CoachFilter
                handleFilterChange={handleFilterChange}
                handleFilterSubmit={handleFilterSubmit}
            />
            <CoachArea
                filteredMembers={filteredMembers}
                getMembers={getMembers}
            />
        </div>
    )
}

export default FindCoach;