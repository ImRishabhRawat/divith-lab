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
			<div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex items-center justify-between">
					<div className="text-left max-w-xl">
						<h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
							Investors
						</h1>
					</div>
					<div className="hidden md:block">
						<img
							src="/api/placeholder/500/300"
							alt="Business analytics and investment"
							className="rounded-lg shadow-lg"
						/>
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
