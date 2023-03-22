import React from "react";
import CoachCard from "../CoachCard/CoachCard";

const CoachArea = ({ filteredMembers, getMembers }) => {
    return (
        <CoachCard
            filteredMembers={filteredMembers}
            getMembers={getMembers}
        />
    )
}

export default CoachArea;