import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaHome,
	FaEye,
	FaEyeSlash,
	FaChevronDown,
	FaChevronUp,
	FaUsers,
	FaShieldAlt,
	FaDownload,
} from "react-icons/fa";

const DownloadReport = () => {
	const [labId, setLabId] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [isPopularTestsOpen, setIsPopularTestsOpen] = useState(false);
	const [isLabTestOpen, setIsLabTestOpen] = useState(false);
	const [callbackNumber, setCallbackNumber] = useState("");

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

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!labId.trim()) {
			alert("Please enter your Lab / Visit ID");
			return;
		}
		if (!password.trim()) {
			alert("Please enter your password");
			return;
		}
		// Simulate report access
		alert(`Accessing reports for Lab ID: ${labId}`);
	};

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

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Breadcrumb */}
			<div className="bg-white border-b">
				<div className="max-w-7xl mx-auto px-4 py-3">
					<nav className="text-sm text-gray-600">
						<Link to="/" className="hover:text-blue-600 transition-colors">
							<FaHome className="inline mr-1" />
							Home
						</Link>
						<span className="mx-2">&gt;</span>
						<span className="text-blue-600 font-medium">Download Report</span>
					</nav>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 py-8">
				<div className="grid lg:grid-cols-2 gap-8">
					{/* Left Side - Login Form */}
					<div className="bg-blue-50 rounded-lg p-8">
						<div className="max-w-md mx-auto">
							<h1 className="text-2xl font-bold text-blue-900 mb-6 text-center">
								View All Your Test Reports
							</h1>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Enter Lab / Visit ID*
									</label>
									<input
										type="text"
										value={labId}
										onChange={(e) => setLabId(e.target.value)}
										placeholder="Enter Lab / Visit ID"
										className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										required
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Password*
									</label>
									<div className="relative">
										<input
											type={showPassword ? "text" : "password"}
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											placeholder="Password"
											className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											required
										/>
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
											{showPassword ? <FaEyeSlash /> : <FaEye />}
										</button>
									</div>
								</div>

								{/* reCAPTCHA placeholder */}
								<div className="flex items-center space-x-3 p-3 border border-gray-300 rounded-md bg-gray-50">
									<input type="checkbox" className="w-5 h-5" />
									<span className="text-sm text-gray-600">I'm not a robot</span>
									<div className="ml-auto">
										<div className="text-xs text-gray-500">
											<div>reCAPTCHA</div>
											<div>Privacy - Terms</div>
										</div>
									</div>
								</div>

								<button
									type="submit"
									className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2">
									<FaDownload />
									Submit
								</button>
							</form>
						</div>
					</div>

					{/* Right Side - Promotional Banner */}
					<div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 rounded-lg p-8 flex items-center relative overflow-hidden">
						<div className="z-10 max-w-md">
							<div className="bg-blue-600 text-white px-4 py-2 rounded-md inline-block mb-4">
								<span className="text-sm font-semibold">The Best</span>
							</div>
							<div className="bg-blue-700 text-white px-4 py-2 rounded-md inline-block mb-4">
								<span className="text-lg font-bold">Preventive</span>
							</div>
							<div className="bg-red-600 text-white px-6 py-3 rounded-md mb-6">
								<span className="text-xl font-bold">
									Health Packages Got Even Better!
								</span>
							</div>
							<div className="mb-6">
								<h2 className="text-3xl font-bold text-blue-900 mb-2">
									Swasth<span className="text-red-600">FIT</span> Health
									Packages
								</h2>
							</div>
							<div className="flex items-center gap-4">
								<span className="text-lg text-gray-600 line-through">
									₹1000
								</span>
								<span className="text-4xl font-bold text-blue-900">₹399</span>
								<span className="text-lg text-gray-700">
									HbA1c, Cholesterol & TSH
								</span>
							</div>
						</div>
						<div className="absolute right-0 top-0 h-full w-1/2">
							<img
								src="/api/placeholder/300/400"
								alt="Healthcare professionals"
								className="h-full w-full object-cover rounded-r-lg"
							/>
							<div className="absolute inset-0 flex items-center justify-center">
								<FaShieldAlt className="text-6xl text-blue-600 opacity-40" />
							</div>
						</div>
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

export default DownloadReport;
