import React from "react";
import Banner from "../../Components/Banner/Banner";
import NavBar from "../../Components/NavBar/NavBar";

const AddJob = () => {
    // useEffect(()=> {getSisters()}, [])
    // console.log(sisters)
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

    // pub_date = models.DateTimeField(
    //     'date published', auto_created=True, default=timezone.now)
    // job_title_txt = models.CharField(max_length=50)
    // company_name_txt = models.CharField(max_length=50)
    // job_link_txt = models.CharField(max_length=250)
    // remote_role_fg = models.BooleanField(default=False)
    // city_txt = models.CharField(max_length=15, null=True)
    // state_txt = models.CharField(max_length=15, null=True)
    // level_of_opening_txt = models.CharField(max_length=2,
    //                                         choices=JOB_LEVEL,
    //                                         default=JOB_LEVEL[0][0])
    // industry_nb = models.ForeignKey(
    //     Industry, on_delete=models.SET_NULL, null=True)
    // description_txt = models.TextField(max_length=250)
    // poster_nb = models.ForeignKey(Sister, on_delete=models.CASCADE, null=True)

    return (
        <div>
            <NavBar/>
            <Banner bannerText={"Add a Job"}/>
            <form method="post" onSubmit={handleSubmit}>
                <label>
                    Job title: 
                    <input
                        type={"text"}
                        name={"job_title_txt"}
                    />
                </label>
                <label>
                    Company: 
                    <input
                        type={"text"}
                        name={"company_name_txt"}
                    />
                </label>
                <label>
                    Job link: 
                    <input
                        type={"text"}
                        name={"job_link_txt"}
                    />
                </label>
                <label>
                    Remote: 
                    <input
                        type={"checkbox"}
                        name={"remote_role_fg"}
                    />
                </label>
                <label>
                    City: 
                    <input
                        type={"text"}
                        name={"city_txt"}
                    />
                </label>
                <label>
                    State: 
                    <input
                        type={"text"}
                        name={"state_txt"}
                    />
                </label>
                <label>
                    Experience level: 
                    <input
                        type={"text"}
                        name={"level_of_opening_txt"}
                    />
                </label>
                {/* <label>
                    Industry: 
                    <input
                        type={"text"}
                        name={"industry_nb"}
                    />
                </label> */}
                <label>
                    Job description: 
                    <input
                        type={"text"}
                        name={"description_txt"}
                    />
                </label>
                <button type="reset">Reset form</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
} 

export default AddJob;