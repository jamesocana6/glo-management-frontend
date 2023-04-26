import React, { useState } from 'react'
import { useSelector } from "react-redux";

const EditProfile = () => {

    const user = useSelector((state) => state.auth.user.member_nb);
    // Need to fix Coach Boolean values - Line 404

    const [profile, setProfile] = useState({
        first_name_txt: user.first_name_txt || "",
        last_name_txt: user.last_name_txt || "",
        nickname_txt: user.nickname_txt || "",
        nickname_meaning_txt: user.nickname_meaning_txt || "",
        chapter_nb: user.chapter_nb || "",
        crossing_chapter: user.crossing_chapter_nb || "",
        crossing_className_txt: user.crossing_class_txt || "",
        crossing_date: user.crossing_date || "",
        initiation_date: user.initiation_date || "",
        line_number: user.line_nb || "",
        big_member_nb: user.big_nb || "",
        tree: user.tree_txt || "",
        status_txt: user.status_txt || "",
        current_city: user.current_city_txt || "",
        current_state: user.current_state_txt || "",
        current_country: user.current_country_txt || "",
        email_address: user.email_address_txt || "",
        coach: user.coach_fg || "",
        current_position: user.current_position_txt || "",
        current_company: user.current_company_txt || "",
        linkedin_url: user.linkedin_url_txt || "",
        expertise_interests: user.expertise_interests_nb || "",
        summary: user.summary_txt || "",
    });


    const handleProfileChange = (event) => {
        console.log(event.target.value)
        setProfile({ ...profile, [event.target.name]: event.target.value })
    }

    const handleProfileSubmit = (event) => {
        console.log("profile", profile)
        event.preventDefault()
    }

    console.log(profile)

    return (
        <div className="container">
            <form
                className="needs-validation"
                onSubmit={handleProfileSubmit}
                novalidate
            >
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label for="validationCustom01">First name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            name="first_name_txt"
                            onChange={handleProfileChange}
                            placeholder={profile.first_name_txt}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid name.
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationCustom02">Last name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom02"
                            name="last_name_txt"
                            onChange={handleProfileChange}
                            placeholder={profile.last_name_txt}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide ae valid name.
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label for="validationCustom01">Nickname</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            name="nickname_txt"
                            value={profile.nickname_txt}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid nickname.
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationCustom02">Nickname Meaning</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            name="nickname_meaning_txt"
                            value={profile.nickname_meaning_txt}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid nickname meaning.
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2 mb-3">
                        <label for="validationCustom03">Crossing Class</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            name="crossing_className_txt"
                            value={profile.crossing_className_txt}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid class.
                        </div>
                    </div>
                    <div className="col-md-2 mb-3">
                        <label for="validationCustom04">Crossing Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="validationCustom01"
                            name="crossing_date"
                            value={profile.crossing_date}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid date (YYYY-MM-DD).
                        </div>
                    </div>
                    <div className="col-md-2 mb-3">
                        <label for="validationCustom05">Initiation Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="validationCustom01"
                            name="initiation_date"
                            value={profile.initiation_date}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid date (YYYY-MM-DD).
                        </div>
                    </div>

                    <div className="col-md-2 mb-3">
                        <label for="validationCustom03">Chapter</label>
                        <input
                            type="number"
                            className="form-control"
                            id="validationCustom01"
                            name="chapter_nub"
                            value={profile.chapter_nb}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid chapter.
                        </div>
                    </div>
                    <div className="col-md-2 mb-3">
                        <label for="validationCustom04">Crossing Chapter</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            name="crossing_chapter"
                            value={profile.crossing_chapter}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid chapter.
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2 mb-3">
                        <label for="validationCustom03">Line Number</label>
                        <input
                            type="number"
                            className="form-control"
                            id="validationCustom01"
                            name="line_number"
                            value={profile.line_number}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid number.
                        </div>
                    </div>
                    <div className="col-md-2 mb-3">
                        <label for="validationCustom04">Big Sister Number</label>
                        <input
                            type="number"
                            className="form-control"
                            id="validationCustom01"
                            name="big_sister_nb"
                            value={profile.big_sister_nb}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid number.
                        </div>
                    </div>
                    <div className="col-md-2 mb-3">
                        <label for="validationCustom05">Tree</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            name="tree"
                            value={profile.tree}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid tree.
                        </div>
                    </div>

                    <div className="col-md-2 mb-3">
                        <label for="validationCustom03">Status</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            name="status_txt"
                            onChange={handleProfileChange}
                            value={profile.status_txt}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid status.
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2 mb-3">
                        <label for="validationCustom03">City</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            name="current_city"
                            onChange={handleProfileChange}
                            value={profile.current_city}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-2 mb-3">
                        <label for="validationCustom04">State</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            name="current_state"
                            onChange={handleProfileChange}
                            value={profile.current_state}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                    </div>
                    <div className="col-md-2 mb-3">
                        <label for="validationCustom05">Country</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            name="current_country"
                            onChange={handleProfileChange}
                            value={profile.current_country}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid country.
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label for="validationCustom03">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="validationCustom01"
                            name="email_address"
                            onChange={handleProfileChange}
                            value={profile.email_address}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid email.
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <label for="validationCustom03">Current Position</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            name="current_position"
                            onChange={handleProfileChange}
                            value={profile.current_position}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid position.
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <label for="validationCustom03">Current Company</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            name="current_company"
                            onChange={handleProfileChange}
                            value={profile.current_company}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid company.
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2 mb-3">
                        <label for="validationCustom05">Expertise</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            name="expertise_interests"
                            onChange={handleProfileChange}
                            value={profile.expertise_interests}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid expertise.
                        </div>
                    </div>

                    <div className="col-md-2 mb-3">
                        <label for="validationCustom03">LinkedIn</label>
                        <input
                            type="url"
                            className="form-control"
                            id="validationCustom01"
                            name="linkedin_url"
                            onChange={handleProfileChange}
                            value={profile.linkedin_url}
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid url.
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom04">Summary</label>
                        <textarea
                            className="form-control"
                            id="validationCustom04"
                            name="summary"
                            onChange={handleProfileChange}
                            value={profile.summary}
                            required />
                        <div className="invalid-feedback">
                            Please provide a valid summary.
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label for="coach-options">Do you want to be a coach/mentor?</label>
                        <select className="custom-select m-2" name="coach" onChange={handleProfileChange} id="coach-options" required>
                            {profile.coach === true ?
                                <>
                                    {/* value should be a Boolean instead of string */}
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </>
                                :
                                <>
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>
                                </>
                            }
                        </select>
                        <div class="invalid-feedback">Example invalid custom select feedback</div>
                    </div>
                </div>

                <button className="btn btn-primary" type="submit">Submit form</button>
            </form>
        </div>
    )
}

export default EditProfile

// < script >
// (function () {
//     'use strict';
//     window.addEventListener('load', function () {
//         // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         var forms = document.getElementsByclassNameName('needs-validation');
//         // Loop over them and prevent submission
//         var validation = Array.prototype.filter.call(forms, function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (form.checkValidity() === false) {
//                     event.preventDefault();
//                     event.stopPropagation();
//                 }
//                 form.classNameList.add('was-validated');
//             }, false);
//         });
//     }, false);
// })();
//         </script >