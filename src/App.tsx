import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { CompareProvider } from "./contexts/CompareContext";
import {
	Home,
	BookTest,
	Doctors,
	BusinessPartnership,
	About,
	Career,
	Investors,
	Blogs,
	Profile,
	Cart,
	Compare,
	NearestCenter,
	UploadPrescription,
	DownloadReport,
	Subsidiaries,
	Promotions,
	SpecialPrograms,
	Labs,
	Events,
	PopularTests,
	AllPackages,
	AllTests,
	AllConcerns,
	HealthPackages,
	HomeCollection,
	PatientRegister,
} from "./pages";

const App = () => {
	return (
		<CartProvider>
			<CompareProvider>
				<Router>
					<div className="min-h-screen bg-gray-50">
						<Header />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/book-test" element={<BookTest />} />
							<Route path="/doctors" element={<Doctors />} />
							<Route
								path="/business-partnership"
								element={<BusinessPartnership />}
							/>
							<Route path="/about" element={<About />} />
							<Route path="/career" element={<Career />} />
							<Route path="/investors" element={<Investors />} />
							<Route path="/blogs" element={<Blogs />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/compare" element={<Compare />} />

							{/* Service Routes */}
							<Route path="/nearest-center" element={<NearestCenter />} />
							<Route
								path="/upload-prescription"
								element={<UploadPrescription />}
							/>
							<Route path="/download-report" element={<DownloadReport />} />
							<Route path="/subsidiaries" element={<Subsidiaries />} />
							<Route path="/promotions" element={<Promotions />} />
							<Route path="/special-programs" element={<SpecialPrograms />} />
							<Route path="/labs" element={<Labs />} />
							<Route path="/events" element={<Events />} />
							<Route path="/popular-tests" element={<PopularTests />} />

							{/* New Routes */}
							<Route path="/all-packages" element={<AllPackages />} />
							<Route path="/all-tests" element={<AllTests />} />
							<Route path="/all-concerns" element={<AllConcerns />} />
							<Route path="/health-packages" element={<HealthPackages />} />
							<Route path="/home-collection" element={<HomeCollection />} />
							<Route path="/patient-register" element={<PatientRegister />} />
						</Routes>
						<Footer />
					</div>
				</Router>
			</CompareProvider>
		</CartProvider>
	);
};

export default App;
