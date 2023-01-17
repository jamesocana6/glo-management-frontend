import React from "react";

const CoachModal = ({ people, cardId }) => {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <img src="https://imgur.com/JBZZxqT.jpg" alt="placeholder" style={{ width: 100 }} />
                        <div className="modal-title fs-5" id="exampleModalLabel">
                            <p>
                                Name: {people[cardId].name}
                            </p>
                            <p>
                                Company: {people[cardId].company}
                            </p>
                            <p>
                                Location: {people[cardId].location}
                            </p>
                            {people[cardId].tags.map(tag => {
                                return (
                                    <button className="btn btn-secondary m-1" key={tag}>{tag}</button>
                                )
                            })}
                        </div>
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