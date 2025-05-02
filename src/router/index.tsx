import { createBrowserRouter } from "react-router";

import AuthLayout from "../layouts/AuthLayout";

import App from "../layouts/AppLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
    {
    path: "/",
    Component: App,
    children: [
        { index: true, Component: HomePage },
        { path: "about", Component: AboutPage },
        {
            path: "auth",
            Component: AuthLayout,
            children: [
                { path: "login", Component: LoginPage },
                { path: "register", Component: RegisterPage },
            ]
        },
        { path: "*", Component: NotFoundPage },
    ]},
]);

export default router;
