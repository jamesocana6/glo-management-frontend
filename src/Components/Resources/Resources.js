import React from "react";

const Resources = ({resources, title}) => {
    // get resources from the backend in App.js and pass down the correct resources as props when rendering resource component.
    // resources will look like: {
    //      national: { links: [], titles: [] },
    //      chapter: { links: [], titles: [] },
    // } 
    // or something like that 
    let info;
    if (resources.links.length > 0) {
        info = resources.links.map((resource, index) => {
            return (
                <a key={title+"resource"+index} href={resource} target={"_blank"} style={{flex: 1}}>{resources.titles[index]}</a>
            )
        })
    } else {
        info = 
        <p>No resources!</p>
    }
    return (
        <div>
            <h3>{title} Resources</h3>
            <div style={{display: "flex", flexDirection: "column"}}>
                {info}
            </div>
        </div>
    )
} 

export default Resources;