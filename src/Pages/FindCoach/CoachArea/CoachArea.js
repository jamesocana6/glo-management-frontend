import React from "react";
import CoachCard from "../CoachCard/CoachCard";

const CoachArea = ({ filteredSisters, getSisters }) => {
    return (
        <CoachCard
            filteredSisters={filteredSisters}
            getSisters={getSisters}
        />
    )
}

export default CoachArea;