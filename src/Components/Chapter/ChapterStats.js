import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_BASE_URL } from "../../utils/constants"
import Roster from "../Roster/Roster";
import { useSelector } from "react-redux";
import { selectModelChoices } from "../../reduxStore/reducers/modelChoicesSlice"


const ChapterStats = ({ chapter_nb }) => {
    const [chapterDetail, setChapterDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const modelChoices = useSelector(selectModelChoices);

    useEffect(() => {
        async function getChapterDetail() {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/chapters/${chapter_nb}`);
                setChapterDetail(response.data);
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        }
        getChapterDetail();
    }, [chapter_nb]);

    return (
        <div className="container">
            <h1>Chapter Stats Component</h1>
            {isLoading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <>
                    <p>Chapter Id: {chapterDetail.id}</p>
                    <p>Associate Chapter: {chapterDetail.associate_chapter_fg ? 'Yes' : 'No'}</p>
                    <p>Greek Letter Assigned: {chapterDetail.greek_letter_assigned_txt ? chapterDetail.greek_letter_assigned_txt : 'N/A'}</p>
                    <p>Chapter School: {chapterDetail.chapter_school_txt}</p>
                    <p>City, State: {chapterDetail.city_state_txt}</p>
                    <p>Original Founding Date: {chapterDetail.original_founding_date}</p>
                    <p>Recharter Date: {chapterDetail.recharter_date ? chapterDetail.recharter_date : 'N/A'}</p>
                    <p>Chapter Status: {modelChoices.CHAPTER_STATUS[chapterDetail.chapter_status_txt]}</p>
                    <p>Chapter Website: {chapterDetail.org_website_txt}</p>
                    <p>School Website: {chapterDetail.school_website_txt}</p>
                    <h2>Chapter Stats</h2>
                    <p>Active Members: {chapterDetail.chapter_stats.active_nb}</p>
                    <p>Inactive Members: {chapterDetail.chapter_stats.inactive_nb}</p>
                    <p>Alumni Members: {chapterDetail.chapter_stats.alumni_nb}</p>
                    <p>Memorial Members: {chapterDetail.chapter_stats.memorial_nb}</p>
                    <p>Total Crossed Members: {chapterDetail.chapter_stats.total_crossed_nb}</p>
                    <p>Smallest Class Crossed: {chapterDetail.chapter_stats.smallest_class_crossed_nb ? chapterDetail.chapter_stats.smallest_class_crossed_nb : 'N/A'}</p>
                    <p>Largest Class Crossed: {chapterDetail.chapter_stats.largest_class_crossed_nb ? chapterDetail.chapter_stats.largest_class_crossed_nb : 'N/A'}</p>
                    <p>Average Class Crossed: {chapterDetail.chapter_stats.average_class_crossed_fl ? chapterDetail.chapter_stats.average_class_crossed_fl : 'N/A'}</p>
                    <Roster members={chapterDetail.members} />
                </>
                            
            )}

        </div>
    )
}

export default ChapterStats;
