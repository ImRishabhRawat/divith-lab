import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaArrowLeft,
	FaFilter,
	FaSearch,
	FaEye,
	FaTimes,
} from "react-icons/fa";
import { useCompare } from "../contexts/CompareContext";

const AllPackages = () => {
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
		"Full Body Check-up",
		"Diabetes",
		"Heart",
		"Cancer",
		"Vitamin",
		"Women Health",
		"Liver",
		"Kidney",
		"Thyroid",
	];

	const healthPackages = [
		{
			id: 1,
			name: "Medicare Full Body Health Checkup",
			tests: 12,
			price: 430.0,
			originalPrice: 580.0,
			discount: "26% Off",
			icon: "🫁",
			category: "Full Body Check-up",
			description: "Comprehensive health screening with essential parameters",
			popular: true,
		},
		{
			id: 2,
			name: "Comprehensive Full Body Checkup with Vitamin D & B12",
			tests: 11,
			price: 240.0,
			originalPrice: 580.0,
			discount: "59% Off",
			icon: "🩸",
			category: "Full Body Check-up",
			description: "Complete health assessment including vital vitamins",
			popular: false,
		},
		{
			id: 3,
			name: "Women's Staying Strong Health Checkup",
			tests: 32,
			price: 300.0,
			originalPrice: 370.0,
			discount: "19% Off",
			icon: "🫃",
			category: "Women Health",
			description: "Specially designed for women's health needs",
			popular: true,
		},
		{
			id: 4,
			name: "Medicare Diabetes Screening",
			tests: 7,
			price: 364.0,
			originalPrice: 580.0,
			discount: "37% Off",
			icon: "🩺",
			category: "Diabetes",
			description: "Early detection and monitoring of diabetes",
			popular: false,
		},
		{
			id: 5,
			name: "Heart Health Assessment",
			tests: 15,
			price: 520.0,
			originalPrice: 750.0,
			discount: "31% Off",
			icon: "❤️",
			category: "Heart",
			description: "Comprehensive cardiac health evaluation",
			popular: true,
		},
		{
			id: 6,
			name: "Liver Function Test Plus",
			tests: 8,
			price: 280.0,
			originalPrice: 380.0,
			discount: "26% Off",
			icon: "🫀",
			category: "Liver",
			description: "Complete liver health assessment",
			popular: false,
		},
		{
			id: 7,
			name: "Kidney Function Profile",
			tests: 6,
			price: 190.0,
			originalPrice: 290.0,
			discount: "34% Off",
			icon: "🫘",
			category: "Kidney",
			description: "Comprehensive kidney health evaluation",
			popular: false,
		},
		{
			id: 8,
			name: "Thyroid Complete Package",
			tests: 9,
			price: 410.0,
			originalPrice: 580.0,
			discount: "29% Off",
			icon: "🦋",
			category: "Thyroid",
			description: "Complete thyroid function assessment",
			popular: true,
		},
	];

	const filteredPackages = healthPackages.filter((pkg) => {
		const matchesSearch = pkg.name
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const matchesCategory =
			selectedCategory === "All" || pkg.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	const sortedPackages = [...filteredPackages].sort((a, b) => {
		switch (sortBy) {
			case "price-low":
				return a.price - b.price;
			case "price-high":
				return b.price - a.price;
			case "popularity":
				return Number(b.popular) - Number(a.popular);
			case "discount":
				return (
					parseInt(b.discount.replace("% Off", "")) -
					parseInt(a.discount.replace("% Off", ""))
				);
			default:
				return 0;
		}
	});

	const handleAddToCompare = (pkg: any) => {
		const compareItem = {
			...pkg,
			parameters: `${pkg.tests} Parameter(s) Covered`,
			homeCollection: true,
			labVisit: true,
			preparationTime: "12 hours fasting required",
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
							All Health Packages
						</h1>
					</div>
					<p className="text-gray-600">
						Explore our comprehensive range of health check-up packages designed
						for your specific needs.
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
						Showing {sortedPackages.length} of {healthPackages.length} packages
					</p>
				</div>

				{/* Packages Grid */}
				<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
					{sortedPackages.map((pkg) => (
						<div
							key={pkg.id}
							className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col h-full border border-transparent hover:border-blue-500 hover:bg-blue-50 hover:scale-105 transform cursor-pointer">
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

							<div className="p-6 flex-1 flex flex-col">
								{/* Package Icon */}
								<div className="text-4xl mb-4">{pkg.icon}</div>

								{/* Package Details */}
								<div className="mb-4 flex-grow">
									<h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
										{pkg.name}
									</h3>
									<p className="text-sm text-gray-600 mb-2">
										{pkg.description}
									</p>
									<p className="text-sm text-gray-600">
										Includes {pkg.tests} Tests
									</p>
								</div>

								{/* Pricing */}
								<div className="flex items-center gap-2 mb-4">
									<span className="text-2xl font-bold text-gray-900">
										${pkg.price.toFixed(2)}
									</span>
									<span className="text-sm text-gray-500 line-through">
										${pkg.originalPrice.toFixed(2)}
									</span>
								</div>

								{/* Action Buttons */}
								<div className="space-y-3">
									<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium transition-colors">
										Book Now
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
											Details
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* No Results */}
				{sortedPackages.length === 0 && (
					<div className="text-center py-12">
						<p className="text-gray-500 text-lg">
							No packages found matching your criteria.
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

				{/* Floating Compare Widget */}
				{compareCount > 0 && (
					<div className="fixed bottom-4 right-4">
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
					</div>
				)}
			</div>
		</div>
	);
};

export default AllPackages;
