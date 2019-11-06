import React from "react";
import ReactDOM from "react-dom";
import App from "../App/App";
import { BrowserRouter } from "react-router-dom";

it("NavBar mounts without crashing", () => {
    const NavBar = document.createElement("NavBar");
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        NavBar
    );
});
