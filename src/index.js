import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Kennels } from "./components/Kennels.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Kennels />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)