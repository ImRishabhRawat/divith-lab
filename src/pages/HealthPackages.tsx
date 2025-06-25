import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaArrowLeft,
	FaFilter,
	FaSearch,
	FaHeart,
	FaUser,
	FaUserMd,
	FaBaby,
	FaShoppingCart,
	FaEye,
	FaTimes,
} from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import { useCompare } from "../contexts/CompareContext";

const HealthPackages = () => {
	const { addToCart, isInCart, cartCount, totalAmount } = useCart();
	const {
		addToCompare,
		isInCompare,
		compareCount,
		compareItems,
		removeFromCompare,
	} = useCompare();
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [priceRange, setPriceRange] = useState("All");

	const categories = [
		"All",
		"Full Body Check-up",
		"Women Health",
		"Men Health",
		"Senior Citizen",
		"Child Health",
		"Corporate Packages",
		"Preventive Care",
	];

	const priceRanges = [
		"All",
		"Under ₹200",
		"₹200 - ₹500",
		"₹500 - ₹1000",
		"Above ₹1000",
	];

	const healthPackages = [
		{
			id: 1,
			name: "Complete Health Checkup Premium",
			price: 650.0,
			originalPrice: 900.0,
			discount: "28% Off",
			tests: 85,
			category: "Full Body Check-up",
			icon: <FaHeart className="text-4xl text-red-500" />,
			features: [
				"Complete Blood Count",
				"Lipid Profile",
				"Liver Function Test",
				"Kidney Function Test",
				"Thyroid Profile",
				"Vitamin D & B12",
				"ECG & X-Ray Chest",
			],
			popular: true,
			ageGroup: "18-65 years",
			fasting: "12 hours required",
		},
		{
			id: 2,
			name: "Women's Comprehensive Health Package",
			price: 480.0,
			originalPrice: 650.0,
			discount: "26% Off",
			tests: 42,
			category: "Women Health",
			icon: <FaUser className="text-4xl text-pink-500" />,
			features: [
				"Gynecological Consultation",
				"Breast Cancer Screening",
				"Cervical Cancer Screening",
				"Hormone Profile",
				"Iron Studies",
				"Thyroid Function",
				"Bone Health Assessment",
			],
			popular: true,
			ageGroup: "21-65 years",
			fasting: "10 hours required",
		},
		{
			id: 3,
			name: "Men's Executive Health Package",
			price: 520.0,
			originalPrice: 720.0,
			discount: "28% Off",
			tests: 38,
			category: "Men Health",
			icon: <FaUserMd className="text-4xl text-blue-600" />,
			features: [
				"Prostate Specific Antigen",
				"Testosterone Levels",
				"Cardiac Risk Assessment",
				"Liver Function",
				"Kidney Function",
				"Diabetes Screening",
				"Stress Test",
			],
			popular: false,
			ageGroup: "25-65 years",
			fasting: "12 hours required",
		},
		{
			id: 4,
			name: "Senior Citizen Health Package",
			price: 580.0,
			originalPrice: 850.0,
			discount: "32% Off",
			tests: 55,
			category: "Senior Citizen",
			icon: <FaUserMd className="text-4xl text-gray-600" />,
			features: [
				"Comprehensive Geriatric Assessment",
				"Bone Density Test",
				"Vision & Hearing Test",
				"Memory Assessment",
				"Heart Function",
				"Arthritis Markers",
				"Nutritional Assessment",
			],
			popular: false,
			ageGroup: "60+ years",
			fasting: "8 hours required",
		},
		{
			id: 5,
			name: "Child Health & Growth Package",
			price: 180.0,
			originalPrice: 250.0,
			discount: "28% Off",
			tests: 25,
			category: "Child Health",
			icon: <FaBaby className="text-4xl text-green-500" />,
			features: [
				"Growth Assessment",
				"Nutritional Analysis",
				"Immunity Check",
				"Allergy Panel",
				"Development Milestones",
				"Vision & Hearing",
				"Vaccination Status",
			],
			popular: false,
			ageGroup: "2-17 years",
			fasting: "Not required",
		},
		{
			id: 6,
			name: "Corporate Executive Package",
			price: 420.0,
			originalPrice: 600.0,
			discount: "30% Off",
			tests: 48,
			category: "Corporate Packages",
			icon: <FaUserMd className="text-4xl text-indigo-600" />,
			features: [
				"Executive Physical Exam",
				"Stress Assessment",
				"Eye Strain Analysis",
				"Ergonomic Assessment",
				"Mental Health Screening",
				"Fitness Evaluation",
				"Occupational Health",
			],
			popular: true,
			ageGroup: "25-55 years",
			fasting: "6 hours required",
		},
	];

	const filteredPackages = healthPackages.filter((pkg) => {
		const matchesSearch = pkg.name
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const matchesCategory =
			selectedCategory === "All" || pkg.category === selectedCategory;

		let matchesPrice = true;
		if (priceRange !== "All") {
			switch (priceRange) {
				case "Under ₹200":
					matchesPrice = pkg.price < 200;
					break;
				case "₹200 - ₹500":
					matchesPrice = pkg.price >= 200 && pkg.price <= 500;
					break;
				case "₹500 - ₹1000":
					matchesPrice = pkg.price >= 500 && pkg.price <= 1000;
					break;
				case "Above ₹1000":
					matchesPrice = pkg.price > 1000;
					break;
			}
		}

		return matchesSearch && matchesCategory && matchesPrice;
	});

	const handleAddToCart = (pkg: any) => {
		const cartItem = {
			id: pkg.id,
			name: pkg.name,
			parameters: `${pkg.tests} Parameter(s) Covered`,
			price: pkg.price,
			originalPrice: pkg.originalPrice,
			homeCollection: true,
			labVisit: true,
			category: pkg.category,
			description: `Comprehensive ${pkg.category.toLowerCase()} package`,
			preparationTime: pkg.fasting,
			reportTime: "Same day",
			type: "package" as const,
		};
		addToCart(cartItem);
	};

	const handleAddToCompare = (pkg: any) => {
		const compareItem = {
			id: pkg.id,
			name: pkg.name,
			parameters: `${pkg.tests} Parameter(s) Covered`,
			price: pkg.price,
			originalPrice: pkg.originalPrice,
			homeCollection: true,
			labVisit: true,
			category: pkg.category,
			description: `Comprehensive ${pkg.category.toLowerCase()} package`,
			preparationTime: pkg.fasting,
			reportTime: "Same day",
			type: "package" as const,
		};
		addToCompare(compareItem);
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 py-8">
				{/* Header */}
				<div className="mb-8">
					<div className="flex items-center gap-4 mb-4">
						<Link
							to="/"
							className="text-blue-600 hover:text-blue-800 transition-colors">
							<FaArrowLeft />
						</Link>
						<h1 className="text-3xl font-bold text-gray-900">
							Health Packages
						</h1>
					</div>
					<p className="text-gray-600">
						Comprehensive health packages designed for different age groups and
						health needs.
					</p>
				</div>

				{/* Filters */}
				<div className="bg-white rounded-lg shadow-sm p-6 mb-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{/* Search */}
						<div className="relative">
							<input
								type="text"
								placeholder="Search packages..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<FaSearch className="absolute left-3 top-3 text-gray-400" />
						</div>

						{/* Category Filter */}
						<div className="relative">
							<select
								value={selectedCategory}
								onChange={(e) => setSelectedCategory(e.target.value)}
								className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
								{categories.map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</select>
							<FaFilter className="absolute left-3 top-3 text-gray-400" />
						</div>

						{/* Price Filter */}
						<div>
							<select
								value={priceRange}
								onChange={(e) => setPriceRange(e.target.value)}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
								{priceRanges.map((range) => (
									<option key={range} value={range}>
										{range}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				{/* Results Count */}
				<div className="mb-6">
					<p className="text-gray-600">
						Showing {filteredPackages.length} of {healthPackages.length}{" "}
						packages
					</p>
				</div>

				{/* Packages Grid */}
				<div className="grid lg:grid-cols-2 gap-8">
					{filteredPackages.map((pkg) => (
						<div
							key={pkg.id}
							className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative border border-transparent hover:border-blue-500 hover:bg-blue-50 hover:scale-102 transform cursor-pointer overflow-hidden">
							{/* Header with Icon and Discount */}
							<div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
								{/* Discount Badge */}
								<div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
									{pkg.discount}
								</div>

								{/* Popular Badge */}
								{pkg.popular && (
									<div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
										Popular
									</div>
								)}

								<div className="flex items-center gap-4 mt-8">
									<div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
										{pkg.icon}
									</div>
									<div>
										<h3 className="text-xl font-bold">{pkg.name}</h3>
										<p className="text-blue-100">Suitable for {pkg.ageGroup}</p>
									</div>
								</div>
							</div>

							{/* Package Details */}
							<div className="p-6">
								{/* Quick Info */}
								<div className="grid grid-cols-3 gap-4 mb-6 text-center">
									<div>
										<div className="text-2xl font-bold text-blue-600">
											{pkg.tests}
										</div>
										<div className="text-sm text-gray-600">Tests</div>
									</div>
									<div>
										<div className="text-lg font-semibold text-gray-800">
											{pkg.fasting}
										</div>
										<div className="text-sm text-gray-600">Fasting</div>
									</div>
									<div>
										<div className="text-lg font-semibold text-green-600">
											Same Day
										</div>
										<div className="text-sm text-gray-600">Report</div>
									</div>
								</div>

								{/* Features */}
								<div className="mb-6">
									<h4 className="font-semibold text-gray-900 mb-3">
										Package Includes:
									</h4>
									<div className="grid grid-cols-1 gap-2">
										{pkg.features.slice(0, 4).map((feature, index) => (
											<div key={index} className="flex items-center gap-2">
												<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
												<span className="text-sm text-gray-700">{feature}</span>
											</div>
										))}
										{pkg.features.length > 4 && (
											<div className="text-sm text-blue-600">
												+{pkg.features.length - 4} more tests
											</div>
										)}
									</div>
								</div>

								{/* Pricing */}
								<div className="flex items-center justify-between mb-6">
									<div>
										<div className="flex items-center gap-2">
											<span className="text-sm text-gray-500 line-through">
												₹{pkg.originalPrice.toFixed(2)}
											</span>
											<span className="text-3xl font-bold text-blue-600">
												₹{pkg.price.toFixed(2)}
											</span>
										</div>
										<div className="text-sm text-gray-600">All inclusive</div>
									</div>
								</div>

								{/* Action Buttons */}
								<div className="space-y-3">
									<button
										onClick={() => handleAddToCart(pkg)}
										disabled={isInCart(pkg.id)}
										className={`w-full py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${
											isInCart(pkg.id)
												? "bg-gray-100 text-gray-500 cursor-not-allowed"
												: "bg-blue-600 text-white hover:bg-blue-700"
										}`}>
										<FaShoppingCart className="text-sm" />
										{isInCart(pkg.id) ? "Added to Cart" : "Add to Cart"}
									</button>
									<div className="flex gap-2">
										<button
											onClick={() => handleAddToCompare(pkg)}
											disabled={compareCount >= 3 || isInCompare(pkg.id)}
											className={`flex-1 py-2 px-3 border rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
												isInCompare(pkg.id)
													? "border-green-500 bg-green-50 text-green-700"
													: "border-gray-300 text-gray-700 hover:bg-gray-50"
											}`}>
											{isInCompare(pkg.id) ? "Added" : "Compare"}
										</button>
										<Link
											to={`/package/${pkg.id}`}
											className="flex-1 py-2 px-3 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors text-center">
											View Details
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* No Results */}
				{filteredPackages.length === 0 && (
					<div className="text-center py-12">
						<p className="text-gray-500 text-lg">
							No packages found matching your criteria.
						</p>
						<button
							onClick={() => {
								setSearchQuery("");
								setSelectedCategory("All");
								setPriceRange("All");
							}}
							className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
							Clear Filters
						</button>
					</div>
				)}

				{/* Benefits Section */}
				<div className="mt-12 bg-white rounded-lg shadow-sm p-8">
					<h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
						Why Choose Our Health Packages?
					</h3>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<FaHeart className="text-2xl text-blue-600" />
							</div>
							<h4 className="font-semibold text-gray-900 mb-2">
								Comprehensive Care
							</h4>
							<p className="text-sm text-gray-600">
								All essential tests bundled together for complete health
								assessment
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<FaUserMd className="text-2xl text-green-600" />
							</div>
							<h4 className="font-semibold text-gray-900 mb-2">
								Expert Consultation
							</h4>
							<p className="text-sm text-gray-600">
								Free consultation with specialist doctors included
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<FaFilter className="text-2xl text-yellow-600" />
							</div>
							<h4 className="font-semibold text-gray-900 mb-2">Best Value</h4>
							<p className="text-sm text-gray-600">
								Significant savings compared to individual test bookings
							</p>
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
									<span className="font-medium">
										Compare ({compareCount}/3)
									</span>
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
		</div>
	);
};

export default HealthPackages;
