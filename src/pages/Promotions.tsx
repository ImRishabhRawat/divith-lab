import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaHome,
	FaChevronDown,
	FaChevronUp,
	FaUsers,
	FaGift,
	FaPercent,
	FaCalendarAlt,
	FaTags,
} from "react-icons/fa";

const Promotions = () => {
	const [activeTab, setActiveTab] = useState("Family Offer");
	const [isPopularTestsOpen, setIsPopularTestsOpen] = useState(false);
	const [isLabTestOpen, setIsLabTestOpen] = useState(false);
	const [callbackNumber, setCallbackNumber] = useState("");

	const tabs = ["Family Offer", "Senior Citizen", "Home Collection Exclusive"];

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

	const renderOfferContent = () => {
		switch (activeTab) {
			case "Family Offer":
				return (
					<div className="bg-white rounded-lg shadow-sm border p-8">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-2xl font-bold text-gray-900 mb-6">
									Family Offer on Swasthfit Healthcare Packages
								</h2>
								<div className="mb-6">
									<p className="text-lg text-blue-600 font-semibold mb-4">
										Offer : Upto 30% OFF on single booking & upto 40% OFF on
										double booking of the packages
									</p>
								</div>
								<div className="space-y-4 text-gray-700">
									<div>
										<h3 className="font-semibold text-gray-900 mb-2">T&Cs:</h3>
										<ul className="space-y-2 text-sm">
											<li>1. Applicable on select Swasthfit packages only</li>
											<li>
												2. Ask the centre/technician for more details on
												packages & coupon code
											</li>
											<li>3. Offer is valid till 30th June, 2025</li>
											<li>
												4. Coupon discount cannot be clubbed with any other
												discount like corporate or senior citizen discount
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="flex justify-center">
								<div className="relative">
									<img
										src="/api/placeholder/400/300"
										alt="Happy family with healthcare packages"
										className="rounded-lg shadow-md"
									/>
									<div className="absolute inset-0 flex items-center justify-center">
										<FaUsers className="text-6xl text-blue-600 opacity-40" />
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			case "Senior Citizen":
				return (
					<div className="bg-white rounded-lg shadow-sm border p-8">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-2xl font-bold text-gray-900 mb-6">
									Senior Citizen Special Offers
								</h2>
								<div className="mb-6">
									<p className="text-lg text-blue-600 font-semibold mb-4">
										Special discounts for senior citizens on comprehensive
										health packages
									</p>
								</div>
								<div className="space-y-4 text-gray-700">
									<div>
										<h3 className="font-semibold text-gray-900 mb-2">
											Benefits:
										</h3>
										<ul className="space-y-2 text-sm">
											<li>• Up to 25% discount on selected health packages</li>
											<li>• Priority booking and faster service</li>
											<li>• Dedicated senior citizen helpline</li>
											<li>• Home collection available</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="flex justify-center">
								<div className="relative">
									<img
										src="/api/placeholder/400/300"
										alt="Senior citizen healthcare"
										className="rounded-lg shadow-md"
									/>
									<div className="absolute inset-0 flex items-center justify-center">
										<FaPercent className="text-6xl text-blue-600 opacity-40" />
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			case "Home Collection Exclusive":
				return (
					<div className="bg-white rounded-lg shadow-sm border p-8">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-2xl font-bold text-gray-900 mb-6">
									Home Collection Exclusive Offers
								</h2>
								<div className="mb-6">
									<p className="text-lg text-blue-600 font-semibold mb-4">
										Exclusive discounts on home collection services
									</p>
								</div>
								<div className="space-y-4 text-gray-700">
									<div>
										<h3 className="font-semibold text-gray-900 mb-2">
											Features:
										</h3>
										<ul className="space-y-2 text-sm">
											<li>• Free home collection on orders above ₹500</li>
											<li>• Same day report delivery</li>
											<li>• Trained phlebotomists</li>
											<li>• Safe and hygienic collection process</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="flex justify-center">
								<div className="relative">
									<img
										src="/api/placeholder/400/300"
										alt="Home collection service"
										className="rounded-lg shadow-md"
									/>
									<div className="absolute inset-0 flex items-center justify-center">
										<FaGift className="text-6xl text-blue-600 opacity-40" />
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex items-center justify-between">
					<div className="text-left max-w-xl">
						<h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
							Promotions &<br />
							Discounts
						</h1>
					</div>
					<div className="hidden md:block">
						<div className="relative">
							<img
								src="/api/placeholder/500/300"
								alt="Healthcare professional with microscope"
								className="rounded-lg shadow-lg"
							/>
							<div className="absolute inset-0 flex items-center justify-center">
								<FaTags className="text-6xl text-blue-600 opacity-80" />
							</div>
						</div>
					</div>
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
						<span className="text-blue-600 font-medium">Special Offers</span>
					</nav>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 py-12">
				{/* Section Title */}
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Special Offers
					</h2>
				</div>

				{/* Tabs */}
				<div className="mb-8">
					<div className="flex flex-wrap gap-2">
						{tabs.map((tab) => (
							<button
								key={tab}
								onClick={() => setActiveTab(tab)}
								className={`px-6 py-3 rounded-full font-medium transition-colors ${
									activeTab === tab
										? "bg-yellow-400 text-blue-900"
										: "bg-gray-200 text-gray-700 hover:bg-gray-300"
								}`}>
								{tab}
							</button>
						))}
					</div>
				</div>

				{/* Offer Content */}
				{renderOfferContent()}
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
									<Link to="/our-labs" className="hover:text-blue-600">
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

export default Promotions;
