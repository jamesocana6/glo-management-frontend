import React from "react";

const JobModal = ({post, postIdx}) => {

    return (
        //CHANGE id={"jobModal"+post.date} to post.id
        <div className="modal fade" id={"jobModal"+post.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <img src="https://imgur.com/JBZZxqT.jpg" alt="placeholder" style={{ width: 200, paddingRight: 20 }} />
                        <div className="modal-title fs-5" id="exampleModalLabel">
                            <h2>{post.job_title_txt}</h2>
                            <h3>
                                {post.company_name_txt} - {post.level_of_opening_txt} - {post.city_txt}, {post.state_txt}
                            </h3>
                            {post.industry_txt && 
                            <p>
                                Industry: {post.industry_txt}
                            </p>
                            }
                            <p>
                                <span>Job Link:</span> <a href={post.job_link_txt} target="_blank">Job Posting</a>
                            </p>  
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {post.description_txt &&
                            <>
                                <h3>Job Description</h3>
                                <p>
                                    {post.description_txt}
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