import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaEye,
	FaEyeSlash,
	FaGoogle,
	FaFacebook,
	FaApple,
	FaTimes,
} from "react-icons/fa";

interface RegisterModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSwitchToLogin?: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
	isOpen,
	onClose,
	onSwitchToLogin,
}) => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		mobile: "",
		password: "",
		confirmPassword: "",
		dateOfBirth: "",
		gender: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [agreeToTerms, setAgreeToTerms] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Registration data:", formData);
		alert(
			`Registration successful for ${formData.firstName} ${formData.lastName}!`
		);
		onClose();
	};

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4"
			onClick={handleOverlayClick}>
			<div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto modal-scrollbar">
				{/* Modal Header */}
				<div className="flex items-center justify-between p-6 border-b">
					<h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-gray-600 transition-colors">
						<FaTimes className="text-xl" />
					</button>
				</div>

				{/* Modal Content */}
				<div className="p-6">
					<p className="text-gray-600 mb-6 text-center">
						Join DIVITH LABS for easy test booking and report access
					</p>

					{/* Registration Form */}
					<form onSubmit={handleSubmit} className="space-y-4">
						{/* Name Fields */}
						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									First Name
								</label>
								<input
									type="text"
									name="firstName"
									value={formData.firstName}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											firstName: e.target.value,
										}))
									}
									placeholder="First Name"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Last Name
								</label>
								<input
									type="text"
									name="lastName"
									value={formData.lastName}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											lastName: e.target.value,
										}))
									}
									placeholder="Last Name"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>
						</div>

						{/* Email Input */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Email Address
							</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, email: e.target.value }))
								}
								placeholder="Enter your email address"
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>

						{/* Mobile Input */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Mobile Number
							</label>
							<input
								type="tel"
								name="mobile"
								value={formData.mobile}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, mobile: e.target.value }))
								}
								placeholder="Enter your 10-digit mobile number"
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								maxLength={10}
							/>
						</div>

						{/* Password Fields */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Password
								</label>
								<div className="relative">
									<input
										type={showPassword ? "text" : "password"}
										name="password"
										value={formData.password}
										onChange={(e) =>
											setFormData((prev) => ({
												...prev,
												password: e.target.value,
											}))
										}
										placeholder="Create password"
										className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									/>
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										className="absolute inset-y-0 right-0 pr-3 flex items-center">
										{showPassword ? (
											<FaEyeSlash className="h-4 w-4 text-gray-400 hover:text-gray-600" />
										) : (
											<FaEye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
										)}
									</button>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Confirm Password
								</label>
								<div className="relative">
									<input
										type={showConfirmPassword ? "text" : "password"}
										name="confirmPassword"
										value={formData.confirmPassword}
										onChange={(e) =>
											setFormData((prev) => ({
												...prev,
												confirmPassword: e.target.value,
											}))
										}
										placeholder="Confirm password"
										className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									/>
									<button
										type="button"
										onClick={() => setShowConfirmPassword(!showConfirmPassword)}
										className="absolute inset-y-0 right-0 pr-3 flex items-center">
										{showConfirmPassword ? (
											<FaEyeSlash className="h-4 w-4 text-gray-400 hover:text-gray-600" />
										) : (
											<FaEye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
										)}
									</button>
								</div>
							</div>
						</div>

						{/* Date of Birth and Gender */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Date of Birth
								</label>
								<input
									type="date"
									name="dateOfBirth"
									value={formData.dateOfBirth}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											dateOfBirth: e.target.value,
										}))
									}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Gender
								</label>
								<select
									name="gender"
									value={formData.gender}
									onChange={(e) =>
										setFormData((prev) => ({ ...prev, gender: e.target.value }))
									}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
									<option value="">Select Gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">Other</option>
									<option value="prefer-not-to-say">Prefer not to say</option>
								</select>
							</div>
						</div>

						{/* Terms and Conditions */}
						<div>
							<label className="flex items-start gap-3">
								<input
									type="checkbox"
									checked={agreeToTerms}
									onChange={(e) => setAgreeToTerms(e.target.checked)}
									className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
								/>
								<span className="text-sm text-gray-600">
									I agree to the{" "}
									<Link
										to="/terms"
										className="text-blue-600 hover:text-blue-800 font-medium"
										onClick={onClose}>
										Terms and Conditions
									</Link>{" "}
									and{" "}
									<Link
										to="/privacy"
										className="text-blue-600 hover:text-blue-800 font-medium"
										onClick={onClose}>
										Privacy Policy
									</Link>
								</span>
							</label>
						</div>

						{/* Register Button */}
						<button
							type="submit"
							className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-semibold transition-colors">
							Create Account
						</button>

						{/* Divider */}
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-300" />
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="px-2 bg-white text-gray-500">
									Or register with
								</span>
							</div>
						</div>

						{/* Social Register Buttons */}
						<div className="grid grid-cols-3 gap-3">
							<button
								type="button"
								onClick={() => alert("Google register - Coming soon!")}
								className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
								<FaGoogle className="h-5 w-5 text-red-500" />
							</button>
							<button
								type="button"
								onClick={() => alert("Facebook register - Coming soon!")}
								className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
								<FaFacebook className="h-5 w-5 text-blue-600" />
							</button>
							<button
								type="button"
								onClick={() => alert("Apple register - Coming soon!")}
								className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
								<FaApple className="h-5 w-5 text-gray-900" />
							</button>
						</div>

						{/* Login Link */}
						<div className="text-center">
							<p className="text-sm text-gray-600">
								Already have an account?{" "}
								{onSwitchToLogin ? (
									<button
										type="button"
										onClick={onSwitchToLogin}
										className="text-blue-600 hover:text-blue-800 font-medium">
										Sign In
									</button>
								) : (
									<span className="text-blue-600 font-medium">Sign In</span>
								)}
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterModal;
