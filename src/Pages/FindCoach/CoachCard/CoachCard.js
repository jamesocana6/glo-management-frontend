import React from "react";
import CoachModal from "../CoachModal/CoachModal";

const CoachCard = ({ filteredMembers }) => {
    const loaded = () => {
        let allMembers = filteredMembers.map((member) => {
            return (
                <div
                    className="card coach-card m-2"
                    key={member.id}
                    data-bs-toggle="modal"
                    data-bs-target={"#coachModal" + member.nickname_txt}
                >
                    <img className="card-img-top coach-card-img" src="https://imgur.com/JBZZxqT.jpg" alt="placeholder" />

                    <div className="card-body coach-card-body" style={{ textAlign: 'left' }}>
                        <div className="card-title">
                            <p className="card-text coach-card-text" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{member.first_name_txt} {member.last_name_txt}</p>
                            <p className="card-text coach-card-text">{member.current_position_txt}</p>
                            <p className="card-text coach-card-text">{member.current_company_txt}</p>
                            <p className="card-text coach-card-text">{member.current_city_txt}</p>
                        </div>
                    </div>

                    <CoachModal
                        member={member}
                    />
                </div>
            )
        })

        return (
            <>
                {allMembers}
            </>
        )
    }

    const loading = () => {
        return (
            <div>
                There are no Members..
            </div>
        )
    }

    return (
        <div className="container-fluid">
            <div className="row m-3">
                {filteredMembers ? loaded() : loading()}
            </div>
        </div>
    )
}

export default CoachCard;