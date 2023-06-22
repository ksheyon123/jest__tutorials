import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/404";

const router = createBrowserRouter([
    {
        path : "/login",
        element : <Login/>
    },
    {
        path : "*",
        element : <NotFound />
    }
]);

export { router };