import React from "react";
import Nav from "./nav";
import "../assets/styles/layout.scss";

const layout = ({ children}) => {
    return (
        <main className ="layout">
            <Nav />
            <section>
                <h1 className="pageTitle">Min resurs app</h1>
                {children}
            </section>
        </main>
    );
};

export default layout

