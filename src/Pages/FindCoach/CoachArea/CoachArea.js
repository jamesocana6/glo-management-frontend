import React from "react";
import CoachCard from "../CoachCard/CoachCard";

const CoachArea = ({ sisters, getSisters }) => {
    return (
        <div>
            <CoachCard
                sisters={sisters}
                getSisters={getSisters}
            />
        </div>
    )
}

export default CoachArea;