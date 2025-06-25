import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import {
	FaSearch,
	FaCalendar,
	FaUser,
	FaTag,
	FaArrowRight,
	FaClock,
	FaHeart,
	FaShare,
} from "react-icons/fa";

const Blogs = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");

	const breadcrumbItems = [
		{ label: "Home", href: "/" },
		{ label: "Blogs", isActive: true },
	];

	const categories = [
		{ id: "all", name: "All Articles", count: 24 },
		{ id: "health-tips", name: "Health Tips", count: 8 },
		{ id: "diagnostic", name: "Diagnostic Tests", count: 6 },
		{ id: "nutrition", name: "Nutrition", count: 5 },
		{ id: "wellness", name: "Wellness", count: 5 },
	];

	const featuredPosts = [
		{
			id: 1,
			title: "Understanding Your Blood Test Results: A Complete Guide",
			excerpt:
				"Learn how to interpret common blood test parameters and what they mean for your health. Our comprehensive guide breaks down complex medical terms into simple explanations.",
			author: "Dr. Rajiv Sharma",
			date: "Dec 15, 2024",
			readTime: "8 min read",
			category: "Diagnostic Tests",
			image:
				"https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
			featured: true,
		},
		{
			id: 2,
			title: "10 Essential Health Checkups Everyone Should Get Annually",
			excerpt:
				"Preventive healthcare is the key to early detection and treatment. Discover the most important health screenings you should schedule every year.",
			author: "Dr. Sunita Singh",
			date: "Dec 12, 2024",
			readTime: "6 min read",
			category: "Health Tips",
			image:
				"https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
			featured: true,
		},
	];

	const blogPosts = [
		{
			id: 3,
			title: "The Importance of Regular Thyroid Function Testing",
			excerpt:
				"Thyroid disorders affect millions of people worldwide. Learn why regular thyroid testing is crucial for maintaining optimal health.",
			author: "Dr. Kashmiri Lal Sharma",
			date: "Dec 10, 2024",
			readTime: "5 min read",
			category: "Diagnostic Tests",
			image:
				"https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
		},
		{
			id: 4,
			title: "Healthy Eating Habits for Better Laboratory Results",
			excerpt:
				"What you eat directly impacts your test results. Discover how proper nutrition can improve your health markers and overall wellbeing.",
			author: "Nutritionist Priya Mehta",
			date: "Dec 8, 2024",
			readTime: "7 min read",
			category: "Nutrition",
			image:
				"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
		},
		{
			id: 5,
			title: "Managing Stress for Better Health Outcomes",
			excerpt:
				"Chronic stress can significantly impact your physical health. Learn effective stress management techniques for better overall wellness.",
			author: "Dr. Wellness Expert",
			date: "Dec 5, 2024",
			readTime: "6 min read",
			category: "Wellness",
			image:
				"https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
		},
		{
			id: 6,
			title: "COVID-19 Testing: What You Need to Know in 2024",
			excerpt:
				"Stay updated with the latest COVID-19 testing guidelines, types of tests available, and when you should get tested.",
			author: "Dr. Infectious Disease Specialist",
			date: "Dec 3, 2024",
			readTime: "8 min read",
			category: "Diagnostic Tests",
			image:
				"https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
		},
		{
			id: 7,
			title: "Heart Health: Early Warning Signs You Shouldn't Ignore",
			excerpt:
				"Recognizing early symptoms of heart problems can save lives. Learn about the warning signs and when to seek medical attention.",
			author: "Dr. Cardiologist",
			date: "Nov 30, 2024",
			readTime: "9 min read",
			category: "Health Tips",
			image:
				"https://images.pexels.com/photos/3663010/pexels-photo-3663010.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
		},
		{
			id: 8,
			title: "Diabetes Prevention: Lifestyle Changes That Make a Difference",
			excerpt:
				"Type 2 diabetes is largely preventable through lifestyle modifications. Discover the key changes you can make today.",
			author: "Dr. Endocrinologist",
			date: "Nov 28, 2024",
			readTime: "7 min read",
			category: "Health Tips",
			image:
				"https://images.pexels.com/photos/1001897/pexels-photo-1001897.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
		},
	];

	const filteredPosts = blogPosts.filter((post) => {
		const searchTerm = searchQuery.toLowerCase();
		const matchesSearch = searchQuery === "" || 
			post.title.toLowerCase().includes(searchTerm) ||
			post.excerpt.toLowerCase().includes(searchTerm) ||
			post.author.toLowerCase().includes(searchTerm) ||
			post.category.toLowerCase().includes(searchTerm);
		const matchesCategory =
			selectedCategory === "all" ||
			post.category.toLowerCase().replace(" ", "-") === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Compact Blog Header with Search */}
			<div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
				<div className="max-w-7xl mx-auto px-4 py-8">
					<div className="text-center">
						<div className="flex items-center justify-center gap-2 mb-3">
							<span className="text-yellow-400">📚</span>
							<span className="text-sm font-medium">Health & Wellness</span>
						</div>
						<h1 className="text-3xl font-bold mb-3">Health Insights</h1>
						<p className="text-blue-100 mb-6">Stay informed with expert articles on health, wellness, and diagnostic testing.</p>
						
						{/* Compact Search Bar */}
						<div className="max-w-md mx-auto">
							<div className="relative">
								<div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
									<FaSearch />
								</div>
								<input
									type="text"
									placeholder="Search articles..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="w-full pl-10 pr-16 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20 text-gray-900 placeholder-gray-400 shadow-lg backdrop-blur-sm bg-white/95"
									onKeyPress={(e) => {
										if (e.key === 'Enter') {
											e.preventDefault();
											// Trigger search functionality
										}
									}}
								/>
								{searchQuery && (
									<button
										onClick={() => setSearchQuery("")}
										className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
										<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
										</svg>
									</button>
								)}
								<button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 p-2 rounded-md hover:bg-blue-700 transition-colors">
									<FaSearch className="text-white w-4 h-4" />
								</button>
							</div>
							{searchQuery && (
								<div className="mt-2 text-center">
									<span className="text-blue-100 text-sm">
										Searching for: "<strong>{searchQuery}</strong>"
									</span>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Breadcrumb */}
			{/* <Breadcrumb items={breadcrumbItems} /> */}

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 py-8">
				{/* Categories Filter */}
				<div className="mb-8">
					<div className="flex flex-wrap gap-2">
						{categories.map((category) => (
							<button
								key={category.id}
								onClick={() => setSelectedCategory(category.id)}
								className={`px-4 py-2 rounded-full font-medium transition-colors ${
									selectedCategory === category.id
										? "bg-blue-600 text-white shadow-lg"
										: "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
								}`}>
								{category.name} ({category.count})
							</button>
						))}
					</div>
				</div>

				{/* Search Results Header */}
				{searchQuery && (
					<div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-lg font-semibold text-blue-900">
									Search Results for "{searchQuery}"
								</h3>
								<p className="text-blue-700 text-sm">
									Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} matching your search
								</p>
							</div>
							<button
								onClick={() => setSearchQuery("")}
								className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
								Clear search
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
				)}

				{/* Featured Posts */}
				{!searchQuery && (
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-8">
							Featured Articles
						</h2>
					<div className="grid lg:grid-cols-2 gap-8">
						{featuredPosts.map((post) => (
							<article
								key={post.id}
								className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
								<div className="relative overflow-hidden">
									<img
										src={post.image}
										alt={post.title}
										className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute top-4 left-4">
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
											Featured
										</span>
									</div>
								</div>
								<div className="p-6">
									<div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
										<span className="flex items-center gap-1">
											<FaTag className="text-blue-600" />
											{post.category}
										</span>
										<span className="flex items-center gap-1">
											<FaCalendar />
											{post.date}
										</span>
										<span className="flex items-center gap-1">
											<FaClock />
											{post.readTime}
										</span>
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
										{post.title}
									</h3>
									<p className="text-gray-600 mb-4 line-clamp-3">
										{post.excerpt}
									</p>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<FaUser className="text-gray-400" />
											<span className="text-sm text-gray-600">
												{post.author}
											</span>
										</div>
										<Link
											to={`/blog/${post.id}`}
											className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
											Read More
											<FaArrowRight />
										</Link>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
				)}

				{/* Regular Blog Posts */}
				<div>
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-3xl font-bold text-gray-900">
							Latest Articles
						</h2>
						<span className="text-gray-500">
							{filteredPosts.length} articles found
						</span>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredPosts.map((post) => (
							<article
								key={post.id}
								className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
								<div className="relative overflow-hidden">
									<img
										src={post.image}
										alt={post.title}
										className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute top-3 right-3">
										<button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
											<FaHeart className="text-gray-600 hover:text-red-500" />
										</button>
									</div>
								</div>
								<div className="p-6">
									<div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
										<span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
											{post.category}
										</span>
										<span>{post.date}</span>
										<span>{post.readTime}</span>
									</div>
									<h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
										{post.title}
									</h3>
									<p className="text-gray-600 mb-4 line-clamp-3">
										{post.excerpt}
									</p>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
												<FaUser className="text-blue-600 text-sm" />
											</div>
											<span className="text-sm text-gray-600">
												{post.author}
											</span>
										</div>
										<div className="flex items-center gap-2">
											<button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
												<FaShare className="text-gray-400 text-sm" />
											</button>
											<Link
												to={`/blog/${post.id}`}
												className="text-blue-600 hover:text-blue-700 font-medium text-sm">
												Read More
											</Link>
										</div>
									</div>
								</div>
							</article>
						))}
					</div>

					{filteredPosts.length === 0 && (
						<div className="text-center py-12">
							<div className="text-gray-400 mb-4">
								<FaSearch className="text-4xl mx-auto" />
							</div>
							<h3 className="text-xl font-semibold text-gray-600 mb-2">
								No articles found
							</h3>
							<p className="text-gray-500">
								Try adjusting your search or category filter
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Blogs;
