import React from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaClock, FaFlask } from "react-icons/fa";

const PopularTestsSection = () => {
	const popularTests = [
		{
			id: 1,
			name: "SWASTHFIT COMPLETE HEALTH CHECK",
			preparation: "No special preparation required",
			sample: "Daily",
			parameters: "83 parameter(s) covered",
			originalPrice: 8960,
			discountedPrice: 5000.0,
			discount: 44,
		},
		{
			id: 2,
			name: "SWASTHFIT SUPER 1",
			preparation: "12 Hour Fasting Mandatory",
			sample: "Sample Daily by 11 AM; Report Same day",
			parameters: "33 parameter(s) covered",
			originalPrice: 2580,
			discountedPrice: 1850.0,
			discount: 28,
		},
		{
			id: 3,
			name: "SWASTHFIT SUPER 2",
			preparation: "12 Hour Fasting Mandatory",
			sample: "Sample Daily by 11 AM; Report Same day",
			parameters: "55 parameter(s) covered",
			originalPrice: 3370,
			discountedPrice: 2350.0,
			discount: 30,
		},
	];

	return (
		<section className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Header */}
				<div className="flex justify-between items-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
						Popular Tests / <br /> Health Packages
					</h2>
					<Link
						to="/all-tests"
						className="text-blue-600 hover:text-blue-800 font-medium text-lg underline">
						View All
					</Link>
				</div>

				{/* Tests Grid */}
				<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
					{popularTests.map((test) => (
						<div
							key={test.id}
							className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col h-full border border-transparent hover:border-blue-500 hover:bg-blue-50 hover:scale-105 hover:-translate-y-2 transform cursor-pointer overflow-hidden">
							{/* Discount Badge */}
							<div className="absolute top-4 right-4 z-10">
								<div className="relative">
									<div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-12">
										<div className="text-center">
											<div className="text-lg font-bold text-gray-900">
												{test.discount}%
											</div>
											<div className="text-xs font-medium text-gray-900">
												OFF
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Test Header - Yellow */}
							<div className="bg-blue-600 p-4 text-white">
								<h3 className="text-lg font-bold leading-tight pr-20">
									{test.name}
								</h3>
							</div>

							{/* Test Details */}
							<div className="p-6 flex-grow">
								{/* Preparation Info */}
								<div className="flex items-start gap-3 mb-4">
									<FaInfoCircle className="text-blue-600 mt-1 flex-shrink-0" />
									<span className="text-sm text-gray-700">
										{test.preparation}
									</span>
								</div>

								{/* Sample Info */}
								<div className="flex items-start gap-3 mb-4">
									<FaClock className="text-blue-600 mt-1 flex-shrink-0" />
									<span className="text-sm text-gray-700">{test.sample}</span>
								</div>

								{/* Parameters Info */}
								<div className="flex items-start gap-3 mb-6">
									<FaFlask className="text-blue-600 mt-1 flex-shrink-0" />
									<span className="text-sm text-gray-700">
										{test.parameters}
									</span>
								</div>

								{/* Pricing */}
								<div className="mb-6">
									<div className="flex items-center gap-2 mb-2">
										<span className="text-sm text-gray-500 line-through">
											₹{test.originalPrice}
										</span>
										<span className="text-2xl font-bold text-blue-600">
											₹{test.discountedPrice.toFixed(2)}
										</span>
									</div>
								</div>

								{/* Action Buttons */}
								<div className="flex gap-3">
									<button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium transition-colors">
										Book Now
									</button>
									<Link
										to={`/test/${test.id}`}
										className="text-yellow-600 hover:text-blue-800 font-medium py-3 px-2">
										Know More
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PopularTestsSection;
