import React from "react";
import Banner from "../../Components/Banner/Banner";
import ChapterStats from "../../Components/Chapter/ChapterStats";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";



const ChapterDetail = (props) => {
    const { id } = useParams();
    const user = useSelector((state) => state.auth.user.member_nb);
    const chapter_nb = id || user.chapter_nb;
  

    return (
        <>
            <Banner bannerText={"Chapter Detail Page"} />
            <ChapterStats chapter_nb={chapter_nb} />
        </>
    )
}

export default ChapterDetail;
