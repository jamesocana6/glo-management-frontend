import React from "react";

const Banner = ({ bannerText }) => {
    console.log(bannerText)
    return (
        <div className="container" style={{height: 250, marginTop: 20, marginBottom: 20, backgroundImage: "url('https://imgur.com/JBZZxqT.jpg')",}} >
            <div>
                <h3 className="text-uppercase" style={{color: "white",}}>{bannerText}</h3>
            </div>
        </div>
    )
}

export default Banner;