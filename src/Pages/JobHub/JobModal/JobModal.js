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
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <img src="https://imgur.com/JBZZxqT.jpg" alt="placeholder" style={{ width: 200, paddingRight: 20 }} />
                        <div className="modal-title fs-5" id="exampleModalLabel">
                            <h2>{post.jobTitle}</h2>
                            <h3>
                                {post.companyName} - {post.experienceRequired} - {post.location} 
                            </h3>
                            {post.industry && 
                            <p>
                                Industry: {post.industry}
                            </p>
                            }
                            <p>
                                Job Link: {post.jobLink}
                            </p>  
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h3>How To Apply</h3>
                        <p>
                            {post.howToApply}
                        </p>
                        {post.jobDescription &&
                            <>
                                <h3>Job Description</h3>
                                <p>
                                    {post.jobDescription}
                                </p>
                            </>
                        }
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