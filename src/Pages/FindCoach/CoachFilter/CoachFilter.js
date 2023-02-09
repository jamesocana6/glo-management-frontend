import React from "react";
import { Building, PersonCircle, PinMapFill } from 'react-bootstrap-icons';


const Filters = ({ handleFilterChange, handleFilterSubmit }) => {
    return (
        <div className="row m-3">
            <form className="col s12" onSubmit={handleFilterSubmit}>
                <div className="row">
                    <div className="input-field col s3">
                        <PersonCircle size={25} className="m-2"></PersonCircle>
                        <input
                            id="icon_position"
                            type="text"
                            className="validate"
                            name="position"
                            placeholder="Position"
                            onChange={handleFilterChange}
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
                            onChange={handleFilterChange} />
                    </div>

                    <div className="input-field col s3">
                        <PinMapFill size={25} className="m-2"></PinMapFill>
                        <input
                            id="icon_location"
                            type="text"
                            className="validate"
                            name="location"
                            placeholder="Location"
                            onChange={handleFilterChange} />
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