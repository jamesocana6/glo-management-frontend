import React from "react";
import { useSelector } from "react-redux";
import { selectChapters } from "../../../reduxStore/reducers/chapterSlice"
import { selectModelChoices } from "../../../reduxStore/reducers/modelChoicesSlice"


const MemberInfo = () => {

    const user = useSelector((state) => state.auth.user);
    const modelChoices = useSelector(selectModelChoices);
    const chapters = useSelector(selectChapters)


    return (
        <div>
            <h3 className="dashboard-component-title">Hello, {user.member_nb.nickname_txt} !</h3>
                <ul className="member-info">
                    <li>
                        Current Status: {modelChoices.STATUS[user.member_nb.status_txt]}
                    </li>
                    <li>
                        Current School: {chapters[user.member_nb.chapter_nb].chapter_school_txt}
                    </li>
                    <li>
                        Crossing School: {user.member_nb.crossing_chapter_nb}
                    </li>
                    <li>
                        Crossing Class: {modelChoices.GREEK_CLASS[user.member_nb.crossing_class_txt]}
                    </li>
                    <li>
                        Experiences:
                    </li>
                </ul>
            </div>
    )
}

export default MemberInfo;
