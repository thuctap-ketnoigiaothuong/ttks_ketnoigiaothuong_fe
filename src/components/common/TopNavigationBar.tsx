import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import api from "../../lib/axios";
import { API_ENDPOINTS } from "../../lib/apiConfig";

export function TopNavigationBar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get("access_token");

    if (token) {
      const fetchUser = async () => {
        try {
          const res = await api.get(API_ENDPOINTS.me);
          const data = res.data.data;
          setUserName(data.fullName);
        } catch (err) {
          console.error("Error fetching user info:", err);
          setUserName(null);
        }
      };

      fetchUser();
    }
  }, []);

  return (
    <header className="flex flex-wrap gap-10 justify-between items-center px-20 py-2 w-full text-sm leading-6 bg-slate-200 min-h-12 text-neutral-950 max-md:px-5 max-md:max-w-full">
      {/* Left section: Country, Language, Currency */}
      <div className="flex gap-4 items-start self-stretch my-auto min-w-60 max-md:max-w-full">
        <div className="flex gap-1 items-center">
          <span className="self-stretch my-auto text-neutral-950">Country: Vietnam </span>
          <img src="/header/arrowdown.png" className="w-3" alt="Country selector" />
        </div>
        <div className="flex gap-1 items-center">
          <span className="self-stretch my-auto text-neutral-950">Language: Tiếng Việt </span>
          <img src="/header/arrowdown.png" className="w-3" alt="Language selector" />
        </div>
        <div className="flex gap-1 items-center">
          <span className="self-stretch my-auto text-neutral-950">Currency: VND </span>
          <img src="/header/arrowdown.png" className="w-3" alt="Currency selector" />
        </div>
      </div>

      {/* Right section: contact, messages, user */}
      <div className="flex flex-wrap gap-4 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
        <a href="tel:+3215287667" className="flex gap-2 items-center font-semibold text-blue-600">
          <img src="/header/phone.png" className="w-4 aspect-square" alt="Phone" />
          <span>+32 (0) 15 28 76 67</span>
        </a>

        <div className="w-px h-7 bg-zinc-700" />

        <button className="flex gap-1 items-center whitespace-nowrap">
          <img src="/header/message.png" className="w-5" alt="Messages" />
          <span className="text-neutral-950">Messages</span>
        </button>

        <div className="w-px h-7 bg-zinc-700" />

        {userName ? (
          // Logged in
          <div 
            //onClick={() => navigate("/...")} // Đổi lại đường dẫn vào trang dashboard/hồ sơ người dùng
            className="flex gap-1 items-center whitespace-nowrap"
          >
            <img src="/header/user.png" className="w-5 aspect-square" alt="User" />
            <span className="text-neutral-950">{userName}</span>
            <img src="/header/arrowdown.png" className="w-3 aspect-square" alt="Menu" />
          </div>
        ) : (
          // Chưa login
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/auth/login")}
              className="px-4 py-2 rounded-[30px] border border-blue-600 bg-white text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/auth/register")}
              className="px-4 py-2 rounded-[30px] border border-blue-300 bg-white text-blue-500 font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
            >
              Sign up
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
