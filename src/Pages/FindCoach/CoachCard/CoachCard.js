import React, { useEffect } from "react";
import CoachModal from "../CoachModal/CoachModal";

const CoachCard = ({ sisters, getSisters }) => {
    const loaded = () => {
        let allSisters = sisters.map((sister, index) => {
            return (
                <div className="card m-2" cardid={index} key={sister.name} style={{ width: '18rem' }}>
                    <img className="card-img-top" src="https://imgur.com/JBZZxqT.jpg" alt="placeholder" />
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="card-title">
                            <p className="card-text">{sister.first_name} {sister.last_name}</p>
                            <p className="card-text">{sister.current_position}</p>
                            <p className="card-text">{sister.current_company}</p>
                            <p className="card-text">{sister.current_location}</p>
                        </div>
                    </div>
                    <button className="btn btn-secondary m-3" data-bs-toggle="modal" data-bs-target={"#coachModal" + sister.email_address}>Open Modal</button>

                    <CoachModal
                        sister={sister}
                        getSisters={getSisters}
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
            <>
                There are no sisters..
            </>
        )
    }

    useEffect(() => {
        getSisters()
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                {sisters ? loaded() : loading()}
            </div>
        </div>
    )
}

export default CoachCard;