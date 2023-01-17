import React from "react";

const JobModal = ({post, postIdx}) => {

    // {
    //     date: "1/10/2023",
    //     jobTitle: "Software Engineer",
    //     companyName: "Tesla",
    //     jobLink: "#",
    //     location: "Remote",
    //     howToApply: "Message the job poster with resume and I will give it to the recruiter",
    //     experienceRequired: "Entry-Level",
    //     industry: "Automotive",
    //     jobDescription: "",
    //     poster: "Elon Musk",
    // }, 

    return (
        //CHANGE id={"jobModal"+post.date} to post.id
        <div className="modal fade" id={"jobModal"+post.date} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <img src="https://imgur.com/JBZZxqT.jpg" alt="placeholder" style={{ width: 100 }} />
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            <p>HELLO MODALS!</p>
                            <p>
                                Name: {post.jobTitle}
                            </p>
                            <p>
                                Company: {post.companyName}
                            </p>
                            <p>
                                Location: {post.location}
                            </p>
                            {/* {people[cardId].tags.map(tag => {
                                return (
                                    <button className="btn btn-secondary m-1">{tag}</button>
                                )
                            })} */}
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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

export default JobModal;