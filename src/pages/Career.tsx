import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const Career = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Compact Career Banner */}
			<div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
				<div className="max-w-7xl mx-auto px-4 py-8">
					<div className="flex items-center justify-between">
						<div>
							<div className="flex items-center gap-2 mb-2">
								<span className="text-yellow-400">🚀</span>
								<span className="text-sm font-medium">Join Our Team</span>
							</div>
							<h1 className="text-3xl font-bold mb-2">Find the right opportunity for you at DIVITH LABS</h1>
							<p className="text-blue-100">Be part of India's leading diagnostic network and make a difference in millions of lives every day.</p>
						</div>
						<div className="hidden lg:flex gap-3">
							<button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
								View Open Positions
							</button>
							<button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
								Learn About Culture
							</button>
						</div>
					</div>
					<div className="flex lg:hidden gap-3 mt-4">
						<button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
							View Open Positions
						</button>
						<button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
							Learn About Culture
						</button>
					</div>
				</div>
			</div>

			{/* Breadcrumb */}
			{/* <Breadcrumb
				items={[
					{ label: "Home", href: "/" },
					{ label: "Career", isActive: true },
				]}
			/> */}

			{/* Employee Testimonials */}
			<div className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
						Employee Testimonials
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-gray-50 p-6 rounded-lg">
							<div className="flex items-center mb-4">
								<img
									src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
									alt="Bhuvanesh Pathak"
									className="w-12 h-12 rounded-full object-cover mr-4"
								/>
								<div>
									<h3 className="font-bold text-gray-800">Bhuvanesh Pathak</h3>
									<p className="text-sm text-gray-600">Lab Technician</p>
								</div>
							</div>
							<p className="text-gray-600 mb-4">
								"I feel proud to be a part of this amazing family of DiviLab
								Healthcare. This is a place where employees are taken care of
								and there is scope of professional growth."
							</p>
							<div className="flex text-yellow-400">
								<span>⭐⭐⭐⭐⭐</span>
							</div>
							<button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
								Read More
							</button>
						</div>

						<div className="bg-gray-50 p-6 rounded-lg">
							<div className="flex items-center mb-4">
								<img
									src="https://images.pexels.com/photos/7447115/pexels-photo-7447115.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
									alt="Dr. Sukrithya Bansal"
									className="w-12 h-12 rounded-full object-cover mr-4"
								/>
								<div>
									<h3 className="font-bold text-gray-800">
										Dr. Sukrithya Bansal
									</h3>
									<p className="text-sm text-gray-600">Senior Pathologist</p>
								</div>
							</div>
							<p className="text-gray-600 mb-4">
								"I strongly believe DiviLab Healthcare is a great platform for
								anyone who aspires to get knowledge for nutritious careers. The
								opportunities are endless as a Medical Professional."
							</p>
							<div className="flex text-yellow-400">
								<span>⭐⭐⭐⭐⭐</span>
							</div>
							<button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
								Read More
							</button>
						</div>

						<div className="bg-gray-50 p-6 rounded-lg">
							<div className="flex items-center mb-4">
								<img
									src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
									alt="Dr. Kashmiri Lal Sharma"
									className="w-12 h-12 rounded-full object-cover mr-4"
								/>
								<div>
									<h3 className="font-bold text-gray-800">
										Dr. Kashmiri Lal Sharma
									</h3>
									<p className="text-sm text-gray-600">Chief Medical Officer</p>
								</div>
							</div>
							<p className="text-gray-600 mb-4">
								"I have been an enriching journey of 15 years with DiviLab
								Healthcare. It has been the questions answered through dedicated
								service from seniors and leaders I work with on a daily basis."
							</p>
							<div className="flex text-yellow-400">
								<span>⭐⭐⭐⭐⭐</span>
							</div>
							<button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
								Read More
							</button>
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

			{/* Benefits Section */}
			<div className="bg-blue-50 py-16">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
						Benefits we Provide to our Employees
					</h2>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
						<div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
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
							<h3 className="text-sm font-semibold text-gray-800">
								Maternity Benefits
							</h3>
						</div>

						<div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
							<div className="text-blue-600 mb-4">
								<svg
									className="w-12 h-12 mx-auto"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<h3 className="text-sm font-semibold text-gray-800">
								Health & Wellness
							</h3>
						</div>

						<div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
							<div className="text-blue-600 mb-4">
								<svg
									className="w-12 h-12 mx-auto"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
								</svg>
							</div>
							<h3 className="text-sm font-semibold text-gray-800">
								Team Building
							</h3>
						</div>

						<div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
							<div className="text-blue-600 mb-4">
								<svg
									className="w-12 h-12 mx-auto"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-sm font-semibold text-gray-800">
								Retirement Benefits
							</h3>
						</div>

						<div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
							<div className="text-blue-600 mb-4">
								<svg
									className="w-12 h-12 mx-auto"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<h3 className="text-sm font-semibold text-gray-800">
								Skill Training
							</h3>
						</div>

						<div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
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
							<h3 className="text-sm font-semibold text-gray-800">
								Recognition Awards
							</h3>
						</div>
					</div>
				</div>
			</div>

			{/* Gallery Section */}
			<div className="bg-gray-100 py-16">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
						Gallery
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="relative overflow-hidden rounded-lg shadow-lg">
							<img
								src="https://images.pexels.com/photos/7089391/pexels-photo-7089391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
								alt="Team Meeting"
								className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
							/>
						</div>

						<div className="relative overflow-hidden rounded-lg shadow-lg">
							<img
								src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
								alt="Laboratory Work"
								className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
							/>
						</div>

						<div className="relative overflow-hidden rounded-lg shadow-lg">
							<img
								src="https://images.pexels.com/photos/8940748/pexels-photo-8940748.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
								alt="Healthcare Professionals"
								className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
							/>
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
					</div>
				</div>
			</div>

			{/* Life At DiviLab Section */}
			<div className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-gray-800 mb-6">
						Life At DiviLab
					</h2>
					<p className="text-gray-600 mb-8 leading-relaxed">
						DiviLab Healthcare is committed to provide the best work culture to
						all our employees. We create an environment where skills are honed,
						achievements are recognized, and every contribution is valued. Our
						multi-dimensional work environment offers high growth opportunities
						through challenging assignments, cross-functional teams, and
						innovative thinking. We believe that excellence depends on creating
						an environment where people can flourish and be their best selves,
						while they contribute to our vision of transforming healthcare
						through excellence.
					</p>

					<div className="space-y-4">
						<div className="border border-gray-200 rounded-lg">
							<button className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
								<span className="font-semibold text-gray-800">Our Culture</span>
								<svg
									className="w-5 h-5 text-gray-500"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>

						<div className="border border-gray-200 rounded-lg">
							<button className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
								<span className="font-semibold text-gray-800">
									Reward & Recognition
								</span>
								<svg
									className="w-5 h-5 text-gray-500"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>

						<div className="border border-gray-200 rounded-lg">
							<button className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
								<span className="font-semibold text-gray-800">
									Career Growth
								</span>
								<svg
									className="w-5 h-5 text-gray-500"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>

						<div className="border border-gray-200 rounded-lg">
							<button className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
								<span className="font-semibold text-gray-800">
									Learning & Development
								</span>
								<svg
									className="w-5 h-5 text-gray-500"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>

						<div className="border border-gray-200 rounded-lg">
							<button className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
								<span className="font-semibold text-gray-800">
									Life-like Values
								</span>
								<svg
									className="w-5 h-5 text-gray-500"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>

						<div className="border border-gray-200 rounded-lg">
							<button className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
								<span className="font-semibold text-gray-800">Inclusive</span>
								<svg
									className="w-5 h-5 text-gray-500"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Explore Job Opportunities Section */}
			<div className="bg-gray-100 py-16">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="relative">
							<img
								src="https://images.pexels.com/photos/5412081/pexels-photo-5412081.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
								alt="Job Opportunities"
								className="rounded-lg shadow-lg w-full"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
								<div className="text-center text-white">
									<h3 className="text-2xl font-bold mb-4">
										Explore Job Opportunities
									</h3>
									<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
										View Jobs
									</button>
								</div>
							</div>
						</div>

						<div className="space-y-6">
							<h2 className="text-3xl font-bold text-gray-800">
								Join Our Growing Team
							</h2>
							<p className="text-gray-600 leading-relaxed">
								Discover exciting career opportunities at DiviLab Healthcare.
								We're always looking for talented individuals who share our
								passion for healthcare excellence and innovation.
							</p>
							<div className="space-y-4">
								<div className="flex items-center space-x-3">
									<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
									<span className="text-gray-700">
										Competitive compensation packages
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
									<span className="text-gray-700">
										Professional development opportunities
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
									<span className="text-gray-700">
										Collaborative work environment
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
									<span className="text-gray-700">
										Comprehensive benefits package
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Popular Tags Section */}
			<div className="bg-blue-600 text-white py-12">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-2xl font-bold mb-6">Popular Tags</h2>
					<div className="flex flex-wrap gap-2">
						{[
							"Phlebotomy Tech",
							"Full Stack Developer",
							"Central IT Tech",
							"Urgent Tech",
							"Delivery Boy",
							"Delivery Executive Tech",
							"Yoga Tech",
							"Dispatch Boy",
							"Urgent Tech",
							"Unit Tech",
							"Pathologist",
							"Urgent Tech",
							"Pathologist Tech",
							"Submission Tech",
							"Phlebotomy Tech",
							"Delivery Boy",
							"Central IT Tech",
							"Urgent Tech",
							"Urgent Tech",
							"Phlebotomy Tech",
							"Dispatch Boy",
							"Central IT Tech",
							"Urgent Tech",
							"Urgent Tech",
							"Urgent Tech",
						].map((tag, index) => (
							<span
								key={index}
								className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm hover:bg-opacity-30 cursor-pointer transition-colors">
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>

			{/* Location Tags Section */}
			<div className="bg-blue-700 text-white py-12">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex flex-wrap gap-2 text-sm">
						{[
							"Ahmedabad",
							"Ajmer",
							"Allahabad",
							"Aurangabad",
							"Bangalore",
							"Bhopal",
							"Bhubaneswar",
							"Chandigarh",
							"Chennai",
							"Coimbatore",
							"Ghaziabad",
							"Ghazipur",
							"Gwalior",
							"Hubli",
							"Hyderabad",
							"Indore",
							"Jaipur",
							"Jammu",
							"Kanpur",
							"Kochi",
							"Kolkata",
							"Lucknow",
							"Ludhiana",
							"Madurai",
							"Mangalore",
							"Mumbai",
							"Mysore",
							"Nagpur",
							"Nashik",
							"Noida",
							"Patna",
							"Pune",
							"Raipur",
							"Rajkot",
							"Salem",
							"Surat",
							"Thiruvananthapuram",
							"Udaipur",
							"Vadodara",
							"Varanasi",
							"Vijayawada",
							"Visakhapatnam",
						].map((location, index) => (
							<span
								key={index}
								className="hover:text-yellow-300 cursor-pointer transition-colors">
								{location}
								{index < 42 && " | "}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Career;
