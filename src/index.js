import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
const roota=ReactDOM.createRoot(document.getElementById('root'));
roota.render(<BrowserRouter><App/></BrowserRouter>);