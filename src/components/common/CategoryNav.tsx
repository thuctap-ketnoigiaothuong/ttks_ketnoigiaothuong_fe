import { useNavigate, useLocation } from "react-router-dom";

export function CategoryNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="flex flex-wrap gap-5 justify-between px-20 py-4 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center my-auto font-semibold leading-6 text-neutral-950 max-md:max-w-full">
        <button
          onClick={() => navigate("/")}
          className={`text-neutral-950 font-medium px-1 py-2 border-b-2 ${
            isActive("/") ? "border-blue-600" : "border-transparent hover:border-blue-600"
          }`}
        >
          TRANG CHỦ
        </button>
        <button
          //onClick={() => navigate("/about")}
          className={`text-neutral-950 font-medium px-1 py-2 border-b-2 ${
            isActive("/about") ? "border-blue-600" : "border-transparent hover:border-blue-600"
          }`}
        >
          GIỚI THIỆU
        </button>
        <button
          //onClick={() => navigate("/products")}
          className={`text-neutral-950 font-medium px-1 py-2 border-b-2 ${
            isActive("/products") ? "border-blue-600" : "border-transparent hover:border-blue-600"
          }`}
        >
          SẢN PHẨM
        </button>
        <button
          //onClick={() => navigate("/companies")}
          className={`text-neutral-950 font-medium px-1 py-2 border-b-2 ${
            isActive("/companies") ? "border-blue-600" : "border-transparent hover:border-blue-600"
          }`}
        >
          DOANH NGHIỆP
        </button>
      </div>

      <div className="flex gap-9">
        <div
          //onClick={() => navigate("/compare")}
          className="cursor-pointer flex flex-col self-start text-sm font-semibold leading-relaxed text-center text-blue-600 whitespace-nowrap"
        >
          <img
            src="/image/compare.png"
            className="object-contain self-center w-6 rounded-full aspect-[1.17]"
            alt="Compare"
          />
          <span className={`mt-2 ${isActive("/compare") ? "text-blue-800" : "text-blue-600"}`}>COMPARE</span>
        </div>

        <div
          //onClick={() => navigate("/favorites")}
          className="cursor-pointer flex flex-col self-start text-sm font-semibold leading-relaxed text-center text-blue-600 whitespace-nowrap"
        >
          <img
            src="/image/star.png"
            className="object-contain self-center w-6 rounded-full aspect-[1.17]"
            alt="Favorites"
          />
          <span className={`mt-2 ${isActive("/favorites") ? "text-blue-800" : "text-blue-600"}`}>FAVORITES</span>
        </div>

        <div
          //onClick={() => navigate("/cart")}
          className="cursor-pointer flex flex-col self-start text-sm font-semibold leading-relaxed text-center text-blue-600 whitespace-nowrap"
        >
          <img
            src="/image/cart.png"
            className="object-contain self-center w-6 rounded-full aspect-[1.17]"
            alt="Cart"
          />
          <span className={`mt-2 ${isActive("/cart") ? "text-blue-800" : "text-blue-600"}`}>CART</span>
        </div>
      </div>
    </nav>
  );
}
