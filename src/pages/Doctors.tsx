import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaSearch,
	FaUserMd,
	FaMapMarkerAlt,
	FaStar,
	FaCalendarAlt,
	FaVideo,
	FaPhone,
	FaHeart,
	FaBrain,
	FaEye,
	FaBaby,
	FaFemale,
	FaBone,
	FaStethoscope,
	FaLungs,
	FaHeartbeat,
	FaShieldAlt,
	FaFilter,
	FaChevronDown,
	FaGraduationCap,
	FaClock,
	FaCheckCircle,
} from "react-icons/fa";

const Doctors = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedSpecialty, setSelectedSpecialty] = useState("");
	const [selectedLocation, setSelectedLocation] = useState("");
	const [showFilters, setShowFilters] = useState(false);

	const specializations = [
		{ name: "Cardiology", icon: <FaHeart />, count: 25, color: "text-red-500" },
		{
			name: "Neurology",
			icon: <FaBrain />,
			count: 18,
			color: "text-purple-500",
		},
		{
			name: "Ophthalmology",
			icon: <FaEye />,
			count: 15,
			color: "text-blue-500",
		},
		{
			name: "Pediatrics",
			icon: <FaBaby />,
			count: 22,
			color: "text-green-500",
		},
		{
			name: "Gynecology",
			icon: <FaFemale />,
			count: 20,
			color: "text-pink-500",
		},
		{
			name: "Orthopedics",
			icon: <FaBone />,
			count: 16,
			color: "text-orange-500",
		},
		{
			name: "General Medicine",
			icon: <FaStethoscope />,
			count: 30,
			color: "text-teal-500",
		},
		{
			name: "Pulmonology",
			icon: <FaLungs />,
			count: 12,
			color: "text-cyan-500",
		},
		{
			name: "Nephrology",
			icon: <FaHeartbeat />,
			count: 10,
			color: "text-indigo-500",
		},
		{
			name: "Dermatology",
			icon: <FaShieldAlt />,
			count: 14,
			color: "text-yellow-500",
		},
	];

	const featuredDoctors = [
		{
			id: 1,
			name: "Dr. Rajesh Kumar",
			specialty: "Cardiology",
			qualification: "MD, DM (Cardiology)",
			experience: "15+ years",
			hospital: "DIVITH Heart Center",
			location: "Delhi",
			rating: 4.8,
			reviews: 245,
			consultationFee: 800,
			image:
				"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
			availableToday: true,
			languages: ["English", "Hindi"],
			nextSlot: "2:30 PM",
		},
		{
			id: 2,
			name: "Dr. Priya Sharma",
			specialty: "Gynecology",
			qualification: "MS (Obstetrics & Gynecology)",
			experience: "12+ years",
			hospital: "DIVITH Women's Care",
			location: "Mumbai",
			rating: 4.9,
			reviews: 189,
			consultationFee: 700,
			image:
				"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
			availableToday: true,
			languages: ["English", "Hindi", "Marathi"],
			nextSlot: "4:00 PM",
		},
		{
			id: 3,
			name: "Dr. Amit Patel",
			specialty: "Neurology",
			qualification: "MD, DM (Neurology)",
			experience: "18+ years",
			hospital: "DIVITH Neuro Center",
			location: "Bangalore",
			rating: 4.7,
			reviews: 312,
			consultationFee: 900,
			image:
				"https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
			availableToday: false,
			languages: ["English", "Hindi", "Gujarati"],
			nextSlot: "Tomorrow 10:00 AM",
		},
		{
			id: 4,
			name: "Dr. Sunita Reddy",
			specialty: "Pediatrics",
			qualification: "MD (Pediatrics)",
			experience: "10+ years",
			hospital: "DIVITH Children's Hospital",
			location: "Chennai",
			rating: 4.9,
			reviews: 156,
			consultationFee: 600,
			image:
				"https://images.unsplash.com/photo-1594824388853-c6e3dcf8e72a?w=400&h=400&fit=crop&crop=face",
			availableToday: true,
			languages: ["English", "Tamil", "Telugu"],
			nextSlot: "3:15 PM",
		},
		{
			id: 5,
			name: "Dr. Vikram Singh",
			specialty: "Orthopedics",
			qualification: "MS (Orthopedics)",
			experience: "14+ years",
			hospital: "DIVITH Bone & Joint Care",
			location: "Delhi",
			rating: 4.6,
			reviews: 203,
			consultationFee: 750,
			image:
				"https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face",
			availableToday: true,
			languages: ["English", "Hindi", "Punjabi"],
			nextSlot: "5:30 PM",
		},
		{
			id: 6,
			name: "Dr. Kavita Joshi",
			specialty: "Ophthalmology",
			qualification: "MS (Ophthalmology)",
			experience: "11+ years",
			hospital: "DIVITH Eye Care",
			location: "Pune",
			rating: 4.8,
			reviews: 178,
			consultationFee: 650,
			image:
				"https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face",
			availableToday: true,
			languages: ["English", "Hindi", "Marathi"],
			nextSlot: "1:45 PM",
		},
	];

	const locations = [
		"All Locations",
		"Delhi",
		"Mumbai",
		"Bangalore",
		"Chennai",
		"Pune",
		"Hyderabad",
	];

	const filteredDoctors = featuredDoctors.filter((doctor) => {
		const matchesSearch =
			doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesSpecialty =
			!selectedSpecialty || doctor.specialty === selectedSpecialty;
		const matchesLocation =
			!selectedLocation ||
			selectedLocation === "All Locations" ||
			doctor.location === selectedLocation;
		return matchesSearch && matchesSpecialty && matchesLocation;
	});

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-4">
							Consult with Expert Doctors
						</h1>
						<p className="text-xl text-blue-100 max-w-3xl mx-auto">
							Book appointments with our experienced healthcare professionals.
							Get expert medical advice from the comfort of your home.
						</p>
					</div>

					{/* Search Section */}
					<div className="max-w-4xl mx-auto">
						<div className="bg-white rounded-2xl p-6 shadow-xl">
							<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
								{/* Search Input */}
								<div className="md:col-span-2 relative">
									<input
										type="text"
										placeholder="Search doctors, specialties..."
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
									/>
									<FaSearch className="absolute left-4 top-4 text-gray-400" />
								</div>

								{/* Specialty Filter */}
								<div className="relative">
									<select
										value={selectedSpecialty}
										onChange={(e) => setSelectedSpecialty(e.target.value)}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none">
										<option value="">All Specialties</option>
										{specializations.map((spec) => (
											<option key={spec.name} value={spec.name}>
												{spec.name}
											</option>
										))}
									</select>
									<FaChevronDown className="absolute right-4 top-4 text-gray-400" />
								</div>

								{/* Location Filter */}
								<div className="relative">
									<select
										value={selectedLocation}
										onChange={(e) => setSelectedLocation(e.target.value)}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none">
										{locations.map((location) => (
											<option key={location} value={location}>
												{location}
											</option>
										))}
									</select>
									<FaMapMarkerAlt className="absolute right-4 top-4 text-gray-400" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Specializations Section */}
			<div className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Medical Specializations
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Choose from our wide range of medical specialties and connect with
							the right doctor for your needs.
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
						{specializations.map((spec) => (
							<button
								key={spec.name}
								onClick={() => setSelectedSpecialty(spec.name)}
								className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
									selectedSpecialty === spec.name
										? "border-blue-500 bg-blue-50"
										: "border-gray-200 hover:border-blue-300"
								}`}>
								<div className={`text-3xl mb-3 ${spec.color}`}>{spec.icon}</div>
								<h3 className="font-semibold text-gray-900 mb-1">
									{spec.name}
								</h3>
								<p className="text-sm text-gray-500">{spec.count} Doctors</p>
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Doctors List Section */}
			<div className="py-16">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex justify-between items-center mb-8">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-2">
								{selectedSpecialty
									? `${selectedSpecialty} Specialists`
									: "Featured Doctors"}
							</h2>
							<p className="text-gray-600">
								Showing {filteredDoctors.length} doctors
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredDoctors.map((doctor) => (
							<div
								key={doctor.id}
								className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
								{/* Doctor Image & Status */}
								<div className="relative">
									<img
										src={doctor.image}
										alt={doctor.name}
										className="w-full h-48 object-cover"
									/>
									{doctor.availableToday && (
										<div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
											Available Today
										</div>
									)}
								</div>

								{/* Doctor Info */}
								<div className="p-6">
									<div className="mb-4">
										<h3 className="text-xl font-bold text-gray-900 mb-1">
											{doctor.name}
										</h3>
										<p className="text-blue-600 font-medium mb-2">
											{doctor.specialty}
										</p>
										<div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
											<FaGraduationCap />
											<span>{doctor.qualification}</span>
										</div>
										<div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
											<FaClock />
											<span>{doctor.experience} Experience</span>
										</div>
										<div className="flex items-center gap-2 text-sm text-gray-600">
											<FaMapMarkerAlt />
											<span>
												{doctor.hospital}, {doctor.location}
											</span>
										</div>
									</div>

									{/* Rating & Reviews */}
									<div className="flex items-center gap-4 mb-4">
										<div className="flex items-center gap-1">
											<FaStar className="text-yellow-400" />
											<span className="font-medium">{doctor.rating}</span>
										</div>
										<span className="text-sm text-gray-600">
											{doctor.reviews} reviews
										</span>
									</div>

									{/* Languages */}
									<div className="mb-4">
										<p className="text-sm text-gray-600">
											<strong>Languages:</strong> {doctor.languages.join(", ")}
										</p>
									</div>

									{/* Consultation Fee & Next Slot */}
									<div className="flex justify-between items-center mb-4">
										<div>
											<p className="text-lg font-bold text-gray-900">
												₹{doctor.consultationFee}
											</p>
											<p className="text-sm text-gray-600">Consultation Fee</p>
										</div>
										<div className="text-right">
											<p className="text-sm font-medium text-gray-900">
												Next Available
											</p>
											<p className="text-sm text-blue-600">{doctor.nextSlot}</p>
										</div>
									</div>

									{/* Action Buttons */}
									<div className="grid grid-cols-2 gap-3">
										<button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
											<FaVideo />
											Video Call
										</button>
										<button className="flex items-center justify-center gap-2 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors">
											<FaCalendarAlt />
											Book Slot
										</button>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* No Results */}
					{filteredDoctors.length === 0 && (
						<div className="text-center py-12">
							<FaUserMd className="text-6xl text-gray-300 mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								No doctors found
							</h3>
							<p className="text-gray-600 mb-6">
								Try adjusting your search criteria or browse all doctors.
							</p>
							<button
								onClick={() => {
									setSearchQuery("");
									setSelectedSpecialty("");
									setSelectedLocation("");
								}}
								className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
								Clear Filters
							</button>
						</div>
					)}
				</div>
			</div>

			{/* CTA Section */}
			<div className="bg-blue-600 text-white py-16">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-4">
						Need Help Finding the Right Doctor?
					</h2>
					<p className="text-xl text-blue-100 mb-8">
						Our medical coordinators are here to help you connect with the best
						specialists for your health needs.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="tel:1800-XXX-XXXX"
							className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
							<FaPhone />
							Call Us: 1800-XXX-XXXX
						</a>
						<Link
							to="/contact"
							className="flex items-center justify-center gap-2 border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
							<FaCheckCircle />
							Get Help Online
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Doctors;
