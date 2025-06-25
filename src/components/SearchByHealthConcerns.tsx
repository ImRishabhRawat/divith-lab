import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaSearch,
	FaLungs,
	FaVial,
	FaShieldAlt,
	FaPills,
	FaThermometerHalf,
	FaHeart,
	FaTint,
	FaChevronDown,
	FaChevronUp,
} from "react-icons/fa";

const SearchByHealthConcerns = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [activeFilter, setActiveFilter] = useState("Lifestyle Disorder");
	const [currentPage, setCurrentPage] = useState(0);
	const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

	const filters = ["Lifestyle Disorder", "Condition", "Alphabet"];

	const healthConcerns = [
		// Lifestyle Disorder
		{
			id: 1,
			name: "Heart",
			icon: <FaHeart className="text-6xl text-blue-600" />,
			category: "Lifestyle Disorder",
		},
		{
			id: 2,
			name: "Lungs",
			icon: <FaLungs className="text-6xl text-blue-600" />,
			category: "Lifestyle Disorder",
		},
		{
			id: 3,
			name: "CBC",
			icon: <FaVial className="text-6xl text-blue-600" />,
			category: "Lifestyle Disorder",
		},
		{
			id: 4,
			name: "Vitamin D",
			icon: <FaPills className="text-6xl text-blue-600" />,
			category: "Lifestyle Disorder",
		},
		{
			id: 5,
			name: "Infertility",
			icon: <FaShieldAlt className="text-6xl text-blue-600" />,
			category: "Lifestyle Disorder",
		},
		{
			id: 6,
			name: "Allergy",
			icon: <FaVial className="text-6xl text-yellow-500" />,
			category: "Lifestyle Disorder",
		},
		// Condition
		{
			id: 7,
			name: "Diabetes",
			icon: <FaShieldAlt className="text-6xl text-yellow-500" />,
			category: "Condition",
		},
		{
			id: 8,
			name: "Thyroid",
			icon: <FaShieldAlt className="text-6xl text-yellow-500" />,
			category: "Condition",
		},
		{
			id: 9,
			name: "Kidney",
			icon: <FaTint className="text-6xl text-blue-600" />,
			category: "Condition",
		},
		{
			id: 10,
			name: "Fever",
			icon: <FaThermometerHalf className="text-6xl text-yellow-500" />,
			category: "Condition",
		},
		{
			id: 11,
			name: "Liver",
			icon: <FaVial className="text-6xl text-yellow-500" />,
			category: "Condition",
		},
		{
			id: 12,
			name: "HIV/AIDS",
			icon: <FaShieldAlt className="text-6xl text-blue-600" />,
			category: "Condition",
		},
		{
			id: 13,
			name: "Hypertension",
			icon: <FaHeart className="text-6xl text-yellow-500" />,
			category: "Condition",
		},
		{
			id: 14,
			name: "Anemia",
			icon: <FaTint className="text-6xl text-yellow-500" />,
			category: "Condition",
		},
		{
			id: 15,
			name: "Arthritis",
			icon: <FaShieldAlt className="text-6xl text-yellow-500" />,
			category: "Condition",
		},
	];

	const alphabetList = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];

	const filteredConcerns =
		activeFilter === "Lifestyle Disorder"
			? healthConcerns.filter(
					(concern) => concern.category === "Lifestyle Disorder"
			  )
			: activeFilter === "Condition"
			? healthConcerns.filter((concern) => concern.category === "Condition")
			: activeFilter === "Alphabet"
			? alphabetList.map((letter, index) => ({
					id: `letter-${index}`,
					name: letter,
					icon: (
						<span className="text-3xl font-bold text-blue-600">{letter}</span>
					),
					category: "Alphabet",
					isAlphabet: true,
			  }))
			: healthConcerns;

	const itemsPerPage = 6;
	const totalPages = Math.ceil(filteredConcerns.length / itemsPerPage);
	const currentItems =
		activeFilter === "Alphabet" || activeFilter === "Condition"
			? filteredConcerns // Show all items at once for Alphabet and Condition
			: filteredConcerns.slice(
					currentPage * itemsPerPage,
					(currentPage + 1) * itemsPerPage
			  );

	return (
		<section className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Header */}
				<div className="mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
						Search by Health Concerns
					</h2>
				</div>

				{/* Search and Filters */}
				<div className="flex flex-col lg:flex-row gap-4 mb-12 lg:items-center lg:justify-between">
					{/* Search Bar */}
					<div className="relative lg:max-w-md lg:flex-shrink-0">
						<input
							type="text"
							placeholder="Search Test"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors text-gray-700 placeholder-gray-500"
						/>
						<button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-lg hover:bg-yellow-500 transition-colors">
							<FaSearch className="text-gray-900" />
						</button>
					</div>

					{/* Filter Dropdown for Mobile, Horizontal layout for Desktop */}
					<div className="flex flex-col lg:flex-row gap-4 lg:items-center">
						{/* Mobile Dropdown */}
						<div className="lg:hidden relative">
							<button
								onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
								className="w-full flex items-center justify-between px-4 py-3 bg-blue-100 border border-blue-200 rounded-xl text-blue-700 font-medium">
								<span>{activeFilter}</span>
								{isFilterDropdownOpen ? (
									<FaChevronUp className="text-blue-600" />
								) : (
									<FaChevronDown className="text-blue-600" />
								)}
							</button>

							{/* Dropdown Menu */}
							{isFilterDropdownOpen && (
								<div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
									{filters.map((filter) => (
										<button
											key={filter}
											onClick={() => {
												setActiveFilter(filter);
												setCurrentPage(0);
												setIsFilterDropdownOpen(false);
											}}
											className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors first:rounded-t-xl last:rounded-b-xl ${
												activeFilter === filter
													? "bg-blue-50 text-blue-600 font-medium"
													: "text-gray-700"
											}`}>
											{filter}
										</button>
									))}
								</div>
							)}
						</div>

						{/* Desktop Filter Buttons - Horizontal layout like image */}
						<div className="hidden lg:flex gap-3">
							{filters.map((filter) => (
								<button
									key={filter}
									onClick={() => {
										setActiveFilter(filter);
										setCurrentPage(0);
									}}
									className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
										activeFilter === filter
											? "bg-blue-600 text-white"
											: "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
									}`}>
									{filter}
								</button>
							))}
						</div>

						{/* View All Button */}
						<Link
							to="/all-concerns"
							className="text-blue-600 hover:text-blue-800 font-medium text-lg underline whitespace-nowrap">
							View All
						</Link>
					</div>
				</div>

				{/* Health Concerns Grid */}
				{activeFilter === "Alphabet" ? (
					/* Alphabet Grid - Smaller, compact layout */
					<div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-13 gap-6 mb-8">
						{currentItems.map((concern) => (
							<Link
								key={concern.id}
								to={`/lab-tests/${concern.name.toLowerCase()}`}
								className="group">
								<div className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300">
									<div className="w-12 h-12 flex items-center justify-center mb-2">
										<span className="text-2xl font-bold text-blue-600 group-hover:text-blue-800 transition-colors">
											{concern.name}
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				) : (
					/* Health Concerns - Large circular icons with scrolling */
					<div className="mb-8">
						<div
							className={`${
								activeFilter === "Condition"
									? "overflow-x-auto overflow-y-hidden pb-4"
									: "overflow-x-auto pb-4"
							}`}>
							<div
								className={`${
									activeFilter === "Condition"
										? "flex gap-8 min-w-max"
										: "flex gap-8 md:grid md:grid-cols-3 lg:grid-cols-6 min-w-max md:min-w-0"
								}`}>
								{currentItems.map((concern) => (
									<Link
										key={concern.id}
										to={`/concern/${concern.id}`}
										className="group flex-shrink-0">
										<div className="flex flex-col items-center p-6 hover:scale-105 transition-transform duration-300">
											{/* Large Icon Circle - Light gray background like in image */}
											<div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-300 transition-colors">
												{concern.icon}
											</div>
											{/* Label */}
											<span className="text-lg font-medium text-gray-700 text-center group-hover:text-blue-600 transition-colors whitespace-nowrap">
												{concern.name}
											</span>
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>
				)}

				{/* Pagination Dots - Only show for Lifestyle Disorder */}
				{totalPages > 1 && activeFilter === "Lifestyle Disorder" && (
					<div className="flex justify-center gap-2">
						{Array.from({ length: totalPages }, (_, index) => (
							<button
								key={index}
								onClick={() => setCurrentPage(index)}
								className={`w-3 h-3 rounded-full transition-all ${
									index === currentPage
										? "bg-blue-600"
										: index === 1
										? "bg-blue-400"
										: "bg-yellow-400"
								}`}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default SearchByHealthConcerns;
