import React from "react";

import Announcements from "../../Components/Announcements/Annoucements";
import MemberInfo from "./MemberInfo/MemberInfo"
import { Link } from 'react-router-dom'
import NavBar from "../../Components/NavBar/NavBar";


const MemberDashboard = ({ props }) => {
    return (
        <>
            <div>
               <NavBar/>
               <h1>MemberDashboard Page</h1>
                           
            </div>
            <p>
                Hi First Name!
                <MemberInfo />
            </p>
            <p>
                <Announcements />
                {/* props = chapter */}
            </p>
            <p>
                National Resources<br></br>
                <Link to="/findcoach">Find a Coach</Link><br></br>
                <Link to="/jobhub">Job Hub - Opps & Resources</Link><br></br>
                Support other Sister's Businesses<br></br>
            </p>
            <p>
                <Announcements />
                {/* props = national */}
            </p>
        </>
    )
}

export default MemberDashboard;