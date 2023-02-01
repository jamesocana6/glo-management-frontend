import React from "react";
import CoachModal from "../CoachModal/CoachModal";

const CoachCard = ({ filteredSisters }) => {
    const loaded = () => {
        let allSisters = filteredSisters.map((sister) => {
            return (
                <div
                    className="card coach-card m-2"
                    key={sister.id}
                    data-bs-toggle="modal"
                    data-bs-target={"#coachModal" + sister.nickname_txt}
                >
                    <img className="card-img-top coach-card-img" src="https://imgur.com/JBZZxqT.jpg" alt="placeholder" />

                    <div className="card-body coach-card-body" style={{ textAlign: 'left' }}>
                        <div className="card-title">
                            <p className="card-text coach-card-text" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{sister.first_name_txt} {sister.last_name_txt}</p>
                            <p className="card-text coach-card-text">{sister.current_position_txt}</p>
                            <p className="card-text coach-card-text">{sister.current_company_txt}</p>
                            <p className="card-text coach-card-text">{sister.current_city_txt}</p>
                        </div>
                    </div>

                    <CoachModal
                        sister={sister}
                    />
                </div>
            )
        })

        return (
            <>
                {allSisters}
            </>
        )
    }

    const loading = () => {
        return (
            <div>
                There are no sisters..
            </div>
        )
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {filteredSisters ? loaded() : loading()}
            </div>
        </div>
    )
}

export default CoachCard;