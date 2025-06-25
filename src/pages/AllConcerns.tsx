import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaArrowLeft,
	FaSearch,
	FaHeart,
	FaLungs,
	FaVial,
	FaShieldAlt,
	FaPills,
	FaThermometerHalf,
	FaTint,
	FaFilter,
} from "react-icons/fa";

const AllConcerns = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");

	const categories = ["All", "Lifestyle Disorder", "Condition", "Organ System"];

	const healthConcerns = [
		// Lifestyle Disorders
		{
			id: 1,
			name: "Heart Health",
			icon: <FaHeart className="text-4xl text-red-500" />,
			category: "Lifestyle Disorder",
			description: "Cardiac health screening and risk assessment",
			testsAvailable: 15,
		},
		{
			id: 2,
			name: "Lung Function",
			icon: <FaLungs className="text-4xl text-blue-600" />,
			category: "Lifestyle Disorder",
			description: "Respiratory health and lung function tests",
			testsAvailable: 8,
		},
		{
			id: 3,
			name: "Blood Health",
			icon: <FaVial className="text-4xl text-red-600" />,
			category: "Lifestyle Disorder",
			description: "Complete blood count and related tests",
			testsAvailable: 12,
		},
		{
			id: 4,
			name: "Vitamin Deficiency",
			icon: <FaPills className="text-4xl text-orange-500" />,
			category: "Lifestyle Disorder",
			description: "Vitamin and mineral deficiency screening",
			testsAvailable: 10,
		},
		{
			id: 5,
			name: "Fertility Issues",
			icon: <FaShieldAlt className="text-4xl text-pink-500" />,
			category: "Lifestyle Disorder",
			description: "Fertility and reproductive health testing",
			testsAvailable: 18,
		},
		{
			id: 6,
			name: "Allergies",
			icon: <FaVial className="text-4xl text-yellow-500" />,
			category: "Lifestyle Disorder",
			description: "Allergy testing and identification",
			testsAvailable: 25,
		},

		// Medical Conditions
		{
			id: 7,
			name: "Diabetes",
			icon: <FaShieldAlt className="text-4xl text-green-600" />,
			category: "Condition",
			description: "Blood sugar monitoring and diabetes management",
			testsAvailable: 8,
		},
		{
			id: 8,
			name: "Thyroid Disorders",
			icon: <FaShieldAlt className="text-4xl text-purple-500" />,
			category: "Condition",
			description: "Thyroid function assessment",
			testsAvailable: 6,
		},
		{
			id: 9,
			name: "Kidney Disease",
			icon: <FaTint className="text-4xl text-blue-500" />,
			category: "Condition",
			description: "Kidney function and health evaluation",
			testsAvailable: 12,
		},
		{
			id: 10,
			name: "Fever & Infections",
			icon: <FaThermometerHalf className="text-4xl text-red-400" />,
			category: "Condition",
			description: "Infection screening and fever workup",
			testsAvailable: 15,
		},
		{
			id: 11,
			name: "Liver Problems",
			icon: <FaVial className="text-4xl text-yellow-600" />,
			category: "Condition",
			description: "Liver function and health assessment",
			testsAvailable: 10,
		},
		{
			id: 12,
			name: "HIV/AIDS",
			icon: <FaShieldAlt className="text-4xl text-red-500" />,
			category: "Condition",
			description: "HIV testing and monitoring",
			testsAvailable: 5,
		},
		{
			id: 13,
			name: "Hypertension",
			icon: <FaHeart className="text-4xl text-red-600" />,
			category: "Condition",
			description: "Blood pressure and cardiovascular risk",
			testsAvailable: 8,
		},
		{
			id: 14,
			name: "Anemia",
			icon: <FaTint className="text-4xl text-red-300" />,
			category: "Condition",
			description: "Iron deficiency and blood disorders",
			testsAvailable: 7,
		},
		{
			id: 15,
			name: "Arthritis",
			icon: <FaShieldAlt className="text-4xl text-orange-600" />,
			category: "Condition",
			description: "Joint health and inflammatory markers",
			testsAvailable: 9,
		},

		// Organ Systems
		{
			id: 16,
			name: "Cardiovascular System",
			icon: <FaHeart className="text-4xl text-red-500" />,
			category: "Organ System",
			description: "Complete heart and blood vessel assessment",
			testsAvailable: 20,
		},
		{
			id: 17,
			name: "Respiratory System",
			icon: <FaLungs className="text-4xl text-blue-400" />,
			category: "Organ System",
			description: "Lung and breathing function tests",
			testsAvailable: 12,
		},
		{
			id: 18,
			name: "Digestive System",
			icon: <FaVial className="text-4xl text-green-500" />,
			category: "Organ System",
			description: "Stomach, liver, and digestive health",
			testsAvailable: 16,
		},
		{
			id: 19,
			name: "Endocrine System",
			icon: <FaShieldAlt className="text-4xl text-purple-600" />,
			category: "Organ System",
			description: "Hormone and gland function testing",
			testsAvailable: 14,
		},
		{
			id: 20,
			name: "Urinary System",
			icon: <FaTint className="text-4xl text-blue-600" />,
			category: "Organ System",
			description: "Kidney and urinary tract health",
			testsAvailable: 11,
		},
	];

	const filteredConcerns = healthConcerns.filter((concern) => {
		const matchesSearch = concern.name
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const matchesCategory =
			selectedCategory === "All" || concern.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

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
							Health Concerns & Conditions
						</h1>
					</div>
					<p className="text-gray-600">
						Find diagnostic tests organized by health concerns and medical
						conditions.
					</p>
				</div>

				{/* Filters */}
				<div className="bg-white rounded-lg shadow-sm p-6 mb-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{/* Search */}
						<div className="relative">
							<input
								type="text"
								placeholder="Search health concerns..."
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
					</div>
				</div>

				{/* Results Count */}
				<div className="mb-6">
					<p className="text-gray-600">
						Showing {filteredConcerns.length} of {healthConcerns.length} health
						concerns
					</p>
				</div>

				{/* Health Concerns Grid */}
				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
					{filteredConcerns.map((concern) => (
						<Link
							key={concern.id}
							to={`/concern/${concern.id}`}
							className="group">
							<div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-500 hover:bg-blue-50 hover:scale-105 transform cursor-pointer">
								{/* Category Badge */}
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
										{concern.category}
									</span>
								</div>

								{/* Icon */}
								<div className="flex justify-center mb-4">
									<div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
										{concern.icon}
									</div>
								</div>

								{/* Content */}
								<div className="text-center">
									<h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
										{concern.name}
									</h3>
									<p className="text-sm text-gray-600 mb-3">
										{concern.description}
									</p>
									<div className="text-xs text-blue-600 font-medium">
										{concern.testsAvailable} Tests Available
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* No Results */}
				{filteredConcerns.length === 0 && (
					<div className="text-center py-12">
						<p className="text-gray-500 text-lg">
							No health concerns found matching your criteria.
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

				{/* Popular Searches */}
				<div className="mt-12 bg-white rounded-lg shadow-sm p-6">
					<h3 className="text-lg font-bold text-gray-900 mb-4">
						Popular Health Concerns
					</h3>
					<div className="flex flex-wrap gap-2">
						{[
							"Diabetes",
							"Heart Health",
							"Thyroid",
							"Liver Problems",
							"Kidney Disease",
							"Anemia",
							"Vitamin Deficiency",
							"Allergies",
						].map((tag) => (
							<button
								key={tag}
								onClick={() => setSearchQuery(tag)}
								className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 text-sm rounded-full transition-colors">
								{tag}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllConcerns;
