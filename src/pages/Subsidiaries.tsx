import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaHome,
	FaChevronDown,
	FaChevronUp,
	FaUsers,
	FaNetworkWired,
	FaBuilding,
} from "react-icons/fa";

const Subsidiaries = () => {
	const [isPopularTestsOpen, setIsPopularTestsOpen] = useState(false);
	const [isLabTestOpen, setIsLabTestOpen] = useState(false);
	const [callbackNumber, setCallbackNumber] = useState("");

	const subsidiaries = [
		{
			id: 1,
			name: "Central Lab",
			subtitle: "Part of Dr Lal PathLabs",
			logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
			description: "Leading diagnostic services",
		},
		{
			id: 2,
			name: "PathVets",
			subtitle: "Veterinary Diagnostics",
			logo: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
			description: "Animal healthcare diagnostics",
		},
		{
			id: 3,
			name: "Bawankar Pathology",
			subtitle: "Part of Dr Lal PathLabs",
			logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
			description: "Regional diagnostic excellence",
		},
		{
			id: 4,
			name: "Bindish Diagnostic Laboratory",
			subtitle: "Part of Dr Lal PathLabs",
			logo: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
			description: "Comprehensive lab services",
		},
		{
			id: 5,
			name: "Modern Diagnostics",
			subtitle: "Part of Dr Lal PathLabs",
			logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
			description: "Modern diagnostic solutions",
		},
		{
			id: 6,
			name: "Shree Computerised Pathology",
			subtitle: "Part of Dr Lal PathLabs",
			logo: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
			description: "Digital pathology services",
		},
		{
			id: 7,
			name: "Chandra Diagnostics",
			subtitle: "Part of Dr Lal PathLabs",
			logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
			description: "Advanced diagnostic testing",
		},
		{
			id: 8,
			name: "Pathwal",
			subtitle: "Part of Dr Lal PathLabs",
			logo: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
			description: "Specialized medical testing",
		},
		{
			id: 9,
			name: "Amins Pathology Pvt Ltd",
			subtitle: "Part of Dr Lal PathLabs",
			logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
			description: "Regional pathology services",
		},
		{
			id: 10,
			name: "Suburban Diagnostics",
			subtitle: "Diagnostic Excellence",
			logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
			description: "Urban diagnostic solutions",
		},
	];

	const subsidiaryList = [
		{
			name: "Centropath Lab Pvt Ltd",
			location: "Suburban Diagnostics Centre",
			partner: "Modern Diagnostics",
			company: "Pathwal Medicare Pvt Ltd",
		},
		{
			name: "Pathwal Diagnostics Pvt Ltd",
			location: "Bawankar Pathology",
			partner: "Amins Pathology Pvt Ltd",
			company: "Bindish Diagnostic Laboratory",
		},
		{
			name: "Chandra Pathology Pvt Ltd",
			location: "Shree Computerised Pathology",
			partner: "PathVets",
			company: "",
		},
	];

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
		"Agarala",
		"Agra",
		"Ahmedabad",
		"Allgarh",
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

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
					<div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
					<div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
				</div>

				{/* Curved bottom */}
				<div className="absolute bottom-0 left-0 w-full">
					<svg
						className="w-full h-20"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none">
						<path
							d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"
							fill="rgb(249 250 251)"
						/>
					</svg>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 py-20">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
								🏢 Our Network
							</div>
							<h1 className="text-5xl md:text-6xl font-bold leading-tight">
								Our
								<span className="block text-yellow-400">Subsidiaries</span>
							</h1>
							<p className="text-xl text-blue-100 leading-relaxed max-w-lg">
								Expanding healthcare excellence through our network of
								specialized diagnostic companies across India.
							</p>
							<div className="grid grid-cols-3 gap-6 pt-6">
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400">10+</div>
									<div className="text-sm text-blue-200">Subsidiaries</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400">50+</div>
									<div className="text-sm text-blue-200">Cities</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400">100+</div>
									<div className="text-sm text-blue-200">Centers</div>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-4">
								<button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-colors shadow-lg">
									Explore Network
								</button>
								<button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors">
									Learn More
								</button>
							</div>
						</div>
						<div className="relative">
							<div className="relative z-10">
								<img
									src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
									alt="Network connections representing subsidiaries"
									className="rounded-2xl shadow-2xl w-full"
								/>
							</div>
							<div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-2xl blur-3xl"></div>
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
						<span className="text-blue-600 font-medium">Our Subsidiaries</span>
					</nav>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 py-12">
				{/* Section Title */}
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Our Subsidiaries
					</h2>
				</div>

				{/* Subsidiaries Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
					{subsidiaries.map((subsidiary) => (
						<div
							key={subsidiary.id}
							className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
							<div className="flex flex-col items-center text-center">
								<div className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
									<FaBuilding className="text-2xl text-blue-600" />
								</div>
								<h3 className="font-bold text-gray-900 mb-2">
									{subsidiary.name}
								</h3>
								<p className="text-sm text-blue-600 mb-2">
									{subsidiary.subtitle}
								</p>
								<p className="text-xs text-gray-600">
									{subsidiary.description}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* About Us Section */}
				<div className="bg-white rounded-lg shadow-sm border p-8 mb-12">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								About Us
							</h2>
							<div className="space-y-4 text-gray-600">
								<p>
									Dr Lal PathLabs is leading the diagnostic industry with a
									focus on bringing quality diagnostic by providing accurate and
									timely tests to our valued customers. With a commitment to
									medical excellence and with a range of comprehensive test
									panels, Dr Lal PathLabs is your trusted partner in promoting
									good health and overall well-being.
								</p>
								<p>
									As we continue our quest to provide comprehensive and
									cutting-edge diagnostic services, we are proud to introduce
									our subsidiaries. They are instrumental and each plays a vital
									role in advancing our mission to provide comprehensive, high-
									quality diagnostic solutions to the test suite.
								</p>
								<p>
									At Dr Lal PathLabs, our subsidiaries help us expand our
									commitment to "Create Healthier lives". Each subsidiary plays
									a distinctive role in contributing to our mission of providing
									top-notch, comprehensive healthcare solutions to individuals
									and communities alike.
								</p>
								<p className="font-semibold text-gray-900 mt-6">
									List of our Subsidiaries are as below:
								</p>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="relative">
								<img
									src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
									alt="Team collaboration illustration"
									className="rounded-lg shadow-md"
								/>
								<div className="absolute inset-0 flex items-center justify-center">
									<FaUsers className="text-4xl text-blue-600 opacity-60" />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Subsidiaries List */}
				<div className="bg-white rounded-lg shadow-sm border overflow-hidden mb-12">
					<div className="px-6 py-4 bg-gray-50 border-b">
						<h3 className="text-lg font-semibold text-gray-900">Our Network</h3>
					</div>
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Centropath Lab Pvt Ltd
									</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Suburban Diagnostics Centre
									</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Modern Diagnostics
									</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Pathwal Medicare Pvt Ltd
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{subsidiaryList.map((item, index) => (
									<tr key={index} className="hover:bg-gray-50">
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
											{item.name}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
											{item.location}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
											{item.partner}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
											{item.company}
										</td>
									</tr>
								))}
							</tbody>
						</table>
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
		</div>
	);
};

export default Subsidiaries;
