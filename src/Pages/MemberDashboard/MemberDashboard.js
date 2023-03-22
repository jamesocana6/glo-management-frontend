import React from "react";

import Announcements from "../../Components/Announcements/Annoucements";
import MemberInfo from "./MemberInfo/MemberInfo"
import { Link } from 'react-router-dom'
import NavBar from "../../Components/NavBar/NavBar";


const MemberDashboard = ({ props }) => {
    return (
        <>
            <NavBar />

            <div className="container-fluid">
                <div className="row m-3 member-dashboard-row">
                    <div className="col-4 m-3 member-dashboard-col">
                        <MemberInfo />
                    </div>

                    <div className="col m-3 member-dashboard-col">
                        <Announcements />
                        {/* props = chapter */}
                    </div>
                </div>

                <div className="row m-3 member-dashboard-row">
                    <div className="col-4 m-3 member-dashboard-col">
                        <h3 className="dashboard-component-title">National Resources</h3>
                        <ul className="national-resources">
                            <li>
                                <Link to="../findcoach">Find a Coach</Link>
                            </li>
                            <li>
                                <Link to="../jobhub">Job Hub - Opps & Resources</Link>
                            </li>
                            <li>
                                Support other Member's Businesses
                            </li>
                        </ul>
                    </div>

                    <div className="col m-3 member-dashboard-col">
                        <Announcements />
                        {/* props = national */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MemberDashboard;