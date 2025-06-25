import HeroSection from "../components/HeroSection";
import PopularTestsSection from "../components/PopularTestsSection";
import FeaturedTestsSection from "../components/FeaturedTestsSection";
import SearchByHealthConcerns from "../components/SearchByHealthConcerns";
import StatsSection from "../components/StatsSection";

const Home = () => {
	return (
		<div>
			<HeroSection />
			<PopularTestsSection />
			<FeaturedTestsSection />
			<SearchByHealthConcerns />
			<StatsSection />
		</div>
	);
};

export default Home;
