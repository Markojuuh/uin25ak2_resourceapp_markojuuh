import React from "react";
import resources from "../assets/ressurser";
import pagetitle from "./pagetitle";

const Resources = ({ category }) => {
    const filteredResources = resources.filter(resource => resource.category === category);
    return (
        <ul className="resources">
            {filteredResources.map(resource => (
                <li key={resource.id} className="resource">
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">Visit</a>
                </li>
            ))}
        </ul>
    )

}