import React from "react";
import CoachCard from "../CoachCard/CoachCard";

const CoachArea = ({ filteredCoaches, getCoaches }) => {
    return (
        <CoachCard
            filteredCoaches={filteredCoaches}
            getCoaches={getCoaches}
        />
    )
}

export default CoachArea;