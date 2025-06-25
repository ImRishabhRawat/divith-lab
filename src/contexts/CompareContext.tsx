import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

export interface CompareItem {
	id: number;
	name: string;
	parameters: string;
	price: number;
	originalPrice?: number | null;
	homeCollection: boolean;
	labVisit: boolean;
	category: string;
	description: string;
	preparationTime: string;
	reportTime: string;
	type: "test" | "package";
}

interface CompareContextType {
	compareItems: CompareItem[];
	compareCount: number;
	addToCompare: (
		item: Omit<CompareItem, "type"> & { type?: "test" | "package" }
	) => void;
	removeFromCompare: (itemId: number) => void;
	clearCompare: () => void;
	isInCompare: (itemId: number) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const useCompare = () => {
	const context = useContext(CompareContext);
	if (!context) {
		throw new Error("useCompare must be used within a CompareProvider");
	}
	return context;
};

interface CompareProviderProps {
	children: ReactNode;
}

export const CompareProvider: React.FC<CompareProviderProps> = ({
	children,
}) => {
	const [compareItems, setCompareItems] = useState<CompareItem[]>([]);

	// Load compare list from localStorage on component mount
	useEffect(() => {
		const savedCompare = localStorage.getItem("divithLabsCompare");
		if (savedCompare) {
			try {
				const parsedCompare = JSON.parse(savedCompare);
				setCompareItems(parsedCompare);
			} catch (error) {
				console.error("Error loading compare list from localStorage:", error);
			}
		}
	}, []);

	// Save compare list to localStorage whenever compareItems changes
	useEffect(() => {
		localStorage.setItem("divithLabsCompare", JSON.stringify(compareItems));
	}, [compareItems]);

	const compareCount = compareItems.length;

	const addToCompare = (
		item: Omit<CompareItem, "type"> & { type?: "test" | "package" }
	) => {
		setCompareItems((prevItems) => {
			// Check if item already exists
			const existingItem = prevItems.find(
				(compareItem) => compareItem.id === item.id
			);

			if (existingItem) {
				return prevItems; // Don't add duplicates
			}

			// Limit to 3 items maximum
			if (prevItems.length >= 3) {
				return prevItems; // Don't add if already at limit
			}

			// Add new item with type
			const newItem: CompareItem = {
				...item,
				type: item.type || "test",
			};

			return [...prevItems, newItem];
		});
	};

	const removeFromCompare = (itemId: number) => {
		setCompareItems((prevItems) =>
			prevItems.filter((item) => item.id !== itemId)
		);
	};

	const clearCompare = () => {
		setCompareItems([]);
	};

	const isInCompare = (itemId: number) => {
		return compareItems.some((item) => item.id === itemId);
	};

	const value: CompareContextType = {
		compareItems,
		compareCount,
		addToCompare,
		removeFromCompare,
		clearCompare,
		isInCompare,
	};

	return (
		<CompareContext.Provider value={value}>{children}</CompareContext.Provider>
	);
};
