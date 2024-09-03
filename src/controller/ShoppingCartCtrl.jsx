// pages/cart.js

import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function CartPage() {
    const initialItems = [
        {
            id: 1,
            image: "https://via.placeholder.com/80x80?text=Product+1",
            title: "Product 1",
            price: "Rp 100,000",
            quantity: 1
        },
        {
            id: 2,
            image: "https://via.placeholder.com/80x80?text=Product+2",
            title: "Product 2",
            price: "Rp 200,000",
            quantity: 2
        },
        {
            id: 3,
            image: "https://via.placeholder.com/80x80?text=Product+3",
            title: "Product 3",
            price: "Rp 300,000",
            quantity: 3
        }
    ];

    const [items, setItems] = useState(initialItems);
    const [quantities, setQuantities] = useState(
        initialItems.map((item) => item.quantity)
    );
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleQuantityChange = (id, delta) => {
        setQuantities((prevQuantities) => {
            const index = items.findIndex(item => item.id === id);
            const newQuantities = [...prevQuantities];
            newQuantities[index] = Math.max(1, newQuantities[index] + delta);
            return newQuantities;
        });
    };

    const handleSelectAll = (event) => {
        const isChecked = event.target.checked;
        setSelectAll(isChecked);
        if (isChecked) {
            setSelectedItems(items.map(item => item.id));
        } else {
            setSelectedItems([]);
        }
    };

    const handleItemSelect = (id) => {
        setSelectedItems((prevSelectedItems) => {
            if (prevSelectedItems.includes(id)) {
                return prevSelectedItems.filter(itemId => itemId !== id);
            } else {
                return [...prevSelectedItems, id];
            }
        });
    };

    const handleDeleteItem = (id) => {
        setItems((prevItems) => prevItems.filter(item => item.id !== id));
        setSelectedItems(prevSelectedItems => prevSelectedItems.filter(itemId => itemId !== id));
    };

    const handleDeleteSelected = () => {
        setItems((prevItems) => prevItems.filter(item => !selectedItems.includes(item.id)));
        setSelectedItems([]);
        setSelectAll(false);
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <main className="site-main page-spacing">
            <motion.div
                className="shopping-cart-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="shopping-cart-title">Keranjang Belanja</h2>
                <div className="shopping-cart-controls">
                    <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="select-all-checkbox"
                    />
                    <label>Select All</label>
                    <button
                        className="delete-selected-btn"
                        onClick={handleDeleteSelected}
                        disabled={selectedItems.length === 0}
                    >
                        Hapus Terpilih
                    </button>
                </div>
                <div className="shopping-cart-items">
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            className="shopping-cart-item"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <input
                                type="checkbox"
                                checked={selectedItems.includes(item.id)}
                                onChange={() => handleItemSelect(item.id)}
                                className="shopping-cart-checkbox"
                            />
                            <img src={item.image} alt={item.title} className="shopping-cart-item-image" />
                            <div className="shopping-cart-item-control">
                                <div className="shopping-cart-item-details">
                                    <h3 className="shopping-cart-item-title">{item.title}</h3>
                                    <p className="shopping-cart-item-price">{item.price}</p>
                                    <div className="shopping-cart-item-quantity">
                                        <button
                                            className="shopping-cart-quantity-btn"
                                            onClick={() => handleQuantityChange(item.id, -1)}
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            value={quantities[items.findIndex(i => i.id === item.id)]}
                                            className="shopping-cart-quantity-input"
                                            readOnly
                                        />
                                        <button
                                            className="shopping-cart-quantity-btn"
                                            onClick={() => handleQuantityChange(item.id, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="shopping-cart-delete-btn"
                                    onClick={() => handleDeleteItem(item.id)}
                                >
                                    <FaRegTrashAlt />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="shopping-cart-summary"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button className="shopping-cart-checkout-btn">Checkout</button>
                </motion.div>
            </motion.div>
        </main>
    );
}
