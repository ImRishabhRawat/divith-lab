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
		<section className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Header */}
				<div className="mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
						Featured Health
						<br />
						Check-up Packages
					</h2>

					{/* Filter Tabs - Scrollable */}
					<div className="overflow-x-auto">
						<div
							className="flex gap-3 min-w-max pb-2"
							style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
							{filters.map((filter) => (
								<button
									key={filter}
									onClick={() => setActiveFilter(filter)}
									className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
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
				<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
					{filteredPackages.map((pkg) => (
						<div
							key={pkg.id}
							className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col h-full min-h-[320px] border border-transparent hover:border-blue-500 hover:bg-blue-50 hover:scale-105 hover:-translate-y-2 transform cursor-pointer">
							{/* Discount Badge */}
							{pkg.discount && (
								<div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
									{pkg.discount}
								</div>
							)}

							{/* Package Icon */}
							<div className="text-4xl mb-4">{pkg.icon}</div>

							{/* Package Details */}
							<div className="mb-4 flex-grow">
								<h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
									{pkg.name}
								</h3>
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

							{/* Book Now Button */}
							<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium transition-colors">
								Book Now
							</button>
						</div>
					))}
				</div>

				{/* Show All Button */}
				<div className="text-center mt-12">
					<Link
						to="/all-packages"
						className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium">
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
