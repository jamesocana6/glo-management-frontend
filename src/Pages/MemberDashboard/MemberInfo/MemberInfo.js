import React, { useState } from "react";

const MemberInfo = ({ props }) => {
    // mock info, this should come from props
    const [memberInfo, setMemberInfo] = useState(
        [
            {
                crossingSchool: 'NYU',
                crossingClass: 'Beta',
                currentSchool: 'N/A',
                currentPosition: 'N/A',
                previousPosition: 'N/A',
            },
        ]
    )


    return (
        <div>
            <h1>MemberInfo</h1>
            {memberInfo.map((member) => {
                return (
                    <div>
                        <p>
                            Crossing School: {member.crossingSchool}
                        </p>
                        <p>
                            Crossing Class: {member.crossingClass}
                        </p>
                        <p>
                            Current School: {member.currentSchool}
                        </p>
                        <p>
                            Current Position: {member.currentPosition}
                        </p>
                        <p>
                            Previous Position: {member.previousPosition}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default MemberInfo;