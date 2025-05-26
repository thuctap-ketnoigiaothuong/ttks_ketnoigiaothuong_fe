import { Outlet } from 'react-router';
//import { TopNavigationBar } from '../components/common/TopNavigationBar';
import { SearchBar } from '../components/common/SearchBar';
import { CategoryNav } from '../components/common/CategoryNav';
import Footer from '../components/common/Footer';

export default function AppLayout() {
    return (
        <div className="w-full mx-auto">
            {/* <TopNavigationBar /> */}
            <SearchBar />
            <CategoryNav />
            <Outlet />
            <Footer />
        </div>
    );
}
