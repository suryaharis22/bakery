import Image from "next/image";
import Link from "next/link";

const CardProduct = ({ products }) => {
    console.log(products);

    return (
        <div className="card-container">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <Image
                        src={product.image || "https://via.placeholder.com/300x200"}
                        alt={product.name}
                        className="card-img"
                        width={300}
                        height={200}
                    // onError={(e) => {
                    //     e.currentTarget.src = "https://via.placeholder.com/300x200"; // Use `e.currentTarget` instead of `e.target`
                    // }}
                    />
                    <div className="card-body">
                        <h3 className="card-title">{product.name}</h3>
                        <p className="card-description">
                            {product.description.length > 60
                                ? `${product.description.substring(0, 60)}...`
                                : product.description}
                        </p>
                        <div className="card-footer">
                            <span className="card-price">${product.price}</span>
                            <Link href={`/product/${product.id}`} className="buy-btn">Order Now</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardProduct;
