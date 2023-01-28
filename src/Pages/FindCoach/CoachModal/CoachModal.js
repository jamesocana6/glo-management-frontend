import React from "react";

const CoachModal = ({ sister }) => {
    // top section of modal
    const loaded = () => {
        return (
            <div className="modal-title fs-5" id={"coachModal" + sister.id}>
                <p>
                    Name: {sister.first_name_txt} {sister.last_name_txt}
                </p>
                <p>
                    Company: {sister.current_company_txt}
                </p>
                <p>
                    Location: {sister.current_city_txt}
                </p>
            </div>
        )
    }

    const loading = () => {
        return (
            <>
                There is no sister info
            </>
        )
    }

    return (
        <div className="modal fade" id={"coachModal" + sister.nickname_txt} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <img src="https://imgur.com/JBZZxqT.jpg" alt="placeholder" style={{ width: 100 }} />
                        {sister ? loaded() : loading()}

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