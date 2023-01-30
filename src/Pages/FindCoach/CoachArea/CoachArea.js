import React from "react";
import CoachCard from "../CoachCard/CoachCard";

const CoachArea = ({ filteredSisters, getSisters }) => {
    return (
        <div>
            <CoachCard
                filteredSisters={filteredSisters}
                getSisters={getSisters}
            />
        </div>
    )
}

export default CoachArea;