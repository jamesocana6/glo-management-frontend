import React, { useState } from "react";

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
                        <i className="material-icons prefix">account_circle</i>
                        <input
                            id="icon_position"
                            type="text"
                            className="validate"
                            name="position" onChange={handleChange} />
                        <label for="icon_position">Position</label>
                    </div>

                    <div className="input-field col s3">
                        <i className="material-icons prefix">business</i>
                        <input
                            id="icon_company"
                            type="text"
                            className="validate"
                            name="company"
                            onChange={handleChange} />
                        <label for="icon_company">Company</label>
                    </div>

                    <div className="input-field col s3">
                        <i className="material-icons prefix">location_city</i>
                        <input
                            id="icon_location"
                            type="text"
                            className="validate"
                            name="location"
                            onChange={handleChange} />
                        <label for="icon_location">Location</label>
                    </div>

                    <input type="submit" className="btn" value="Search" />
                </div>
            </form>
        </div>
    )
}

export default Filters;