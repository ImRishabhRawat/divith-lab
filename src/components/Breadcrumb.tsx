import React from "react";

interface BreadcrumbItem {
	label: string;
	href?: string;
	isActive?: boolean;
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	return (
		<div className="bg-white border-b">
			<div className="max-w-7xl mx-auto px-4 py-3">
				<nav className="text-sm text-gray-600">
					{items.map((item, index) => (
						<span key={index}>
							{item.href && !item.isActive ? (
								<a
									href={item.href}
									className="hover:text-blue-600 transition-colors">
									{item.label}
								</a>
							) : (
								<span
									className={item.isActive ? "text-blue-600 font-medium" : ""}>
									{item.label}
								</span>
							)}
							{index < items.length - 1 && <span className="mx-2">&gt;</span>}
						</span>
					))}
				</nav>
			</div>
		</div>
	);
};

export default Breadcrumb;
