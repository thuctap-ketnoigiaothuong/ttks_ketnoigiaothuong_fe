import { useState } from 'react';

interface FilterOption {
    id: number;
    name: string;
    count: number;
  }
  
interface Subcategory {
    id: number;
    name: string;
    count: number;
  }

const FilterSection = ({
  subcategories,
  filters,
  colorFilters
}: {
  subcategories: Subcategory[];
  filters: { [key: string]: FilterOption[] };
  colorFilters: string[];
}) => {
  
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [range, setRange] = useState<[number, number]>([0, 100]);
  const [showColorFilters, setShowColorFilters] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showRatingFilters, setShowRatingFilters] = useState(false);

  return (
    <div className="w-full md:w-74 px-6 border-1 border-blue-300 rounded-[10px]">
      {/* Subcategory */}
      <div className="my-6">
        <div className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => setShowSubcategories((prev) => !prev)}
        >
          <h2 className="font-medium">Subcategories</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{
              transform: showSubcategories ? 'rotate(0deg)' : 'rotate(180deg)',
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {showSubcategories && (
          <ul className="mt-2">
            {subcategories.map((subcat) => (
              <li key={subcat.id} className="flex items-center justify-between py-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>{subcat.name}</span>
                </label>
                <span className="text-gray-500 text-sm">{subcat.count}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Filters */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => setShowFilters(prev => !prev)}
        >
          <h2 className="font-medium">Filters</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{
              transform: showFilters ? 'rotate(0deg)' : 'rotate(180deg)',
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {showFilters && (
          <>
            <div className="flex justify-between items-center mb-2">
              <span className="text-blue-600 text-sm cursor-pointer">Clear all</span>
            </div>

            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search filter"
                className="w-full border border-gray-300 rounded py-1 px-2 pr-8 text-sm"
              />
              <button className="absolute right-2 top-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {Object.keys(filters).map((filterGroup, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium">Filters group</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <ul>
                  {filters[filterGroup].map((filter) => (
                    <li key={filter.id} className="flex items-center justify-between py-1">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Filter {filter.id}</span>
                      </label>
                      <span className="text-gray-500 text-sm">{filter.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Range */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 cursor-pointer">
          <h3 className="font-medium">Filters group</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div className="flex gap-2 items-center mb-2">
          <input
            type="number"
            value={range[0]}
            onChange={(e) =>
              setRange([Number(e.target.value), range[1]])
            }
            className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            placeholder="From"
          />
          <span className="text-gray-400">–</span>
          <input
            type="number"
            value={range[1]}
            onChange={(e) =>
              setRange([range[0], Number(e.target.value)])
            }
            className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            placeholder="To"
          />
        </div>

        {/* Slider */}
        <div className="relative w-full h-2 bg-gray-300 rounded">
          <input
            type="range"
            min={0}
            max={100}
            value={range[0]}
            onChange={(e) =>
              setRange([Math.min(Number(e.target.value), range[1]), range[1]])
            }
            className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
            style={{ zIndex: 2 }}
          />
          <input
            type="range"
            min={0}
            max={100}
            value={range[1]}
            onChange={(e) =>
              setRange([range[0], Math.max(Number(e.target.value), range[0])])
            }
            className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>

      {/* Colors */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => setShowColorFilters(prev => !prev)}
        >
          <h3 className="font-medium">Colors group</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ transform: showColorFilters ? 'rotate(0deg)' : 'rotate(180deg)' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {showColorFilters && (
          <div className="grid grid-cols-4 gap-2">
            {colorFilters.map((color, idx) => {
              const isSelected = selectedColors.includes(color);

              return (
                <div
                  key={idx}
                  onClick={() =>
                    setSelectedColors((prev) =>
                      isSelected
                        ? prev.filter((c) => c !== color) // bỏ chọn nếu đang được chọn
                        : [...prev, color] // thêm nếu chưa được chọn
                    )
                  }
                  className={`w-6 h-6 rounded-full border-1 transition 
                    ${isSelected ? 'border-blue-600' : 'border-gray-300'} 
                    hover:border-blue-400 cursor-pointer`}
                  style={{ backgroundColor: color }}
                ></div>
              );
            })}
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => setShowRatingFilters(prev => !prev)}
        >
          <h3 className="font-medium">Rating</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ transform: showRatingFilters ? 'rotate(0deg)' : 'rotate(180deg)' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {showRatingFilters && (
          <ul>
            {[5, 4, 3, 2, 1].map((rating) => (
              <li key={rating} className="flex items-center justify-between py-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </label>
                <span className="text-gray-500 text-sm">{rating * 5}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
