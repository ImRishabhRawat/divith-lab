import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaArrowLeft,
	FaHome,
	FaClock,
	FaUserMd,
	FaShieldAlt,
	FaPhone,
	FaCalendarAlt,
	FaMapMarkerAlt,
	FaCheck,
} from "react-icons/fa";

const HomeCollection = () => {
	const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
	const [selectedDate, setSelectedDate] = useState("");
	const [location, setLocation] = useState("");

	const timeSlots = [
		"8:00 AM - 10:00 AM",
		"10:00 AM - 12:00 PM",
		"12:00 PM - 2:00 PM",
		"2:00 PM - 4:00 PM",
		"4:00 PM - 6:00 PM",
		"6:00 PM - 8:00 PM",
	];

	const features = [
		{
			icon: <FaHome className="text-3xl text-blue-600" />,
			title: "Doorstep Collection",
			description: "Professional phlebotomists collect samples from your home",
		},
		{
			icon: <FaClock className="text-3xl text-green-600" />,
			title: "60-Minute Guarantee",
			description: "Sample collection within 60 minutes of booking",
		},
		{
			icon: <FaUserMd className="text-3xl text-purple-600" />,
			title: "Trained Professionals",
			description: "Certified and experienced healthcare professionals",
		},
		{
			icon: <FaShieldAlt className="text-3xl text-red-600" />,
			title: "Safe & Hygienic",
			description: "Sterile equipment and safety protocols followed",
		},
	];

	const steps = [
		{
			step: "1",
			title: "Book Online",
			description: "Select your tests and choose a convenient time slot",
		},
		{
			step: "2",
			title: "Professional Visits",
			description: "Trained phlebotomist arrives at your location",
		},
		{
			step: "3",
			title: "Sample Collection",
			description: "Safe and hygienic sample collection process",
		},
		{
			step: "4",
			title: "Lab Processing",
			description: "Samples processed at our NABL certified labs",
		},
		{
			step: "5",
			title: "Report Delivery",
			description: "Digital reports delivered to your email/app",
		},
	];

	const handleBooking = () => {
		if (!selectedDate || !selectedTimeSlot || !location) {
			alert("Please fill in all required fields");
			return;
		}
		// Handle booking logic here
		alert("Booking confirmed! You will receive a confirmation call shortly.");
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
				<div className="max-w-7xl mx-auto px-4 py-16">
					<div className="flex items-center gap-4 mb-8">
						<Link
							to="/"
							className="text-white hover:text-blue-200 transition-colors">
							<FaArrowLeft />
						</Link>
						<h1 className="text-4xl font-bold">Home Sample Collection</h1>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold mb-6">
								Healthcare at Your Doorstep
							</h2>
							<p className="text-xl text-blue-100 mb-8">
								Get your diagnostic tests done from the comfort of your home.
								Professional sample collection with guaranteed safety and
								hygiene.
							</p>

							<div className="grid grid-cols-2 gap-6 mb-8">
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400 mb-2">
										60 min
									</div>
									<div className="text-blue-100">Quick Collection</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400 mb-2">
										24/7
									</div>
									<div className="text-blue-100">Service Available</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400 mb-2">
										500+
									</div>
									<div className="text-blue-100">Cities Covered</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400 mb-2">
										Free
									</div>
									<div className="text-blue-100">Home Visits</div>
								</div>
							</div>
						</div>

						{/* Booking Form */}
						<div className="bg-white rounded-2xl p-8 shadow-xl">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Book Home Collection
							</h3>

							<div className="space-y-6">
								{/* Date Selection */}
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Select Date *
									</label>
									<input
										type="date"
										value={selectedDate}
										onChange={(e) => setSelectedDate(e.target.value)}
										min={new Date().toISOString().split("T")[0]}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>

								{/* Time Slot Selection */}
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Select Time Slot *
									</label>
									<select
										value={selectedTimeSlot}
										onChange={(e) => setSelectedTimeSlot(e.target.value)}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
										<option value="">Choose time slot</option>
										{timeSlots.map((slot) => (
											<option key={slot} value={slot}>
												{slot}
											</option>
										))}
									</select>
								</div>

								{/* Location */}
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Location *
									</label>
									<input
										type="text"
										placeholder="Enter your complete address"
										value={location}
										onChange={(e) => setLocation(e.target.value)}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>

								{/* Book Button */}
								<button
									onClick={handleBooking}
									className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium text-lg transition-colors">
									Book Home Collection
								</button>

								{/* Phone Booking */}
								<div className="text-center">
									<p className="text-gray-600 mb-2">Or call us directly</p>
									<a
										href="tel:011-4988-5050"
										className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
										<FaPhone />
										011-4988-5050
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Why Choose Home Collection?
					</h2>

					<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
						{features.map((feature, index) => (
							<div key={index} className="text-center">
								<div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
									{feature.icon}
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									{feature.title}
								</h3>
								<p className="text-gray-600">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* How It Works */}
			<div className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						How It Works
					</h2>

					<div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
						{steps.map((stepItem, index) => (
							<div key={index} className="text-center relative">
								{/* Step Number */}
								<div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
									{stepItem.step}
								</div>

								{/* Connector Line (except for last item) */}
								{index < steps.length - 1 && (
									<div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform translate-x-4"></div>
								)}

								<h3 className="text-lg font-bold text-gray-900 mb-2">
									{stepItem.title}
								</h3>
								<p className="text-sm text-gray-600">{stepItem.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Service Areas */}
			<div className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Service Areas
					</h2>

					<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
						{[
							"Delhi NCR",
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
						].map((city) => (
							<div
								key={city}
								className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors">
								<FaMapMarkerAlt className="text-blue-600 mx-auto mb-2" />
								<div className="font-medium text-gray-900">{city}</div>
							</div>
						))}
					</div>

					<div className="text-center mt-8">
						<p className="text-gray-600 mb-4">
							Don't see your city? We're expanding rapidly!
						</p>
						<Link
							to="/nearest-center"
							className="text-blue-600 hover:text-blue-800 font-medium">
							Find Nearest Center
						</Link>
					</div>
				</div>
			</div>

			{/* Safety Measures */}
			<div className="py-16 bg-blue-50">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Safety & Hygiene Measures
					</h2>

					<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
						{[
							{
								title: "Personal Protection",
								items: [
									"PPE kits for all staff",
									"Face masks & gloves",
									"Hand sanitization",
									"Temperature checks",
								],
							},
							{
								title: "Equipment Safety",
								items: [
									"Sterile collection tubes",
									"Single-use needles",
									"Disinfected equipment",
									"Sealed sample containers",
								],
							},
							{
								title: "Process Safety",
								items: [
									"Contact-less delivery",
									"Digital documentation",
									"Secure sample transport",
									"Chain of custody maintained",
								],
							},
						].map((category, index) => (
							<div key={index} className="bg-white rounded-lg p-6 shadow-sm">
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									{category.title}
								</h3>
								<ul className="space-y-2">
									{category.items.map((item, itemIndex) => (
										<li key={itemIndex} className="flex items-center gap-2">
											<FaCheck className="text-green-600 text-sm" />
											<span className="text-gray-700">{item}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="py-16 bg-gray-900 text-white">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-6">
						Ready to Book Your Home Collection?
					</h2>
					<p className="text-xl text-gray-300 mb-8">
						Join thousands of satisfied customers who choose convenience without
						compromising on quality.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg font-medium text-lg transition-colors">
							Book Now
						</button>
						<Link
							to="/popular-tests"
							className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 py-4 px-8 rounded-lg font-medium text-lg transition-colors">
							View Tests
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeCollection;
