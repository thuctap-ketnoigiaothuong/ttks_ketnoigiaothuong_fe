import { useEffect, useState } from 'react';
import ProductCard from '../components/common/ProductCard';
import FilterSection from '../components/common/FilterSection';

interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice: number;
    brand: string;
    partNo: string;
    image: string;
    parameters: string[];
    bulbType?: string;
    wattage?: number;
    lumens?: number;
    maxBulbPower?: number;
    beamHeight?: number;
    beamWidth?: number;
    material?: string;
    inStock: boolean;
    delivery?: string;
    category: string;
    rating: number;
    discount: number;
    company: string;
  }
  
interface Subcategory {
    id: number;
    name: string;
    count: number;
  }  

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [resultsCount, setResultsCount] = useState(0);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const subcategories: Subcategory[] = [
    { id: 1, name: 'Subcategory 1', count: 158 },
    { id: 2, name: 'Subcategory 2', count: 852 },
    { id: 3, name: 'Subcategory 3', count: 1523 },
    { id: 4, name: 'Subcategory 4', count: 24 },
    { id: 5, name: 'Subcategory 5', count: 12956 }
  ];

  const filters = {
    group1: [
      { id: 1, name: 'Filter 1', count: 45 },
      { id: 2, name: 'Filter 2', count: 28 },
      { id: 3, name: 'Filter 3', count: 36 },
      { id: 4, name: 'Filter 4', count: 52 },
      { id: 5, name: 'Filter 5', count: 17 },
      { id: 6, name: 'Filter 6', count: 21 },
      { id: 7, name: 'Filter 7', count: 43 },
      { id: 8, name: 'Filter 8', count: 62 }
    ],
    group2: [
      { id: 1, name: 'Filter 1', count: 45 },
      { id: 2, name: 'Filter 2', count: 28 }
    ]
  };

  const colorFilters = [
    'red', 'brown', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const mockProducts: Product[] = [
        {
          id: 10000,
          name: 'AMBER DECOR Small Lamp 60W, E27 S90',
          price: 45.0,
          oldPrice: 60.0,
          brand: 'AMBER DECOR',
          partNo: '224456',
          image: 'https://via.placeholder.com/150/FFD700/000000?text=Lamp',
          bulbType: 'E27',
          maxBulbPower: 60,
          inStock: true,
          category: 'Lighting',
          rating: 4.5,
          discount: 20,
          company: 'Amber Lighting Co.',
          parameters: ['Bulb type: E27', 'Max power: 60W']
        },
        {
          id: 2,
          name: 'EGLO Philips GU10 3 pcs.',
          price: 45.0,
          oldPrice: 60.0,
          brand: 'EGLO',
          partNo: '335661',
          image: 'https://via.placeholder.com/150/FFFFFF/000000?text=Philips',
          inStock: true,
          category: 'Lighting',
          rating: 4.8,
          discount: 25,
          company: 'EGLO Group',
          parameters: ['Set of 3', 'Standard GU10']
        },
        {
          id: 3,
          name: 'LED Dual G9 bulb 3 pcs.',
          price: 45.0,
          oldPrice: 65.0,
          brand: 'LED',
          partNo: '349925',
          image: 'https://via.placeholder.com/150/FFFFFF/000000?text=LED',
          lumens: 450,
          inStock: true,
          category: 'Lighting',
          rating: 4.2,
          discount: 30,
          company: 'LED Tech Co.',
          parameters: ['Luminous flux: 450lm', 'Pack of 3']
        },
        {
          id: 4,
          name: 'LED Dual A60 bulb transparent warm color',
          price: 45.0,
          oldPrice: 60.0,
          brand: 'LED',
          partNo: '320456',
          image: 'https://via.placeholder.com/150/FFFAF0/000000?text=A60',
          bulbType: 'E27',
          wattage: 9,
          inStock: true,
          category: 'Lighting',
          rating: 4.6,
          discount: 25,
          company: 'LED Tech Co.',
          parameters: ['Wattage: 9W', 'Warm color']
        },
        {
          id: 5,
          name: 'LED Dual R80 bulb milky warm color 2 pcs.',
          price: 45.0,
          oldPrice: 60.0,
          brand: 'LED',
          partNo: '223995',
          image: 'https://via.placeholder.com/150/FFFFFF/000000?text=R80',
          bulbType: 'E27',
          wattage: 10,
          inStock: true,
          category: 'Lighting',
          rating: 4.3,
          discount: 25,
          company: 'LED Tech Co.',
          parameters: ['Wattage: 10W', 'Pack of 2']
        },
        {
          id: 6,
          name: 'LED Dual B35 bulb DIM transparent neutral color',
          price: 45.0,
          oldPrice: 60.0,
          brand: 'LED',
          partNo: '226655',
          image: 'https://via.placeholder.com/150/FFFAF0/000000?text=B35',
          bulbType: 'E14',
          wattage: 4,
          inStock: true,
          category: 'Lighting',
          rating: 4.7,
          discount: 25,
          company: 'LED Tech Co.',
          parameters: ['Dimmable', 'Wattage: 4W']
        },
        {
          id: 7,
          name: 'Ladystena P45 LED, milky, warm color',
          price: 45.0,
          oldPrice: 60.0,
          brand: 'Ladystena',
          partNo: '319545',
          image: 'https://via.placeholder.com/150/FFFAF0/000000?text=P45',
          bulbType: 'E14',
          wattage: 5,
          inStock: true,
          category: 'Lighting',
          rating: 4.4,
          discount: 25,
          company: 'Ladystena Ltd.',
          parameters: ['Warm light', 'Milky finish']
        },
        {
          id: 8,
          name: 'LED Dial A60 bulb neutral milky color',
          price: 45.0,
          oldPrice: 60.0,
          brand: 'LED',
          partNo: '311488',
          image: 'https://via.placeholder.com/150/FFFFFF/000000?text=A60',
          bulbType: 'E27',
          wattage: 7,
          inStock: true,
          category: 'Lighting',
          rating: 4.1,
          discount: 25,
          company: 'LED Dial Inc.',
          parameters: ['Neutral color', 'Wattage: 7W']
        },
        {
          id: 9,
          name: 'Faucet kit basin + handle OmoKee round',
          price: 45.0,
          oldPrice: 60.0,
          brand: 'OmoKee',
          partNo: '765431',
          image: 'https://via.placeholder.com/150/C0C0C0/000000?text=Faucet',
          material: 'aluminum',
          inStock: true,
          category: 'Bathroom',
          rating: 4.9,
          discount: 25,
          company: 'OmoKee Home',
          parameters: ['Material: aluminum', 'Includes handle']
        },
        {
          id: 10,
          name: 'Countertop washbasin GoodHome Tekapo',
          price: 55.0,
          oldPrice: 65.0,
          brand: 'GoodHome',
          partNo: '433879',
          image: 'https://via.placeholder.com/150/FFFFFF/000000?text=Basin',
          beamWidth: 35,
          beamHeight: 12,
          inStock: true,
          category: 'Bathroom',
          rating: 4.8,
          discount: 15,
          company: 'GoodHome Bathroom',
          parameters: ['Width: 35cm', 'Height: 12cm']
        },
        {
          id: 11,
          name: 'Waterproof Silicone tape 25 x 2 mm',
          price: 55.0,
          oldPrice: 65.0,
          brand: 'Silicone',
          partNo: '556789',
          image: 'https://via.placeholder.com/150/87CEFA/000000?text=Tape',
          beamWidth: 2,
          beamHeight: 25,
          inStock: true,
          category: 'Hardware',
          rating: 4.3,
          discount: 15,
          company: 'Silicone Solutions',
          parameters: ['Size: 25x2 mm', 'Waterproof']
        },
        {
          id: 12,
          name: 'AMBER DECOR Bulb 60W, E27 S90',
          price: 55.0,
          oldPrice: 65.0,
          brand: 'AMBER DECOR',
          partNo: '224457',
          image: 'https://via.placeholder.com/150/FFD700/000000?text=Bulb',
          bulbType: 'E27',
          beamHeight: 12,
          inStock: false,
          delivery: 'Est. delivery date: 01.12.2022',
          category: 'Lighting',
          rating: 4.7,
          discount: 15,
          company: 'Amber Lighting Co.',
          parameters: ['Bulb type: E27', 'Beam height: 12cm']
        }
      ];      
      
      setProducts(mockProducts);
      setResultsCount(mockProducts.length);
      setLoading(false);
    }, 500);
  }, []);

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const recommendedProducts = products
    .filter((p) => p.rating >= 4.5 && p.inStock)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6">
        {/* Main content with sidebar and right section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/4">
            <FilterSection 
              subcategories={subcategories}
              filters={filters}
              colorFilters={colorFilters}
            />
          </div>
  
          {/* Right Content Section */}
          <div className="w-full md:w-3/4">
            {/* Title Section */}
            <div className="mb-6">
              <h1 className="text-2xl font-medium mb-2">Title of listing page</h1>
              <p className="text-gray-600">
                Single row angular contact bearings are capable of taking radial loads, axial loads in one direction...
              </p>
              <button className="text-blue-600 text-sm mt-1">Show more</button>
            </div>
  
            {/* Banner */}
            <div className="bg-blue-600 text-white p-6 rounded-md flex justify-between items-center mb-6">
              <h2 className="text-2xl font-medium">-20% on power tools</h2>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-md">Check offer</button>
            </div>
  
            {/* Product Grid Header */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              {/* View toggle */}
              <div className="flex items-center">
                <button
                  onClick={() => setView('grid')}
                  className={`p-2 rounded-l-md border ${view === 'grid' ? 'bg-blue-100 text-blue-600 border-blue-600' : 'bg-gray-100 border-gray-300'}`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-2 rounded-r-md border ${view === 'list' ? 'bg-blue-100 text-blue-600 border-blue-600' : 'bg-gray-100 border-gray-300'}`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
                <span className="ml-4 text-sm font-medium">{resultsCount} items found</span>
              </div>
  
              {/* Sorting */}
              <div className="flex items-center space-x-2">
                <label className="text-sm">Sort:</label>
                <select className="border border-gray-300 rounded-md p-1 text-sm">
                  <option>Popular items</option>
                  <option>Price low to high</option>
                  <option>Price high to low</option>
                  <option>Newest first</option>
                </select>
              </div>
  
              {/* Items per page */}
              <div className="flex items-center space-x-2">
                {[9, 27, 72].map(num => (
                  <button
                    key={num}
                    onClick={() => {
                      setItemsPerPage(num);
                      setCurrentPage(1);
                    }}
                    className={`w-8 h-8 flex items-center justify-center border rounded-md ${
                      itemsPerPage === num ? 'border-blue-600 text-blue-600' : 'border-gray-300'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
  
            {/* Products Grid */}
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <svg className="animate-spin h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              </div>
            ) : (
              <>
                <div className={`grid ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6 mb-8`}>
                  {paginatedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
  
                {/* Pagination */}
                <div className="flex justify-center mt-8 space-x-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-200 transition"
                    aria-label="Previous Page"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {[...Array(Math.ceil(products.length / itemsPerPage)).keys()].map(page => {
                    const pageNum = page + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-1 border rounded transition ${
                          currentPage === pageNum
                            ? 'bg-blue-600 text-white'
                            : 'hover:bg-gray-200'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-200 transition"
                    aria-label="Next Page"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
  
      {/* Recommended Products */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-6">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
