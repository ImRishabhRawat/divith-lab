import React, { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
	FaUser,
	FaShoppingCart,
	FaFlask,
	FaStethoscope,
	FaClipboardList,
	FaDownload,
	FaBuilding,
	FaGift,
	FaStar,
	FaCalendarAlt,
	FaUserMd,
	FaInfoCircle,
	FaEdit,
	FaLock,
	FaUserPlus,
	FaSearch,
	FaBars,
} from "react-icons/fa";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { useCart } from "../contexts/CartContext";
import { useCompare } from "../contexts/CompareContext";

const Header = () => {
	const { cartCount } = useCart();
	const { compareCount } = useCompare();
	const [searchParams] = useSearchParams();
	const [isLocationOpen, setIsLocationOpen] = useState(false);
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
	const [currentLocation, setCurrentLocation] = useState("Delhi");

	// Refs for dropdown menus
	const locationDropdownRef = useRef<HTMLDivElement>(null);
	const userMenuRef = useRef<HTMLDivElement>(null);
	const servicesMenuRef = useRef<HTMLDivElement>(null);
	const mobileServicesMenuRef = useRef<HTMLDivElement>(null);

	// Update location from URL params
	useEffect(() => {
		const locationParam = searchParams.get("location");
		if (locationParam) {
			setCurrentLocation(
				locationParam.charAt(0).toUpperCase() + locationParam.slice(1)
			);
		}
	}, [searchParams]);

	// Click outside handler
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				locationDropdownRef.current &&
				!locationDropdownRef.current.contains(event.target as Node)
			) {
				setIsLocationOpen(false);
			}
			if (
				userMenuRef.current &&
				!userMenuRef.current.contains(event.target as Node)
			) {
				setIsUserMenuOpen(false);
			}
			if (
				servicesMenuRef.current &&
				!servicesMenuRef.current.contains(event.target as Node)
			) {
				setIsServicesMenuOpen(false);
			}
			if (
				mobileServicesMenuRef.current &&
				!mobileServicesMenuRef.current.contains(event.target as Node)
			) {
				setIsServicesMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Helper function to get current path with new location
	const getLocationLink = (newLocation: string) => {
		const currentPath = window.location.pathname;
		return `${currentPath}?location=${newLocation.toLowerCase()}`;
	};

	return (
		<header className="w-full sticky top-0 z-50">
			{/* Desktop Header */}
			<div className="hidden lg:block">
				{/* Top Contact Bar */}
				<div className="bg-[#256393] text-white py-3 px-4">
					<div className="max-w-7xl mx-auto flex justify-between items-center">
						{/* Logo */}
						<Link
							to="/"
							className="bg-orange-400 px-4 py-2 rounded-md hover:bg-orange-500 transition-colors">
							<h1 className="text-blue-900 font-bold text-lg flex items-center gap-2">
								<FaFlask className="text-xl" />
								DIVITH LABS
							</h1>
						</Link>

						{/* Contact Info */}
						<div className="flex items-center gap-6">
							<span className="text-sm">Contact Us</span>
							<div className="flex items-center gap-2">
								<span className="bg-orange-400 text-blue-900 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
									<FaPhone className="text-xs" />
								</span>
								<span className="font-semibold">011-4988-5050</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="bg-orange-400 text-blue-900 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
									<FaEnvelope className="text-xs" />
								</span>
								<span className="font-semibold">
									customer.care@divithlabs.com
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Main Navigation Bar */}
				<div className="bg-white shadow-md py-4 px-4">
					<div className="max-w-7xl mx-auto flex justify-between items-center">
						{/* Navigation Menu */}
						<nav className="flex items-center space-x-8">
							<Link
								to="/book-test"
								className="text-gray-800 font-semibold text-sm hover:text-blue-600 transition-colors">
								BOOK A TEST
							</Link>
							<Link
								to="/doctors"
								className="text-gray-800 font-semibold text-sm hover:text-blue-600 transition-colors">
								DOCTORS
							</Link>
							<Link
								to="/business-partnership"
								className="text-gray-800 font-semibold text-sm hover:text-blue-600 transition-colors">
								BUSINESS PARTNERSHIP
							</Link>
							<Link
								to="/about"
								className="text-gray-800 font-semibold text-sm hover:text-blue-600 transition-colors">
								ABOUT US
							</Link>
							<Link
								to="/career"
								className="text-gray-800 font-semibold text-sm hover:text-blue-600 transition-colors">
								CAREER
							</Link>
							<Link
								to="/investors"
								className="text-gray-800 font-semibold text-sm hover:text-blue-600 transition-colors">
								INVESTORS
							</Link>
							<Link
								to="/blogs"
								className="text-gray-800 font-semibold text-sm hover:text-blue-600 transition-colors">
								BLOGS
							</Link>
						</nav>

						{/* Right Side Controls */}
						<div className="flex items-center space-x-4">
							{/* Location Dropdown */}
							<div className="relative" ref={locationDropdownRef}>
								<button
									onClick={() => setIsLocationOpen(!isLocationOpen)}
									className="flex items-center gap-2 bg-orange-400 text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-orange-500 transition-colors">
									<FaMapMarkerAlt className="text-sm" />
									<span>{currentLocation}</span>
									<span className="text-xs">▼</span>
								</button>

								{isLocationOpen && (
									<div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-32 z-20">
										<Link
											to={getLocationLink("delhi")}
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											onClick={() => setIsLocationOpen(false)}>
											Delhi
										</Link>
										<Link
											to={getLocationLink("mumbai")}
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											onClick={() => setIsLocationOpen(false)}>
											Mumbai
										</Link>
										<Link
											to={getLocationLink("bangalore")}
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											onClick={() => setIsLocationOpen(false)}>
											Bangalore
										</Link>
										<Link
											to={getLocationLink("chennai")}
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											onClick={() => setIsLocationOpen(false)}>
											Chennai
										</Link>
									</div>
								)}
							</div>

							{/* User Menu */}
							<div className="relative" ref={userMenuRef}>
								<button
									onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
									className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
									<FaUser className="text-lg" />
									<span className="text-sm">Welcome Guest User</span>
									<span className="text-xs">▼</span>
								</button>

								{isUserMenuOpen && (
									<div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-48 z-20">
										<button
											onClick={() => {
												setIsLoginModalOpen(true);
												setIsUserMenuOpen(false);
											}}
											className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
											Login
										</button>
										<button
											onClick={() => {
												setIsRegisterModalOpen(true);
												setIsUserMenuOpen(false);
											}}
											className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
											Register
										</button>
										<Link
											to="/profile"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											onClick={() => setIsUserMenuOpen(false)}>
											My Profile
										</Link>
									</div>
								)}
							</div>

							{/* Compare */}
							<div className="relative">
								<Link
									to="/compare"
									className="flex items-center gap-1 text-green-600 hover:text-green-800 transition-colors">
									<FaFlask className="text-xl" />
									{compareCount > 0 && (
										<span className="bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
											{compareCount}
										</span>
									)}
								</Link>
							</div>

							{/* Cart */}
							<div className="relative">
								<Link
									to="/cart"
									className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors">
									<FaShoppingCart className="text-xl" />
									{cartCount > 0 && (
										<span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
											{cartCount > 99 ? "99+" : cartCount}
										</span>
									)}
								</Link>
							</div>

							{/* Services Menu Button */}
							<div className="relative" ref={servicesMenuRef}>
								<button
									onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
									className="flex flex-col gap-1 p-2 hover:bg-gray-100 rounded-md transition-colors"
									aria-label="Services Menu">
									<span className="w-6 h-0.5 bg-gray-800"></span>
									<span className="w-6 h-0.5 bg-gray-800"></span>
									<span className="w-6 h-0.5 bg-gray-800"></span>
								</button>

								{/* Comprehensive Services Dropdown */}
								{isServicesMenuOpen && (
									<div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-md shadow-xl py-2 w-64 z-30">
										{/* Main Services */}
										<Link
											to="/book-test"
											className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
											onClick={() => setIsServicesMenuOpen(false)}>
											<FaStethoscope className="text-lg text-blue-600" />
											<span>Book a Test</span>
										</Link>

										<Link
											to="/nearest-center"
											className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
											onClick={() => setIsServicesMenuOpen(false)}>
											<FaMapMarkerAlt className="text-lg text-orange-500" />
											<span>Nearest Center</span>
										</Link>

										<Link
											to="/upload-prescription"
											className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
											onClick={() => setIsServicesMenuOpen(false)}>
											<FaClipboardList className="text-lg text-green-600" />
											<span>Upload Prescription</span>
										</Link>

										<Link
											to="/download-report"
											className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
											onClick={() => setIsServicesMenuOpen(false)}>
											<FaDownload className="text-lg text-purple-600" />
											<span>Download Report</span>
										</Link>

										<Link
											to="/subsidiaries"
											className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
											onClick={() => setIsServicesMenuOpen(false)}>
											<FaBuilding className="text-lg text-gray-600" />
											<span>Our Subsidiaries</span>
										</Link>

										<Link
											to="/promotions"
											className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
											onClick={() => setIsServicesMenuOpen(false)}>
											<FaGift className="text-lg text-red-500" />
											<span>Promotions & Discounts</span>
										</Link>

										<Link
											to="/special-programs"
											className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
											onClick={() => setIsServicesMenuOpen(false)}>
											<FaStar className="text-lg text-yellow-500" />
											<span>Special Programs</span>
										</Link>

										<Link
											to="/labs"
											className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
											onClick={() => setIsServicesMenuOpen(false)}>
											<FaFlask className="text-lg text-teal-600" />
											<span>Our Labs</span>
										</Link>

										<Link
											to="/events"
											className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
											onClick={() => setIsServicesMenuOpen(false)}>
											<FaCalendarAlt className="text-lg text-indigo-600" />
											<span>Events</span>
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Header */}
			<div className="lg:hidden">
				{/* Top Row - Logo & Location */}
				<div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
					<div className="flex justify-between items-center">
						{/* Mobile Logo */}
						<Link
							to="/"
							className="bg-orange-400 px-3 py-2 rounded-lg hover:bg-orange-500 transition-colors">
							<h1 className="text-blue-900 font-bold text-base flex items-center gap-2">
								<FaFlask className="text-lg" />
								DIVITH LABS
							</h1>
						</Link>

						{/* Mobile Location */}
						<div className="relative" ref={locationDropdownRef}>
							<button
								onClick={() => setIsLocationOpen(!isLocationOpen)}
								className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
								<FaMapMarkerAlt className="text-xs" />
								<span>{currentLocation}</span>
								<span className="text-xs">▼</span>
							</button>

							{isLocationOpen && (
								<div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-32 z-20">
									<Link
										to={getLocationLink("delhi")}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										onClick={() => setIsLocationOpen(false)}>
										Delhi
									</Link>
									<Link
										to={getLocationLink("mumbai")}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										onClick={() => setIsLocationOpen(false)}>
										Mumbai
									</Link>
									<Link
										to={getLocationLink("bangalore")}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										onClick={() => setIsLocationOpen(false)}>
										Bangalore
									</Link>
									<Link
										to={getLocationLink("chennai")}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										onClick={() => setIsLocationOpen(false)}>
										Chennai
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Bottom Row - Menu, Search, Actions */}
				<div className="bg-white px-4 py-3 shadow-md">
					<div className="flex items-center gap-3">
						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
							className="p-2 hover:bg-gray-100 rounded-md transition-colors"
							aria-label="Menu">
							<FaBars className="text-lg text-gray-700" />
						</button>

						{/* Search Bar */}
						<div className="flex-1 relative">
							<input
								type="text"
								placeholder="Search Tests & Packages"
								className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							/>
							<button className="absolute right-3 top-1/2 transform -translate-y-1/2">
								<FaSearch className="text-gray-400 hover:text-blue-600 transition-colors" />
							</button>
						</div>

						{/* Phone Button */}
						<a
							href="tel:011-4988-5050"
							className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
							aria-label="Call Us">
							<FaPhone className="text-sm" />
						</a>

						{/* Mobile Compare */}
						<Link
							to="/compare"
							className="relative p-2 hover:bg-gray-100 rounded-md transition-colors">
							<FaFlask className="text-lg text-green-600" />
							{compareCount > 0 && (
								<span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
									{compareCount}
								</span>
							)}
						</Link>

						{/* Mobile Cart */}
						<Link
							to="/cart"
							className="relative p-2 hover:bg-gray-100 rounded-md transition-colors">
							<FaShoppingCart className="text-lg text-blue-600" />
							{cartCount > 0 && (
								<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
									{cartCount > 99 ? "99+" : cartCount}
								</span>
							)}
						</Link>
					</div>
				</div>

				{/* Mobile Services Menu */}
				{isServicesMenuOpen && (
					<div className="bg-white border-t border-gray-200 shadow-lg relative z-50">
						{/* Navigation Links */}
						<div className="py-2">
							<Link
								to="/book-test"
								className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
								onClick={() => setIsServicesMenuOpen(false)}>
								<FaStethoscope className="text-lg text-blue-600" />
								<span className="font-medium">Book a Test</span>
							</Link>

							<Link
								to="/doctors"
								className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
								onClick={() => setIsServicesMenuOpen(false)}>
								<FaUserMd className="text-lg text-blue-600" />
								<span className="font-medium">Doctors</span>
							</Link>

							<Link
								to="/nearest-center"
								className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
								onClick={() => setIsServicesMenuOpen(false)}>
								<FaMapMarkerAlt className="text-lg text-orange-500" />
								<span className="font-medium">Nearest Center</span>
							</Link>

							<Link
								to="/download-report"
								className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
								onClick={() => setIsServicesMenuOpen(false)}>
								<FaDownload className="text-lg text-purple-600" />
								<span className="font-medium">Download Report</span>
							</Link>

							<Link
								to="/upload-prescription"
								className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
								onClick={() => setIsServicesMenuOpen(false)}>
								<FaClipboardList className="text-lg text-green-600" />
								<span className="font-medium">Upload Prescription</span>
							</Link>

							<Link
								to="/promotions"
								className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
								onClick={() => setIsServicesMenuOpen(false)}>
								<FaGift className="text-lg text-red-500" />
								<span className="font-medium">Promotions & Offers</span>
							</Link>

							<Link
								to="/about"
								className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
								onClick={() => setIsServicesMenuOpen(false)}>
								<FaInfoCircle className="text-lg text-blue-500" />
								<span className="font-medium">About Us</span>
							</Link>

							<Link
								to="/blogs"
								className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
								onClick={() => setIsServicesMenuOpen(false)}>
								<FaEdit className="text-lg text-orange-500" />
								<span className="font-medium">Health Blogs</span>
							</Link>
						</div>

						{/* Authentication Section */}
						<div className="bg-gray-50 px-4 py-4">
							<div className="space-y-3">
								<button
									onClick={() => {
										setIsLoginModalOpen(true);
										setIsServicesMenuOpen(false);
									}}
									className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
									<FaLock className="text-sm" />
									<span>Login</span>
								</button>

								<button
									onClick={() => {
										setIsRegisterModalOpen(true);
										setIsServicesMenuOpen(false);
									}}
									className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors">
									<FaUserPlus className="text-sm" />
									<span>Sign Up</span>
								</button>

								<div className="text-center pt-2">
									<Link
										to="/profile"
										className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-1"
										onClick={() => setIsServicesMenuOpen(false)}>
										<FaUser className="text-xs" />
										<span>My Profile</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>

			{/* Login Modal */}
			<LoginModal
				isOpen={isLoginModalOpen}
				onClose={() => setIsLoginModalOpen(false)}
				onSwitchToRegister={() => {
					setIsLoginModalOpen(false);
					setIsRegisterModalOpen(true);
				}}
			/>

			<RegisterModal
				isOpen={isRegisterModalOpen}
				onClose={() => setIsRegisterModalOpen(false)}
				onSwitchToLogin={() => {
					setIsRegisterModalOpen(false);
					setIsLoginModalOpen(true);
				}}
			/>
		</header>
	);
};

export default Header;
