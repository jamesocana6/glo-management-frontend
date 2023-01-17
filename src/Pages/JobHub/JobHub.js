import React, { useState, useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import NavBar from "../../Components/NavBar/NavBar";
import JobArea from "./JobArea/JobArea";

const JobHub = ({ props }) => {


    const jobOps = [
        {
            date: "1/10/2023",
            jobTitle: "Software Engineer",
            companyName: "Tesla",
            jobLink: "#",
            location: "Remote",
            howToApply: "Message the job poster with resume and I will give it to the recruiter",
            experienceRequired: "Entry-Level",
            industry: "Automotive",
            jobDescription: "",
            poster: "Elon Musk",
        },
        {
            date: "1/12/2023",
            jobTitle: "Software Engineer II",
            companyName: "Apple",
            jobLink: "#",
            location: "Remote",
            howToApply: "Use my name in the referral",
            experienceRequired: "Experienced",
            industry: "Technology",
            jobDescription: "",
            poster: "Steve Jobs",
        },
        {
            date: "1/10/2023",
            jobTitle: "Software Engineer",
            companyName: "Tesla",
            jobLink: "#",
            location: "Remote",
            howToApply: "Message the job poster with resume and I will give it to the recruiter",
            experienceRequired: "Entry-Level",
            industry: "Automotive",
            jobDescription: "",
            poster: "Elon Musk",
        },
        {
            date: "1/12/2023",
            jobTitle: "Software Engineer II",
            companyName: "Apple",
            jobLink: "#",
            location: "Remote",
            howToApply: "Use my name in the referral",
            experienceRequired: "Experienced",
            industry: "Technology",
            jobDescription: "",
            poster: "Steve Jobs",
        },
        {
            date: "1/10/2023",
            jobTitle: "Software Engineer",
            companyName: "Tesla",
            jobLink: "#",
            location: "Remote",
            howToApply: "Message the job poster with resume and I will give it to the recruiter",
            experienceRequired: "Entry-Level",
            industry: "Automotive",
            jobDescription: "",
            poster: "Elon Musk",
        },
        {
            date: "1/12/2023",
            jobTitle: "Software Engineer II",
            companyName: "Apple",
            jobLink: "#",
            location: "Remote",
            howToApply: "Use my name in the referral",
            experienceRequired: "Experienced",
            industry: "Technology",
            jobDescription: "",
            poster: "Steve Jobs",
        },
        {
            date: "1/10/2023",
            jobTitle: "Software Engineer",
            companyName: "Tesla",
            jobLink: "#",
            location: "Remote",
            howToApply: "Message the job poster with resume and I will give it to the recruiter",
            experienceRequired: "Entry-Level",
            industry: "Automotive",
            jobDescription: "",
            poster: "Elon Musk",
        },
        {
            date: "1/12/2023",
            jobTitle: "Software Engineer II",
            companyName: "Apple",
            jobLink: "#",
            location: "Remote",
            howToApply: "Use my name in the referral",
            experienceRequired: "Experienced",
            industry: "Technology",
            jobDescription: "",
            poster: "Steve Jobs",
        },
    ]

    const [jobsList, setJobsList] = useState(null)

    const getJobsList = async () => {
        // const response = await fetch("http://localhost:8000/api/jobs/")
        // const data = await response.json()

        //setJobsList(data)
        setJobsList(jobOps)
    }

    return (
        <>
            <div>
                <NavBar />
                <Banner
                    bannerText={"JobHub Page"}
                />
            </div>
            <JobArea
                jobsList={jobsList}
                getJobsList={getJobsList}
            />
        </>
    )
}

export default JobHub;