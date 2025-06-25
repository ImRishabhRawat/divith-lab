import { Link } from "react-router-dom";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
	FaYoutube,
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
	FaClock,
	FaShieldAlt,
	FaAward,
	FaCertificate,
	FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		services: [
			{ name: "Popular Tests", path: "/popular-tests" },
			{ name: "Health Packages", path: "/health-packages" },
			{ name: "Home Collection", path: "/book-test" },
			{ name: "Upload Prescription", path: "/upload-prescription" },
			{ name: "Download Report", path: "/download-report" },
			{ name: "Find Nearest Lab", path: "/nearest-center" },
		],
		company: [
			{ name: "About Us", path: "/about" },
			{ name: "Our Labs", path: "/labs" },
			{ name: "Careers", path: "/career" },
			{ name: "Investors", path: "/investors" },
			{ name: "Business Partnership", path: "/business-partnership" },
			{ name: "Subsidiaries", path: "/subsidiaries" },
		],
		support: [
			{ name: "Help Center", path: "/help" },
			{ name: "Contact Us", path: "/contact" },
			{ name: "Privacy Policy", path: "/privacy" },
			{ name: "Terms of Service", path: "/terms" },
			{ name: "Refund Policy", path: "/refund" },
			{ name: "FAQ", path: "/faq" },
		],
		specialPrograms: [
			{ name: "Corporate Health", path: "/corporate" },
			{ name: "Special Programs", path: "/special-programs" },
			{ name: "Health Events", path: "/events" },
			{ name: "Promotions", path: "/promotions" },
			{ name: "Doctor Consultation", path: "/doctors" },
			{ name: "Health Blogs", path: "/blogs" },
		],
	};

	const trustBadges = [
		{ icon: <FaShieldAlt />, text: "ISO Certified" },
		{ icon: <FaAward />, text: "NABL Accredited" },
		{ icon: <FaCertificate />, text: "CAP Certified" },
	];

	return (
		<footer className="bg-gray-900 text-white">
			{/* Newsletter Section */}
			<div className="bg-gray-50 py-12">
				<div className="max-w-4xl mx-auto px-4">
					<div className="text-center mb-8">
						<h3 className="text-2xl font-bold mb-2 text-gray-900">
							Stay Updated with Health Tips
						</h3>
						<p className="text-gray-600">
							Subscribe to our newsletter for the latest health insights and
							exclusive offers
						</p>
					</div>

					{/* Subscription Form */}
					<div className="max-w-lg mx-auto">
						<div className="flex flex-col sm:flex-row gap-3">
							<input
								type="email"
								placeholder="Enter your email address"
								className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
							/>
							<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
								Subscribe
								<FaArrowRight className="text-sm" />
							</button>
						</div>

						{/* Privacy Note */}
						<p className="text-center text-xs text-gray-500 mt-3">
							🔒 We respect your privacy. Unsubscribe anytime.
						</p>
					</div>
				</div>
			</div>

			{/* Main Footer Content */}
			<div className="py-16">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
						{/* Company Info */}
						<div className="lg:col-span-2">
							<div className="mb-6">
								<h2 className="text-2xl font-bold mb-4">DIVITH LABS</h2>
								<p className="text-gray-300 mb-4">
									Leading healthcare diagnostics company with over two decades
									of excellence. Your health, our commitment.
								</p>
							</div>

							{/* Contact Info */}
							<div className="space-y-3 mb-6">
								<div className="flex items-center gap-3">
									<FaPhone className="text-blue-400 flex-shrink-0" />
									<span className="text-gray-300">1800-XXX-XXXX</span>
								</div>
								<div className="flex items-center gap-3">
									<FaEnvelope className="text-blue-400 flex-shrink-0" />
									<span className="text-gray-300">info@divithlabs.com</span>
								</div>
								<div className="flex items-start gap-3">
									<FaMapMarkerAlt className="text-blue-400 flex-shrink-0 mt-1" />
									<span className="text-gray-300">
										123 Healthcare Street, Medical District, City - 123456
									</span>
								</div>
								<div className="flex items-center gap-3">
									<FaClock className="text-blue-400 flex-shrink-0" />
									<span className="text-gray-300">24/7 Customer Support</span>
								</div>
							</div>

							{/* Social Media */}
							<div>
								<h4 className="font-semibold mb-4">Follow Us</h4>
								<div className="flex gap-3">
									{[
										{ icon: <FaFacebookF />, link: "#" },
										{ icon: <FaTwitter />, link: "#" },
										{ icon: <FaInstagram />, link: "#" },
										{ icon: <FaLinkedinIn />, link: "#" },
										{ icon: <FaYoutube />, link: "#" },
									].map((social, index) => (
										<a
											key={index}
											href={social.link}
											className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
											{social.icon}
										</a>
									))}
								</div>
							</div>
						</div>

						{/* Services */}
						<div>
							<h4 className="font-semibold mb-4">Our Services</h4>
							<ul className="space-y-2">
								{footerLinks.services.map((link, index) => (
									<li key={index}>
										<Link
											to={link.path}
											className="text-gray-300 hover:text-white transition-colors">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Company */}
						<div>
							<h4 className="font-semibold mb-4">Company</h4>
							<ul className="space-y-2">
								{footerLinks.company.map((link, index) => (
									<li key={index}>
										<Link
											to={link.path}
											className="text-gray-300 hover:text-white transition-colors">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Support */}
						<div>
							<h4 className="font-semibold mb-4">Support</h4>
							<ul className="space-y-2">
								{footerLinks.support.map((link, index) => (
									<li key={index}>
										<Link
											to={link.path}
											className="text-gray-300 hover:text-white transition-colors">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Special Programs */}
						<div>
							<h4 className="font-semibold mb-4">Programs</h4>
							<ul className="space-y-2">
								{footerLinks.specialPrograms.map((link, index) => (
									<li key={index}>
										<Link
											to={link.path}
											className="text-gray-300 hover:text-white transition-colors">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Trust Badges */}
			<div className="border-t border-gray-800 py-8">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
							{trustBadges.map((badge, index) => (
								<div
									key={index}
									className="flex items-center gap-2 text-gray-300">
									<span className="text-blue-400">{badge.icon}</span>
									<span className="text-sm">{badge.text}</span>
								</div>
							))}
						</div>
						<div className="text-center md:text-right">
							<p className="text-sm text-gray-400">
								Trusted by 27M+ customers nationwide
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Copyright */}
			<div className="border-t border-gray-800 py-6">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<div className="text-center md:text-left">
							<p className="text-sm text-gray-400">
								© {currentYear} DIVITH LABS. All rights reserved.
							</p>
						</div>
						<div className="flex flex-wrap items-center justify-center gap-6 text-sm">
							<Link
								to="/privacy"
								className="text-gray-400 hover:text-white transition-colors">
								Privacy Policy
							</Link>
							<Link
								to="/terms"
								className="text-gray-400 hover:text-white transition-colors">
								Terms of Service
							</Link>
							<Link
								to="/sitemap"
								className="text-gray-400 hover:text-white transition-colors">
								Sitemap
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
