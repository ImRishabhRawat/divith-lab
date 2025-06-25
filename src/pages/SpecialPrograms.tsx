import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaHome,
	FaStar,
	FaHeart,
	FaShieldAlt,
	FaUsers,
	FaBaby,
	FaFemale,
	FaMale,
	FaUserTie,
	FaGraduationCap,
	FaCalendarAlt,
	FaPhone,
	FaCheckCircle,
	FaGift,
	FaPercent,
	FaCrown,
	FaMedal,
	FaAward,
	FaChevronDown,
	FaChevronUp,
	FaClock,
} from "react-icons/fa";

const SpecialPrograms = () => {
	const [activeCategory, setActiveCategory] = useState("All Programs");
	const [isPopularTestsOpen, setIsPopularTestsOpen] = useState(false);
	const [isLabTestOpen, setIsLabTestOpen] = useState(false);
	const [callbackNumber, setCallbackNumber] = useState("");

	const categories = [
		"All Programs",
		"Corporate Wellness",
		"Family Care",
		"Senior Citizens",
		"Women's Health",
		"Executive Health",
		"Student Programs",
	];

	const specialPrograms = [
		{
			id: 1,
			name: "DIVITH Elite Executive Health Program",
			category: "Executive Health",
			icon: <FaCrown className="text-4xl text-yellow-500" />,
			price: 15000,
			originalPrice: 20000,
			discount: "25% Off",
			duration: "Full Day",
			features: [
				"Comprehensive 150+ parameter health checkup",
				"Executive lounge with premium amenities",
				"Dedicated health consultant",
				"Same-day reports with detailed analysis",
				"Annual health tracking & monitoring",
				"Priority appointment booking",
				"Complimentary health insurance consultation",
			],
			badge: "Premium",
			color: "from-yellow-400 to-orange-500",
		},
		{
			id: 2,
			name: "Corporate Wellness Solutions",
			category: "Corporate Wellness",
			icon: <FaUserTie className="text-4xl text-blue-600" />,
			price: 2500,
			originalPrice: 3500,
			discount: "30% Off",
			duration: "Half Day",
			features: [
				"On-site health screening for employees",
				"Customized health packages for different roles",
				"Health awareness workshops",
				"Stress management programs",
				"Ergonomic assessments",
				"Annual health reports for HR",
				"24/7 health helpline for employees",
			],
			badge: "Popular",
			color: "from-blue-500 to-indigo-600",
		},
		{
			id: 3,
			name: "Golden Years Senior Care Program",
			category: "Senior Citizens",
			icon: <FaHeart className="text-4xl text-red-500" />,
			price: 4500,
			originalPrice: 6000,
			discount: "25% Off",
			duration: "2 Hours",
			features: [
				"Comprehensive geriatric health assessment",
				"Cardiac & neurological screening",
				"Bone density & joint health evaluation",
				"Vision & hearing tests",
				"Memory & cognitive function assessment",
				"Home collection available",
				"Senior-friendly facilities with assistance",
			],
			badge: "Recommended",
			color: "from-red-400 to-pink-500",
		},
		{
			id: 4,
			name: "Women's Complete Wellness Program",
			category: "Women's Health",
			icon: <FaFemale className="text-4xl text-pink-500" />,
			price: 3800,
			originalPrice: 5000,
			discount: "24% Off",
			duration: "3 Hours",
			features: [
				"Comprehensive women's health screening",
				"Gynecological & breast health assessment",
				"Hormonal profile analysis",
				"Bone health & osteoporosis screening",
				"Nutritional counseling",
				"Reproductive health consultation",
				"Annual wellness tracking program",
			],
			badge: "Specialized",
			color: "from-pink-400 to-purple-500",
		},
		{
			id: 5,
			name: "Family Health Guardian Package",
			category: "Family Care",
			icon: <FaUsers className="text-4xl text-green-500" />,
			price: 8000,
			originalPrice: 12000,
			discount: "33% Off",
			duration: "Full Day",
			features: [
				"Health screening for up to 4 family members",
				"Age-appropriate test packages",
				"Family health history analysis",
				"Genetic counseling session",
				"Vaccination planning for children",
				"Home collection for entire family",
				"Annual family health report card",
			],
			badge: "Best Value",
			color: "from-green-400 to-teal-500",
		},
		{
			id: 6,
			name: "Student Health & Fitness Program",
			category: "Student Programs",
			icon: <FaGraduationCap className="text-4xl text-indigo-500" />,
			price: 1200,
			originalPrice: 1800,
			discount: "33% Off",
			duration: "1 Hour",
			features: [
				"Basic health screening for students",
				"Vision & hearing assessment",
				"Growth & development evaluation",
				"Nutritional status assessment",
				"Sports fitness evaluation",
				"Study stress management tips",
				"Health education session",
			],
			badge: "Student Special",
			color: "from-indigo-400 to-blue-500",
		},
	];

	const filteredPrograms =
		activeCategory === "All Programs"
			? specialPrograms
			: specialPrograms.filter(
					(program) => program.category === activeCategory
			  );

	const getBadgeColor = (badge: string) => {
		switch (badge) {
			case "Premium":
				return "bg-yellow-500 text-white";
			case "Popular":
				return "bg-blue-500 text-white";
			case "Recommended":
				return "bg-red-500 text-white";
			case "Specialized":
				return "bg-purple-500 text-white";
			case "Best Value":
				return "bg-green-500 text-white";
			case "Student Special":
				return "bg-indigo-500 text-white";
			default:
				return "bg-gray-500 text-white";
		}
	};

	const handleCallbackRequest = () => {
		if (callbackNumber.length === 10) {
			alert(
				`Thank you! We will call you back at ${callbackNumber} within 15 minutes for program enrollment assistance.`
			);
			setCallbackNumber("");
		} else {
			alert("Please enter a valid 10-digit mobile number.");
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
				{/* Animated Background Elements */}
				<div className="absolute inset-0">
					<div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
					<div className="absolute top-40 right-20 w-16 h-16 bg-indigo-400 rounded-full opacity-30 animate-bounce"></div>
					<div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-25 animate-ping"></div>
					<div className="absolute bottom-40 right-1/3 w-24 h-24 bg-indigo-300 rounded-full opacity-20 animate-pulse"></div>
				</div>

				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
											 radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
							backgroundSize: "50px 50px",
						}}></div>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 flex items-center justify-between">
					<div className="text-left max-w-xl">
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
							Special Programs
						</h1>
						<p className="text-xl text-blue-100 mb-8 leading-relaxed">
							Comprehensive health programs designed for your unique needs and
							lifestyle
						</p>
						<div className="flex flex-wrap gap-4">
							<button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
								Explore Programs
							</button>
							<button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
								Get Consultation
							</button>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="relative">
							<img
								src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
								alt="Special health programs"
								className="rounded-lg shadow-2xl"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-lg flex items-center justify-center">
								<FaStar className="text-6xl text-white opacity-80" />
							</div>
						</div>
					</div>
				</div>

				{/* Curved Bottom Transition */}
				<div className="absolute bottom-0 left-0 right-0">
					<svg
						viewBox="0 0 1440 120"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
							fill="#f9fafb"
						/>
					</svg>
				</div>
			</div>

			{/* Breadcrumb */}
			<div className="bg-white border-b">
				<div className="max-w-7xl mx-auto px-4 py-3">
					<nav className="text-sm text-gray-600">
						<Link to="/" className="hover:text-blue-600 transition-colors">
							<FaHome className="inline mr-1" />
							Home
						</Link>
						<span className="mx-2">&gt;</span>
						<span className="text-blue-600 font-medium">Special Programs</span>
					</nav>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 py-12">
				{/* Program Categories */}
				<div className="mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-6">
						Choose Your Health Program
					</h2>
					<div className="flex flex-wrap gap-4">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`px-6 py-3 rounded-full font-medium transition-colors ${
									activeCategory === category
										? "bg-blue-600 text-white"
										: "bg-gray-200 text-gray-700 hover:bg-gray-300"
								}`}>
								{category}
							</button>
						))}
					</div>
				</div>

				{/* Programs Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{filteredPrograms.map((program) => (
						<div
							key={program.id}
							className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
							{/* Program Header */}
							<div
								className={`bg-gradient-to-r ${program.color} p-6 text-white relative`}>
								<div className="absolute top-4 right-4">
									<span
										className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(
											program.badge
										)}`}>
										{program.badge}
									</span>
								</div>
								<div className="flex items-center gap-4 mb-4">
									<div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
										{program.icon}
									</div>
									<div>
										<h3 className="text-xl font-bold">{program.name}</h3>
										<p className="text-sm opacity-90">{program.category}</p>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<div>
										<span className="text-2xl font-bold">
											₹{program.price.toLocaleString()}
										</span>
										<span className="text-sm line-through opacity-75 ml-2">
											₹{program.originalPrice.toLocaleString()}
										</span>
									</div>
									<span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
										{program.discount}
									</span>
								</div>
							</div>

							{/* Program Details */}
							<div className="p-6">
								<div className="flex items-center gap-2 mb-4 text-gray-600">
									<FaClock className="text-blue-600" />
									<span className="text-sm">Duration: {program.duration}</span>
								</div>

								<h4 className="font-bold text-gray-900 mb-3">
									Program Includes:
								</h4>
								<ul className="space-y-2 mb-6">
									{program.features.slice(0, 4).map((feature, index) => (
										<li key={index} className="flex items-start gap-2 text-sm">
											<FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
											<span className="text-gray-600">{feature}</span>
										</li>
									))}
									{program.features.length > 4 && (
										<li className="text-sm text-blue-600 font-medium">
											+{program.features.length - 4} more benefits
										</li>
									)}
								</ul>

								<div className="flex gap-3">
									<button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
										Enroll Now
									</button>
									<button className="px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
										<FaGift />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Why Choose Our Special Programs */}
				<div className="bg-white rounded-2xl p-8 mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
						Why Choose DIVITH LABS Special Programs?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<FaMedal className="text-2xl text-blue-600" />
							</div>
							<h3 className="font-bold text-gray-900 mb-2">Expert Care</h3>
							<p className="text-gray-600 text-sm">
								Designed by healthcare experts with years of experience
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<FaAward className="text-2xl text-green-600" />
							</div>
							<h3 className="font-bold text-gray-900 mb-2">Comprehensive</h3>
							<p className="text-gray-600 text-sm">
								Complete health solutions tailored to your specific needs
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<FaShieldAlt className="text-2xl text-purple-600" />
							</div>
							<h3 className="font-bold text-gray-900 mb-2">Preventive Focus</h3>
							<p className="text-gray-600 text-sm">
								Early detection and prevention-focused approach
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<FaPercent className="text-2xl text-orange-600" />
							</div>
							<h3 className="font-bold text-gray-900 mb-2">Best Value</h3>
							<p className="text-gray-600 text-sm">
								Premium healthcare services at competitive prices
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Callback Section */}
			<div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<div className="flex flex-col md:flex-row items-center justify-center gap-8">
						<div className="flex items-center gap-4">
							<div className="bg-white p-4 rounded-full">
								<FaUsers className="text-3xl text-blue-600" />
							</div>
							<div className="text-left">
								<h3 className="text-xl font-bold text-white mb-2">
									Get a call back within 15 minutes from our Health Advisor for
									Program Enrollment Assistance
								</h3>
							</div>
						</div>
						<div className="flex gap-3">
							<input
								type="tel"
								placeholder="Enter Your 10 Digit Mobile Number"
								value={callbackNumber}
								onChange={(e) => setCallbackNumber(e.target.value)}
								className="px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-blue-500 w-64"
								maxLength={10}
							/>
							<button
								onClick={handleCallbackRequest}
								className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
								Call Me
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpecialPrograms;
