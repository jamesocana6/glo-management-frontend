import React from "react";

const Resources = ({resources, title}) => {

    let info;
    if (resources.links.length > 0) {
      info = resources.links.map((resource, index) => {
        return (
          <a
            key={index}
            href={resource}
            target="_blank"
            style={{ flex: 1 }}
          >
            {resources.titles[index]}
          </a>
        );
      });
    } else {
      info = <p>No resources!</p>;
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