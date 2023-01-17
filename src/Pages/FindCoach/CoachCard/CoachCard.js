import React, { useState } from "react";
import CoachModal from "../CoachModal/CoachModal";

const CoachCard = ({ props }) => {
    // mock data
    const [people, setPeople] = useState(
        [
            {
                name: 'Person 1',
                position: 'Frontend Engineer',
                company: 'Apple',
                location: 'California',
                tags: ['Entrepreneur', 'Python']
            },
            {
                name: 'Person 2',
                position: 'Backend Engineer',
                company: 'Microsoft',
                location: 'Oregon',
                tags: ['React', 'React Native']
            }
        ]
    )

    const [cardId, setCardId] = useState(0)

    const handleClick = (event) => {
        setCardId(event.target.closest("div").getAttribute("cardid"))
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {people.map((person, index) => {
                    return (
                        <div className="card m-2" cardid={index} key={person.name} style={{ width: '18rem' }}>
                            <img className="card-img-top" src="https://imgur.com/JBZZxqT.jpg" alt="placeholder" />
                            <div className="card-body" style={{ textAlign: 'left' }}>
                                <div className="card-title">
                                    <p className="card-text">{person.name}</p>
                                    <p className="card-text">{person.position}</p>
                                    <p className="card-text">{person.company}</p>
                                    <p className="card-text">{person.location}</p>
                                </div>
                            </div>
                            <button className="btn btn-secondary m-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleClick}>Open Modal</button>

                            <CoachModal
                                people={people}
                                cardId={cardId}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CoachCard;