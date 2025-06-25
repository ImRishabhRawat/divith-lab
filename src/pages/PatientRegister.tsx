import React, { useState, useEffect } from "react";
import {
	FaUser,
	FaFlask,
	FaCheck,
	FaArrowLeft,
	FaArrowRight,
	FaUpload,
	FaCalendar,
	FaPhone,
	FaEnvelope,
} from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";

interface FormData {
	// General Details
	mobileNumber: string;
	date: string;
	regNo: string;
	prefix: string;
	firstName: string;
	lastName: string;
	relationshipType: string;
	relationshipName: string;
	address1: string;
	address2: string;
	city: string;
	state: string;
	aadhar: string;
	aadharFile: File | null;
	email: string;
	gender: string;
	dateOfBirth: string;
	refByDoctor: string;
	refByHospital: string;
	remark: string;
	remarkFile: File | null;

	// Sample & Payment Info
	testParticulars: string;
	sampleDate: string;
	sampleNo: string;
	colCenter: string;
	sampleBy: string;
	cashBy: string;
	paymentMode: string;
	image: File | null;
}

const PatientRegister: React.FC = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState<FormData>({
		mobileNumber: "",
		date: "",
		regNo: "",
		prefix: "",
		firstName: "",
		lastName: "",
		relationshipType: "",
		relationshipName: "",
		address1: "",
		address2: "",
		city: "",
		state: "",
		aadhar: "",
		aadharFile: null,
		email: "",
		gender: "",
		dateOfBirth: "",
		refByDoctor: "",
		refByHospital: "",
		remark: "",
		remarkFile: null,
		testParticulars: "",
		sampleDate: "",
		sampleNo: "",
		colCenter: "",
		sampleBy: "",
		cashBy: "",
		paymentMode: "",
		image: null,
	});

	const [errors, setErrors] = useState<Record<string, string>>({});

	// Auto-fill date and generate registration number on component mount
	useEffect(() => {
		const today = new Date().toISOString().split("T")[0];
		const regNumber = `DIV${Date.now().toString().slice(-6)}`;
		setFormData((prev) => ({
			...prev,
			date: today,
			regNo: regNumber,
		}));
	}, []);

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value, type } = e.target;

		if (type === "file") {
			const fileInput = e.target as HTMLInputElement;
			const file = fileInput.files?.[0] || null;
			setFormData((prev) => ({ ...prev, [name]: file }));
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}

		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const validateStep = (step: number): boolean => {
		const newErrors: Record<string, string> = {};

		if (step === 1) {
			if (!formData.mobileNumber.trim())
				newErrors.mobileNumber = "Mobile number is required";
			else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber))
				newErrors.mobileNumber = "Please enter a valid 10-digit mobile number";

			if (!formData.firstName.trim())
				newErrors.firstName = "First name is required";
			if (!formData.lastName.trim())
				newErrors.lastName = "Last name is required";
			if (!formData.email.trim()) newErrors.email = "Email is required";
			else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
				newErrors.email = "Please enter a valid email address";

			if (!formData.gender) newErrors.gender = "Gender is required";
			if (!formData.dateOfBirth)
				newErrors.dateOfBirth = "Date of birth is required";
		}

		if (step === 2) {
			if (!formData.testParticulars.trim())
				newErrors.testParticulars = "Test particulars are required";
			if (!formData.sampleDate)
				newErrors.sampleDate = "Sample date is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleNext = () => {
		if (validateStep(currentStep)) {
			setCurrentStep((prev) => prev + 1);
		}
	};

	const handlePrevious = () => {
		setCurrentStep((prev) => prev - 1);
		setErrors({});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateStep(2)) {
			console.log("Form submitted:", formData);
			alert(
				"Registration submitted successfully! You will receive a confirmation shortly."
			);
		}
	};

	const renderStepIndicator = () => {
		const steps = [
			{ title: "General Details", icon: FaUser },
			{ title: "Test & Payment", icon: FaFlask },
			{ title: "Review & Submit", icon: FaCheck },
		];

		return (
			<div className="flex items-center justify-center mb-8 px-4">
				{steps.map((step, index) => (
					<div key={index} className="flex items-center">
						<div className="flex flex-col items-center">
							<div
								className={`flex items-center justify-center w-12 h-12 rounded-full border-2 font-semibold transition-all duration-300 ${
									currentStep > index + 1
										? "bg-green-500 text-white border-green-500"
										: currentStep === index + 1
										? "bg-[#256393] text-white border-[#256393]"
										: "bg-gray-200 text-gray-600 border-gray-300"
								}`}>
								{currentStep > index + 1 ? (
									<FaCheck className="text-sm" />
								) : (
									<step.icon className="text-sm" />
								)}
							</div>
							<span
								className={`mt-2 text-sm font-medium text-center ${
									currentStep === index + 1 ? "text-[#256393]" : "text-gray-500"
								}`}>
								{step.title}
							</span>
						</div>
						{index < steps.length - 1 && (
							<div
								className={`w-16 h-1 mx-4 transition-all duration-300 ${
									currentStep > index + 1 ? "bg-green-500" : "bg-gray-300"
								}`}
							/>
						)}
					</div>
				))}
			</div>
		);
	};

	const renderStep1 = () => (
		<div className="space-y-6">
			<div className="text-center mb-8">
				<h2 className="text-2xl font-bold text-gray-800 mb-2">
					General Details
				</h2>
				<p className="text-gray-600">
					Please provide your personal information
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Mobile Number */}
				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						<FaPhone className="inline mr-2 text-[#256393]" />
						Mobile Number *
					</label>
					<input
						type="tel"
						name="mobileNumber"
						value={formData.mobileNumber}
						onChange={handleInputChange}
						className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all ${
							errors.mobileNumber ? "border-red-500" : "border-gray-200"
						}`}
						placeholder="Enter 10-digit mobile number"
						maxLength={10}
					/>
					{errors.mobileNumber && (
						<p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
					)}
				</div>

				{/* Date */}
				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						<FaCalendar className="inline mr-2 text-[#256393]" />
						Registration Date
					</label>
					<input
						type="date"
						name="date"
						value={formData.date}
						className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 cursor-not-allowed"
						readOnly
					/>
				</div>

				{/* Registration Number */}
				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						Registration Number
					</label>
					<input
						type="text"
						name="regNo"
						value={formData.regNo}
						className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 cursor-not-allowed"
						readOnly
					/>
				</div>

				{/* Prefix */}
				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						Title/Prefix
					</label>
					<select
						name="prefix"
						value={formData.prefix}
						onChange={handleInputChange}
						className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all">
						<option value="">Select Title</option>
						<option value="Mr.">Mr.</option>
						<option value="Mrs.">Mrs.</option>
						<option value="Ms.">Ms.</option>
						<option value="Dr.">Dr.</option>
						<option value="Prof.">Prof.</option>
					</select>
				</div>

				{/* First Name */}
				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						<FaUser className="inline mr-2 text-[#256393]" />
						First Name *
					</label>
					<input
						type="text"
						name="firstName"
						value={formData.firstName}
						onChange={handleInputChange}
						className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all ${
							errors.firstName ? "border-red-500" : "border-gray-200"
						}`}
						placeholder="Enter first name"
					/>
					{errors.firstName && (
						<p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
					)}
				</div>

				{/* Last Name */}
				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						Last Name *
					</label>
					<input
						type="text"
						name="lastName"
						value={formData.lastName}
						onChange={handleInputChange}
						className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all ${
							errors.lastName ? "border-red-500" : "border-gray-200"
						}`}
						placeholder="Enter last name"
					/>
					{errors.lastName && (
						<p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
					)}
				</div>

				{/* Email */}
				<div className="md:col-span-2">
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						<FaEnvelope className="inline mr-2 text-[#256393]" />
						Email Address *
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all ${
							errors.email ? "border-red-500" : "border-gray-200"
						}`}
						placeholder="Enter email address"
					/>
					{errors.email && (
						<p className="text-red-500 text-sm mt-1">{errors.email}</p>
					)}
				</div>

				{/* Gender */}
				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						Gender *
					</label>
					<select
						name="gender"
						value={formData.gender}
						onChange={handleInputChange}
						className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all ${
							errors.gender ? "border-red-500" : "border-gray-200"
						}`}>
						<option value="">Select Gender</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Other">Other</option>
					</select>
					{errors.gender && (
						<p className="text-red-500 text-sm mt-1">{errors.gender}</p>
					)}
				</div>

				{/* Date of Birth */}
				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						Date of Birth *
					</label>
					<input
						type="date"
						name="dateOfBirth"
						value={formData.dateOfBirth}
						onChange={handleInputChange}
						className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all ${
							errors.dateOfBirth ? "border-red-500" : "border-gray-200"
						}`}
					/>
					{errors.dateOfBirth && (
						<p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
					)}
				</div>

				{/* Address fields */}
				<div className="md:col-span-2">
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						Address Line 1
					</label>
					<input
						type="text"
						name="address1"
						value={formData.address1}
						onChange={handleInputChange}
						className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all"
						placeholder="Enter address line 1"
					/>
				</div>

				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						City
					</label>
					<input
						type="text"
						name="city"
						value={formData.city}
						onChange={handleInputChange}
						className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all"
						placeholder="Enter city"
					/>
				</div>

				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						State
					</label>
					<input
						type="text"
						name="state"
						value={formData.state}
						onChange={handleInputChange}
						className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all"
						placeholder="Enter state"
					/>
				</div>
			</div>
		</div>
	);

	const renderStep2 = () => (
		<div className="space-y-6">
			<div className="text-center mb-8">
				<h2 className="text-2xl font-bold text-gray-800 mb-2">
					Test & Payment Information
				</h2>
				<p className="text-gray-600">
					Specify test details and payment information
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Test Particulars */}
				<div className="md:col-span-2">
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						<FaFlask className="inline mr-2 text-[#256393]" />
						Test Particulars *
					</label>
					<select
						name="testParticulars"
						value={formData.testParticulars}
						onChange={handleInputChange}
						className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all ${
							errors.testParticulars ? "border-red-500" : "border-gray-200"
						}`}>
						<option value="">Select Test Category</option>
						<option value="Complete Blood Count (CBC)">
							Complete Blood Count (CBC)
						</option>
						<option value="Lipid Profile">Lipid Profile</option>
						<option value="Thyroid Function Test">Thyroid Function Test</option>
						<option value="Liver Function Test">Liver Function Test</option>
						<option value="Kidney Function Test">Kidney Function Test</option>
						<option value="Blood Sugar - Fasting">Blood Sugar - Fasting</option>
						<option value="Blood Sugar - Random">Blood Sugar - Random</option>
						<option value="HbA1c">HbA1c</option>
						<option value="Urine Routine Examination">
							Urine Routine Examination
						</option>
						<option value="X-Ray Chest">X-Ray Chest</option>
						<option value="ECG">ECG</option>
						<option value="Ultrasound Abdomen">Ultrasound Abdomen</option>
					</select>
					{errors.testParticulars && (
						<p className="text-red-500 text-sm mt-1">
							{errors.testParticulars}
						</p>
					)}
				</div>

				{/* Sample Date */}
				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						Sample Collection Date & Time *
					</label>
					<input
						type="datetime-local"
						name="sampleDate"
						value={formData.sampleDate}
						onChange={handleInputChange}
						className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all ${
							errors.sampleDate ? "border-red-500" : "border-gray-200"
						}`}
					/>
					{errors.sampleDate && (
						<p className="text-red-500 text-sm mt-1">{errors.sampleDate}</p>
					)}
				</div>

				{/* Collection Center */}
				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						Collection Center
					</label>
					<select
						name="colCenter"
						value={formData.colCenter}
						onChange={handleInputChange}
						className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all">
						<option value="">Select Collection Center</option>
						<option value="DIVITH Labs - Main Center">
							DIVITH Labs - Main Center
						</option>
						<option value="DIVITH Labs - Branch 1">
							DIVITH Labs - Branch 1
						</option>
						<option value="DIVITH Labs - Branch 2">
							DIVITH Labs - Branch 2
						</option>
						<option value="Home Collection">Home Collection</option>
					</select>
				</div>

				{/* Payment Mode */}
				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						Payment Mode
					</label>
					<select
						name="paymentMode"
						value={formData.paymentMode}
						onChange={handleInputChange}
						className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all">
						<option value="">Select Payment Mode</option>
						<option value="Cash">Cash</option>
						<option value="UPI">UPI</option>
						<option value="Credit Card">Credit Card</option>
						<option value="Debit Card">Debit Card</option>
						<option value="Net Banking">Net Banking</option>
					</select>
				</div>

				{/* Referred By Doctor */}
				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						Referred By (Doctor)
					</label>
					<input
						type="text"
						name="refByDoctor"
						value={formData.refByDoctor}
						onChange={handleInputChange}
						className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all"
						placeholder="Enter doctor's name"
					/>
				</div>

				{/* Patient Image Upload */}
				<div className="md:col-span-2">
					<label className="block text-sm font-semibold text-gray-700 mb-2">
						<FaUpload className="inline mr-2 text-[#256393]" />
						Patient Photo (Optional)
					</label>
					<input
						type="file"
						name="image"
						accept="image/*"
						onChange={handleInputChange}
						className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#256393] focus:border-[#256393] transition-all"
					/>
					{formData.image && (
						<div className="mt-4 text-center">
							<img
								src={URL.createObjectURL(formData.image)}
								alt="Patient"
								className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200 mx-auto"
							/>
							<p className="text-sm text-green-600 mt-2">
								Photo uploaded successfully
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);

	const renderStep3 = () => (
		<div className="space-y-6">
			<div className="text-center mb-8">
				<h2 className="text-2xl font-bold text-gray-800 mb-2">
					Review & Submit
				</h2>
				<p className="text-gray-600">
					Please review your information before submitting
				</p>
			</div>

			{/* General Details Review */}
			<div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
				<h3 className="text-lg font-semibold mb-4 text-[#256393] flex items-center">
					<FaUser className="mr-2" />
					General Details
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
					<div>
						<strong>Registration No:</strong> {formData.regNo}
					</div>
					<div>
						<strong>Date:</strong> {formData.date}
					</div>
					<div>
						<strong>Name:</strong> {formData.prefix} {formData.firstName}{" "}
						{formData.lastName}
					</div>
					<div>
						<strong>Mobile:</strong> {formData.mobileNumber}
					</div>
					<div>
						<strong>Email:</strong> {formData.email}
					</div>
					<div>
						<strong>Gender:</strong> {formData.gender}
					</div>
					<div>
						<strong>Date of Birth:</strong> {formData.dateOfBirth}
					</div>
					<div>
						<strong>City:</strong> {formData.city || "Not provided"}
					</div>
				</div>
			</div>

			{/* Test Details Review */}
			<div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
				<h3 className="text-lg font-semibold mb-4 text-green-700 flex items-center">
					<FaFlask className="mr-2" />
					Test & Payment Details
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
					<div>
						<strong>Test:</strong> {formData.testParticulars}
					</div>
					<div>
						<strong>Sample Date:</strong> {formData.sampleDate}
					</div>
					<div>
						<strong>Collection Center:</strong>{" "}
						{formData.colCenter || "Not selected"}
					</div>
					<div>
						<strong>Payment Mode:</strong>{" "}
						{formData.paymentMode || "Not selected"}
					</div>
					<div>
						<strong>Referred By:</strong>{" "}
						{formData.refByDoctor || "Not provided"}
					</div>
				</div>
			</div>

			{/* Uploaded Files */}
			{formData.image && (
				<div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-100">
					<h3 className="text-lg font-semibold mb-4 text-orange-700 flex items-center">
						<FaUpload className="mr-2" />
						Uploaded Files
					</h3>
					<div className="text-center">
						<img
							src={URL.createObjectURL(formData.image)}
							alt="Patient"
							className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200 mx-auto"
						/>
						<p className="text-sm text-gray-600 mt-2">Patient Photo</p>
					</div>
				</div>
			)}
		</div>
	);

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Breadcrumb */}
			<Breadcrumb
				items={[
					{ label: "Home", href: "/" },
					{ label: "Book Test", href: "/book-test" },
					{ label: "Patient Registration" },
				]}
			/>

			{/* Hero Section */}
			<div className="bg-gradient-to-r from-[#256393] to-[#1e4f73] text-white py-12">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h1 className="text-3xl md:text-4xl font-bold mb-4">
						Patient Registration
					</h1>
					<p className="text-xl text-blue-100">
						Register for your diagnostic tests with DIVITH LABS
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-4xl mx-auto px-4 py-8">
				<div className="bg-white rounded-lg shadow-lg p-8">
					{renderStepIndicator()}

					<form onSubmit={handleSubmit}>
						{currentStep === 1 && renderStep1()}
						{currentStep === 2 && renderStep2()}
						{currentStep === 3 && renderStep3()}

						{/* Navigation Buttons */}
						<div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
							{currentStep > 1 ? (
								<button
									type="button"
									onClick={handlePrevious}
									className="flex items-center px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium">
									<FaArrowLeft className="mr-2" />
									Previous
								</button>
							) : (
								<div></div>
							)}

							{currentStep < 3 ? (
								<button
									type="button"
									onClick={handleNext}
									className="flex items-center px-6 py-3 bg-[#256393] text-white rounded-lg hover:bg-[#1e4f73] transition-colors font-medium">
									Next
									<FaArrowRight className="ml-2" />
								</button>
							) : (
								<button
									type="submit"
									className="flex items-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
									<FaCheck className="mr-2" />
									Submit Registration
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PatientRegister;
