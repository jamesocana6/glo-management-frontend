import React from "react";
import CoachModal from "../CoachModal/CoachModal";

const CoachCard = ({ filteredCoaches }) => {
    const loaded = () => {
        let allCoaches = filteredCoaches.map((coach) => {
            return (
                <div
                    className="card coach-card m-2"
                    key={coach.id}
                    data-bs-toggle="modal"
                    data-bs-target={"#coachModal" + coach.nickname_txt}
                >
                    <img className="card-img-top coach-card-img" src="https://imgur.com/JBZZxqT.jpg" alt="placeholder" />

                    <div className="card-body coach-card-body" style={{ textAlign: 'left' }}>
                        <div className="card-title">
                            <p className="card-text coach-card-text" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{coach.first_name_txt} {coach.last_name_txt}</p>
                            <p className="card-text coach-card-text">{coach.current_position_txt}</p>
                            <p className="card-text coach-card-text">{coach.current_company_txt}</p>
                            <p className="card-text coach-card-text">{coach.current_city_txt}</p>
                        </div>
                    </div>

                    <CoachModal
                        coach={coach}
                    />
                </div>
            )
        })

        return (
            <>
                {allCoaches}
            </>
        )
    }

    const loading = () => {
        return (
            <div>
                There are no Coaches..
            </div>
        )
    }

    return (
        <div className="container-fluid">
            <div className="row m-3">
                {filteredCoaches ? loaded() : loading()}
            </div>
        </div>
    )
}

export default CoachCard;