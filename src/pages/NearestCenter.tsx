import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaSearch,
	FaClock,
	FaMapMarkerAlt,
	FaPhone,
	FaEnvelope,
	FaGlobe,
	FaEye,
	FaHome,
	FaChevronDown,
	FaChevronUp,
	FaCreditCard,
	FaFlask,
	FaMicroscope,
	FaStethoscope,
} from "react-icons/fa";

interface LabLocation {
	id: number;
	name: string;
	address: string;
	timing: string;
	isOpen: boolean;
	openTime: string;
	services: string[];
	facilities: string[];
	phone: string;
	email: string;
	website: string;
	centerType: string;
	paymentMethods: string[];
	image: string;
}

const NearestCenter = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedLab, setSelectedLab] = useState<LabLocation | null>(null);
	const [isPopularTestsOpen, setIsPopularTestsOpen] = useState(false);
	const [isLabTestOpen, setIsLabTestOpen] = useState(false);

	const labLocations: LabLocation[] = [
		{
			id: 1,
			name: "Dr Lal PathLabs, KAUSHILYA PARK",
			address:
				"G-19 green no1 Kaushilya park hauz khas , SOUTH WEST DELHI, SOUTH WEST DELHI, DELHI, 110016",
			timing: "06:30 AM - 07:30 PM | Monday - Sunday",
			isOpen: true,
			openTime: "07:30 PM",
			services: ["Pathology", "Radiology"],
			facilities: [
				"Female technician",
				"Parking",
				"Power backup",
				"Wash room",
				"Seating capacity",
			],
			phone: "01149885050",
			email: "customer.care@lalpathlabs.com",
			website: "https://www.lalpathlabs.com/",
			centerType: "Lab",
			paymentMethods: [
				"Cash",
				"Credit/Debit Cards",
				"PhonePe",
				"UPI",
				"Paytm",
				"PayU",
			],
			image:
				"https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
		},
		{
			id: 2,
			name: "Dr Lal Path Labs, Preet Vihar",
			address: "07:00 AM -09:00 PM | Monday - Sunday",
			timing: "07:00 AM - 09:00 PM | Monday - Sunday",
			isOpen: true,
			openTime: "09:00 PM",
			services: ["Pathology", "Radiology"],
			facilities: [
				"Ambulance services",
				"Female technician",
				"Newborn technician",
				"Power backup",
				"Ramp for handicaps",
				"Wash room",
				"wheel chair",
				"Seating capacity",
				"Present Reports",
			],
			phone: "01149885050",
			email: "customer.care@lalpathlabs.com",
			website: "https://www.lalpathlabs.com/",
			centerType: "Lab",
			paymentMethods: [
				"Cash",
				"Credit/Debit Cards",
				"PhonePe",
				"UPI",
				"Paytm",
				"PayU",
			],
			image:
				"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
		},
		{
			id: 3,
			name: "Dr Lal Path Labs, Punjabi Bagh",
			address: "06:30 AM -09:00 PM | Monday - Sunday",
			timing: "06:30 AM - 09:00 PM | Monday - Sunday",
			isOpen: true,
			openTime: "09:00 PM",
			services: ["Pathology", "Radiology"],
			facilities: [
				"Female technician",
				"Newborn technician",
				"Parking",
				"Power backup",
				"Ramp for handicaps",
				"Wash room",
				"wheel chair",
				"Seating capacity-10 Persons",
			],
			phone: "01149885050",
			email: "customer.care@lalpathlabs.com",
			website: "https://www.lalpathlabs.com/",
			centerType: "Lab",
			paymentMethods: [
				"Cash",
				"Credit/Debit Cards",
				"PhonePe",
				"UPI",
				"Paytm",
				"PayU",
			],
			image:
				"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
		},
		{
			id: 4,
			name: "Dr Lal Path Labs, Ashol Vihar Phase 2",
			address: "06:30 AM -07:30 PM | Monday - Sunday",
			timing: "06:30 AM - 07:30 PM | Monday - Sunday",
			isOpen: true,
			openTime: "07:30 PM",
			services: ["Pathology", "Radiology"],
			facilities: [
				"Female technician",
				"Newborn technician",
				"Parking",
				"Power backup",
				"Ramp for handicaps",
				"Wash room",
				"wheel chair",
				"Seating capacity-10 Persons",
			],
			phone: "01149885050",
			email: "customer.care@lalpathlabs.com",
			website: "https://www.lalpathlabs.com/",
			centerType: "Lab",
			paymentMethods: [
				"Cash",
				"Credit/Debit Cards",
				"PhonePe",
				"UPI",
				"Paytm",
				"PayU",
			],
			image:
				"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
		},
	];

	const nearestLabs = [
		{ name: "AMRITSAR CC 1.5", location: "Delhi" },
		{ name: "ANUSHI ANIL KUMAR ( THANE CC )", location: "Delhi" },
		{ name: "FPSC JAITPUR EXTENSION", location: "Delhi" },
		{ name: "FPSC HATIBADOLA", location: "Delhi" },
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

	const filteredLabs = labLocations.filter(
		(lab) =>
			lab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			lab.address.toLowerCase().includes(searchQuery.toLowerCase())
	);

	React.useEffect(() => {
		if (filteredLabs.length > 0) {
			setSelectedLab(filteredLabs[0]);
		}
	}, []);

	const handleLabSelect = (lab: LabLocation) => {
		setSelectedLab(lab);
	};

	const handleLocateClick = (lab: LabLocation) => {
		alert(`Opening location for ${lab.name}`);
	};

	const handleViewClick = (lab: LabLocation) => {
		setSelectedLab(lab);
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
						<span className="text-blue-600 font-medium">Lab Visit</span>
					</nav>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 py-6">
				<div className="grid lg:grid-cols-3 gap-6">
					{/* Left Panel - Search and Lab List */}
					<div className="lg:col-span-1">
						{/* Search Bar */}
						<div className="bg-white p-4 rounded-t-lg border border-gray-200">
							<div className="relative">
								<input
									type="text"
									placeholder="Search for a Lab"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
								/>
								<button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
									<FaSearch />
								</button>
							</div>
						</div>

						{/* Lab List */}
						<div className="bg-white border border-t-0 border-gray-200 rounded-b-lg max-h-96 overflow-y-auto">
							{filteredLabs.map((lab) => (
								<div
									key={lab.id}
									className={`p-4 border-b border-gray-200 last:border-b-0 cursor-pointer hover:bg-gray-50 ${
										selectedLab?.id === lab.id
											? "bg-blue-50 border-l-4 border-l-blue-600"
											: ""
									}`}
									onClick={() => handleLabSelect(lab)}>
									<div className="flex items-start gap-3">
										<div className="text-blue-600 mt-1">
											<FaMapMarkerAlt />
										</div>
										<div className="flex-1">
											<h3 className="font-semibold text-gray-900 text-sm mb-1">
												{lab.name}
											</h3>
											<div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
												<FaClock />
												<span>{lab.timing}</span>
												<span
													className={`ml-2 px-2 py-1 rounded-full text-xs ${
														lab.isOpen
															? "bg-green-100 text-green-800"
															: "bg-red-100 text-red-800"
													}`}>
													{lab.isOpen ? "OPEN" : "CLOSED"}
												</span>
											</div>
											<div className="text-xs text-gray-600 mb-2">
												Services: {lab.services.join(" • ")}
											</div>
											<div className="text-xs text-gray-500 mb-3">
												{lab.facilities.slice(0, 3).join(", ")}
												{lab.facilities.length > 3 && "..."}
											</div>
											<div className="flex gap-2">
												<button
													onClick={(e) => {
														e.stopPropagation();
														handleViewClick(lab);
													}}
													className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 transition-colors">
													<FaEye className="inline mr-1" />
													VIEW
												</button>
												<button
													onClick={(e) => {
														e.stopPropagation();
														handleLocateClick(lab);
													}}
													className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-50 transition-colors">
													<FaMapMarkerAlt className="inline mr-1" />
													Locate
												</button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right Panel - Selected Lab Details */}
					<div className="lg:col-span-2">
						{selectedLab ? (
							<div className="bg-white rounded-lg shadow-sm border">
								{/* Lab Header */}
								<div className="p-6 border-b border-gray-200">
									<h2 className="text-xl font-bold text-gray-900 mb-2">
										{selectedLab.name}
									</h2>
									<p className="text-gray-600 mb-4 flex items-start gap-2">
										<FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
										{selectedLab.address}
									</p>

									<div className="grid md:grid-cols-2 gap-6">
										{/* Status and Contact */}
										<div className="space-y-4">
											<div className="flex items-center gap-3">
												<span
													className={`px-3 py-1 rounded-full text-sm font-medium ${
														selectedLab.isOpen
															? "bg-green-100 text-green-800"
															: "bg-red-100 text-red-800"
													}`}>
													{selectedLab.isOpen ? "OPEN" : "CLOSED"}
												</span>
												<span className="text-gray-600 text-sm">
													{selectedLab.openTime}
												</span>
											</div>

											<div className="space-y-2">
												<h4 className="font-semibold text-gray-900">
													More Info
												</h4>
												<p className="text-sm text-gray-600">
													View additional details
												</p>
											</div>

											<div className="space-y-2">
												<div className="flex items-center gap-2">
													<FaGlobe className="text-blue-600" />
													<a
														href={selectedLab.website}
														target="_blank"
														rel="noopener noreferrer"
														className="text-blue-600 hover:text-blue-800 text-sm">
														{selectedLab.website}
													</a>
												</div>
												<p className="text-xs text-gray-500">
													Visit our website for more information
												</p>
											</div>

											<div className="space-y-2">
												<div className="flex items-center gap-2">
													<FaPhone className="text-blue-600" />
													<span className="text-gray-900 font-medium">
														{selectedLab.phone}
													</span>
												</div>
												<p className="text-xs text-gray-500">
													Contact us for center related information
												</p>
											</div>

											<div className="space-y-2">
												<div className="flex items-center gap-2">
													<FaEnvelope className="text-blue-600" />
													<a
														href={`mailto:${selectedLab.email}`}
														className="text-gray-900 hover:text-blue-600">
														{selectedLab.email}
													</a>
												</div>
												<p className="text-xs text-gray-500">
													Mail us for any information and queries
												</p>
											</div>
										</div>

										{/* Services and Details */}
										<div className="space-y-4">
											<div>
												<h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
													<FaFlask className="text-blue-600" />
													Center Type
												</h4>
												<p className="text-gray-600">
													{selectedLab.centerType}
												</p>
											</div>

											<div>
												<h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
													<FaMicroscope className="text-green-600" />
													Radiology
												</h4>
												<p className="text-gray-600">EMG, Echo, TMT</p>
											</div>

											<div>
												<h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
													<FaStethoscope className="text-purple-600" />
													Pathology
												</h4>
											</div>

											<div>
												<h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
													<FaHome className="text-orange-600" />
													Facility
												</h4>
												<p className="text-gray-600 text-sm">
													{selectedLab.facilities.join(", ")}
												</p>
											</div>

											<div>
												<h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
													<FaCreditCard className="text-blue-600" />
													Accepted Payment Methods
												</h4>
												<p className="text-gray-600 text-sm">
													{selectedLab.paymentMethods.join(", ")}
												</p>
											</div>
										</div>
									</div>
								</div>

								{/* Lab Image */}
								<div className="p-6">
									<img
										src={selectedLab.image}
										alt={selectedLab.name}
										className="w-full max-w-lg rounded-lg shadow-md"
									/>
									<div className="mt-4 bg-blue-600 text-white p-4 rounded-lg text-center">
										<h3 className="text-xl font-bold mb-2">
											Next Generation Patient Experience Center
										</h3>
									</div>
								</div>
							</div>
						) : (
							<div className="bg-white rounded-lg shadow-sm border p-8 text-center">
								<FaMapMarkerAlt className="text-4xl text-gray-400 mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Select a Lab
								</h3>
								<p className="text-gray-600">
									Choose a lab from the list to view detailed information.
								</p>
							</div>
						)}
					</div>
				</div>

				{/* Nearest Labs Section */}
				<div className="mt-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Nearest Labs:
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{nearestLabs.map((lab, index) => (
							<div
								key={index}
								className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow">
								<h3 className="font-semibold text-gray-900 mb-2">{lab.name}</h3>
								<p className="text-gray-600 text-sm">{lab.location}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Bottom Expandable Sections */}
			<div className="max-w-7xl mx-auto px-4 pb-8">
				{/* Lab Test At Home Section */}
				<div className="bg-blue-600 text-white rounded-lg mb-4 overflow-hidden">
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

				{/* Popular Tests Section */}
				<div className="bg-blue-600 text-white rounded-lg mb-8 overflow-hidden">
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
			</div>
		</div>
	);
};

export default NearestCenter;
