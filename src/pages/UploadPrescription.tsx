import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaHome,
	FaChevronDown,
	FaChevronUp,
	FaUpload,
	FaUsers,
	FaPhone,
} from "react-icons/fa";

const UploadPrescription = () => {
	const [formData, setFormData] = useState({
		patientName: "",
		email: "",
		phoneNumber: "",
		patientCity: "",
		prescription: null as File | null,
	});
	const [isPopularTestsOpen, setIsPopularTestsOpen] = useState(false);
	const [isLabTestOpen, setIsLabTestOpen] = useState(false);
	const [isOtpSent, setIsOtpSent] = useState(false);
	const [callbackNumber, setCallbackNumber] = useState("");
	const [uploadedFileName, setUploadedFileName] = useState("");

	const cities = [
		"Select City",
		"Delhi",
		"Mumbai",
		"Bangalore",
		"Chennai",
		"Hyderabad",
		"Pune",
		"Kolkata",
		"Ahmedabad",
		"Jaipur",
		"Lucknow",
		"Kanpur",
		"Nagpur",
		"Indore",
		"Bhopal",
		"Visakhapatnam",
		"Ludhiana",
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

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			if (file.size > 2 * 1024 * 1024) {
				// 2MB in bytes
				alert("File size should not exceed 2MB");
				return;
			}
			setFormData((prev) => ({
				...prev,
				prescription: file,
			}));
			setUploadedFileName(file.name);
		}
	};

	const handleSendOtp = () => {
		if (formData.phoneNumber.length === 10) {
			setIsOtpSent(true);
			alert("OTP sent to your mobile number!");
		} else {
			alert("Please enter a valid 10-digit phone number");
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Validate required fields
		if (!formData.patientName.trim()) {
			alert("Please enter patient name");
			return;
		}
		if (!formData.phoneNumber.trim() || formData.phoneNumber.length !== 10) {
			alert("Please enter a valid 10-digit phone number");
			return;
		}
		if (!formData.patientCity || formData.patientCity === "Select City") {
			alert("Please select patient city");
			return;
		}
		if (!formData.prescription) {
			alert("Please attach prescription");
			return;
		}
		if (!isOtpSent) {
			alert("Please verify your phone number with OTP");
			return;
		}

		// Submit form
		alert(
			"Prescription uploaded successfully! Our team will call you back for home collection confirmation."
		);

		// Reset form
		setFormData({
			patientName: "",
			email: "",
			phoneNumber: "",
			patientCity: "",
			prescription: null,
		});
		setIsOtpSent(false);
		setUploadedFileName("");
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
						<span className="text-blue-600 font-medium">
				Upload Prescription
						</span>
					</nav>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-4xl mx-auto px-4 py-8">
				{/* Form Section */}
				<div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
					<h1 className="text-2xl font-bold text-gray-900 mb-2">
						Home Collection Query Form
			</h1>
					<p className="text-gray-600 mb-6">
						Hi there, Don't know which test/package to choose from? Nothing to
						worry about! Please fill in the details below and someone from our
						team will call back for home collection confirmation
					</p>
					<p className="text-red-600 text-sm mb-6">
						<strong>Note:</strong> Fields marked with * are mandatory.
					</p>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
							{/* Patient Name */}
							<div>
								<label
									htmlFor="patientName"
									className="block text-sm font-medium text-gray-700 mb-2">
									Patient Name*
								</label>
								<input
									type="text"
									id="patientName"
									name="patientName"
									value={formData.patientName}
									onChange={handleInputChange}
									placeholder="Name of Contact Person"
									className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									required
								/>
							</div>

							{/* Email */}
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-2">
									E-mail
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									placeholder="Email"
									className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
							</div>
						</div>

						<div className="grid md:grid-cols-2 gap-6">
							{/* Phone Number */}
							<div>
								<label
									htmlFor="phoneNumber"
									className="block text-sm font-medium text-gray-700 mb-2">
									Phone Number*
								</label>
								<div className="flex gap-2">
									<input
										type="tel"
										id="phoneNumber"
										name="phoneNumber"
										value={formData.phoneNumber}
										onChange={handleInputChange}
										placeholder="Phone Number"
										maxLength={10}
										className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										required
									/>
									<button
										type="button"
										onClick={handleSendOtp}
										className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold transition-colors">
										Send OTP
									</button>
								</div>
								{isOtpSent && (
									<p className="text-green-600 text-sm mt-2">
										✓ OTP sent successfully
									</p>
								)}
							</div>

							{/* Patient City */}
							<div>
								<label
									htmlFor="patientCity"
									className="block text-sm font-medium text-gray-700 mb-2">
									Patient City*
								</label>
								<select
									id="patientCity"
									name="patientCity"
									value={formData.patientCity}
									onChange={handleInputChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									required>
									{cities.map((city) => (
										<option
											key={city}
											value={city}
											disabled={city === "Select City"}>
											{city}
										</option>
									))}
								</select>
							</div>
						</div>

						{/* File Upload */}
						<div>
							<label
								htmlFor="prescription"
								className="block text-sm font-medium text-gray-700 mb-2">
								Attach Prescription (Max size 2MB)*
							</label>
							<div className="flex items-center gap-4">
								<label className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md cursor-pointer transition-colors flex items-center gap-2">
									<FaUpload />
									Choose File
									<input
										type="file"
										id="prescription"
										accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
										onChange={handleFileUpload}
										className="hidden"
										required
									/>
								</label>
								<span className="text-gray-600">
									{uploadedFileName || "No file chosen"}
								</span>
							</div>
							<p className="text-xs text-gray-500 mt-2">
								Supported formats: JPG, PNG, PDF, DOC, DOCX (Max 2MB)
							</p>
						</div>

						{/* Submit Button */}
						<div className="text-center">
							<button
								type="submit"
								className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors flex items-center gap-2 mx-auto">
								Submit
								<span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center">
									→
								</span>
							</button>
						</div>
					</form>
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

export default UploadPrescription;
