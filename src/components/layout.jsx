import React from "react";
import Nav from "./nav";
import "../assets/styles/layout.scss";

const layout = ({ children}) => {
    return (
        <main className ="layout">
            <section>
                <h1>Min resurs app</h1>
                {children}
            </section>
        </main>
    );
};

