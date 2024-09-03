import { useState } from 'react';
import CarouselWithThumbnails from "@/components/Carousel/CarouselWithThumbnails";
import { FaBasketShopping } from "react-icons/fa6";


const DetailProductCtrl = () => {
    const [quantity, setQuantity] = useState(1);

    const handleChange = (event) => {
        const value = Math.max(1, parseInt(event.target.value, 10) || 1);
        setQuantity(value);
    };

    const slides = [
        { image: 'https://via.placeholder.com/600x400?text=Slide+1', alt: 'Slide 1', caption: 'Caption 1' },
        { image: 'https://via.placeholder.com/600x400?text=Slide+2', alt: 'Slide 2', caption: 'Caption 2' },
        { image: 'https://via.placeholder.com/600x400?text=Slide+3', alt: 'Slide 3', caption: 'Caption 3' },
        { image: 'https://via.placeholder.com/600x400?text=Slide+4', alt: 'Slide 4', caption: 'Caption 4' },
    ];

    return (
        <div className="container-fluid no-padding">
            <div className="section-padding"></div>
            <div className="container">
                <div className="row">
                    <div className="product-detail-container">
                        <div className="product-image">
                            <CarouselWithThumbnails slides={slides} />
                        </div>
                        <div className="product-info">
                            <h5 className="product-name">Nama Produk</h5>
                            <p className="product-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quisquam debitis quidem blanditiis itaque deleniti odio, perferendis culpa ducimus quibusdam, laboriosam similique unde dicta quaerat placeat consequuntur officiis, adipisci facilis! Deskripsi produk yang memberikan informasi mendetail tentang produk ini. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores, expedita accusamus illum eos, omnis ex doloremque, dolorem nisi natus eum minima repellendus ipsam et in sapiente est temporibus fuga.
                            </p>
                            <p className="product-category">Kategori: Elektronik</p>
                            <p className="product-price">Harga: Rp 1.000.000</p>
                            <div className="quantity-selector">
                                <button className="quantity-button" onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</button>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    min="1"
                                    value={quantity}
                                    onChange={handleChange}
                                    style={{ width: '50px', textAlign: 'center' }}
                                />
                                <button className="quantity-button" onClick={() => setQuantity(prev => prev + 1)}>+</button>
                            </div>
                            <div className="buttons">
                                <button className="buy-button">Beli</button>
                                <button className="add-to-cart-button"><FaBasketShopping size={12} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-padding"></div>
        </div>
    );
}

export default DetailProductCtrl;
