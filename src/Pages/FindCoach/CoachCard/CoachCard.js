import React from "react";
import CoachModal from "../CoachModal/CoachModal";

const CoachCard = ({ filteredSisters }) => {
    const loaded = () => {
        let allSisters = filteredSisters.map((sister) => {
            return (
                <div className="card m-2" key={sister.id} style={{ width: '18rem' }}>
                    <img className="card-img-top" src="https://imgur.com/JBZZxqT.jpg" alt="placeholder" />
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="card-title">
                            <p className="card-text">{sister.first_name_txt} {sister.last_name_txt}</p>
                            <p className="card-text">{sister.current_position_txt}</p>
                            <p className="card-text">{sister.current_company_txt}</p>
                            <p className="card-text">{sister.current_city_txt}</p>
                        </div>
                    </div>
                    <button className="btn btn-secondary m-3" data-bs-toggle="modal" data-bs-target={"#coachModal" + sister.nickname_txt}>Open Modal</button>

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