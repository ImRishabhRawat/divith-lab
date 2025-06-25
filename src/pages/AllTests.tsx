import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaArrowLeft,
	FaFilter,
	FaSearch,
	FaInfoCircle,
	FaClock,
	FaFlask,
	FaShoppingCart,
	FaEye,
	FaTimes,
} from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import { useCompare } from "../contexts/CompareContext";

const AllTests = () => {
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
	const [sortBy, setSortBy] = useState("popularity");

	const categories = [
		"All",
		"Complete Health Check",
		"Diabetes",
		"Heart Health",
		"Liver Function",
		"Kidney Function",
		"Thyroid",
		"Vitamin Profile",
		"Lipid Profile",
		"Blood Tests",
	];

	const allTests = [
		{
			id: 1,
			name: "SWASTHFIT COMPLETE HEALTH CHECK",
			preparation: "No special preparation required",
			sample: "Daily",
			parameters: "83 parameter(s) covered",
			originalPrice: 8960,
			discountedPrice: 5000.0,
			discount: 44,
			category: "Complete Health Check",
			popular: true,
			turnaroundTime: "Same Day",
		},
		{
			id: 2,
			name: "SWASTHFIT SUPER 1",
			preparation: "12 Hour Fasting Mandatory",
			sample: "Sample Daily by 11 AM; Report Same day",
			parameters: "33 parameter(s) covered",
			originalPrice: 2580,
			discountedPrice: 1850.0,
			discount: 28,
			category: "Complete Health Check",
			popular: true,
			turnaroundTime: "Same Day",
		},
		{
			id: 3,
			name: "SWASTHFIT SUPER 2",
			preparation: "12 Hour Fasting Mandatory",
			sample: "Sample Daily by 11 AM; Report Same day",
			parameters: "55 parameter(s) covered",
			originalPrice: 3370,
			discountedPrice: 2350.0,
			discount: 30,
			category: "Complete Health Check",
			popular: true,
			turnaroundTime: "Same Day",
		},
		{
			id: 4,
			name: "Diabetes Panel Complete",
			preparation: "12 Hour Fasting Required",
			sample: "Blood Sample",
			parameters: "8 parameter(s) covered",
			originalPrice: 1200,
			discountedPrice: 850.0,
			discount: 29,
			category: "Diabetes",
			popular: false,
			turnaroundTime: "24 Hours",
		},
		{
			id: 5,
			name: "Cardiac Risk Assessment",
			preparation: "No Fasting Required",
			sample: "Blood Sample",
			parameters: "12 parameter(s) covered",
			originalPrice: 2100,
			discountedPrice: 1450.0,
			discount: 31,
			category: "Heart Health",
			popular: false,
			turnaroundTime: "24 Hours",
		},
		{
			id: 6,
			name: "Liver Function Test Complete",
			preparation: "No Fasting Required",
			sample: "Blood Sample",
			parameters: "10 parameter(s) covered",
			originalPrice: 900,
			discountedPrice: 650.0,
			discount: 28,
			category: "Liver Function",
			popular: false,
			turnaroundTime: "Same Day",
		},
		{
			id: 7,
			name: "Kidney Function Profile",
			preparation: "No special preparation",
			sample: "Blood + Urine Sample",
			parameters: "15 parameter(s) covered",
			originalPrice: 1100,
			discountedPrice: 790.0,
			discount: 28,
			category: "Kidney Function",
			popular: false,
			turnaroundTime: "Same Day",
		},
		{
			id: 8,
			name: "Thyroid Function Test Plus",
			preparation: "No Fasting Required",
			sample: "Blood Sample",
			parameters: "5 parameter(s) covered",
			originalPrice: 800,
			discountedPrice: 550.0,
			discount: 31,
			category: "Thyroid",
			popular: true,
			turnaroundTime: "24 Hours",
		},
		{
			id: 9,
			name: "Vitamin D3 & B12 Combo",
			preparation: "No special preparation",
			sample: "Blood Sample",
			parameters: "2 parameter(s) covered",
			originalPrice: 1500,
			discountedPrice: 950.0,
			discount: 37,
			category: "Vitamin Profile",
			popular: true,
			turnaroundTime: "48 Hours",
		},
		{
			id: 10,
			name: "Lipid Profile Advanced",
			preparation: "12 Hour Fasting Required",
			sample: "Blood Sample",
			parameters: "8 parameter(s) covered",
			originalPrice: 700,
			discountedPrice: 480.0,
			discount: 31,
			category: "Lipid Profile",
			popular: false,
			turnaroundTime: "Same Day",
		},
	];

	const filteredTests = allTests.filter((test) => {
		const matchesSearch = test.name
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const matchesCategory =
			selectedCategory === "All" || test.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	const sortedTests = [...filteredTests].sort((a, b) => {
		switch (sortBy) {
			case "price-low":
				return a.discountedPrice - b.discountedPrice;
			case "price-high":
				return b.discountedPrice - a.discountedPrice;
			case "popularity":
				return Number(b.popular) - Number(a.popular);
			case "discount":
				return b.discount - a.discount;
			default:
				return 0;
		}
	});

	const handleAddToCart = (test: any) => {
		const cartItem = {
			...test,
			name: test.name,
			parameters: test.parameters,
			price: test.discountedPrice,
			originalPrice: test.originalPrice,
			homeCollection: true,
			labVisit: true,
			description: `Diagnostic test for ${test.category.toLowerCase()}`,
			preparationTime: test.preparation,
			reportTime: test.turnaroundTime,
			type: "test" as const,
		};
		addToCart(cartItem);
	};

	const handleAddToCompare = (test: any) => {
		const compareItem = {
			...test,
			name: test.name,
			parameters: test.parameters,
			price: test.discountedPrice,
			originalPrice: test.originalPrice,
			homeCollection: true,
			labVisit: true,
			description: `Diagnostic test for ${test.category.toLowerCase()}`,
			preparationTime: test.preparation,
			reportTime: test.turnaroundTime,
			type: "test" as const,
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
							All Diagnostic Tests
						</h1>
					</div>
					<p className="text-gray-600">
						Browse our complete collection of diagnostic tests and health
						screenings.
					</p>
				</div>

				{/* Filters */}
				<div className="bg-white rounded-lg shadow-sm p-6 mb-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{/* Search */}
						<div className="relative">
							<input
								type="text"
								placeholder="Search tests..."
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

						{/* Sort */}
						<div>
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
								<option value="popularity">Most Popular</option>
								<option value="price-low">Price: Low to High</option>
								<option value="price-high">Price: High to Low</option>
								<option value="discount">Highest Discount</option>
							</select>
						</div>
					</div>
				</div>

				{/* Results Count */}
				<div className="mb-6">
					<p className="text-gray-600">
						Showing {sortedTests.length} of {allTests.length} tests
					</p>
				</div>

				{/* Tests Grid */}
				<div className="grid lg:grid-cols-2 gap-6">
					{sortedTests.map((test) => (
						<div
							key={test.id}
							className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col border border-transparent hover:border-blue-500 hover:bg-blue-50 hover:scale-102 transform cursor-pointer overflow-hidden">
							{/* Discount Badge */}
							<div className="absolute top-4 right-4 z-10">
								<div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-12">
									<div className="text-center">
										<div className="text-lg font-bold text-gray-900">
											{test.discount}%
										</div>
										<div className="text-xs font-medium text-gray-900">OFF</div>
									</div>
								</div>
							</div>

							{/* Popular Badge */}
							{test.popular && (
								<div className="absolute top-4 left-4 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
									Popular
								</div>
							)}

							{/* Test Header */}
							<div className="bg-blue-600 p-4 text-white">
								<h3 className="text-lg font-bold leading-tight pr-20">
									{test.name}
								</h3>
							</div>

							{/* Test Details */}
							<div className="p-6 flex-1">
								{/* Preparation Info */}
								<div className="flex items-start gap-3 mb-4">
									<FaInfoCircle className="text-blue-600 mt-1 flex-shrink-0" />
									<span className="text-sm text-gray-700">
										{test.preparation}
									</span>
								</div>

								{/* Sample Info */}
								<div className="flex items-start gap-3 mb-4">
									<FaClock className="text-blue-600 mt-1 flex-shrink-0" />
									<div className="text-sm text-gray-700">
										<div>{test.sample}</div>
										<div className="text-xs text-gray-500 mt-1">
											Report: {test.turnaroundTime}
										</div>
									</div>
								</div>

								{/* Parameters Info */}
								<div className="flex items-start gap-3 mb-6">
									<FaFlask className="text-blue-600 mt-1 flex-shrink-0" />
									<span className="text-sm text-gray-700">
										{test.parameters}
									</span>
								</div>

								{/* Pricing */}
								<div className="mb-6">
									<div className="flex items-center gap-2 mb-2">
										<span className="text-sm text-gray-500 line-through">
											₹{test.originalPrice}
										</span>
										<span className="text-2xl font-bold text-blue-600">
											₹{test.discountedPrice.toFixed(2)}
										</span>
									</div>
								</div>

								{/* Action Buttons */}
								<div className="space-y-3">
									<button
										onClick={() => handleAddToCart(test)}
										disabled={isInCart(test.id)}
										className={`w-full py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${
											isInCart(test.id)
												? "bg-gray-100 text-gray-500 cursor-not-allowed"
												: "bg-blue-600 text-white hover:bg-blue-700"
										}`}>
										<FaShoppingCart className="text-sm" />
										{isInCart(test.id) ? "Added to Cart" : "Add to Cart"}
									</button>
									<div className="flex gap-2">
										<button
											onClick={() => handleAddToCompare(test)}
											disabled={compareCount >= 3 || isInCompare(test.id)}
											className={`flex-1 py-2 px-3 border rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
												isInCompare(test.id)
													? "border-green-500 bg-green-50 text-green-700"
													: "border-gray-300 text-gray-700 hover:bg-gray-50"
											}`}>
											{isInCompare(test.id) ? "Added" : "Compare"}
										</button>
										<Link
											to={`/test/${test.id}`}
											className="flex-1 py-2 px-3 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors text-center">
											Know More
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* No Results */}
				{sortedTests.length === 0 && (
					<div className="text-center py-12">
						<p className="text-gray-500 text-lg">
							No tests found matching your criteria.
						</p>
						<button
							onClick={() => {
								setSearchQuery("");
								setSelectedCategory("All");
							}}
							className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
							Clear Filters
						</button>
					</div>
				)}

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

export default AllTests;
