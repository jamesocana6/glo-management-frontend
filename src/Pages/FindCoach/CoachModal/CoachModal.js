import React from "react";

const CoachModal = ({ coach }) => {
    // top section of modal
    const loaded = () => {
        return (
            <div className="modal-title fs-5 m-2" id={"coachModal" + coach.id}>
                <p className="card-text coach-modal-heading-text" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {coach.first_name_txt} {coach.last_name_txt}
                </p>
                <p className="card-text coach-modal-heading-text">
                    {coach.current_company_txt}
                </p>
                <p className="card-text coach-modal-heading-text">
                    {coach.current_city_txt}
                </p>
            </div>
        )
    }

    const loading = () => {
        return (
            <>
                There is no coach info
            </>
        )
    }

    return (
        <div
            className="modal fade"
            id={"coachModal" + coach.nickname_txt}
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header p-3">
                        <img src="https://imgur.com/JBZZxqT.jpg" alt="placeholder" className="modal-image" />
                        {coach ? loaded() : loading()}

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>
                            Info about yourself and why you want to coach
                            Info about yourself and why you want to coach
                            Info about yourself and why you want to coach
                            Info about yourself and why you want to coach
                            Info about yourself and why you want to coach
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Get In Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoachModal;