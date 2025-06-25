import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

export interface CartItem {
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
	quantity: number;
	type: "test" | "package";
}

interface CartContextType {
	cartItems: CartItem[];
	cartCount: number;
	totalAmount: number;
	addToCart: (item: Omit<CartItem, "quantity">) => void;
	removeFromCart: (itemId: number) => void;
	updateQuantity: (itemId: number, quantity: number) => void;
	clearCart: () => void;
	isInCart: (itemId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};

interface CartProviderProps {
	children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	// Load cart from localStorage on component mount
	useEffect(() => {
		const savedCart = localStorage.getItem("divithLabsCart");
		if (savedCart) {
			try {
				const parsedCart = JSON.parse(savedCart);
				setCartItems(parsedCart);
			} catch (error) {
				console.error("Error loading cart from localStorage:", error);
			}
		}
	}, []);

	// Save cart to localStorage whenever cartItems changes
	useEffect(() => {
		localStorage.setItem("divithLabsCart", JSON.stringify(cartItems));
	}, [cartItems]);

	const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
	const totalAmount = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	const addToCart = (item: Omit<CartItem, "quantity">) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find(
				(cartItem) => cartItem.id === item.id
			);

			if (existingItem) {
				// If item already exists, increase quantity
				return prevItems.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				);
			} else {
				// If item doesn't exist, add it with quantity 1
				return [...prevItems, { ...item, quantity: 1 }];
			}
		});
	};

	const removeFromCart = (itemId: number) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
	};

	const updateQuantity = (itemId: number, quantity: number) => {
		if (quantity <= 0) {
			removeFromCart(itemId);
			return;
		}

		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId ? { ...item, quantity } : item
			)
		);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	const isInCart = (itemId: number) => {
		return cartItems.some((item) => item.id === itemId);
	};

	const value: CartContextType = {
		cartItems,
		cartCount,
		totalAmount,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
		isInCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
