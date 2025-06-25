import React from "react";
import { Link } from "react-router-dom";
import { useCompare } from "../contexts/CompareContext";
import { useCart } from "../contexts/CartContext";
import {
	FaArrowLeft,
	FaTimes,
	FaHome,
	FaFlask,
	FaBox,
	FaCheck,
	FaClock,
	FaShoppingCart,
	FaPlus,
} from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";

const Compare = () => {
	const { compareItems, removeFromCompare, clearCompare } = useCompare();
	const { addToCart, isInCart } = useCart();

	const handleAddToCart = (item: any) => {
		const cartItem = {
			...item,
			type: item.type || "test",
		};
		addToCart(cartItem);
	};

	if (compareItems.length === 0) {
		return (
			<div className="min-h-screen bg-gray-50">
				{/* Breadcrumb */}
				<Breadcrumb
					items={[
						{ label: "Home", href: "/" },
						{ label: "Compare", href: "/compare" },
					]}
				/>

				{/* Empty State */}
				<div className="max-w-4xl mx-auto px-4 py-16">
					<div className="text-center">
						<div className="w-24 h-24 mx-auto mb-8 bg-blue-100 rounded-full flex items-center justify-center">
							<FaFlask className="text-4xl text-blue-600" />
						</div>
						<h1 className="text-3xl font-bold text-gray-900 mb-4">
							No Items to Compare
						</h1>
						<p className="text-gray-600 mb-8 max-w-md mx-auto">
							Add tests or health packages to compare their features, prices,
							and specifications side by side.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to="/book-test"
								className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
								Browse Tests
							</Link>
							<Link
								to="/health-packages"
								className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
								Browse Packages
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
				items={[
					{ label: "Home", href: "/" },
					{ label: "Compare", href: "/compare" },
				]}
			/>

			{/* Header */}
			<div className="bg-white border-b">
				<div className="max-w-7xl mx-auto px-4 py-6">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<Link
								to="/book-test"
								className="text-blue-600 hover:text-blue-800 transition-colors">
								<FaArrowLeft className="text-xl" />
							</Link>
							<div>
								<h1 className="text-3xl font-bold text-gray-900">
									Compare Items
								</h1>
								<p className="text-gray-600 mt-1">
									Compare {compareItems.length} of 3 items
								</p>
							</div>
						</div>
						<button
							onClick={clearCompare}
							className="text-red-600 hover:text-red-800 font-medium flex items-center gap-2">
							<FaTimes />
							Clear All
						</button>
					</div>
				</div>
			</div>

			{/* Comparison Table */}
			<div className="max-w-7xl mx-auto px-4 py-8">
				<div className="bg-white rounded-xl shadow-sm overflow-hidden">
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="border-b">
									<th className="text-left p-6 w-48 bg-gray-50">
										<span className="text-gray-900 font-semibold">
											Features
										</span>
									</th>
									{compareItems.map((item) => (
										<th key={item.id} className="p-6 min-w-80">
											<div className="text-center">
												{/* Item Type Icon */}
												<div className="flex justify-center mb-3">
													{item.type === "package" ? (
														<FaBox className="text-2xl text-blue-600" />
													) : (
														<FaFlask className="text-2xl text-green-600" />
													)}
												</div>

												{/* Item Name */}
												<h3 className="font-bold text-gray-900 mb-2 text-base leading-tight">
													{item.name}
												</h3>

												{/* Remove Button */}
												<button
													onClick={() => removeFromCompare(item.id)}
													className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1 mx-auto">
													<FaTimes className="text-xs" />
													Remove
												</button>
											</div>
										</th>
									))}
									{/* Add More Column if less than 3 items */}
									{compareItems.length < 3 && (
										<th className="p-6 min-w-80">
											<div className="text-center">
												<Link
													to="/book-test"
													className="inline-flex flex-col items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
													<div className="w-12 h-12 border-2 border-dashed border-blue-300 rounded-lg flex items-center justify-center">
														<FaPlus className="text-xl" />
													</div>
													<span className="text-sm font-medium">Add Item</span>
												</Link>
											</div>
										</th>
									)}
								</tr>
							</thead>
							<tbody>
								{/* Price Row */}
								<tr className="border-b hover:bg-gray-50">
									<td className="p-6 font-semibold text-gray-900 bg-gray-50">
										Price
									</td>
									{compareItems.map((item) => (
										<td key={item.id} className="p-6 text-center">
											<div className="flex flex-col items-center gap-1">
												{item.originalPrice && (
													<span className="text-sm text-gray-500 line-through">
														₹ {item.originalPrice}
													</span>
												)}
												<span className="text-2xl font-bold text-blue-600">
													₹ {item.price}
												</span>
												{item.originalPrice && (
													<span className="text-xs text-green-600 font-medium">
														Save ₹ {item.originalPrice - item.price}
													</span>
												)}
											</div>
										</td>
									))}
									{compareItems.length < 3 && <td className="p-6"></td>}
								</tr>

								{/* Parameters Row */}
								<tr className="border-b hover:bg-gray-50">
									<td className="p-6 font-semibold text-gray-900 bg-gray-50">
										Parameters
									</td>
									{compareItems.map((item) => (
										<td key={item.id} className="p-6 text-center">
											<span className="text-gray-700">{item.parameters}</span>
										</td>
									))}
									{compareItems.length < 3 && <td className="p-6"></td>}
								</tr>

								{/* Category Row */}
								<tr className="border-b hover:bg-gray-50">
									<td className="p-6 font-semibold text-gray-900 bg-gray-50">
										Category
									</td>
									{compareItems.map((item) => (
										<td key={item.id} className="p-6 text-center">
											<span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
												{item.category}
											</span>
										</td>
									))}
									{compareItems.length < 3 && <td className="p-6"></td>}
								</tr>

								{/* Description Row */}
								<tr className="border-b hover:bg-gray-50">
									<td className="p-6 font-semibold text-gray-900 bg-gray-50">
										Description
									</td>
									{compareItems.map((item) => (
										<td key={item.id} className="p-6 text-center">
											<span className="text-gray-700 text-sm">
												{item.description}
											</span>
										</td>
									))}
									{compareItems.length < 3 && <td className="p-6"></td>}
								</tr>

								{/* Preparation Time Row */}
								<tr className="border-b hover:bg-gray-50">
									<td className="p-6 font-semibold text-gray-900 bg-gray-50">
										Preparation
									</td>
									{compareItems.map((item) => (
										<td key={item.id} className="p-6 text-center">
											<div className="flex items-center justify-center gap-2">
												<FaClock className="text-orange-500" />
												<span className="text-gray-700 text-sm">
													{item.preparationTime}
												</span>
											</div>
										</td>
									))}
									{compareItems.length < 3 && <td className="p-6"></td>}
								</tr>

								{/* Report Time Row */}
								<tr className="border-b hover:bg-gray-50">
									<td className="p-6 font-semibold text-gray-900 bg-gray-50">
										Report Time
									</td>
									{compareItems.map((item) => (
										<td key={item.id} className="p-6 text-center">
											<span className="text-green-600 font-medium">
												{item.reportTime}
											</span>
										</td>
									))}
									{compareItems.length < 3 && <td className="p-6"></td>}
								</tr>

								{/* Home Collection Row */}
								<tr className="border-b hover:bg-gray-50">
									<td className="p-6 font-semibold text-gray-900 bg-gray-50">
										Home Collection
									</td>
									{compareItems.map((item) => (
										<td key={item.id} className="p-6 text-center">
											{item.homeCollection ? (
												<div className="flex items-center justify-center gap-2 text-green-600">
													<FaCheck className="text-sm" />
													<span className="text-sm font-medium">Available</span>
												</div>
											) : (
												<div className="flex items-center justify-center gap-2 text-red-500">
													<FaTimes className="text-sm" />
													<span className="text-sm font-medium">
														Not Available
													</span>
												</div>
											)}
										</td>
									))}
									{compareItems.length < 3 && <td className="p-6"></td>}
								</tr>

								{/* Lab Visit Row */}
								<tr className="border-b hover:bg-gray-50">
									<td className="p-6 font-semibold text-gray-900 bg-gray-50">
										Lab Visit
									</td>
									{compareItems.map((item) => (
										<td key={item.id} className="p-6 text-center">
											{item.labVisit ? (
												<div className="flex items-center justify-center gap-2 text-green-600">
													<FaCheck className="text-sm" />
													<span className="text-sm font-medium">Available</span>
												</div>
											) : (
												<div className="flex items-center justify-center gap-2 text-red-500">
													<FaTimes className="text-sm" />
													<span className="text-sm font-medium">
														Not Available
													</span>
												</div>
											)}
										</td>
									))}
									{compareItems.length < 3 && <td className="p-6"></td>}
								</tr>

								{/* Action Buttons Row */}
								<tr>
									<td className="p-6 font-semibold text-gray-900 bg-gray-50">
										Actions
									</td>
									{compareItems.map((item) => (
										<td key={item.id} className="p-6">
											<div className="space-y-3">
												<button
													onClick={() => handleAddToCart(item)}
													disabled={isInCart(item.id)}
													className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
														isInCart(item.id)
															? "bg-gray-100 text-gray-500 cursor-not-allowed"
															: "bg-blue-600 text-white hover:bg-blue-700"
													}`}>
													<FaShoppingCart className="text-sm" />
													{isInCart(item.id) ? "Added to Cart" : "Add to Cart"}
												</button>
												<Link
													to={`/${item.type}/${item.id}`}
													className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center block">
													View Details
												</Link>
											</div>
										</td>
									))}
									{compareItems.length < 3 && <td className="p-6"></td>}
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				{/* Bottom Actions */}
				<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						to="/book-test"
						className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center">
						Browse More Tests
					</Link>
					<Link
						to="/health-packages"
						className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center">
						Browse Packages
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Compare;
