import React from "react";
import Banner from "../../Components/Banner/Banner";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ChapterTable from "../../Components/Chapter/ChapterTable";
import "./style.css";

const AllChapters = () => {

    return (
        <>
            <div className="container">
                <Banner bannerText={"All Chapters"} />
                <div className="chapters-all">
                    <ChapterTable />
                </div>

            </div>
        </>
    )
}

export default AllChapters;
