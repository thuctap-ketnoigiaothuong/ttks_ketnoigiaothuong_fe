import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import Cookies from 'js-cookie';
import api from '../../lib/axios';
import { API_ENDPOINTS } from '../../lib/apiConfig';

export function SearchBar() {
    const [keyword, setKeyword] = useState('');
    const [searchType, setSearchType] = useState('product');
    const navigate = useNavigate();

    // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //   if (e.key === "Enter" && keyword.trim() !== "") {
    //     navigate(`/${searchType}s?search=${encodeURIComponent(keyword)}`);
    //   }
    // };

    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const token = Cookies.get('access_token');

        if (token) {
            const fetchUser = async () => {
                try {
                    const res = await api.get(API_ENDPOINTS.me);
                    const data = res.data.data;
                    setUserName(data.fullName);
                } catch (err) {
                    console.error('Error fetching user info:', err);
                    setUserName(null);
                }
            };

            fetchUser();
        }
    }, []);

    return (
        <section className="relative flex flex-wrap gap-5 justify-between items-center px-20 w-full bg-gray-100 min-h-20 max-md:px-5 max-md:max-w-full">
            <div className=" font-bold text-2xl text-blue-800 flex items-center"><img src="b2b.png" alt="Logo" className="object-contain w-30"/><p>Kết Nối Giao Thương</p></div>

            <div className="flex flex-wrap gap-2 items-center self-stretch my-auto text-sm px-4 py-3 leading-6 bg-white rounded-lg min-w-60 text-zinc-500 w-[543px] max-md:max-w-full">
                <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="mr-2 text-sm text-neutral-700 focus:outline-none"
                >
                    <option value="sản phẩm">Sản phẩm</option>
                    <option value="công ty">Công ty</option>
                </select>

                <input
                    type="text"
                    placeholder={`Tìm kiếm ${searchType}`}
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    //onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-neutral-800"
                />
                <img src="/header/search.png" className="w-6 aspect-square" alt="Search" />
            </div>

            <div className="flex flex-wrap gap-4 items-center self-stretch my-auto min-w-40 max-md:max-w-full">
                {userName ? (
                    // Logged in
                    <button
                        onClick={() => navigate('/profiles')}
                        className="flex gap-1 items-center whitespace-nowrap"
                    >
                        <img src="/header/user.png" className="w-5 aspect-square" alt="User" />
                        <span className="text-neutral-950">{userName}</span>
                        <img src="/header/arrowdown.png" className="w-3" alt="Menu" />
                    </button>
                ) : (
                    // Chưa login
                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate('/auth/login')}
                            className="px-4 py-2 rounded-[30px] border border-blue-600 bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:text-white transition-colors duration-300"
                        >
                            Đăng nhập
                        </button>
                        <button
                            onClick={() => navigate('/auth/register')}
                            className="px-4 py-2 rounded-[30px] border border-blue-300 bg-white text-blue-500 font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                        >
                            Đăng ký
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
