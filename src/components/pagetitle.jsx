import React, { useEffect } from "react";

const pageTitle = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return null;
};

export default pageTitle