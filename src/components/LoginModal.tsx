import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	FaEye,
	FaEyeSlash,
	FaPhone,
	FaEnvelope,
	FaLock,
	FaGoogle,
	FaFacebook,
	FaApple,
	FaTimes,
} from "react-icons/fa";

interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSwitchToRegister?: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
	isOpen,
	onClose,
	onSwitchToRegister,
}) => {
	const [loginType, setLoginType] = useState<"mobile" | "email">("mobile");
	const [formData, setFormData] = useState({
		mobile: "",
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);
	const [errors, setErrors] = useState({
		mobile: "",
		email: "",
		password: "",
	});

	const validateForm = () => {
		const newErrors = { mobile: "", email: "", password: "" };
		let isValid = true;

		if (loginType === "mobile") {
			if (!formData.mobile) {
				newErrors.mobile = "Mobile number is required";
				isValid = false;
			} else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
				newErrors.mobile = "Please enter a valid 10-digit mobile number";
				isValid = false;
			}
		} else {
			if (!formData.email) {
				newErrors.email = "Email is required";
				isValid = false;
			} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
				newErrors.email = "Please enter a valid email address";
				isValid = false;
			}
		}

		if (!formData.password) {
			newErrors.password = "Password is required";
			isValid = false;
		} else if (formData.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters";
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear error when user starts typing
		if (errors[name as keyof typeof errors]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			// Simulate login process
			const loginData = {
				type: loginType,
				credential: loginType === "mobile" ? formData.mobile : formData.email,
				password: formData.password,
				rememberMe,
			};
			console.log("Login data:", loginData);
			alert(
				`Login successful with ${loginType}: ${
					loginType === "mobile" ? formData.mobile : formData.email
				}`
			);
			onClose();
		}
	};

	const handleSocialLogin = (provider: string) => {
		alert(`Login with ${provider} - Feature coming soon!`);
	};

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
			onClick={handleOverlayClick}>
			<div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto modal-scrollbar">
				{/* Modal Header */}
				<div className="flex items-center justify-between p-6 border-b">
					<h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-gray-600 transition-colors">
						<FaTimes className="text-xl" />
					</button>
				</div>

				{/* Modal Content */}
				<div className="p-6">
					<p className="text-gray-600 mb-6 text-center">
						Sign in to your DIVITH LABS account
					</p>

					{/* Login Type Toggle */}
					<div className="mb-6">
						<div className="flex bg-gray-100 rounded-lg p-1">
							<button
								onClick={() => setLoginType("mobile")}
								className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md font-medium transition-colors ${
									loginType === "mobile"
										? "bg-blue-600 text-white"
										: "text-gray-600 hover:text-blue-600"
								}`}>
								<FaPhone className="text-sm" />
								Mobile
							</button>
							<button
								onClick={() => setLoginType("email")}
								className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md font-medium transition-colors ${
									loginType === "email"
										? "bg-blue-600 text-white"
										: "text-gray-600 hover:text-blue-600"
								}`}>
								<FaEnvelope className="text-sm" />
								Email
							</button>
						</div>
					</div>

					{/* Login Form */}
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Mobile/Email Input */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								{loginType === "mobile" ? "Mobile Number" : "Email Address"}
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									{loginType === "mobile" ? (
										<FaPhone className="h-5 w-5 text-gray-400" />
									) : (
										<FaEnvelope className="h-5 w-5 text-gray-400" />
									)}
								</div>
								<input
									type={loginType === "mobile" ? "tel" : "email"}
									name={loginType}
									value={
										loginType === "mobile" ? formData.mobile : formData.email
									}
									onChange={handleInputChange}
									placeholder={
										loginType === "mobile"
											? "Enter your 10-digit mobile number"
											: "Enter your email address"
									}
									className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
										errors[loginType] ? "border-red-500" : "border-gray-300"
									}`}
									maxLength={loginType === "mobile" ? 10 : undefined}
								/>
							</div>
							{errors[loginType] && (
								<p className="mt-1 text-sm text-red-600">{errors[loginType]}</p>
							)}
						</div>

						{/* Password Input */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Password
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<FaLock className="h-5 w-5 text-gray-400" />
								</div>
								<input
									type={showPassword ? "text" : "password"}
									name="password"
									value={formData.password}
									onChange={handleInputChange}
									placeholder="Enter your password"
									className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
										errors.password ? "border-red-500" : "border-gray-300"
									}`}
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute inset-y-0 right-0 pr-3 flex items-center">
									{showPassword ? (
										<FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600" />
									) : (
										<FaEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
									)}
								</button>
							</div>
							{errors.password && (
								<p className="mt-1 text-sm text-red-600">{errors.password}</p>
							)}
						</div>

						{/* Remember Me & Forgot Password */}
						<div className="flex items-center justify-between">
							<label className="flex items-center">
								<input
									type="checkbox"
									checked={rememberMe}
									onChange={(e) => setRememberMe(e.target.checked)}
									className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
								/>
								<span className="ml-2 text-sm text-gray-600">Remember me</span>
							</label>
							<Link
								to="/forgot-password"
								className="text-sm text-blue-600 hover:text-blue-800 font-medium"
								onClick={onClose}>
								Forgot Password?
							</Link>
						</div>

						{/* Login Button */}
						<button
							type="submit"
							className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold transition-colors">
							Sign In
						</button>

						{/* Divider */}
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-300" />
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="px-2 bg-white text-gray-500">
									Or continue with
								</span>
							</div>
						</div>

						{/* Social Login Buttons */}
						<div className="grid grid-cols-3 gap-3">
							<button
								type="button"
								onClick={() => handleSocialLogin("Google")}
								className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
								<FaGoogle className="h-5 w-5 text-red-500" />
							</button>
							<button
								type="button"
								onClick={() => handleSocialLogin("Facebook")}
								className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
								<FaFacebook className="h-5 w-5 text-blue-600" />
							</button>
							<button
								type="button"
								onClick={() => handleSocialLogin("Apple")}
								className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
								<FaApple className="h-5 w-5 text-gray-900" />
							</button>
						</div>

						{/* Register Link */}
						<div className="text-center">
							<p className="text-sm text-gray-600">
								Don't have an account?{" "}
								{onSwitchToRegister ? (
									<button
										type="button"
										onClick={onSwitchToRegister}
										className="text-blue-600 hover:text-blue-800 font-medium">
										Create Account
									</button>
								) : (
									<Link
										to="/register"
										className="text-blue-600 hover:text-blue-800 font-medium"
										onClick={onClose}>
										Create Account
									</Link>
								)}
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginModal;
