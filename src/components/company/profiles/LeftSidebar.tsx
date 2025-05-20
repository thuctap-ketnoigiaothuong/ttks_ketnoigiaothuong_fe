import { NavLink, useLocation, useNavigate } from 'react-router';

import api from '../../../lib/axios';
import { API_ENDPOINTS } from '../../../lib/apiConfig';
import { useToast } from '../../../context/ToastContext';

export default function LeftSidebar() {
    const location = useLocation();
    const { showToast } = useToast();
    const navigate = useNavigate();

    const sidebarItems = [
        { title: 'Dashboard', path: '/profiles' },
        { title: 'Order History', path: '/profiles/orders' },
        { title: 'Most Frequently Bought', path: '/profiles/frequent-buys' },
        { title: 'Returns and Complaints', path: '/profiles/returns' },
        { title: 'Account Data', path: '/profiles/account' },
        { title: 'Company Data', path: '/profiles/company' },
        { title: 'Shipping Addresses', path: '/profiles/addresses' },
        { title: 'Logout', path: '/auth/logout' },
    ];

    const handleLogout = async () => {
        try {
            const res = await api.post(API_ENDPOINTS.logout);
            showToast({
                title: 'Đăng xuất',
                message: res.status === 200 ? 'Đăng xuất thành công' : 'Đăng xuất thất bại',
                type: res.status === 200 ? 'success' : 'error',
            });
            navigate('/auth/login');
        } catch (error) {
            showToast({
                title: 'Lỗi hệ thống',
                message: 'Không thể đăng xuấ.',
                type: 'error',
            });
        }
    };

    return (
        <div className="w-[250px] h-full bg-white rounded-lg p-4 space-y-3 text-sm shadow-md shadow-gray-300">
            {sidebarItems.map(({ title, path }, idx) => {
                const isActive = location.pathname === path;
                if (title === 'Logout' && path === '/auth/logout') {
                    return (
                        <button
                            onClick={handleLogout}
                            className="cursor-pointer w-full rounded px-2 py-2 transition font-semibold text-start text-red-500 bg-red-100"
                        >
                            {title}
                        </button>
                    );
                }
                return (
                    <NavLink
                        key={idx}
                        to={path}
                        className={`block cursor-pointer rounded px-2 py-1 transition ${
                            isActive ? 'font-semibold text-black bg-gray-100' : 'text-gray-600 hover:text-black'
                        }`}
                    >
                        {title}
                    </NavLink>
                );
            })}
        </div>
    );
}
