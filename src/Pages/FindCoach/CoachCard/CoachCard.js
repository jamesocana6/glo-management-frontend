import React from "react";

const CoachCard = ({ props }) => {
    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src="https://imgur.com/JBZZxqT.jpg" />
                    </div>
                    <div class="card-content">
                        <p>Name: Person 1</p>
                        <p>Position: Position 1</p>
                        <p>Company: Company 1</p>
                        <p>Location: Location 1</p>
                    </div>
                    <div className="card-action">
                        <a href="#">Connect with ...!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoachCard;