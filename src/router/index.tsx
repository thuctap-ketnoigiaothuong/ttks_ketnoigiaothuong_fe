import { createBrowserRouter } from "react-router";

import AuthLayout from "../layouts/AuthLayout";

import App from "../layouts/AppLayout";
import AdminLayout from "../layouts/AdminLayout";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";

import DashboardPage from "../pages/admin/DashboardPage";
import AccountPage from "../pages/admin/AccountPage";
import MerchandisePage from "../pages/admin/MerchandisePage";
import ContractPage from "../pages/admin/ContractPage";
import PaymentPage from "../pages/admin/PaymentPage";
import ReportPage from "../pages/admin/ReportPage";
import SettingPage from "../pages/admin/SettingPage";

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
        ]
    },
    {
        path: "/admin/dashboard",
        Component: AdminLayout,
        children: [
            { index: true, Component: DashboardPage },
            { path: "account", Component: AccountPage },
            { path: "merchandise", Component: MerchandisePage },
            { path: "contract", Component: ContractPage },
            { path: "payments", Component: PaymentPage },
            { path: "reports", Component: ReportPage },
            { path: "settings", Component: SettingPage },
            { path: "*", Component: NotFoundPage },
        ]
    }
]);

export default router;
