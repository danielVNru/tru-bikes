import { type FormEvent, useEffect, useMemo, useRef, useState } from "react";

import {
  CITIES,
  DEALERS,
  INITIAL_FEEDBACK_FORM,
  type CartItem,
  type FeedbackForm,
  type Product,
} from "../constants";

export function useHomePage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [addedId, setAddedId] = useState<number | null>(null);
  const [activeSpecTab, setActiveSpecTab] = useState(0);
  const [selectedCity, setSelectedCity] = useState(CITIES[0] ?? "");
  const [slide, setSlide] = useState(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [form, setForm] = useState<FeedbackForm>(INITIAL_FEEDBACK_FORM);

  const addTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (addTimeoutRef.current) {
        clearTimeout(addTimeoutRef.current);
      }
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current);
      }
    };
  }, []);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  const cityDealers = useMemo(
    () => DEALERS.filter((dealer) => dealer.city === selectedCity),
    [selectedCity]
  );

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });

    setAddedId(product.id);
    if (addTimeoutRef.current) {
      clearTimeout(addTimeoutRef.current);
    }
    addTimeoutRef.current = setTimeout(() => setAddedId(null), 1200);
  };

  const updateQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: Math.max(0, item.qty + delta) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const submitFeedback = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedbackSent(true);

    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current);
    }

    feedbackTimeoutRef.current = setTimeout(() => {
      setFeedbackOpen(false);
      setFeedbackSent(false);
      setForm(INITIAL_FEEDBACK_FORM);
    }, 2000);
  };

  return {
    cart,
    cartOpen,
    menuOpen,
    addedId,
    activeSpecTab,
    selectedCity,
    slide,
    feedbackOpen,
    feedbackSent,
    form,
    cartCount,
    cartTotal,
    cityDealers,
    setCartOpen,
    setMenuOpen,
    setActiveSpecTab,
    setSelectedCity,
    setSlide,
    setFeedbackOpen,
    setForm,
    addToCart,
    updateQty,
    removeItem,
    submitFeedback,
  };
}
