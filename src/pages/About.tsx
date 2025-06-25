import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const About = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section with enhanced design */}
			<div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0">
					<div className="absolute inset-0 opacity-5">
						<div className="absolute top-12 left-12 w-2 h-2 bg-white rounded-full"></div>
						<div className="absolute top-24 right-16 w-2 h-2 bg-white rounded-full"></div>
						<div className="absolute bottom-16 left-20 w-2 h-2 bg-white rounded-full"></div>
						<div className="absolute bottom-12 right-12 w-2 h-2 bg-white rounded-full"></div>
						<div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full"></div>
						<div className="absolute top-2/3 right-1/3 w-2 h-2 bg-white rounded-full"></div>
						<div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full"></div>
						<div className="absolute top-1/4 right-1/2 w-2 h-2 bg-white rounded-full"></div>
					</div>
					<div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
					<div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
				</div>

				{/* Curved bottom */}
				<div className="absolute bottom-0 left-0 w-full">
					<svg
						className="w-full h-24"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none">
						<path
							d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"
							fill="rgb(249 250 251)"
						/>
					</svg>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 py-24">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
								🏥 Healthcare Excellence Since 1947
							</div>
							<h1 className="text-6xl font-bold leading-tight">
								About
								<span className="block text-yellow-400">DIVITH LABS</span>
							</h1>
							<p className="text-xl text-blue-100 leading-relaxed max-w-lg">
								Pioneering diagnostic excellence with cutting-edge technology
								and compassionate care for over 75 years.
							</p>
							<div className="grid grid-cols-3 gap-6 pt-6">
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400">75+</div>
									<div className="text-sm text-blue-200">Years Legacy</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400">
										4000+
									</div>
									<div className="text-sm text-blue-200">Tests Available</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400">200+</div>
									<div className="text-sm text-blue-200">Locations</div>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="relative z-10">
								<img
									src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
									alt="Healthcare Professional"
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
					{ label: "About Us", isActive: true },
				]}
			/>

			{/* Vision & Mission Section */}
			<div className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
						<div className="text-center">
							<div className="bg-yellow-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-yellow-200">
								<div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center">
									<svg
										className="w-10 h-10 text-white"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
							</div>
							<h3 className="text-2xl font-bold text-gray-800 mb-4">
								OUR VISION
							</h3>
							<p className="text-gray-600 leading-relaxed">
								To be a one-stop trusted healthcare partner serving excellence
								from prevention to cure, making lives better and healthier.
							</p>
						</div>
						<div className="text-center">
							<div className="bg-blue-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-blue-200">
								<div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center">
									<svg
										className="w-10 h-10 text-white"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
							</div>
							<h3 className="text-2xl font-bold text-gray-800 mb-4">
								OUR MISSION
							</h3>
							<p className="text-gray-600 leading-relaxed">
								To be a one-stop healthcare service provider with innovative
								technology and state-of-the-art infrastructure, right from
								diagnostics to treatment for every individual we serve.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Our Journey Section */}
			<div className="bg-blue-600 text-white py-16">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
					<p className="text-center text-blue-100 mb-12 max-w-4xl mx-auto">
						From Year 1947, Lal Pathlab started the journey of providing
						cutting-edge clinical and anatomical chemistry labs. As we
						progressed in the journey, our company has been transformed from
						just providing clinical chemistry services to a comprehensive
						diagnostic centre.
					</p>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="relative">
							<div className="bg-white bg-opacity-20 rounded-full p-8 max-w-md mx-auto">
								<img
									src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
									alt="Healthcare Journey"
									className="rounded-full w-full h-full object-cover"
								/>
							</div>
						</div>

						<div className="space-y-6">
							<div className="flex items-center space-x-4">
								<div className="bg-yellow-400 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
									1
								</div>
								<div>
									<h4 className="text-xl font-bold mb-2">1949 - 2002</h4>
									<p className="text-blue-100">
										We started as a single lab in 1947 Zafar House and today
										have expanded into various areas of diagnostic services in a
										short span of time.
									</p>
								</div>
							</div>

							<div className="flex items-initial space-x-4">
								<div className="bg-yellow-400 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
									2
								</div>
								<div>
									<h4 className="text-xl font-bold mb-2">2003 - 2010</h4>
									<p className="text-blue-100">
										New management took place and company Become India's No.1
										leading advanced clinical and Microscopy Reference Lab.
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="bg-yellow-400 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
									3
								</div>
								<div>
									<h4 className="text-xl font-bold mb-2">2010 - 2013</h4>
									<p className="text-blue-100">
										Expansion started by hiring local team with added values,
										introducing in Technology & Operation 24/7.
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="bg-yellow-400 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
									4
								</div>
								<div>
									<h4 className="text-xl font-bold mb-2">2013 - Present</h4>
									<p className="text-blue-100">
										By Introducing latest digital lab as well our core business
										at our convenient advance location in 2013.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Our Values Section */}
			<div className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
						Our Values
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="bg-blue-50 p-8 rounded-lg mb-4">
								<img
									src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
									alt="Customer First"
									className="w-20 h-20 mx-auto rounded-lg object-cover mb-4"
								/>
								<h3 className="text-lg font-bold text-gray-800">
									Customer First
								</h3>
							</div>
						</div>

						<div className="text-center">
							<div className="bg-blue-50 p-8 rounded-lg mb-4">
								<img
									src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
									alt="Docs & Integrity"
									className="w-20 h-20 mx-auto rounded-lg object-cover mb-4"
								/>
								<h3 className="text-lg font-bold text-gray-800">
									Docs & Integrity
								</h3>
							</div>
						</div>

						<div className="text-center">
							<div className="bg-blue-50 p-8 rounded-lg mb-4">
								<img
									src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
									alt="Quality"
									className="w-20 h-20 mx-auto rounded-lg object-cover mb-4"
								/>
								<h3 className="text-lg font-bold text-gray-800">Quality</h3>
							</div>
						</div>

						<div className="text-center">
							<div className="bg-blue-50 p-8 rounded-lg mb-4">
								<img
									src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
									alt="Accountability"
									className="w-20 h-20 mx-auto rounded-lg object-cover mb-4"
								/>
								<h3 className="text-lg font-bold text-gray-800">
									Accountability
								</h3>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
						<div className="text-center">
							<div className="bg-blue-50 p-8 rounded-lg mb-4">
								<img
									src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
									alt="Comfort & Convenience"
									className="w-20 h-20 mx-auto rounded-lg object-cover mb-4"
								/>
								<h3 className="text-lg font-bold text-gray-800">
									Comfort & Convenience
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Our Network Section */}
			<div className="bg-gray-100 py-16">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
						Our Network
					</h2>
					<p className="text-center text-gray-600 mb-12">Location Networks</p>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
							<div className="text-center bg-white p-6 rounded-lg shadow-md">
								<div className="text-blue-600 mb-2">
									<svg
										className="w-8 h-8 mx-auto"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-blue-600">280+</h3>
								<p className="text-gray-600 text-sm">Labs</p>
							</div>

							<div className="text-center bg-white p-6 rounded-lg shadow-md">
								<div className="text-blue-600 mb-2">
									<svg
										className="w-8 h-8 mx-auto"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-blue-600">5,500+</h3>
								<p className="text-gray-600 text-sm">Collection Centers</p>
							</div>

							<div className="text-center bg-white p-6 rounded-lg shadow-md">
								<div className="text-blue-600 mb-2">
									<svg
										className="w-8 h-8 mx-auto"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-blue-600">11,000+</h3>
								<p className="text-gray-600 text-sm">Tests</p>
							</div>

							<div className="text-center bg-white p-6 rounded-lg shadow-md">
								<div className="text-blue-600 mb-2">
									<svg
										className="w-8 h-8 mx-auto"
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
								<h3 className="text-2xl font-bold text-blue-600">350+</h3>
								<p className="text-gray-600 text-sm">Specialized Machines</p>
							</div>

							<div className="text-center bg-white p-6 rounded-lg shadow-md">
								<div className="text-blue-600 mb-2">
									<svg
										className="w-8 h-8 mx-auto"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
										<path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707L16 7.586A1 1 0 0015.414 7H14z" />
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-blue-600">500+</h3>
								<p className="text-gray-600 text-sm">Service Logistics</p>
							</div>

							<div className="text-center bg-white p-6 rounded-lg shadow-md">
								<div className="text-blue-600 mb-2">
									<svg
										className="w-8 h-8 mx-auto"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-blue-600">24/7</h3>
								<p className="text-gray-600 text-sm">
									Reporting Available 24x7
								</p>
							</div>
						</div>

						<div>
							<img
								src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
								alt="Our Network"
								className="rounded-lg shadow-lg w-full"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Logistics Strength Section */}
			<div className="bg-blue-50 py-16">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
						Logistics Strength
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center bg-white p-8 rounded-lg shadow-md">
							<div className="text-blue-600 mb-4">
								<svg
									className="w-12 h-12 mx-auto"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
									<path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707L16 7.586A1 1 0 0015.414 7H14z" />
								</svg>
							</div>
							<h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
							<p className="text-gray-600">Vehicles</p>
						</div>

						<div className="text-center bg-white p-8 rounded-lg shadow-md">
							<div className="text-blue-600 mb-4">
								<svg
									className="w-12 h-12 mx-auto"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
								</svg>
							</div>
							<h3 className="text-3xl font-bold text-blue-600 mb-2">1.5 M+</h3>
							<p className="text-gray-600">Collections</p>
						</div>

						<div className="text-center bg-white p-8 rounded-lg shadow-md">
							<div className="text-blue-600 mb-4">
								<svg
									className="w-12 h-12 mx-auto"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<h3 className="text-3xl font-bold text-blue-600 mb-2">250+</h3>
							<p className="text-gray-600">Cities Covered</p>
						</div>

						<div className="text-center bg-white p-8 rounded-lg shadow-md">
							<div className="text-blue-600 mb-4">
								<svg
									className="w-12 h-12 mx-auto"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<h3 className="text-3xl font-bold text-blue-600 mb-2">99.5%</h3>
							<p className="text-gray-600">SLA Compliance</p>
						</div>
					</div>
				</div>
			</div>

			{/* Our Team Section */}
			<div className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
						Our Team
					</h2>
					<div className="flex justify-center space-x-8 mb-12">
						<button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
							Board of Directors
						</button>
						<button className="text-gray-600 hover:text-blue-600 px-6 py-2 rounded-full font-semibold transition-colors">
							Senior Management
						</button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center">
							<img
								src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
								alt="Dr. Rajiv Sharma"
								className="w-full h-64 rounded-lg mx-auto mb-4 object-cover"
							/>
							<h3 className="text-lg font-bold text-gray-800">
								Dr Rajiv Sharma
							</h3>
							<p className="text-blue-600 font-medium">
								Chief Executive Officer
							</p>
						</div>

						<div className="text-center">
							<img
								src="https://images.unsplash.com/photo-1594824019862-a9cf12b1b4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
								alt="Dr. Sunita Singh"
								className="w-full h-64 rounded-lg mx-auto mb-4 object-cover"
							/>
							<h3 className="text-lg font-bold text-gray-800">
								Dr. Sunita Devi Singh
							</h3>
							<p className="text-blue-600 font-medium">Managing Director</p>
						</div>

						<div className="text-center">
							<img
								src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
								alt="Rajeev Raj Sharma"
								className="w-full h-64 rounded-lg mx-auto mb-4 object-cover"
							/>
							<h3 className="text-lg font-bold text-gray-800">
								Rajeev Raj Sharma
							</h3>
							<p className="text-blue-600 font-medium">Executive Director</p>
						</div>

						<div className="text-center">
							<img
								src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
								alt="Dr Malkeet Kaul"
								className="w-full h-64 rounded-lg mx-auto mb-4 object-cover"
							/>
							<h3 className="text-lg font-bold text-gray-800">
								Dr Malkeet Kaul
							</h3>
							<p className="text-blue-600 font-medium">Executive Director</p>
						</div>
					</div>

					{/* Pagination dots */}
					<div className="flex justify-center space-x-2 mt-8">
						<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
						<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
						<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
						<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
						<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
						<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
						<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
					</div>
				</div>
			</div>

			{/* Bottom Action Cards */}
			<div className="bg-gray-100 py-16">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
							<img
								src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
								alt="Corporate Social Responsibility"
								className="w-full h-64 object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
								<div className="p-6 text-white">
									<h3 className="text-xl font-bold mb-4">
										Corporate Social Responsibility
									</h3>
									<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold transition-colors flex items-center">
										<span className="mr-2">📋</span>
										Learn More
									</button>
								</div>
							</div>
						</div>

						<div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
							<img
								src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
								alt="Career at Lal PatLabs"
								className="w-full h-64 object-cover"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
								<div className="p-6 text-white">
									<h3 className="text-xl font-bold mb-4">
										Career at Lal PatLabs
									</h3>
									<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold transition-colors flex items-center">
										<span className="mr-2">👥</span>
										Join Our Team
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
