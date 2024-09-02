import CardProduct from "../Card/CardProduct";

const Menu = (Menu) => {
    const products = [
        {
            id: 1,
            name: "Chocolate Cake",
            description: "Delicious chocolate cake with rich, creamy frosting. Perfect for any celebration.",
            price: 15.99,
            image: "https://www.example.com/images/chocolate-cake.jpg",
            stock: 10,
            category: "Cakes"
        },
        {
            id: 2,
            name: "Strawberry Shortcake",
            description: "Light and fluffy shortcake layered with fresh strawberries and whipped cream.",
            price: 12.99,
            image: "https://www.example.com/images/strawberry-shortcake.jpg",
            stock: 8,
            category: "Cakes"
        },
        {
            id: 3,
            name: "Blueberry Muffin",
            description: "Moist and tender muffins bursting with fresh blueberries. A perfect breakfast treat.",
            price: 3.99,
            image: "https://www.example.com/images/blueberry-muffin.jpg",
            stock: 25,
            category: "Muffins"
        },
        {
            id: 4,
            name: "Apple Pie",
            description: "Classic apple pie with a flaky crust and a hint of cinnamon. A timeless dessert favorite.",
            price: 9.99,
            image: "https://www.example.com/images/apple-pie.jpg",
            stock: 15,
            category: "Pies"
        },
        {
            id: 5,
            name: "Lemon Tart",
            description: "Tangy and sweet lemon tart with a buttery crust. A refreshing dessert for any occasion.",
            price: 5.99,
            image: "https://www.example.com/images/lemon-tart.jpg",
            stock: 12,
            category: "Tarts"
        }
    ];


    return (
        <>
            <div id="menu-section" className="menu-section container-fluid no-padding">
                <div className="section-padding"></div>
                <div class="container">
                    <div class="section-header">
                        <h3>Our Menu</h3>
                        <h5>CREAMY DISHES</h5>
                        <img src="images/section-seprator.png" alt="section-seprator" width="169" height="15" />
                        <p>The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day.</p>
                    </div>
                </div>
                <CardProduct products={products} />

            </div>
            <div className="section-padding"></div>
        </>
    );
}

export default Menu;