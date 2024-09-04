import { useState, useEffect } from "react";

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [shippingAddress, setShippingAddress] = useState({
        name: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedItems);
        calculateSubTotal(storedItems);
    }, []);

    const calculateSubTotal = (items) => {
        const total = items.reduce((sum, item) => {
            return sum + item.quantity * parseInt(item.price.replace("Rp ", "").replace(",", ""));
        }, 0);
        setSubTotal(total);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value
        }));
    };

    const handlePayment = async () => {
        if (!shippingAddress.name || !shippingAddress.phone || !shippingAddress.address) {
            alert("Please fill in all the required fields.");
            return;
        }

        // Menghitung subtotal berdasarkan harga dan kuantitas item
        const calculateSubTotal = () => {
            return cartItems.reduce((total, item) => {
                const price = parseFloat(item.price.replace("Rp ", "").replace(",", ""));
                return total + (price * item.quantity);
            }, 0);
        };

        const totalAmount = calculateSubTotal();

        const dataTransaction = {
            transaction_detail: {
                order_id: "ORDER-101", // Pastikan ID pesanan unik
                gross_amount: totalAmount
            },
            item_details: cartItems.map((item, index) => ({
                id: `ITEM-${String(index + 1).padStart(3, '0')}`, // generate ID like ITEM-001, ITEM-002
                price: parseFloat(item.price.replace("Rp ", "").replace(",", "")), // Pastikan harga dalam format angka
                quantity: item.quantity,
                name: item.title
            })),
            customer_details: {
                first_name: shippingAddress.name,
                phone: shippingAddress.phone,
                billing_address: {
                    address: shippingAddress.address,
                }
            }
        };

        try {
            const response = await fetch('/api/tokenizer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataTransaction)
            });

            const result = await response.json();
            if (response.ok) {
                console.log("Transaction Token:", result.token);
                // Redirect to Midtrans payment page or handle further steps
            } else {
                console.error("Failed to create transaction token:", result.error);
                alert(`Gagal membuat token transaksi: ${result.error}`);
            }
        } catch (error) {
            console.error("Error processing payment:", error.message);
            alert("Terjadi kesalahan saat memproses pembayaran: " + error.message);
        }
    };

    useEffect(() => {
        const snapScript = 'https://app.sandbox.midtrans.com/snap/snap.js'; // Use production URL for production
        const clientKey = process.env.NEXT_PUBLIC_CLIENT;
        const script = document.createElement('script');
        script.src = snapScript;
        script.setAttribute('data-client-key', clientKey);
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>
            <div className="checkout-products">
                {cartItems.map((item) => (
                    <div key={item.id} className="checkout-item">
                        <img src={item.image} alt={item.title} className="checkout-item-image" />
                        <div className="checkout-item-details">
                            <h3 className="checkout-item-title">{item.title}</h3>
                            <p className="checkout-item-price">
                                {item.quantity} x {item.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="checkout-summary">
                <h3>Subtotal: Rp {subTotal.toLocaleString()}</h3>
            </div>

            <div className="checkout-address">
                <h3>Alamat Pengiriman</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Nama"
                    value={shippingAddress.name}
                    onChange={handleInputChange}
                    className="checkout-input"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Nomor Telepon"
                    value={shippingAddress.phone}
                    onChange={handleInputChange}
                    className="checkout-input"
                />
                <textarea
                    name="address"
                    placeholder="Alamat"
                    value={shippingAddress.address}
                    onChange={handleInputChange}
                    className="checkout-input"
                />
            </div>

            <div className="checkout-payment">
                <h3>Metode Pembayaran</h3>
                <button onClick={handlePayment} className="checkout-btn">
                    Bayar dengan Midtrans
                </button>
            </div>
        </div>
    );
};


export default Checkout;