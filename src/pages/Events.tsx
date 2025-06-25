import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaHome,
	FaChevronDown,
	FaChevronUp,
	FaUsers,
	FaCalendarAlt,
	FaGraduationCap,
	FaVideo,
	FaDesktop,
	FaCertificate,
} from "react-icons/fa";

const Events = () => {
	const [activeFilter, setActiveFilter] = useState("Seminar");
	const [isPopularTestsOpen, setIsPopularTestsOpen] = useState(false);
	const [isLabTestOpen, setIsLabTestOpen] = useState(false);
	const [callbackNumber, setCallbackNumber] = useState("");

	const eventCategories = [
		{ name: "Seminar", count: 5, active: true },
		{ name: "Workshop", count: 3, active: false },
		{ name: "Webinar", count: 2, active: false },
		{ name: "eCME", count: 4, active: false },
	];

	const events = {
		Seminar: [
			{
				id: 1,
				title: "1st India Autoimmune Seminar",
				image:
					"https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
				description:
					"Comprehensive seminar on autoimmune disorders and latest treatment approaches.",
			},
			{
				id: 2,
				title: "2nd India Autoimmune Seminar",
				image:
					"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
				description:
					"Advanced discussions on autoimmune research and clinical applications.",
			},
			{
				id: 3,
				title: "3rd India Autoimmune Seminar",
				image:
					"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
				description:
					"Latest developments in autoimmune diagnostics and therapeutic strategies.",
			},
		],
		Workshop: [
			{
				id: 4,
				title: "1st India Autoimmune Workshop",
				image:
					"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
				description:
					"Hands-on workshop for practical autoimmune testing techniques.",
			},
			{
				id: 5,
				title: "2nd India Autoimmune Workshop",
				image:
					"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
				description:
					"Interactive workshop on advanced autoimmune diagnostic methods.",
			},
			{
				id: 6,
				title: "3rd India Autoimmune Workshop",
				image:
					"https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
				description:
					"Practical training on latest autoimmune testing protocols.",
			},
		],
		Webinar: [
			{
				id: 7,
				title: "1st India Autoimmune Webinar",
				image:
					"https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
				description:
					"Online webinar covering autoimmune disease mechanisms and diagnosis.",
			},
			{
				id: 8,
				title: "2nd India Autoimmune Webinar",
				image:
					"https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
				description:
					"Virtual session on emerging trends in autoimmune research.",
			},
			{
				id: 9,
				title: "3rd India Autoimmune Webinar",
				image:
					"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
				description:
					"Digital presentation on autoimmune biomarkers and clinical significance.",
			},
		],
		eCME: [
			{
				id: 10,
				title: "1st India Autoimmune eCME",
				image:
					"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
				description:
					"Continuing medical education on autoimmune disorders for healthcare professionals.",
			},
			{
				id: 11,
				title: "2nd India Autoimmune eCME",
				image:
					"https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
				description:
					"Advanced eCME program on autoimmune diagnostics and patient management.",
			},
			{
				id: 12,
				title: "3rd India Autoimmune eCME",
				image:
					"https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
				description:
					"Comprehensive eCME course on autoimmune disease pathophysiology.",
			},
		],
	};

	const popularTests = [
		"Pregnancy Test",
		"Full Body Checkups",
		"Covid 19 Test",
		"Heart Test",
		"Kidney Test",
		"Liver Test",
		"CBC Test",
		"Cholesterol Test",
		"HbA1c Test",
		"Hepatitis B Test",
		"Kidney Function Test",
		"Liver Function Test",
		"Sugar Test",
		"Thyroid Test",
		"Typhoid Test",
		"Uric Acid Test",
		"Vitamin B12 Test",
		"Vitamin D Test",
		"Allergy Test",
		"Arthritis Test",
		"Cancer Test",
		"Bone And Joint",
		"Dengue Test",
		"Diabetes Test",
		"Rheumatoid Test",
		"Tuberculosis Test",
		"Infertility Test",
		"Diabetes Care",
		"Anemia Test",
		"Gastrointestinal",
		"Autoimmune Disorders",
		"Fever Test",
	];

	const labTestLocations = [
		"Agartala",
		"Agra",
		"Ahmedabad",
		"Aligarh",
		"Allahabad",
		"Alwar",
		"Ambala",
		"Amravati",
		"Amritsar",
		"Aurangabad",
		"Azamgarh",
		"Bahadurgarh",
		"Bareilly",
		"Begusarai",
		"Bengaluru",
		"Bhatinda",
		"Bhilai",
		"Bhopal",
		"Bhubaneswar",
		"Bijpur",
		"Bilaspur",
		"Chandigarh",
		"Chennai",
		"Coimbatore",
		"Daltonganj",
		"Darbhanga",
		"Dehradun",
		"Delhi",
		"Deoria",
		"Dhanbad",
		"Durgapur",
		"Faridabad",
		"Faizabad",
		"Gaya",
		"Ghaziabad",
		"Goa Velha",
		"Gorakhpur",
		"Greater Noida",
		"Gurgaon",
		"Guwahati",
		"Gwalior",
		"Haldwani",
		"Haridwar",
		"Hisar",
		"Hoshiarpur",
		"Howrah",
		"Hyderabad",
		"Indore",
		"Jabalpur",
		"Jaipur",
		"Jalandhar",
		"Jammu",
		"Jamshedpur",
		"Jodhpur",
		"Kangra",
		"Kanpur",
		"Karnal",
		"Khanna",
		"Kochi",
		"Kolkata",
		"Kota",
		"Kurukshetra",
		"Lucknow",
		"Ludhiana",
		"Mangalore",
		"Mathura",
		"Meerut",
		"Modinagar",
		"Moga",
		"Mohali",
		"Moradabad",
		"Mumbai",
		"Muzaffarnagar",
		"Mysore",
		"Nagpur",
		"Nashik",
		"Noida",
		"Panchkula",
		"Panipat",
		"Pathankot",
		"Patiala",
		"Patna",
		"Pune",
		"Purnia",
		"Raipur",
		"Ranchi",
		"Rewari",
		"Rohtak",
		"Sagar",
		"Saharanpur",
		"Shillong",
		"Shimla",
		"Siliguri",
		"Sirsa",
		"Sonipat",
		"Srinagar",
		"Udaipur",
		"Vadodara",
		"Varanasi",
		"Yamuna Nagar",
	];

	const handleCallbackRequest = () => {
		if (callbackNumber.length === 10) {
			alert(
				"Callback request submitted! Our health advisor will call you within 15 minutes."
			);
			setCallbackNumber("");
		} else {
			alert("Please enter a valid 10-digit mobile number.");
		}
	};

	const getEventIcon = (category: string) => {
		switch (category) {
			case "Seminar":
				return FaGraduationCap;
			case "Workshop":
				return FaUsers;
			case "Webinar":
				return FaVideo;
			case "eCME":
				return FaCertificate;
			default:
				return FaCalendarAlt;
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
							Events
						</h1>
						<p className="text-xl text-blue-100 mb-8 leading-relaxed">
							Join our comprehensive educational events designed to advance
							medical knowledge and enhance patient care
						</p>
						<div className="flex flex-wrap gap-4">
							<button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
								View All Events
							</button>
							<button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
								Register Now
							</button>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="relative">
							<img
								src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
								alt="Conference audience"
								className="rounded-lg shadow-2xl"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-lg flex items-center justify-center">
								<FaCalendarAlt className="text-6xl text-white opacity-80" />
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
						<Link
							to="/doctors"
							className="hover:text-blue-600 transition-colors">
							Doctors
						</Link>
						<span className="mx-2">&gt;</span>
						<span className="text-blue-600 font-medium">Events</span>
					</nav>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 py-12">
				{/* LPL Learning Centre Introduction */}
				<div className="mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-6">
						Introducing LPL Learning Centre
					</h2>
					<p className="text-gray-700 text-lg leading-relaxed">
						Technical talks on new tests launched by subject matter experts and
						LPL top opinion leaders to provide valuable insights on new clinical
						utility and indications to help clinicians and patients.
					</p>
				</div>

				{/* Event Category Filters */}
				<div className="mb-8">
					<div className="flex flex-wrap gap-4">
						{eventCategories.map((category) => {
							const IconComponent = getEventIcon(category.name);
							return (
								<button
									key={category.name}
									onClick={() => setActiveFilter(category.name)}
									className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
										activeFilter === category.name
											? "bg-yellow-400 text-blue-900"
											: "bg-gray-200 text-gray-700 hover:bg-gray-300"
									}`}>
									<IconComponent className="text-lg" />
									<span>{category.name}</span>
									<span className="bg-white text-gray-600 px-2 py-1 rounded-full text-sm">
										{category.count}
									</span>
								</button>
							);
						})}
					</div>
				</div>

				{/* Event Section */}
				<div className="mb-16">
					<h3 className="text-2xl font-bold text-gray-900 mb-8">
						{activeFilter}
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{events[activeFilter as keyof typeof events]?.map((event) => (
							<div
								key={event.id}
								className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
								<div className="relative">
									<img
										src={event.image}
										alt={event.title}
										className="w-full h-48 object-cover"
									/>
									<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
										<FaUsers className="text-4xl text-white opacity-80" />
									</div>
								</div>
								<div className="p-6">
									<h4 className="text-lg font-bold text-gray-900 mb-3">
										{event.title}
									</h4>
									<p className="text-gray-600 text-sm mb-4">
										{event.description}
									</p>
									<button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors font-semibold">
										Learn More
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Expandable Sections */}
			<div className="max-w-7xl mx-auto px-4 pb-8">
				{/* Popular Tests Section */}
				<div className="bg-blue-600 text-white rounded-lg mb-4 overflow-hidden">
					<button
						onClick={() => setIsPopularTestsOpen(!isPopularTestsOpen)}
						className="w-full p-4 text-left flex items-center justify-between hover:bg-blue-700 transition-colors">
						<h3 className="text-lg font-semibold">Popular Tests</h3>
						{isPopularTestsOpen ? <FaChevronUp /> : <FaChevronDown />}
					</button>
					{isPopularTestsOpen && (
						<div className="p-4 pt-0 bg-blue-50 text-gray-800">
							<div className="flex flex-wrap gap-2">
								{popularTests.map((test, index) => (
									<span key={index} className="text-sm">
										{test}
										{index < popularTests.length - 1 && (
											<span className="text-gray-400 mx-1">|</span>
										)}
									</span>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Lab Test At Home Section */}
				<div className="bg-blue-600 text-white rounded-lg mb-8 overflow-hidden">
					<button
						onClick={() => setIsLabTestOpen(!isLabTestOpen)}
						className="w-full p-4 text-left flex items-center justify-between hover:bg-blue-700 transition-colors">
						<h3 className="text-lg font-semibold">Lab Test At Home</h3>
						{isLabTestOpen ? <FaChevronUp /> : <FaChevronDown />}
					</button>
					{isLabTestOpen && (
						<div className="p-4 pt-0 bg-blue-50 text-gray-800">
							<div className="flex flex-wrap gap-2">
								{labTestLocations.map((location, index) => (
									<span key={index} className="text-sm">
										{location}
										{index < labTestLocations.length - 1 && (
											<span className="text-gray-400 mx-1">|</span>
										)}
									</span>
								))}
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Callback Section */}
			<div className="bg-gradient-to-r from-yellow-400 to-orange-400 py-12">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<div className="flex flex-col md:flex-row items-center justify-center gap-8">
						<div className="flex items-center gap-4">
							<div className="bg-white p-4 rounded-full">
								<FaUsers className="text-3xl text-blue-600" />
							</div>
							<div className="text-left">
								<h3 className="text-xl font-bold text-blue-900 mb-2">
									Get a call back within 15 minutes from our Health Advisor for
									Test Booking Assistance
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
								className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold">
								Get a Callback
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Navigation */}
			<div className="bg-white border-t py-12">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-2 md:grid-cols-5 gap-8">
						<div>
							<h4 className="font-semibold text-gray-900 mb-4">PATIENTS</h4>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>
									<Link to="/book-test" className="hover:text-blue-600">
										Book A Test
									</Link>
								</li>
								<li>
									<Link to="/nearest-center" className="hover:text-blue-600">
										Nearest Centre
									</Link>
								</li>
								<li>
									<Link to="/download-report" className="hover:text-blue-600">
										Download Report
									</Link>
								</li>
								<li>
									<Link to="/download-app" className="hover:text-blue-600">
										Download App
									</Link>
								</li>
								<li>
									<Link to="/promotions" className="hover:text-blue-600">
										Promotions & Discounts
									</Link>
								</li>
								<li>
									<Link to="/special-programs" className="hover:text-blue-600">
										Special Program
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold text-gray-900 mb-4">DOCTORS</h4>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>
									<Link to="/test-menu" className="hover:text-blue-600">
										Test Menu
									</Link>
								</li>
								<li>
									<Link to="/labs" className="hover:text-blue-600">
										Our Labs
									</Link>
								</li>
								<li>
									<Link to="/events" className="hover:text-blue-600">
										Events
									</Link>
								</li>
								<li>
									<Link to="/quality" className="hover:text-blue-600">
										Quality
									</Link>
								</li>
								<li>
									<Link to="/resource-center" className="hover:text-blue-600">
										Resource Center
									</Link>
								</li>
								<li>
									<Link to="/departments" className="hover:text-blue-600">
										Our Departments
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold text-gray-900 mb-4">
								BUSINESS PARTNERSHIP
							</h4>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>
									<Link
										to="/business-partnership"
										className="hover:text-blue-600">
										Partner With Us
									</Link>
								</li>
								<li>
									<Link to="/become-vendor" className="hover:text-blue-600">
										Become A Vendor
									</Link>
								</li>
								<li>
									<Link to="/corporate-tie-up" className="hover:text-blue-600">
										Corporate Tie-up
									</Link>
								</li>
								<li>
									<Link
										to="/international-partnership"
										className="hover:text-blue-600">
										International PartnerShip
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold text-gray-900 mb-4">ABOUT US</h4>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>
									<Link to="/about" className="hover:text-blue-600">
										Our Journey
									</Link>
								</li>
								<li>
									<Link to="/vision-mission" className="hover:text-blue-600">
										Vision Mission & Values
									</Link>
								</li>
								<li>
									<Link to="/our-team" className="hover:text-blue-600">
										Our Team
									</Link>
								</li>
								<li>
									<Link to="/our-network" className="hover:text-blue-600">
										Our Network
									</Link>
								</li>
								<li>
									<Link to="/logistics" className="hover:text-blue-600">
										Logistics Strength
									</Link>
								</li>
								<li>
									<Link to="/csr" className="hover:text-blue-600">
										CSR
									</Link>
								</li>
								<li>
									<Link to="/career" className="hover:text-blue-600">
										Career
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold text-gray-900 mb-4">INVESTORS</h4>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>
									<Link to="/investors" className="hover:text-blue-600">
										Financial
									</Link>
								</li>
								<li>
									<Link
										to="/investor-information"
										className="hover:text-blue-600">
										Investor Information
									</Link>
								</li>
								<li>
									<Link
										to="/corporate-governance"
										className="hover:text-blue-600">
										Corporate Governance
									</Link>
								</li>
								<li>
									<Link to="/smart-odr" className="hover:text-blue-600">
										Smart ODR
									</Link>
								</li>
								<li>
									<Link to="/sebi-scores" className="hover:text-blue-600">
										SEBI Scores
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright Footer */}
			<div className="bg-blue-800 text-white py-4">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm">
							2025 © LalPathLabs.com All rights reserved. →→24.06.25.1
						</p>
						<div className="flex items-center gap-4 text-sm mt-2 md:mt-0">
							<Link to="/blog" className="hover:text-yellow-400">
								Blog
							</Link>
							<span>|</span>
							<Link to="/csr" className="hover:text-yellow-400">
								CSR
							</Link>
							<span>|</span>
							<Link to="/terms" className="hover:text-yellow-400">
								Terms of Use
							</Link>
							<span>|</span>
							<Link to="/privacy" className="hover:text-yellow-400">
								Privacy Policy
							</Link>
							<span>|</span>
							<Link to="/online-cancellation" className="hover:text-yellow-400">
								Online Cancellation Policy
							</Link>
							<span>|</span>
							<Link to="/cookie-policy" className="hover:text-yellow-400">
								Cookie Policy
							</Link>
							<span>|</span>
							<Link to="/sitemap" className="hover:text-yellow-400">
								SiteMap
							</Link>
						</div>
					</div>
					<div className="mt-4 flex justify-center items-center gap-4">
						<span className="text-sm">Follow us on:</span>
						<div className="flex gap-2">
							<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
								<span className="text-white text-sm">X</span>
							</div>
							<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
								<span className="text-white text-sm">f</span>
							</div>
							<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
								<span className="text-white text-sm">in</span>
							</div>
							<div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
								<span className="text-white text-sm">▶</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
