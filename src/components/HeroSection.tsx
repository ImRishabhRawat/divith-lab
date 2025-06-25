import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	FaSearch,
	FaDownload,
	FaClipboardList,
	FaMapMarkerAlt,
	FaChevronLeft,
	FaChevronRight,
	FaArrowRight,
} from "react-icons/fa";

const HeroSection = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [currentSlide, setCurrentSlide] = useState(0);

	const carouselSlides = [
		{
			title: "Your Health, Our Priority",
			description:
				"Experience advanced diagnostic solutions with precision and care. Comprehensive health packages designed for your family's wellbeing.",
			ctaText: "Book Health Package",
			ctaLink: "/popular-tests",
			backgroundImage:
				"https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
			fallbackBg: "bg-gradient-to-r from-blue-600 to-blue-800",
		},
		{
			title: "NABL Certified Laboratory",
			description:
				"State-of-the-art technology ensuring accurate and reliable test results. Quality assured testing with expert pathologists and modern equipment.",
			ctaText: "View Our Services",
			ctaLink: "/labs",
			backgroundImage:
				"https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
			fallbackBg: "bg-gradient-to-r from-gray-700 to-gray-900",
		},
		{
			title: "Home Sample Collection",
			description:
				"Convenient sample collection at your doorstep within 60 minutes. Professional phlebotomists ensuring safe and hygienic collection process.",
			ctaText: "Schedule Collection",
			ctaLink: "/book-test",
			backgroundImage:
				"https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
			fallbackBg: "bg-gradient-to-r from-blue-700 to-blue-900",
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
		}, 6000); // Increased to 6 seconds for better UX
		return () => clearInterval(timer);
	}, [carouselSlides.length]);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
		);
	};

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	return (
		<section className="bg-white">
			{/* Compact Carousel */}
			<div className="relative h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden">
				{/* Carousel Container */}
				<div className="relative w-full h-full">
					{/* Carousel Slides */}
					{carouselSlides.map((slide, index) => (
						<div
							key={index}
							className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
								index === currentSlide ? "opacity-100" : "opacity-0"
							}`}>
							{/* Fallback Background */}
							<div
								className={`absolute inset-0 w-full h-full ${slide.fallbackBg}`}></div>

							{/* Background Image */}
							<div
								className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
								style={{
									backgroundImage: `url(${slide.backgroundImage})`,
								}}></div>

							{/* Overlay */}
							<div className="absolute inset-0 bg-black/40 z-10"></div>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10"></div>

							{/* Slide Content */}
							<div className="absolute inset-0 flex items-center justify-center z-20">
								<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
									<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 leading-tight drop-shadow-2xl">
										{slide.title}
									</h1>
									<p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-3xl mx-auto leading-relaxed opacity-95 drop-shadow-lg">
										{slide.description}
									</p>
									<Link
										to={slide.ctaLink}
										className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 hover:shadow-lg transition-all duration-300 group shadow-xl">
										{slide.ctaText}
										<FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Carousel Controls */}
				<button
					onClick={prevSlide}
					className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 text-white z-30 hover:scale-110">
					<FaChevronLeft className="text-sm sm:text-lg" />
				</button>
				<button
					onClick={nextSlide}
					className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 text-white z-30 hover:scale-110">
					<FaChevronRight className="text-sm sm:text-lg" />
				</button>

				{/* Carousel Indicators */}
				<div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
					{carouselSlides.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
								index === currentSlide
									? "bg-white scale-125 shadow-lg"
									: "bg-white/50 hover:bg-white/70 hover:scale-110"
							}`}
						/>
					))}
				</div>
			</div>

			{/* Book A Test Section Below Carousel */}
			<div className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-5">
					<div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute top-40 right-20 w-24 h-24 bg-gray-600 rounded-full blur-2xl animate-pulse delay-1000"></div>
					<div className="absolute bottom-32 left-1/3 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
					<div className="absolute bottom-20 right-10 w-28 h-28 bg-gray-400 rounded-full blur-2xl animate-pulse delay-3000"></div>
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					{/* Section Header */}
					<div className="mb-8 sm:mb-12">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
							Book Your Test
							<span className="text-blue-600"> Online</span>
						</h2>
						<p className="text-base sm:text-lg text-gray-600 max-w-2xl">
							Quick and easy test booking with instant confirmation
						</p>
					</div>

					{/* Booking Cards */}
					<div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
						{/* Search & Popular Tests */}
						<div className="space-y-5 sm:space-y-6">
							{/* Search Bar */}
							<div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Search Tests & Packages
								</h3>
								<div className="relative">
									<input
										type="text"
										placeholder="Enter test name, symptoms, or health concerns..."
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										className="w-full pl-6 pr-14 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-700 placeholder-gray-500 text-sm sm:text-base"
									/>
									<button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors hover:scale-105">
										<FaSearch className="text-white text-sm" />
									</button>
								</div>
							</div>

							{/* Popular Tests Button */}
							<div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Browse Popular Options
								</h3>
								<Link
									to="/popular-tests"
									className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105">
									<span>View Popular Tests & Packages</span>
									<FaArrowRight />
								</Link>
							</div>
						</div>

						{/* Quick Actions */}
						<div className="space-y-5 sm:space-y-6">
							{/* Quick Services */}
							<div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Quick Services
								</h3>
								<div className="grid grid-cols-1 gap-4">
									<Link
										to="/download-report"
										className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition-all duration-300 group hover:shadow-md">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
											<FaDownload className="text-white" />
										</div>
										<div>
											<div className="font-semibold text-gray-900">
												Download Report
											</div>
											<div className="text-sm text-gray-600">
												Access your test results instantly
											</div>
										</div>
									</Link>

									<Link
										to="/upload-prescription"
										className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition-all duration-300 group hover:shadow-md">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
											<FaClipboardList className="text-white" />
										</div>
										<div>
											<div className="font-semibold text-gray-900">
												Upload Prescription
											</div>
											<div className="text-sm text-gray-600">
												Get tests recommended by doctors
											</div>
										</div>
									</Link>

									<Link
										to="/nearest-center"
										className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition-all duration-300 group hover:shadow-md">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
											<FaMapMarkerAlt className="text-white" />
										</div>
										<div>
											<div className="font-semibold text-gray-900">
												Find Nearest Centre
											</div>
											<div className="text-sm text-gray-600">
												Locate labs and collection centers
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
