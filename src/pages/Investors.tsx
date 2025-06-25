import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import {
	FaChevronDown,
	FaChevronUp,
	FaDownload,
	FaPhone,
	FaUsers,
	FaChartLine,
	FaFileAlt,
} from "react-icons/fa";

const Investors = () => {
	const [activeTab, setActiveTab] = useState("financials");
	const [isPopularTestsOpen, setIsPopularTestsOpen] = useState(false);
	const [isLabTestOpen, setIsLabTestOpen] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState("");

	const breadcrumbItems = [
		{ label: "Home", href: "/" },
		{ label: "Investors", isActive: true },
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
		"Chandigarh",
		"Chennai",
		"Coimbatore",
		"Cuttack",
		"Darbhanga",
		"Dausa",
		"Dehradun",
		"Delhi",
		"Dhanbad",
		"Faizabad",
		"Faridabad",
		"Firozpur",
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
		if (phoneNumber.length === 10) {
			alert(
				"Callback request submitted! Our health advisor will call you within 15 minutes."
			);
			setPhoneNumber("");
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
					<div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
					<div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
					<div className="absolute inset-0 opacity-10">
						<div className="absolute top-16 left-16 w-3 h-3 bg-white transform rotate-45"></div>
						<div className="absolute top-32 right-24 w-2 h-2 bg-white transform rotate-45"></div>
						<div className="absolute bottom-24 left-32 w-4 h-4 bg-white transform rotate-45"></div>
						<div className="absolute bottom-16 right-16 w-2 h-2 bg-white transform rotate-45"></div>
						<div className="absolute top-1/2 left-1/3 w-3 h-3 bg-white transform rotate-45"></div>
						<div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white transform rotate-45"></div>
						<div className="absolute top-3/4 left-1/2 w-3 h-3 bg-white transform rotate-45"></div>
					</div>
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

				<div className="relative max-w-7xl mx-auto px-4 py-24">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
								📈 Investment Opportunities
							</div>
							<h1 className="text-6xl font-bold leading-tight">
								Investor
								<span className="block text-yellow-400">Relations</span>
							</h1>
							<p className="text-xl text-blue-100 leading-relaxed max-w-lg">
								Discover growth opportunities with India's leading diagnostic
								healthcare company. Strong fundamentals, consistent growth, and
								expanding market presence.
							</p>
							<div className="grid grid-cols-3 gap-6 pt-6">
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400">25%</div>
									<div className="text-sm text-blue-200">YoY Growth</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400">
										₹500Cr
									</div>
									<div className="text-sm text-blue-200">Revenue</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400">200+</div>
									<div className="text-sm text-blue-200">Centers</div>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-4">
								<button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-colors shadow-lg">
									View Financials
								</button>
								<button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors">
									Download Reports
								</button>
							</div>
						</div>
						<div className="relative">
							<div className="relative z-10">
								<img
									src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
									alt="Business analytics and investment"
									className="rounded-2xl shadow-2xl w-full"
								/>
							</div>
							<div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-2xl blur-3xl"></div>
						</div>
					</div>
				</div>
			</div>

			{/* Breadcrumb */}
			<Breadcrumb items={breadcrumbItems} />

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 py-8">
				{/* Tab Navigation */}
				<div className="mb-8">
					<div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
						<button
							onClick={() => setActiveTab("financials")}
							className={`px-6 py-3 rounded-md font-medium transition-colors ${
								activeTab === "financials"
									? "bg-yellow-400 text-blue-900 shadow-sm"
									: "text-gray-600 hover:text-gray-800"
							}`}>
							<FaChartLine className="inline mr-2" />
							Financials
						</button>
						<button
							onClick={() => setActiveTab("information")}
							className={`px-6 py-3 rounded-md font-medium transition-colors ${
								activeTab === "information"
									? "bg-yellow-400 text-blue-900 shadow-sm"
									: "text-gray-600 hover:text-gray-800"
							}`}>
							<FaFileAlt className="inline mr-2" />
							Investors Information
						</button>
						<button
							onClick={() => setActiveTab("governance")}
							className={`px-6 py-3 rounded-md font-medium transition-colors ${
								activeTab === "governance"
									? "bg-yellow-400 text-blue-900 shadow-sm"
									: "text-gray-600 hover:text-gray-800"
							}`}>
							<FaUsers className="inline mr-2" />
							Corporate Governance
						</button>
					</div>
				</div>

				{/* Tab Content */}
				{activeTab === "financials" && (
					<div className="bg-white rounded-lg shadow-sm p-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
							Disclosures under Regulation 46 of the SEBI (LODR) Regulations,
							2015
						</h2>

						{/* Dropdowns Section */}
						<div className="grid md:grid-cols-2 gap-6 mb-8">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Annual Report
								</label>
								<select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
									<option>Annual Report</option>
									<option>Annual Report 2023-24</option>
									<option>Annual Report 2022-23</option>
									<option>Annual Report 2021-22</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Annual Report 2024-25
								</label>
								<select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
									<option>Annual Report 2024-25</option>
									<option>Q1 Report 2024-25</option>
									<option>Q2 Report 2024-25</option>
									<option>Q3 Report 2024-25</option>
								</select>
							</div>
						</div>

						{/* Download Link */}
						<div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
							<FaDownload className="text-blue-600" />
							<a
								href="#"
								className="text-blue-600 hover:text-blue-800 font-medium"
								onClick={(e) => {
									e.preventDefault();
									alert("Annual Report 2024-25 download started");
								}}>
								Annual Report 2024-25
							</a>
						</div>
					</div>
				)}

				{activeTab === "information" && (
					<div className="bg-white rounded-lg shadow-sm p-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-6">
							Investor Information
						</h2>
						<div className="space-y-6">
							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-3">
									Corporate Information
								</h3>
								<p className="text-gray-600 mb-4">
									DIVITH LABS is committed to providing transparent and timely
									information to our investors. We maintain the highest
									standards of corporate governance and financial reporting.
								</p>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-3">
									Key Investor Resources
								</h3>
								<ul className="list-disc list-inside text-gray-600 space-y-2">
									<li>Quarterly Financial Results</li>
									<li>Annual Reports and Presentations</li>
									<li>Investor Calls and Webcasts</li>
									<li>Corporate Announcements</li>
									<li>Shareholder Information</li>
								</ul>
							</div>
						</div>
					</div>
				)}

				{activeTab === "governance" && (
					<div className="bg-white rounded-lg shadow-sm p-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-6">
							Corporate Governance
						</h2>
						<div className="space-y-6">
							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-3">
									Board of Directors
								</h3>
								<p className="text-gray-600 mb-4">
									Our Board of Directors brings together diverse expertise and
									experience to guide the strategic direction of DIVITH LABS.
								</p>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-3">
									Governance Policies
								</h3>
								<ul className="list-disc list-inside text-gray-600 space-y-2">
									<li>Code of Conduct</li>
									<li>Whistleblower Policy</li>
									<li>Risk Management Framework</li>
									<li>Audit Committee Charter</li>
									<li>Related Party Transaction Policy</li>
								</ul>
							</div>
						</div>
					</div>
				)}
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
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
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

export default Investors;
