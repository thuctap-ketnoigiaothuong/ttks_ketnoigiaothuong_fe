import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../lib/axios';
import { API_ENDPOINTS } from '../lib/apiConfig';

interface Company {
    id: number;
    name: string;
    logo: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    website: string;
    category: string;
    location: string;
}

// Fallback data nếu API lỗi
const fallbackCompanies: Company[] = [
    {
        id: 1,
        name: 'Công ty TNHH ABC',
        logo: 'https://via.placeholder.com/150',
        description:
            'Công ty chuyên cung cấp các sản phẩm công nghệ chất lượng cao với hơn 10 năm kinh nghiệm trong ngành.',
        email: 'contact@abc.com',
        phone: '0123456789',
        address: '123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh',
        website: 'www.abc.com',
        category: 'Công nghệ',
        location: 'TP. Hồ Chí Minh',
    },
    {
        id: 2,
        name: 'Công ty TNHH XYZ',
        logo: 'https://via.placeholder.com/150',
        description: 'Công ty chuyên về dịch vụ tư vấn và thiết kế nội thất.',
        email: 'info@xyz.com',
        phone: '0987654321',
        address: '456 Đường XYZ, Quận ABC, TP. Hồ Chí Minh',
        website: 'www.xyz.com',
        category: 'Nội thất',
        location: 'TP. Hồ Chí Minh',
    },
];

const CompaniesPage = () => {
    const navigate = useNavigate();
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                // Tạm thời sử dụng fallback data cho đến khi có API endpoint chính xác
                setCompanies(fallbackCompanies);
                setLoading(false);
            } catch (err) {
                console.error('API lỗi:', err);
                setCompanies(fallbackCompanies);
                setError(true);
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
                <span>Trang chủ</span>
                <span className="mx-2">/</span>
                <span className="text-gray-900">Doanh nghiệp</span>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 pb-16">
                <div className="bg-white rounded-lg shadow-sm p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Danh sách doanh nghiệp</h1>

                    {/* Error Message */}
                    {error && (
                        <div className="text-red-500 mb-4">
                            Không thể tải danh sách doanh nghiệp từ máy chủ. Hiển thị dữ liệu dự phòng.
                        </div>
                    )}

                    {/* Companies Grid */}
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <svg
                                className="animate-spin h-10 w-10 text-blue-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                />
                            </svg>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {companies.map((company) => (
                                <button
                                    key={company.id}
                                    onClick={() => navigate(`/companies/${company.id}`)}
                                    className="w-full text-left bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                                >
                                    <img src={company.logo} alt={company.name} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{company.name}</h3>
                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{company.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                                {company.category}
                                            </span>
                                            <span className="text-sm text-gray-500">{company.location}</span>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default CompaniesPage;
