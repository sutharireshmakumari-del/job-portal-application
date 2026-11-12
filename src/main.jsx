// import react from "react"
// import reactdom from "react-dom/client"
// console.log(react)
// console.log(reactdom)

// const { createRoot } = require("react-dom/client");

// reactdom.createRoot(document.getElementById("root")).render(<h1>hello world🌍/</h1>)

// import{createRoot}from 'react-dom/client'
// import App from './App'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById("root")).render(<BrowserRouter><App/></BrowserRouter>)
//! job portal
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
