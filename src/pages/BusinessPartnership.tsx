import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const BusinessPartnership = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
					<div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
					<div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
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

				<div className="relative max-w-7xl mx-auto px-4 py-20">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
								🤝 Partnership Opportunities
							</div>
							<h1 className="text-5xl md:text-6xl font-bold leading-tight">
								Business
								<span className="block text-yellow-400">Partnership</span>
							</h1>
							<p className="text-xl text-blue-100 leading-relaxed max-w-lg">
								Partner with us to bring meaningful change in healthcare and
								expand your business horizons with India's trusted diagnostic
								network.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-colors shadow-lg">
									Explore Partnerships
								</button>
								<button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors">
									Learn More
								</button>
							</div>
						</div>
						<div className="relative">
							<div className="relative z-10">
							<img
									src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
								alt="Business Partnership"
									className="rounded-2xl shadow-2xl w-full"
							/>
							</div>
							<div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-2xl blur-3xl"></div>
						</div>
					</div>
				</div>
			</div>

			{/* Breadcrumb */}
			<Breadcrumb
				items={[
					{ label: "Home", href: "/" },
					{ label: "Business Partnership", isActive: true },
				]}
			/>

			{/* Overview Section */}
			<div className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-gray-800 mb-8">Overview</h2>
					<p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
						At DiviLab, we are always seeking out for partners, supporters with
						aligned business goals and ideas to bring about a meaningful change
						in healthcare. We invite people to experience and learn from our
						diverse network and know more about our expertise, knowledge and
						legacy that comes with years of customer trust and dependence. If
						you think you can join us and help us in our purpose or enabling
						healthier lives, then here's your chance.
					</p>
				</div>
			</div>

			{/* Stats Section */}
			<div className="bg-gray-100 py-16">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center bg-white p-8 rounded-lg shadow-md">
							<div className="text-blue-600 mb-4">
								<svg
									className="w-12 h-12 mx-auto"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
								</svg>
							</div>
							<h3 className="text-4xl font-bold text-blue-600 mb-2">80+</h3>
							<p className="text-gray-600">Live Unit Network</p>
						</div>
						<div className="text-center bg-white p-8 rounded-lg shadow-md">
							<div className="text-blue-600 mb-4">
								<svg
									className="w-12 h-12 mx-auto"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-4xl font-bold text-blue-600 mb-2">981+</h3>
							<p className="text-gray-600">on ground field resources</p>
						</div>
						<div className="text-center bg-white p-8 rounded-lg shadow-md">
							<div className="text-blue-600 mb-4">
								<svg
									className="w-12 h-12 mx-auto"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
									<path
										fillRule="evenodd"
										d="M4 5a2 2 0 012-2v1a1 1 0 00.293.707L7 5.414V7a1 1 0 102 0V5.414l.707-.707A1 1 0 0010 4V3a2 2 0 012 2v6.5l1.5 1.5v2h-9v-2L6 11.5V5z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<h3 className="text-4xl font-bold text-blue-600 mb-2">231+</h3>
							<p className="text-gray-600">
								Labs supported by logistic operations
							</p>
						</div>
						<div className="text-center bg-white p-8 rounded-lg shadow-md">
							<div className="text-blue-600 mb-4">
								<svg
									className="w-12 h-12 mx-auto"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<h3 className="text-4xl font-bold text-blue-600 mb-2">25+</h3>
							<p className="text-gray-600">Airport locations covered</p>
						</div>
					</div>
				</div>
			</div>

			{/* Partner With Us Section */}
			<div className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
						Partner With Us
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
							<img
								src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
								alt="Become a Franchisee"
								className="w-full h-64 object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
								<div className="p-6 text-white">
									<h3 className="text-xl font-bold mb-2">
										Become a Franchisee
									</h3>
									<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors">
										Learn More →
									</button>
								</div>
							</div>
						</div>
						<div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
							<img
								src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
								alt="International Partnership"
								className="w-full h-64 object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
								<div className="p-6 text-white">
									<h3 className="text-xl font-bold mb-2">
										International Partnership
									</h3>
									<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors">
										Learn More →
									</button>
								</div>
							</div>
						</div>
						<div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
							<img
								src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
								alt="Corporate Tie Up"
								className="w-full h-64 object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
								<div className="p-6 text-white">
									<h3 className="text-xl font-bold mb-2">Corporate Tie Up</h3>
									<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors">
										Learn More →
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Become a Vendor Section */}
			<div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
						<div>
							<img
								src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
								alt="Become a Vendor"
								className="rounded-lg shadow-lg"
							/>
						</div>
						<div>
							<h2 className="text-3xl font-bold text-gray-800 mb-6">
								Become a Vendor
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								Join our network of trusted vendors and be part of our mission
								to provide quality healthcare services. We offer competitive
								terms and long-term partnerships.
							</p>
							<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
								Become a Vendor →
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Section */}
			<div className="bg-yellow-400 py-12">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="flex items-center mb-4 md:mb-0">
							<div className="bg-white p-3 rounded-full mr-4">
								<svg
									className="w-8 h-8 text-blue-600"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
								</svg>
							</div>
							<div>
								<p className="font-semibold">
									Get a call back within 15 minutes from our Health Advisor for
									Test Booking Assistance
								</p>
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<input
								type="tel"
								placeholder="Enter Your 10 Digit Mobile Number"
								className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
								Get a Callback
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Additional Benefits Section */}
			<div className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
						Why Partner With Us?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="text-center p-6">
							<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-blue-600"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-2">
								Proven Track Record
							</h3>
							<p className="text-gray-600">
								Years of excellence in healthcare services with trusted
								partnerships.
							</p>
						</div>
						<div className="text-center p-6">
							<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-blue-600"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-2">
								Strong Support System
							</h3>
							<p className="text-gray-600">
								Comprehensive training and ongoing support for all partners.
							</p>
						</div>
						<div className="text-center p-6">
							<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-blue-600"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-2">
								Growth Opportunities
							</h3>
							<p className="text-gray-600">
								Multiple avenues for business expansion and revenue growth.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusinessPartnership;
