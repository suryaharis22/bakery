// pages/api/tokenizer.js

import Midtrans from "midtrans-client";

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.NEXT_PUBLIC_SECRET,
    clientKey: process.env.NEXT_PUBLIC_CLIENT,
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const parameter = req.body;
            console.log("Parameter:", parameter);

            const token = await snap.createTransactionToken(parameter);
            // console.log("Transaction Token:", token);

            res.status(200).json({ token });
        } catch (error) {
            console.error("Error creating transaction token:", error);
            res.status(500).json({ error: "Failed to create transaction token", message: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
