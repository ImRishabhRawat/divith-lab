import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useCompare } from "../contexts/CompareContext";
import {
	FaHome,
	FaSearch,
	FaShoppingCart,
	FaEye,
	FaMapMarkerAlt,
	FaFilter,
	FaChevronDown,
	FaChevronUp,
	FaTimes,
} from "react-icons/fa";

interface TestItem {
	id: number;
	name: string;
	parameters: string;
	price: number;
	originalPrice?: number | null;
	homeCollection: boolean;
	labVisit: boolean;
	category: string;
	description: string;
	preparationTime: string;
	reportTime: string;
}

const BookTest = () => {
	const { addToCart, isInCart, cartItems, cartCount, totalAmount } = useCart();
	const {
		addToCompare,
		removeFromCompare,
		isInCompare,
		compareItems,
		compareCount,
	} = useCompare();
	const [searchParams, setSearchParams] = useSearchParams();

	const [activeTab, setActiveTab] = useState("All Tests");
	const [selectedLocation, setSelectedLocation] = useState("Delhi");
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [showMobileFilters, setShowMobileFilters] = useState(false);
	const [showLocationDropdown, setShowLocationDropdown] = useState(false);

	const locations = [
		"Delhi",
		"Mumbai",
		"Bangalore",
		"Chennai",
		"Hyderabad",
		"Pune",
		"Kolkata",
		"Ahmedabad",
	];

	// Update location from URL params
	useEffect(() => {
		const locationParam = searchParams.get("location");
		if (locationParam) {
			setSelectedLocation(
				locationParam.charAt(0).toUpperCase() + locationParam.slice(1)
			);
		}
	}, [searchParams]);

	const categories = [
		{ name: "ABO Incompatibility", count: 12 },
		{ name: "Acid Base Imbalance", count: 8 },
		{ name: "Acute Phase Reactant", count: 15 },
		{ name: "Adrenal gland function", count: 6 },
		{ name: "AIDS", count: 10 },
		{ name: "Allergy", count: 25 },
		{ name: "Alzheimer's Disease", count: 4 },
		{ name: "Amyloidosis", count: 3 },
		{ name: "Anemia", count: 18 },
		{ name: "Anemia - Diagnosis", count: 12 },
		{ name: "Arthritis", count: 14 },
		{ name: "Autoimmune Disorders", count: 22 },
		{ name: "Blood Banking", count: 16 },
		{ name: "Cancer Screening", count: 28 },
		{ name: "Cardiac Markers", count: 20 },
		{ name: "Diabetes", count: 24 },
		{ name: "Fertility", count: 30 },
		{ name: "Hormone Tests", count: 35 },
		{ name: "Infectious Disease", count: 40 },
		{ name: "Kidney Function", count: 18 },
		{ name: "Liver Function", count: 16 },
		{ name: "Thyroid Function", count: 12 },
		{ name: "Vitamin Profile", count: 20 },
	];

	const testData = [
		{
			id: 1,
			name: "COMPLETE BLOOD COUNT; CBC",
			parameters: "20 Parameter(s) Covered",
			price: 350,
			originalPrice: null,
			homeCollection: true,
			labVisit: true,
			category: "Blood Banking",
			description: "Complete blood count with differential",
			preparationTime: "No fasting required",
			reportTime: "Same day",
		},
		{
			id: 2,
			name: "HbA1c; GLYCOSYLATED HEMOGLOBIN",
			parameters: "2 Parameter(s) Covered",
			price: 440,
			originalPrice: null,
			homeCollection: true,
			labVisit: true,
			category: "Diabetes",
			description: "Diabetes monitoring test",
			preparationTime: "No fasting required",
			reportTime: "Same day",
		},
		{
			id: 3,
			name: "URINE EXAMINATION; ROUTINE; URINE; R/E",
			parameters: "16 Parameter(s) Covered",
			price: 120,
			originalPrice: null,
			homeCollection: true,
			labVisit: true,
			category: "Kidney Function",
			description: "Complete urine analysis",
			preparationTime: "Clean catch sample",
			reportTime: "Same day",
		},
		{
			id: 4,
			name: "GLUCOSE, FASTING (F) AND POST MEAL (PP), 2 SAMPLE",
			parameters: "2 Parameter(s) Covered",
			price: 150,
			originalPrice: null,
			homeCollection: true,
			labVisit: true,
			category: "Diabetes",
			description: "Blood sugar fasting and post meal",
			preparationTime: "12 hours fasting required",
			reportTime: "Same day",
		},
		{
			id: 5,
			name: "THYROID PROFILE, TOTAL",
			parameters: "3 Parameter(s) Covered",
			price: 550,
			originalPrice: null,
			homeCollection: true,
			labVisit: true,
			category: "Thyroid Function",
			description: "Complete thyroid function assessment",
			preparationTime: "No fasting required",
			reportTime: "24 hours",
		},
		{
			id: 6,
			name: "SMART REPORT",
			parameters: "1 Parameter(s) Covered",
			price: 200,
			originalPrice: null,
			homeCollection: true,
			labVisit: true,
			category: "Blood Banking",
			description: "Digital health report with insights",
			preparationTime: "No preparation required",
			reportTime: "Same day",
		},
	];

	const healthPackages = [
		{
			id: 101,
			name: "Complete Health Checkup Premium",
			parameters: "85 Parameter(s) Covered",
			price: 2500,
			originalPrice: 3500,
			homeCollection: true,
			labVisit: true,
			category: "Full Body Checkup",
			description: "Comprehensive health screening package",
			preparationTime: "12 hours fasting required",
			reportTime: "Same day",
		},
		{
			id: 102,
			name: "Women's Health Package",
			parameters: "42 Parameter(s) Covered",
			price: 1800,
			originalPrice: 2400,
			homeCollection: true,
			labVisit: true,
			category: "Women Health",
			description: "Specialized health package for women",
			preparationTime: "10 hours fasting required",
			reportTime: "Same day",
		},
		{
			id: 103,
			name: "Diabetes Care Package",
			parameters: "15 Parameter(s) Covered",
			price: 800,
			originalPrice: 1200,
			homeCollection: true,
			labVisit: true,
			category: "Diabetes",
			description: "Complete diabetes monitoring package",
			preparationTime: "12 hours fasting required",
			reportTime: "Same day",
		},
	];

	const currentData = activeTab === "All Tests" ? testData : healthPackages;

	const filteredData = currentData.filter((item) => {
		const matchesSearch = item.name
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const matchesCategory =
			!selectedCategory || item.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	const handleAddToCart = (item: TestItem) => {
		const cartItem = {
			...item,
			type:
				activeTab === "Health Packages"
					? ("package" as const)
					: ("test" as const),
		};
		addToCart(cartItem);
	};

	const handleAddToCompare = (item: TestItem) => {
		const compareItem = {
			...item,
			type:
				activeTab === "Health Packages"
					? ("package" as const)
					: ("test" as const),
		};
		addToCompare(compareItem);
	};

	// Handle location change and update URL
	const handleLocationChange = (newLocation: string) => {
		setSelectedLocation(newLocation);
		setShowLocationDropdown(false);
		setSearchParams({ location: newLocation.toLowerCase() });
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Breadcrumb */}
			<div className="bg-white border-b shadow-sm">
				<div className="max-w-7xl mx-auto px-4 py-4">
					<nav className="flex items-center space-x-2 text-sm">
						<Link
							to="/"
							className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
							<FaHome className="text-xs" />
							Home
						</Link>
						<span className="text-gray-400">/</span>
						<Link
							to="/book-test"
							className="text-blue-600 hover:text-blue-800 font-medium">
							Book-a-test
						</Link>
						<span className="text-gray-400">/</span>
						<span className="text-gray-900 font-semibold flex items-center gap-1">
							<FaMapMarkerAlt className="text-blue-600 text-xs" />
							{selectedLocation}
						</span>
					</nav>
				</div>
			</div>

			{/* Results Summary & Toggle */}
			<div className="bg-white border-b shadow-sm">
				<div className="max-w-7xl mx-auto px-4 py-6">
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
						{/* Results Count */}
						<div className="text-gray-600 flex items-center gap-2">
							<FaSearch className="text-blue-600" />
							<span className="font-medium">
								Showing 1 - 50 of {filteredData.length} results in{" "}
								{selectedLocation}
							</span>
						</div>

						{/* Toggle Switches */}
						<div className="flex items-center gap-8 bg-gray-50 p-4 rounded-lg border">
							<div className="flex items-center gap-3">
								<span
									className={`text-sm font-semibold ${
										activeTab === "All Tests"
											? "text-blue-600"
											: "text-gray-700"
									}`}>
									All Tests
								</span>
								<label className="relative inline-flex items-center cursor-pointer">
									<input
										type="checkbox"
										checked={activeTab === "All Tests"}
										onChange={() =>
											setActiveTab(
												activeTab === "All Tests"
													? "Health Packages"
													: "All Tests"
											)
										}
										className="sr-only peer"
									/>
									<div className="w-12 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 shadow-sm"></div>
								</label>
							</div>

							<div className="flex items-center gap-3">
								<span
									className={`text-sm font-semibold ${
										activeTab === "Health Packages"
											? "text-blue-600"
											: "text-gray-700"
									}`}>
									Health Packages
								</span>
								<label className="relative inline-flex items-center cursor-pointer">
									<input
										type="checkbox"
										checked={activeTab === "Health Packages"}
										onChange={() =>
											setActiveTab(
												activeTab === "Health Packages"
													? "All Tests"
													: "Health Packages"
											)
										}
										className="sr-only peer"
									/>
									<div className="w-12 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 shadow-sm"></div>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 py-6">
				<div className="grid lg:grid-cols-4 gap-6">
					{/* Sidebar - Categories */}
					<div className="lg:col-span-1">
						<div className="bg-white rounded-lg shadow-md border border-gray-200">
							{/* Mobile Filter Toggle */}
							<div className="lg:hidden p-4 border-b border-gray-200">
								<button
									onClick={() => setShowMobileFilters(!showMobileFilters)}
									className="flex items-center justify-between w-full text-left">
									<span className="font-bold text-lg text-gray-900">
										Show all categories
									</span>
									{showMobileFilters ? (
										<FaChevronUp className="text-blue-600" />
									) : (
										<FaChevronDown className="text-blue-600" />
									)}
								</button>
							</div>

							{/* Categories List */}
							<div
								className={`${
									showMobileFilters ? "block" : "hidden"
								} lg:block`}>
								<div className="hidden lg:block p-4 border-b border-gray-200 bg-gray-50">
									<h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
										<FaFilter className="text-blue-600" />
										Show all categories
									</h3>
									<p className="text-sm text-gray-600 mt-1">
										Filter by medical categories
									</p>
								</div>

								<div className="max-h-96 overflow-y-auto">
									{categories.map((category, index) => (
										<button
											key={category.name}
											onClick={() =>
												setSelectedCategory(
													selectedCategory === category.name
														? ""
														: category.name
												)
											}
											className={`w-full text-left px-4 py-3 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-all duration-200 ${
												selectedCategory === category.name
													? "bg-blue-50 text-blue-700 border-l-4 border-l-blue-600"
													: "text-gray-700 hover:text-blue-600"
											}`}>
											<div className="flex justify-between items-center">
												<span
													className={`text-sm font-medium ${
														selectedCategory === category.name
															? "font-semibold"
															: ""
													}`}>
													{category.name}
												</span>
												<span
													className={`text-xs px-2 py-1 rounded-full ${
														selectedCategory === category.name
															? "bg-blue-600 text-white"
															: "bg-gray-100 text-gray-600"
													}`}>
													{category.count}
												</span>
											</div>
										</button>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Main Content Area */}
					<div className="lg:col-span-3">
						{/* Page Title */}
						<div className="mb-6 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
							<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
								<div>
									<h1 className="text-3xl font-bold text-gray-900 mb-2">
										Lab Test at Home in {selectedLocation}
									</h1>
									<p className="text-gray-600 flex items-center gap-2">
										<FaMapMarkerAlt className="text-blue-600" />
										Book diagnostic tests with home collection service in{" "}
										{selectedLocation}
									</p>
								</div>

								{/* Location Selector */}
								<div className="relative">
									<button
										onClick={() =>
											setShowLocationDropdown(!showLocationDropdown)
										}
										className="flex items-center gap-2 bg-white text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-300 shadow-sm">
										<FaMapMarkerAlt className="text-blue-600" />
										<span>Change Location</span>
										{showLocationDropdown ? <FaChevronUp /> : <FaChevronDown />}
									</button>

									{showLocationDropdown && (
										<div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-48 z-20">
											{locations.map((location) => (
												<button
													key={location}
													onClick={() => handleLocationChange(location)}
													className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
														selectedLocation === location
															? "bg-blue-50 text-blue-600 font-medium"
															: "text-gray-700"
													}`}>
													{location}
												</button>
											))}
										</div>
									)}
								</div>
							</div>
						</div>

						{/* Search Bar */}
						<div className="mb-6">
							<div className="relative">
								<input
									type="text"
									placeholder="Search for tests, packages, or health concerns..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg shadow-sm"
								/>
								<FaSearch className="absolute left-4 top-5 text-gray-400 text-lg" />
								{searchQuery && (
									<button
										onClick={() => setSearchQuery("")}
										className="absolute right-4 top-5 text-gray-400 hover:text-gray-600">
										<FaTimes />
									</button>
								)}
							</div>
						</div>

						{/* Test/Package Listings */}
						<div className="grid gap-6">
							{filteredData.map((item) => (
								<div
									key={item.id}
									className="bg-white rounded-lg border-2 border-gray-200 shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-300">
									<div className="p-6">
										<div className="grid lg:grid-cols-3 gap-6">
											{/* Test Details */}
											<div className="lg:col-span-2">
												<h3 className="text-lg font-semibold text-gray-900 mb-2">
													{item.name}
												</h3>
												<p className="text-sm text-gray-600 mb-3">
													{item.parameters}
												</p>
												<p className="text-sm text-gray-700 mb-4">
													{item.description}
												</p>

												{/* Collection Options */}
												<div className="flex gap-4 mb-4">
													{item.homeCollection && (
														<div className="flex items-center gap-2">
															<div className="w-3 h-3 bg-green-500 rounded-full"></div>
															<span className="text-sm text-green-600">
																Home Collection
															</span>
														</div>
													)}
													{item.labVisit && (
														<div className="flex items-center gap-2">
															<div className="w-3 h-3 bg-green-500 rounded-full"></div>
															<span className="text-sm text-green-600">
																Lab Visit
															</span>
														</div>
													)}
												</div>

												{/* Additional Info */}
												<div className="text-xs text-gray-500 space-y-1">
													<div>Preparation: {item.preparationTime}</div>
													<div>Report: {item.reportTime}</div>
												</div>
											</div>

											{/* Pricing & Actions */}
											<div className="lg:col-span-1 flex flex-col justify-between">
												{/* Price */}
												<div className="mb-4">
													<div className="flex items-center gap-2 mb-2">
														{item.originalPrice && (
															<span className="text-sm text-gray-500 line-through">
																₹ {item.originalPrice}
															</span>
														)}
														<span className="text-2xl font-bold text-gray-900">
															₹ {item.price}
														</span>
													</div>
												</div>

												{/* Action Buttons */}
												<div className="space-y-3">
													<button
														onClick={() => handleAddToCart(item)}
														disabled={isInCart(item.id)}
														className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
															isInCart(item.id)
																? "bg-gray-100 text-gray-500 cursor-not-allowed"
																: "bg-blue-600 text-white hover:bg-blue-700"
														}`}>
														{isInCart(item.id)
															? "Added to Cart"
															: "Add to cart"}
													</button>

													<div className="flex gap-2">
														<button
															onClick={() => handleAddToCompare(item)}
															disabled={
																compareCount >= 3 || isInCompare(item.id)
															}
															className={`flex-1 py-2 px-3 border rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
																isInCompare(item.id)
																	? "border-green-500 bg-green-50 text-green-700"
																	: "border-gray-300 text-gray-700 hover:bg-gray-50"
															}`}>
															{isInCompare(item.id) ? "Added" : "Compare"}
														</button>
														<Link
															to={`/test/${item.id}`}
															className="flex-1 py-2 px-3 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors text-center">
															Know More
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* No Results */}
						{filteredData.length === 0 && (
							<div className="text-center py-12">
								<p className="text-gray-500 text-lg mb-4">
									No {activeTab.toLowerCase()} found matching your criteria.
								</p>
								<button
									onClick={() => {
										setSearchQuery("");
										setSelectedCategory("");
									}}
									className="text-blue-600 hover:text-blue-800 font-medium">
									Clear Filters
								</button>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Floating Cart & Compare */}
			{(cartCount > 0 || compareCount > 0) && (
				<div className="fixed bottom-4 right-4 space-y-2">
					{/* Cart */}
					{cartCount > 0 && (
						<div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">
							<div className="flex items-center justify-between mb-2">
								<span className="font-medium">Cart ({cartCount})</span>
								<Link
									to="/cart"
									className="text-yellow-400 hover:text-yellow-300">
									<FaShoppingCart />
								</Link>
							</div>
							<div className="text-sm">Total: ₹ {totalAmount}</div>
						</div>
					)}

					{/* Compare */}
					{compareCount > 0 && (
						<div className="bg-green-600 text-white p-4 rounded-lg shadow-lg">
							<div className="flex items-center justify-between mb-2">
								<span className="font-medium">Compare ({compareCount}/3)</span>
								<Link
									to="/compare"
									className="text-yellow-400 hover:text-yellow-300">
									<FaEye />
								</Link>
							</div>
							<div className="space-y-1">
								{compareItems.map((item) => (
									<div
										key={item.id}
										className="flex items-center justify-between text-xs">
										<span className="truncate">
											{item.name.substring(0, 20)}...
										</span>
										<button
											onClick={() => removeFromCompare(item.id)}
											className="text-red-300 hover:text-red-200 ml-2">
											<FaTimes />
										</button>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default BookTest;
