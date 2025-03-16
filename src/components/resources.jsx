import React from "react";
import resources from "../assets/ressurser";
import pagetitle from "./pagetitle";

const Resources = ({ category }) => {
    const filteredResources = resources.filter(resource => resource.category === category);
    return (
        <ul className="resources">
            {/*satt in index her og etter resource id for å få unik key til alle items, og den fikset error meldingen jeg fikk i REact appen. */}
            {filteredResources.map((resource, index) => (
                <li key={resource.id || index} className="resource">
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">Visit</a>
                </li>
            ))}
        </ul>
    )

}

export default Resources