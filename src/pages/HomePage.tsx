import BrandSlider from '../components/common/BrandSlider';
import { ProductsSection } from '../components/common/ProductsSection';
import AdvertisingBox from '../components/common/AvertisingBox';
import CategoriesSection from '../components/common/CategoriesSection';
import { ArticlesSection } from '../components/common/ArtclesSection';
import DeliverySection from '../components/common/DeliverySection';
import { EventsSection } from '../components/common/EventsSection';

const HomePage = () => {
    return (
        <div className="w-full mx-auto">
            <BrandSlider />
            <ProductsSection />
            <AdvertisingBox title="-20%" description="on power tools" buttonText="Check offer" />
            <CategoriesSection />
            <ArticlesSection />
            <DeliverySection />
            <EventsSection />
        </div>
    );
};

export default HomePage;
