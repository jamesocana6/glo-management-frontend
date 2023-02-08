import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import Announcements from "../../Components/Announcements/Annoucements";
import MemberInfo from "./MemberInfo/MemberInfo"
import { Link } from 'react-router-dom'
import NavBar from "../../Components/NavBar/NavBar";


const MemberDashboard = ({ props }) => {
    return (
        <>
            <div>
                <NavBar />
                <h1>MemberDashboard Page</h1>
                Hi First Name!
            </div>

            <div className="container-fluid">
                <div className="row m-3" style={{ height: '17rem' }}>
                    <div className="col m-3" style={{ backgroundColor: 'lightgrey' }}>
                        <MemberInfo />
                    </div>

                    <div className="col m-3" style={{ backgroundColor: 'lightgrey' }}>
                        <Announcements />
                        {/* props = chapter */}
                    </div>
                </div>

                <div className="row m-3" style={{ height: '17rem' }}>
                    <div className="col m-3" style={{ backgroundColor: 'lightgrey' }}>
                        <p>
                            <h1>National Resources</h1>
                            <Link to="../findcoach">Find a Coach</Link><br></br>
                            <Link to="../jobhub">Job Hub - Opps & Resources</Link><br></br>
                            Support other Sister's Businesses<br></br>
                        </p>
                    </div>

                    <div className="col m-3" style={{ backgroundColor: 'lightgrey' }}>
                        <p>
                            <Announcements />
                            {/* props = national */}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MemberDashboard;