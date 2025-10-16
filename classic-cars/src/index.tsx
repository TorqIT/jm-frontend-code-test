import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

/**
 * Classic Cars
 *
 * This app is currently rendering a hard-coded list of classic cars. Update the app to
 * support displaying cars from the API below with pagination, showing 10 cars per page.
 *
 * If time permits, hook up:
 *
 * - filtering from the API in your table by make
 * - filtering from the API in your table by model
 * - filtering from the API in your table by year
 * - filtering from the API in your table by whether or not the car is sold
 *
 * ---
 *
 * The API documentation: https://torqclassiccarsapi.azurewebsites.net/swagger/index.html
 * The API endpoint: https://torqclassiccarsapi.azurewebsites.net/api/AvailableCars
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
