import React from "react";
import Banner from "../../Components/Banner/Banner";
import ChapterStats from "../../Components/Chapter/ChapterStats";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css";


const ChapterDetail = (props) => {
    const { id } = useParams();
    const user = useSelector((state) => state.auth.user.member_nb);
    const chapter_nb = id || user.chapter_nb;


    return (
        <><div className="container">
            <Banner bannerText={"Chapter Detail Page"} />
            <div className="chapter-stats">
                <ChapterStats chapter_nb={chapter_nb} />
            </div>
        </div>
        </>
    )
}

export default ChapterDetail;
