import React from "react";

const CoachCard = ({ props }) => {
    // mock data
    const people = [
        {
            name: 'Person 1',
            position: 'Frontend Engineer',
            company: 'Apple',
            location: 'California',
        },
        {
            name: 'Person 2',
            position: 'Backend Engineer',
            company: 'Microsoft',
            location: 'Oregon',
        }
    ]
    return (
        <div className="container-fluid">
            <div className="row">
                {people.map(person => {
                    return (
                        <div className="card m-2 " style={{ width: '18rem' }}>
                            <img src="https://imgur.com/JBZZxqT.jpg" className="card-img-top" alt="image" />
                            <div className="card-body" style={{ textAlign: 'left' }}>
                                <h5 className="card-title">{person.name}</h5>
                                <p className="card-text">{person.position}</p>
                                <p className="card-text">{person.company}</p>
                                <p className="card-text">{person.location}</p>
                            </div>
                            <button className="btn btn-secondary">Modal?..</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CoachCard;