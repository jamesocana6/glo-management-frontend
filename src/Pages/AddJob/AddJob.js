import React from "react";
import Banner from "../../Components/Banner/Banner";
import NavBar from "../../Components/NavBar/NavBar";

let JOB_LEVEL = [
    ["00", "Internship"],
    ["01", "Entry"],
    ["02", "Associate"],
    ["03", "Analyst"],
    ["04", "Specialist"],
    ["05", "Manager"],
    ["06", "Senior Manager"],
    ["07", "Director"],
    ["08", "Senior Director"],
    ["09", "Executive"],
]

const AddJob = () => {
    const postURL = `http://localhost:8000/api/jobs/`

    const createPost = async (post) => {
        await fetch(postURL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(post)
        })
    }

    const experienceOptions = JOB_LEVEL.map((level) => {
        return (
            <option value={level[0]}>{level[1]}</option>
        )
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        if (formJson.remote_role_fg === "on") {
            formJson.remote_role_fg = true
        } else {
            formJson.remote_role_fg = false
        }
        //ADD poster_nb from user logged in
        // if (sisters) {
        //     formJson["poster_nb"] = sisters[0].id;

        // }
        createPost(formJson);
        console.log(formJson);
    }

    return (
        <div>
            <NavBar />
            <Banner bannerText={"Add a Job"} />
            <div className="container">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Job Title</span>
                                </div>
                                <input type="text" class="form-control" name="job_title_txt"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Company</span>
                                </div>
                                <input type="text" class="form-control" name="company_name_txt"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Job Link</span>
                                </div>
                                <input type="text" class="form-control" name="job_link_txt"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">City</span>
                                </div>
                                <input type="text" class="form-control" name="city_txt"/>
                            </div>
                        </div>
                        <div className="col-5">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">State</span>
                                </div>
                                <input type="text" class="form-control" name="state_txt"/>
                            </div>
                        </div>
                        <div className="col-2">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Remote</span>
                                </div>
                                <input style={{marginInline: 10}} type="checkbox" name="remote_role_fg"/>
                            </div>
                        </div>
                    </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Experience level</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01" name={"level_of_opening_txt"}>
                                <option selected>Choose...</option>
                                {experienceOptions}
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Job Description</span>
                            </div>
                            <textarea class="form-control" name="description_txt"/>
                        </div>
                        <button type="reset">Reset form</button>
                        <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddJob;