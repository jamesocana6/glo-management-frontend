import React from "react";

const Banner = ({ bannerText }) => {
    return (
        <div className="container banner-container">
            <h3 className="text-uppercase" style={{ color: "white" }}>{bannerText}</h3>
        </div>
    )
}

export default Banner;