import React from "react";
import Banner from "../../Components/Banner/Banner";
import ChapterForm from "../../Components/Chapter/ChapterForm";



const ChapterAddEdit = (props) => {

    return (
        <>
            <Banner bannerText={"Add a Chapter"} />
            <ChapterForm />
        </>
    )
}

export default ChapterAddEdit;