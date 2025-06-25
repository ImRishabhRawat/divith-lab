import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaHome,
	FaChevronDown,
	FaChevronUp,
	FaUsers,
	FaMicroscope,
	FaFlask,
	FaChartBar,
	FaBuilding,
	FaAward,
	FaClock,
	FaMapMarkerAlt,
	FaPhone,
} from "react-icons/fa";

const Labs = () => {
	const [isPopularTestsOpen, setIsPopularTestsOpen] = useState(false);
	const [isLabTestOpen, setIsLabTestOpen] = useState(false);
	const [callbackNumber, setCallbackNumber] = useState("");

	const departments = [
		{ name: "Haematology & Immunology", icon: FaFlask },
		{ name: "Clinical Diagnostics", icon: FaMicroscope },
		{ name: "Path Genetics", icon: FaChartBar },
		{ name: "Molecular Diagnostics", icon: FaAward },
		{ name: "Microbiology & Serology", icon: FaBuilding },
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
								🔬 Laboratory Excellence
							</div>
							<h1 className="text-5xl md:text-6xl font-bold leading-tight">
								Our
								<span className="block text-yellow-400">Labs</span>
							</h1>
							<p className="text-xl text-blue-100 leading-relaxed max-w-lg">
								State-of-the-art laboratories with cutting-edge technology and
								expert professionals delivering accurate diagnostics.
							</p>
							<div className="grid grid-cols-3 gap-6 pt-6">
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400">5</div>
									<div className="text-sm text-blue-200">Departments</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400">
										2000+
									</div>
									<div className="text-sm text-blue-200">Tests Daily</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400">24/7</div>
									<div className="text-sm text-blue-200">Operations</div>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-4">
								<button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-colors shadow-lg">
									Explore Facilities
								</button>
								<button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors">
									Book Test
								</button>
							</div>
						</div>
						<div className="relative">
							<div className="relative z-10">
								<img
									src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
									alt="Laboratory technician working"
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
						<span className="text-blue-600 font-medium">Our Labs</span>
					</nav>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 py-12">
				{/* National Reference Laboratory */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-8">
						National Reference Laboratory
					</h2>
					<div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
						<div>
							<p className="text-gray-700 mb-6">
								The National Reference Laboratory (NRL) of Dr Lal PathLabs
								meticulously fulfils the vision of the company in providing
								world class diagnostic services to help patients get the highest
								quality of results with quality. The Dr Lal Labs having core
								expertise during major technological advances in diagnostics
								with a team of well-trained pathologists and associate
								scientists; and having NRL laboratory technology at the time
								when most of the diagnostic laboratories are coming into the
								forefront and is available to serve the community and the nation
								for the diagnosis of the diseases.
							</p>
						</div>
						<div className="flex justify-center">
							<div className="relative">
								<img
									src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
									alt="National Reference Laboratory"
									className="rounded-lg shadow-md"
								/>
								<div className="absolute inset-0 flex items-center justify-center">
									<FaBuilding className="text-6xl text-blue-600 opacity-40" />
								</div>
							</div>
						</div>
					</div>

					{/* Statistics */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
						<div className="text-center">
							<div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-blue-600 flex items-center justify-center">
								<FaAward className="text-3xl text-blue-600" />
							</div>
							<div className="text-3xl font-bold text-blue-900 mb-2">24x7</div>
							<div className="text-sm text-gray-600">Service</div>
						</div>
						<div className="text-center">
							<div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-yellow-400 flex items-center justify-center">
								<FaChartBar className="text-3xl text-yellow-600" />
							</div>
							<div className="text-3xl font-bold text-blue-900 mb-2">4000+</div>
							<div className="text-sm text-gray-600">Tests Available</div>
						</div>
						<div className="text-center">
							<div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-blue-600 flex items-center justify-center">
								<FaUsers className="text-3xl text-blue-600" />
							</div>
							<div className="text-3xl font-bold text-blue-900 mb-2">600+</div>
							<div className="text-sm text-gray-600">Experts</div>
						</div>
						<div className="text-center">
							<div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-yellow-400 flex items-center justify-center">
								<FaClock className="text-3xl text-yellow-600" />
							</div>
							<div className="text-3xl font-bold text-blue-900 mb-2">85000</div>
							<div className="text-sm text-gray-600">Daily Reports</div>
						</div>
					</div>

					{/* Departments */}
					<div className="mb-12">
						<h3 className="text-2xl font-bold text-gray-900 mb-8">
							Our Departments
						</h3>
						<div className="grid grid-cols-2 md:grid-cols-5 gap-6">
							{departments.map((dept, index) => (
								<div
									key={index}
									className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
									<dept.icon className="text-3xl text-blue-600 mx-auto mb-4" />
									<h4 className="font-semibold text-gray-900 text-sm">
										{dept.name}
									</h4>
								</div>
							))}
						</div>
					</div>

					{/* Address */}
					<div className="bg-blue-50 rounded-lg p-6">
						<p className="text-sm text-gray-700">
							<strong>Address:</strong> National Reference Laboratory, Dr Lal
							PathLabs, Sector 18, Rohini, New Delhi-110085 (INDIA)
						</p>
						<div className="mt-4 flex items-center gap-4">
							<button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
								<FaMapMarkerAlt />
								View on Map
							</button>
						</div>
					</div>
				</div>

				{/* Radiant Reference Laboratory */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-8">
						Radiant Reference Laboratory
					</h2>
					<div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
						<div className="flex justify-center">
							<div className="relative">
								<img
									src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
									alt="Radiant Reference Laboratory"
									className="rounded-lg shadow-md"
								/>
								<div className="absolute inset-0 flex items-center justify-center">
									<FaFlask className="text-6xl text-blue-600 opacity-40" />
								</div>
							</div>
						</div>
						<div>
							<p className="text-gray-700 mb-6">
								The Radiant Reference Laboratory (RRL) of Dr Lal PathLabs is
								established as an exceptionally centre dedicated to advancing
								high-quality and accurate testing services to patients across
								various fields. Equipped with modern diagnostic equipment and
								staffed with experienced, RRL provides comprehensive test
								services, supporting the medical community with reliable,
								results-driven lab reports.
							</p>
						</div>
					</div>

					{/* Statistics */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
						<div className="text-center">
							<div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-blue-600 flex items-center justify-center">
								<FaBuilding className="text-3xl text-blue-600" />
							</div>
							<div className="text-3xl font-bold text-blue-900 mb-2">25000</div>
							<div className="text-sm text-gray-600">Sq Ft Area</div>
						</div>
						<div className="text-center">
							<div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-yellow-400 flex items-center justify-center">
								<FaClock className="text-3xl text-yellow-600" />
							</div>
							<div className="text-3xl font-bold text-blue-900 mb-2">
								24 x 7
							</div>
							<div className="text-sm text-gray-600">Operations</div>
						</div>
						<div className="text-center">
							<div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-blue-600 flex items-center justify-center">
								<FaChartBar className="text-3xl text-blue-600" />
							</div>
							<div className="text-3xl font-bold text-blue-900 mb-2">5</div>
							<div className="text-sm text-gray-600">Floors</div>
						</div>
					</div>

					{/* Departments */}
					<div className="mb-12">
						<h3 className="text-2xl font-bold text-gray-900 mb-8">
							Our Departments
						</h3>
						<div className="grid grid-cols-2 md:grid-cols-5 gap-6">
							{departments.map((dept, index) => (
								<div
									key={index}
									className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
									<dept.icon className="text-3xl text-blue-600 mx-auto mb-4" />
									<h4 className="font-semibold text-gray-900 text-sm">
										{dept.name}
									</h4>
								</div>
							))}
						</div>
					</div>

					{/* Address */}
					<div className="bg-blue-50 rounded-lg p-6">
						<p className="text-sm text-gray-700">
							<strong>Address:</strong> Pushpam Teh, 301, DDA Flat No. 1-48,
							-1-A-C, Sector-11B, Plot No. Rohini Sec 11, New Town, Rohini, -
							110085, 30-A Gurgaon (INDIA)
						</p>
						<div className="mt-4 flex items-center gap-4">
							<button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
								<FaMapMarkerAlt />
								View on Map
							</button>
						</div>
					</div>
				</div>

				{/* Satellite Laboratory */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-8">
						Satellite Laboratory
					</h2>
					<div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
						<div>
							<p className="text-gray-700 mb-6">
								Our Satellite Labs are an integral part of our comprehensive
								network designed to provide accurate and convenient testing
								services across various regions. These labs are equipped with
								high quality diagnostic equipment and staffed by experienced
								professionals to ensure consistent, reliable results. By
								strategically locating these satellite facilities, we bring our
								expertise closer to communities, ensuring that patients have
								easy access to essential diagnostic services. Each satellite lab
								is equipped to handle a wide range of tests while maintaining
								the same rigorous standards as our main laboratory facilities to
								ensure patient care.
							</p>
						</div>
						<div className="flex justify-center">
							<div className="relative">
								<img
									src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
									alt="Satellite Laboratory"
									className="rounded-lg shadow-md"
								/>
								<div className="absolute inset-0 flex items-center justify-center">
									<FaMicroscope className="text-6xl text-blue-600 opacity-40" />
								</div>
							</div>
						</div>
					</div>

					{/* Statistics */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
						<div className="text-center">
							<div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-blue-600 flex items-center justify-center">
								<FaBuilding className="text-3xl text-blue-600" />
							</div>
							<div className="text-3xl font-bold text-blue-900 mb-2">275</div>
							<div className="text-sm text-gray-600">Labs</div>
						</div>
						<div className="text-center">
							<div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-yellow-400 flex items-center justify-center">
								<FaUsers className="text-3xl text-yellow-600" />
							</div>
							<div className="text-3xl font-bold text-blue-900 mb-2">1800+</div>
							<div className="text-sm text-gray-600">Staff</div>
						</div>
						<div className="text-center">
							<div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-blue-600 flex items-center justify-center">
								<FaMapMarkerAlt className="text-3xl text-blue-600" />
							</div>
							<div className="text-3xl font-bold text-blue-900 mb-2">2500</div>
							<div className="text-sm text-gray-600">Locations</div>
						</div>
						<div className="text-center">
							<div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-yellow-400 flex items-center justify-center">
								<FaClock className="text-3xl text-yellow-600" />
							</div>
							<div className="text-3xl font-bold text-blue-900 mb-2">24</div>
							<div className="text-sm text-gray-600">Hours Service</div>
						</div>
					</div>

					{/* Departments */}
					<div className="mb-12">
						<h3 className="text-2xl font-bold text-gray-900 mb-8">
							Our Departments
						</h3>
						<div className="grid grid-cols-2 md:grid-cols-5 gap-6">
							{departments.map((dept, index) => (
								<div
									key={index}
									className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
									<dept.icon className="text-3xl text-blue-600 mx-auto mb-4" />
									<h4 className="font-semibold text-gray-900 text-sm">
										{dept.name}
									</h4>
								</div>
							))}
						</div>
					</div>

					{/* View More Button */}
					<div className="text-center">
						<button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold">
							View More Labs
						</button>
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

export default Labs;
