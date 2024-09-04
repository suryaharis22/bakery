// pages/cart.js

import ShoppingCartCtrl from "@/controller/ShoppingCartCtrl";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function CartPage() {


    return (
        <main className="site-main page-spacing">
            <ShoppingCartCtrl />
        </main>
    );
}