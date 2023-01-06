import React, { useState } from "react";
import { Building, PersonCircle, PinMapFill } from 'react-bootstrap-icons';


const Filters = ({ props }) => {
    const [filter, setFilter] = useState({
        position: '',
        company: '',
        location: '',
    })

    const handleChange = (event) => {
        console.log(event.target.value)
        setFilter({ ...filter, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("filter", filter)
    }

    return (
        <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s3">
                        <PersonCircle size={25} className="m-2"></PersonCircle>
                        <input
                            id="icon_position"
                            type="text"
                            className="validate"
                            name="position"
                            placeholder="Person"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-field col s3">
                        <Building size={25} className="m-2"></Building>
                        <input
                            id="icon_company"
                            type="text"
                            className="validate"
                            name="company"
                            placeholder="Company"
                            onChange={handleChange} />
                    </div>

                    <div className="input-field col s3">
                        <PinMapFill size={25} className="m-2"></PinMapFill>
                        <input
                            id="icon_location"
                            type="text"
                            className="validate"
                            name="location"
                            placeholder="Location"
                            onChange={handleChange} />
                    </div>

                    <div className="search col s3">
                        <button className="btn btn-secondary">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Filters;