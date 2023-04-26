import React from "react";

const Roster = ({ members }) => {
  return (
    <div className="container">
      <h1>Roster Component</h1>
      <table>
        <thead>
          <tr>
            <th>MP ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Chapter</th>
            <th>Class Semester</th>
            <th>Year</th>
            <th>Sorority Nickname</th>
            <th>Current Chapter</th>
            <th>Member Status</th>
            <th>Graduation or Anticipated Graduation Year</th>
            <th>Detailed Status</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.mp_id}>
              <td>{member.mp_id}</td>
              <td>{member.first_name_txt}</td>
              <td>{member.last_name_txt}</td>
              <td>{member.email_address_txt}</td>
              <td>{member.crossing_chapter_nb}</td>
              <td>{member.crossing_class_txt} {member.crossing_date}</td>
              <td>{member.crossing_date}</td>
              <td>{member.nickname_txt}</td>
              <td>{member.chapter_nb}</td>
              <td>{member.status_txt}</td>
              <td>{member.graduation_year_txt}</td>
              <td>{member.detailed_status_txt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Roster;
