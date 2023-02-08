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
            <h3 className="dashboard-component-title">Member Info</h3>
            {memberInfo.map((member) => {
                return (
                    <div>
                        <ul className="member-info">
                            <li>
                                Crossing School: {member.crossingSchool}
                            </li>
                            <li>
                                Crossing Class: {member.crossingClass}
                            </li>
                            <li>
                                Current School: {member.currentSchool}
                            </li>
                            <li>
                                Current Position: {member.currentPosition}
                            </li>
                            <li>
                                Previous Position: {member.previousPosition}
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default MemberInfo;