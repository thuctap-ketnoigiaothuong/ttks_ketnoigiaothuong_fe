import { createBrowserRouter } from 'react-router';

import AuthLayout from '../layouts/AuthLayout';

import App from '../layouts/AppLayout';
import AdminLayout from '../layouts/AdminLayout';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import CategoriesPage from '../pages/CategoriesPage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import CompanyProfilePage from '../pages/CompanyProfilePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import CompleteProfilePage from '../pages/CompleteProfilePage';
import ProfilePage from '../pages/ProfilePage';

import DashboardPage from '../pages/admin/DashboardPage';
import AccountPage from '../pages/admin/AccountPage';
import MerchandisePage from '../pages/admin/MerchandisePage';
import ContractPage from '../pages/admin/ContractPage';
import PaymentPage from '../pages/admin/PaymentPage';
import ReportPage from '../pages/admin/ReportPage';
import SettingPage from '../pages/admin/SettingPage';

import AccountInfo from '../components/company/profiles/AccountInfo';
import CompanyInfo from '../components/company/profiles/CompanyInfo';

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            { index: true, Component: HomePage },
            { path: 'about', Component: AboutPage },
            { path: 'categories', Component: CategoriesPage },
            { path: 'products',
                children: [
                  { index: true, Component: ProductsPage },
                  { path: ':productId', Component: ProductDetailPage },
                ],
            },
            { path: 'companies',
                children: [
                //   { index: true, Component: ProductsPage },
                  { path: ':companyId', Component: CompanyProfilePage },
                ],
            },
            {
                path: 'profiles',
                Component: ProfilePage,
                children: [
                    { path: 'account', Component: AccountInfo },
                    { path: 'company', Component: CompanyInfo },
                ],
            },
            {
                path: 'auth',
                Component: AuthLayout,
                children: [
                    { path: 'login', Component: LoginPage },
                    { path: 'register', Component: RegisterPage },
                    { path: 'complete-profile', Component: CompleteProfilePage },
                ],
            },
            { path: '*', Component: NotFoundPage },
        ],
    },
    {
        path: '/admin/dashboard',
        Component: AdminLayout,
        children: [
            { index: true, Component: DashboardPage },
            { path: 'account', Component: AccountPage },
            { path: 'merchandise', Component: MerchandisePage },
            { path: 'contract', Component: ContractPage },
            { path: 'payments', Component: PaymentPage },
            { path: 'reports', Component: ReportPage },
            { path: 'settings', Component: SettingPage },
            { path: '*', Component: NotFoundPage },
        ],
    },
]);

export default router;
