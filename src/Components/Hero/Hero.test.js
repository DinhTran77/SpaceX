import React from "react";
import ReactDOM from "react-dom";
import App from "../../App";
import { BrowserRouter } from "react-router-dom";

it("Hero loads without crashing", () => {
    const hero = document.createElement("Hero");
    ReactDOM.render(
        <BrowserRouter>
            <App></App>
        </BrowserRouter>,
        hero
    );
});
