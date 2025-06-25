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
				"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=600&fit=crop&auto=format",
			fallbackBg: "bg-gradient-to-r from-blue-600 to-blue-800",
		},
		{
			title: "NABL Certified Laboratory",
			description:
				"State-of-the-art technology ensuring accurate and reliable test results. Quality assured testing with expert pathologists and modern equipment.",
			ctaText: "View Our Services",
			ctaLink: "/labs",
			backgroundImage:
				"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&h=600&fit=crop&auto=format",
			fallbackBg: "bg-gradient-to-r from-gray-700 to-gray-900",
		},
		{
			title: "Home Sample Collection",
			description:
				"Convenient sample collection at your doorstep within 60 minutes. Professional phlebotomists ensuring safe and hygienic collection process.",
			ctaText: "Schedule Collection",
			ctaLink: "/book-test",
			backgroundImage:
				"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&h=600&fit=crop&auto=format",
			fallbackBg: "bg-gradient-to-r from-blue-700 to-blue-900",
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
		);
	};

	return (
		<section className="bg-white">
			{/* Full Width Carousel */}
			<div className="relative h-[500px] md:h-[600px] overflow-hidden">
				{/* Carousel Slides */}
				<div
					className="flex transition-transform duration-700 ease-in-out h-full"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
					{carouselSlides.map((slide, index) => (
						<div key={index} className="w-full h-full flex-shrink-0 relative">
							{/* Fallback Background */}
							<div
								className={`absolute inset-0 w-full h-full ${slide.fallbackBg}`}></div>

							{/* Background Image */}
							<img
								src={slide.backgroundImage}
								alt={slide.title}
								className="absolute inset-0 w-full h-full object-cover z-10"
								onError={(e) => {
									// Hide image if it fails to load, showing fallback background
									const target = e.target as HTMLImageElement;
									target.style.display = "none";
								}}
							/>

							{/* Overlay */}
							<div className="absolute inset-0 bg-black/30 z-20"></div>
							<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-20"></div>

							{/* Slide Content */}
							<div className="absolute inset-0 flex items-center justify-center z-30">
								<div className="max-w-4xl mx-auto px-4 text-center text-white">
									<h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight drop-shadow-lg">
										{slide.title}
									</h1>
									<p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90 drop-shadow-md">
										{slide.description}
									</p>
									<Link
										to={slide.ctaLink}
										className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors group shadow-lg">
										{slide.ctaText}
										<FaArrowRight className="group-hover:translate-x-1 transition-transform" />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Carousel Controls */}
				<button
					onClick={prevSlide}
					className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors text-white z-20">
					<FaChevronLeft className="text-lg" />
				</button>
				<button
					onClick={nextSlide}
					className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors text-white z-20">
					<FaChevronRight className="text-lg" />
				</button>

				{/* Carousel Indicators */}
				<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
					{carouselSlides.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`w-3 h-3 rounded-full transition-all ${
								index === currentSlide
									? "bg-white scale-110"
									: "bg-white/50 hover:bg-white/70"
							}`}
						/>
					))}
				</div>
			</div>

			{/* Book A Test Section Below Carousel */}
			<div className="py-20 bg-blue-50 relative overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-5">
					<div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
					<div className="absolute top-40 right-20 w-24 h-24 bg-gray-600 rounded-full blur-2xl"></div>
					<div className="absolute bottom-32 left-1/3 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
					<div className="absolute bottom-20 right-10 w-28 h-28 bg-gray-400 rounded-full blur-2xl"></div>
				</div>

				<div className="max-w-7xl mx-auto px-4 relative z-10">
					{/* Section Header */}
					<div className="mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
							Book Your Test
							<br />
							Online
						</h2>
					</div>

					{/* Booking Cards */}
					<div className="grid lg:grid-cols-2 gap-12 items-start">
						{/* Search & Popular Tests */}
						<div className="space-y-8">
							{/* Search Bar */}
							<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
								<h3 className="text-xl font-medium text-black mb-6">
									Search Tests & Packages
								</h3>
								<div className="relative">
									<input
										type="text"
										placeholder="Enter test name, symptoms, or health concerns..."
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										className="w-full pl-6 pr-14 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors text-gray-700 placeholder-gray-500"
									/>
									<button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors">
										<FaSearch className="text-white" />
									</button>
								</div>
							</div>

							{/* Popular Tests Button */}
							<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
								<h3 className="text-xl font-medium text-black mb-6">
									Browse Popular Options
								</h3>
								<Link
									to="/popular-tests"
									className="block w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-medium text-center hover:bg-blue-700 transition-colors flex items-center justify-center gap-3">
									<span>View Popular Tests & Packages</span>
									<FaArrowRight />
								</Link>
							</div>
						</div>

						{/* Quick Actions */}
						<div className="space-y-8">
							{/* Quick Services */}
							<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
								<h3 className="text-xl font-medium text-black mb-6">
									Quick Services
								</h3>
								<div className="grid grid-cols-1 gap-4">
									<Link
										to="/download-report"
										className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group">
										<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
											<FaDownload className="text-white" />
										</div>
										<div>
											<div className="font-medium text-black">
												Download Report
											</div>
											<div className="text-sm text-gray-600">
												Access your test results instantly
											</div>
										</div>
									</Link>

									<Link
										to="/upload-prescription"
										className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group">
										<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
											<FaClipboardList className="text-white" />
										</div>
										<div>
											<div className="font-medium text-black">
												Upload Prescription
											</div>
											<div className="text-sm text-gray-600">
												Get tests recommended by doctors
											</div>
										</div>
									</Link>

									<Link
										to="/nearest-center"
										className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group">
										<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
											<FaMapMarkerAlt className="text-white" />
										</div>
										<div>
											<div className="font-medium text-black">
												Find Nearest Centre
											</div>
											<div className="text-sm text-gray-600">
												Locate labs and collection centers
											</div>
										</div>
									</Link>
								</div>
							</div>

							{/* Trust Indicators */}
							{/* <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
								<div className="grid grid-cols-2 gap-6 text-center">
									<div>
										<div className="w-3 h-3 bg-blue-600 rounded-full mx-auto mb-2"></div>
										<div className="text-sm font-medium text-black">
											ISO Certified
										</div>
										<div className="text-xs text-gray-600">Quality Assured</div>
									</div>
									<div>
										<div className="w-3 h-3 bg-blue-600 rounded-full mx-auto mb-2"></div>
										<div className="text-sm font-medium text-black">
											NABL Accredited
										</div>
										<div className="text-xs text-gray-600">
											Government Approved
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
