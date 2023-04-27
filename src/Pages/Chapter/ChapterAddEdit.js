import React from "react";
import Banner from "../../Components/Banner/Banner";
import ChapterForm from "../../Components/Chapter/ChapterForm";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";



const ChapterAddEdit = (props) => {
    // const { id } = useParams();
    // const user = useSelector((state) => state.auth.user.member_nb);
    // const chapter_nb = id || user.chapter_nb;
  

    return (
        <>
            <Banner bannerText={"Add a Chapter"} />
            <ChapterForm />
            {/* <ChapterForm chapter_nb={chapter_nb} /> */}
        </>
    )
}

export default ChapterAddEdit;