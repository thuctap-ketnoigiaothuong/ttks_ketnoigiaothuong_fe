import { useState } from 'react';
//import { useNavigate } from "react-router";

export function SearchBar() {
    const [keyword, setKeyword] = useState('');
    const [searchType, setSearchType] = useState('product');
    //const navigate = useNavigate();

    // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //   if (e.key === "Enter" && keyword.trim() !== "") {
    //     navigate(`/${searchType}s?search=${encodeURIComponent(keyword)}`);
    //   }
    // };

    // const handleQuickOrderClick = () => {
    //   navigate("/quick-order");
    // };

    return (
        <section className="flex flex-wrap gap-10 justify-between items-center px-4 py-4 w-full bg-white min-h-20 max-md:px-5 max-md:max-w-full">
            <div className="font-bold text-2xl text-blue-600">Kết Nối Giao Thương</div>

            <div className="flex flex-wrap gap-2 items-center self-stretch px-4 py-3 my-auto text-sm leading-6 bg-white rounded-lg border border-solid border-[color:var(--Light-Colors-Platinum,#EAECEE)] min-w-60 text-zinc-500 w-[543px] max-md:max-w-full">
                <img src="/header/search.png" className="w-6 aspect-square" alt="Search" />

                <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="bg-transparent border-r border-gray-300 pr-2 mr-2 text-sm text-neutral-700 focus:outline-none"
                >
                    <option value="product">Product</option>
                    <option value="company">Company</option>
                </select>

                <input
                    type="text"
                    placeholder={`Search by ${searchType}`}
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    //onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-neutral-800"
                />
            </div>

            <button
                //onClick={handleQuickOrderClick}
                className="flex gap-2.5 items-center self-stretch px-8 py-4 my-auto text-base font-medium leading-none text-white bg-blue-600 min-h-12 rounded-[30px] max-md:px-5"
            >
                <span className="text-white">Quick Order Form</span>
            </button>
        </section>
    );
}
