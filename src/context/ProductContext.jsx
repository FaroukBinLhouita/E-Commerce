import { createContext, useState, useEffect } from "react";

// Create a Context
export const ProductContext = createContext();

// Create a Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [status, setStatus] = useState("idle");
  const [ProductDetails, setProductDetails] = useState({});
  const [error, setError] = useState(null);
  const [inWishList, setInWishList] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      setStatus("loading");

      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setProducts(data);
        setStatus("succeeded");
      } catch (err) {
        setError(err.message);
        setStatus("failed");
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert("The product has been added to the cart");
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    alert("The product has been deleted from the cart");
  };

  const addToWishList = (product) => {
    setWishList((prevCart) => [...prevCart, product]);
    alert("The product has been added to the WishList");
  };

  const removeFromWishList = (id) => {
    setWishList((prevCart) => prevCart.filter((item) => item.id !== id));
    alert("The product has been deleted from the Wish List");
  };

  return (
    <ProductContext.Provider
      value={{
        updateQuantity,
        products,
        status,
        error,
        wishList,
        cart,
        addToCart,
        removeFromCart,
        addToWishList,
        removeFromWishList,
        inWishList,
        setInWishList,
        ProductDetails,
        setProductDetails,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
