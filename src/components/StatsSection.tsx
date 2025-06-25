import React from "react";
import {
	FaUsers,
	FaMapMarkerAlt,
	FaFlask,
	FaClipboardList,
	FaUserMd,
	FaShieldAlt,
	FaAward,
	FaCertificate,
} from "react-icons/fa";

const StatsSection = () => {
	const stats = [
		{
			id: 1,
			number: "27M+",
			label: "Satisfied Customers",
			icon: <FaUsers className="text-2xl text-blue-600 mb-2" />,
			description: "Trust us with their health",
		},
		{
			id: 2,
			number: "5000+",
			label: "Certified Tests",
			icon: <FaClipboardList className="text-2xl text-blue-600 mb-2" />,
			description: "NABL accredited procedures",
		},
		{
			id: 3,
			number: "5,500+",
			label: "Service Centers",
			icon: <FaMapMarkerAlt className="text-2xl text-blue-600 mb-2" />,
			description: "Across the nation",
		},
		{
			id: 4,
			number: "280+",
			label: "Advanced Labs",
			icon: <FaFlask className="text-2xl text-blue-600 mb-2" />,
			description: "State-of-the-art facilities",
		},
	];

	const trustBadges = [
		{
			icon: <FaShieldAlt className="text-2xl text-blue-600" />,
			title: "ISO Certified",
			subtitle: "Quality Assured",
		},
		{
			icon: <FaAward className="text-2xl text-blue-600" />,
			title: "NABL Accredited",
			subtitle: "Nationally Recognized",
		},
		{
			icon: <FaCertificate className="text-2xl text-blue-600" />,
			title: "CAP Certified",
			subtitle: "International Standards",
		},
		{
			icon: <FaUserMd className="text-2xl text-blue-600" />,
			title: "Expert Team",
			subtitle: "Qualified Professionals",
		},
	];

	return (
		<section className="py-10 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10"></div>
			<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

			<div className="max-w-7xl mx-auto px-4 relative z-10">
				{/* Section Header */}
				<div className="mb-10">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-tight">
						Trusted by Millions
					</h2>
					<p className="text-sm text-gray-600 max-w-2xl leading-relaxed">
						Over two decades of excellence in healthcare diagnostics. Your
						health, our commitment - backed by numbers that speak for
						themselves.
					</p>
				</div>

				{/* Stats Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
					{stats.map((stat) => (
						<div
							key={stat.id}
							className="bg-white shadow-lg border border-gray-200 rounded-xl p-4 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
							<div className="flex justify-center mb-2">{stat.icon}</div>
							<div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
								{stat.number}
							</div>
							<div className="text-sm font-semibold text-gray-800 mb-1">
								{stat.label}
							</div>
							<div className="text-xs text-gray-600">{stat.description}</div>
						</div>
					))}
				</div>

				{/* Trust Badges */}
				<div className="bg-white shadow-lg border border-gray-200 rounded-xl p-6 mb-8">
					<h3 className="text-lg font-bold text-gray-800 text-center mb-6">
						Our Certifications & Accreditations
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{trustBadges.map((badge, index) => (
							<div
								key={index}
								className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
								<div className="flex justify-center mb-3">{badge.icon}</div>
								<h4 className="text-sm font-bold text-gray-800 mb-1">
									{badge.title}
								</h4>
								<p className="text-xs text-gray-600">{badge.subtitle}</p>
							</div>
						))}
					</div>
				</div>

				{/* CTA Section */}
				<div className="text-center">
					<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 md:p-8 shadow-xl">
						<h3 className="text-xl font-bold text-white mb-3">
							Ready to Experience Quality Healthcare?
						</h3>
						<p className="text-sm text-blue-100 mb-6 max-w-xl mx-auto">
							Join millions who trust us with their health. Book your test today
							and experience the difference quality makes.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
							<button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm">
								Book Test Now
							</button>
							<button className="bg-white border-2 border-white text-blue-600 hover:bg-gray-50 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 text-sm">
								Find Nearest Lab
							</button>
						</div>
						<div className="mt-4 text-xs text-blue-100">
							✓ Home Collection Available ✓ Reports in 24 Hours ✓ Expert
							Consultation
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StatsSection;
