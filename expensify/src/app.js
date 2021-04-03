import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Create from "./app/components/Create";
import Edit from "./app/components/Edit";
import Header from "./app/components/Header";
import Help from "./app/components/Help";
import Home from "./app/components/Home";
import NotFound from "./app/components/NotFound";
import AppRouter from "./app/routes/AppRouter";

import "./styles/styles.scss";

ReactDOM.render(<AppRouter />, document.getElementById("root"));
