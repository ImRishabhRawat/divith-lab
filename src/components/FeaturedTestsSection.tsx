import React, { useState } from "react";
import { Link } from "react-router-dom";

const FeaturedTestsSection = () => {
	const [activeFilter, setActiveFilter] = useState("All tests");

	const filters = [
		"All tests",
		"Full body Check up",
		"Diabetes",
		"Heart",
		"Cancer",
		"Vitamin",
		"Women Health",
		"Skin care",
		"Liver",
		"Kidney",
	];

	const healthPackages = [
		{
			id: 1,
			name: "Medicare Full body Health Checkup",
			tests: 12,
			price: 430.0,
			originalPrice: 580.0,
			discount: null,
			icon: "🫁", // Lungs icon
			category: "Full body Check up",
		},
		{
			id: 2,
			name: "Comprehensive full body checkup with Vitamin D & B12",
			tests: 11,
			price: 240.0,
			originalPrice: 580.0,
			discount: null,
			icon: "🩸", // Blood drop icon
			category: "Full body Check up",
		},
		{
			id: 3,
			name: "Women's Staying Strong Health Checkup",
			tests: 32,
			price: 300.0,
			originalPrice: 270.0,
			discount: "20% Off",
			icon: "🫃", // Pregnant woman icon
			category: "Women Health",
		},
		{
			id: 4,
			name: "Medi care Diabetes Screening",
			tests: 7,
			price: 364.0,
			originalPrice: 580.0,
			discount: null,
			icon: "🩺", // Stethoscope icon
			category: "Diabetes",
		},
	];

	const filteredPackages =
		activeFilter === "All tests"
			? healthPackages
			: healthPackages.filter((pkg) => pkg.category === activeFilter);

	return (
		<section className="py-8 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Header */}
				<div className="mb-8">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
						Featured Health
						<br />
						Check-up Packages
					</h2>

					{/* Filter Tabs - Scrollable */}
					<div className="overflow-x-auto">
						<div
							className="flex gap-2 min-w-max pb-2"
							style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
							{filters.map((filter) => (
								<button
									key={filter}
									onClick={() => setActiveFilter(filter)}
									className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap text-sm ${
										activeFilter === filter
											? "bg-gray-900 text-white"
											: "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
									}`}>
									{filter}
								</button>
							))}
						</div>
					</div>
				</div>

				{/* Health Packages Grid */}
				<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
					{filteredPackages.map((pkg) => (
						<div
							key={pkg.id}
							className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col min-h-[260px] border border-transparent hover:border-blue-500 hover:bg-blue-50 cursor-pointer">
							{/* Discount Badge */}
							{pkg.discount && (
								<div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
									{pkg.discount}
								</div>
							)}

							{/* Package Icon */}
							<div className="text-3xl mb-3">{pkg.icon}</div>

							{/* Package Details */}
							<div className="mb-3 flex-grow">
								<h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
									{pkg.name}
								</h3>
								<p className="text-xs text-gray-600">
									Includes {pkg.tests} Tests
								</p>
							</div>

							{/* Pricing */}
							<div className="flex items-center gap-2 mb-3">
								<span className="text-lg font-bold text-gray-900">
									${pkg.price.toFixed(2)}
								</span>
								<span className="text-xs text-gray-500 line-through">
									${pkg.originalPrice.toFixed(2)}
								</span>
							</div>

							{/* Book Now Button */}
							<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg font-medium transition-colors text-sm">
								Book Now
							</button>
						</div>
					))}
				</div>

				{/* Show All Button */}
				<div className="text-center mt-8">
					<Link
						to="/all-packages"
						className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm">
						View All Packages
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default FeaturedTestsSection;
