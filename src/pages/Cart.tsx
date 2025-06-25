import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import Breadcrumb from "../components/Breadcrumb";
import {
	FaShoppingCart,
	FaTrash,
	FaPlus,
	FaMinus,
	FaArrowRight,
	FaHome,
	FaFlask,
	FaBox,
	FaCheckCircle,
} from "react-icons/fa";

const Cart = () => {
	const {
		cartItems,
		cartCount,
		totalAmount,
		removeFromCart,
		updateQuantity,
		clearCart,
	} = useCart();

	const handleQuantityChange = (itemId: number, newQuantity: number) => {
		if (newQuantity < 1) {
			removeFromCart(itemId);
		} else {
			updateQuantity(itemId, newQuantity);
		}
	};

	if (cartCount === 0) {
		return (
			<div className="min-h-screen bg-gray-50">
				{/* Breadcrumb */}
				<Breadcrumb
					items={[{ label: "Home", href: "/" }, { label: "Shopping Cart" }]}
				/>

				{/* Empty Cart */}
				<div className="max-w-4xl mx-auto px-4 py-16">
					<div className="bg-white rounded-lg shadow-lg p-8 text-center">
						<div className="mb-6">
							<FaShoppingCart className="text-6xl text-gray-300 mx-auto mb-4" />
							<h1 className="text-3xl font-bold text-gray-800 mb-2">
								Your Cart is Empty
							</h1>
							<p className="text-gray-600 text-lg">
								Start adding tests and health packages to get started with your
								health journey.
							</p>
						</div>

						<div className="space-y-4">
							<Link
								to="/book-test"
								className="inline-flex items-center gap-2 bg-[#256393] text-white px-8 py-3 rounded-lg hover:bg-[#1e4f73] transition-colors font-medium">
								<FaFlask />
								Browse Tests
							</Link>
							<div className="text-gray-500">or</div>
							<Link
								to="/health-packages"
								className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
								<FaBox />
								View Health Packages
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Breadcrumb */}
			<Breadcrumb
				items={[{ label: "Home", href: "/" }, { label: "Shopping Cart" }]}
			/>

			{/* Hero Section */}
			<div className="bg-gradient-to-r from-[#256393] to-[#1e4f73] text-white py-12">
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-3xl md:text-4xl font-bold mb-2">
								Shopping Cart
							</h1>
							<p className="text-xl text-blue-100">
								{cartCount} {cartCount === 1 ? "item" : "items"} in your cart
							</p>
						</div>
						<FaShoppingCart className="text-6xl text-blue-200" />
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-6xl mx-auto px-4 py-8">
				<div className="grid lg:grid-cols-3 gap-8">
					{/* Cart Items */}
					<div className="lg:col-span-2">
						<div className="bg-white rounded-lg shadow-lg overflow-hidden">
							{/* Header */}
							<div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
								<div className="flex items-center justify-between">
									<h2 className="text-xl font-semibold text-gray-800">
										Cart Items
									</h2>
									<button
										onClick={clearCart}
										className="text-red-600 hover:text-red-800 font-medium text-sm flex items-center gap-1">
										<FaTrash />
										Clear All
									</button>
								</div>
							</div>

							{/* Items List */}
							<div className="divide-y divide-gray-200">
								{cartItems.map((item) => (
									<div key={item.id} className="p-6">
										<div className="flex items-start gap-4">
											{/* Item Type Icon */}
											<div
												className={`p-3 rounded-lg ${
													item.type === "package"
														? "bg-green-100 text-green-600"
														: "bg-blue-100 text-blue-600"
												}`}>
												{item.type === "package" ? (
													<FaBox className="text-xl" />
												) : (
													<FaFlask className="text-xl" />
												)}
											</div>

											{/* Item Details */}
											<div className="flex-1">
												<div className="flex items-start justify-between">
													<div>
														<h3 className="text-lg font-semibold text-gray-900 mb-1">
															{item.name}
														</h3>
														<p className="text-sm text-gray-600 mb-2">
															{item.parameters}
														</p>
														<div className="flex items-center gap-4 text-sm text-gray-500">
															<span>Category: {item.category}</span>
															<span>•</span>
															<span>Report: {item.reportTime}</span>
														</div>

														{/* Collection Options */}
														<div className="flex gap-3 mt-2">
															{item.homeCollection && (
																<span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
																	<FaCheckCircle />
																	Home Collection
																</span>
															)}
															{item.labVisit && (
																<span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
																	<FaCheckCircle />
																	Lab Visit
																</span>
															)}
														</div>
													</div>

													{/* Remove Button */}
													<button
														onClick={() => removeFromCart(item.id)}
														className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors">
														<FaTrash />
													</button>
												</div>

												{/* Quantity and Price */}
												<div className="flex items-center justify-between mt-4">
													{/* Quantity Controls */}
													<div className="flex items-center gap-3">
														<span className="text-sm font-medium text-gray-700">
															Quantity:
														</span>
														<div className="flex items-center border border-gray-300 rounded-lg">
															<button
																onClick={() =>
																	handleQuantityChange(
																		item.id,
																		item.quantity - 1
																	)
																}
																className="p-2 hover:bg-gray-100 transition-colors">
																<FaMinus className="text-xs" />
															</button>
															<span className="px-4 py-2 text-center min-w-[3rem] border-x border-gray-300">
																{item.quantity}
															</span>
															<button
																onClick={() =>
																	handleQuantityChange(
																		item.id,
																		item.quantity + 1
																	)
																}
																className="p-2 hover:bg-gray-100 transition-colors">
																<FaPlus className="text-xs" />
															</button>
														</div>
													</div>

													{/* Price */}
													<div className="text-right">
														{item.originalPrice && (
															<div className="text-sm text-gray-500 line-through">
																₹{item.originalPrice * item.quantity}
															</div>
														)}
														<div className="text-xl font-bold text-gray-900">
															₹{item.price * item.quantity}
														</div>
														{item.quantity > 1 && (
															<div className="text-sm text-gray-600">
																₹{item.price} each
															</div>
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Continue Shopping */}
						<div className="mt-6">
							<Link
								to="/book-test"
								className="inline-flex items-center gap-2 text-[#256393] hover:text-[#1e4f73] font-medium">
								<FaArrowRight className="rotate-180" />
								Continue Shopping
							</Link>
						</div>
					</div>

					{/* Order Summary */}
					<div className="lg:col-span-1">
						<div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
							<h3 className="text-xl font-semibold text-gray-800 mb-4">
								Order Summary
							</h3>

							{/* Summary Details */}
							<div className="space-y-3 mb-6">
								<div className="flex justify-between text-gray-600">
									<span>Items ({cartCount})</span>
									<span>₹{totalAmount}</span>
								</div>
								<div className="flex justify-between text-gray-600">
									<span>Home Collection</span>
									<span className="text-green-600 font-medium">FREE</span>
								</div>
								<div className="flex justify-between text-gray-600">
									<span>Processing Fee</span>
									<span className="text-green-600 font-medium">FREE</span>
								</div>
								<hr className="border-gray-200" />
								<div className="flex justify-between text-lg font-semibold text-gray-900">
									<span>Total Amount</span>
									<span>₹{totalAmount}</span>
								</div>
							</div>

							{/* Checkout Button */}
							<Link
								to="/patient-register"
								className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-center block">
								Proceed to Book
							</Link>

							{/* Additional Info */}
							<div className="mt-4 p-4 bg-blue-50 rounded-lg">
								<h4 className="font-medium text-blue-900 mb-2">
									Why Choose DIVITH LABS?
								</h4>
								<ul className="text-sm text-blue-800 space-y-1">
									<li>• NABL Accredited Labs</li>
									<li>• Free Home Sample Collection</li>
									<li>• Digital Reports in 24 hours</li>
									<li>• Expert Consultation Available</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
