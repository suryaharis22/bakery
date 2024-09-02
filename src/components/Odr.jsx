
const Odr = (Odr) => {
    return (
        <div className="order-section container-fluid no-padding">
            <div className="section-padding"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-7 col-xs-7">
                        <div className="section-header">
                            <h3>Choose your Flavour</h3>
                            <h5>Order Online</h5>
                            <img src="images/section-seprator.png" alt="section-seprator" width="169" height="15" />
                            <p>The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day.</p>
                        </div>
                        <form className="online-form">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <input type="text" className="form-control" placeholder="Name *" required />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <input type="text" className="form-control" placeholder="Phone Number *" required />
                            </div>
                            <div className="form-group col-md-6 col-sm-6 col-xs-6">
                                <select>
                                    <option>FLAVOURS</option>
                                    <option>FLAVOURS</option>
                                    <option>FLAVOURS</option>
                                    <option>FLAVOURS</option>
                                </select>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <input type="text" className="form-control" placeholder="Your Address *" required />
                            </div>
                            <a href="#" title="Order Now" className="order-now">Order Now</a>
                            <p>FOR MORE QUERIES CALL US AT :<a href="tel:1-800-23-456-7890" title="1-800-23-456-7890"> 1-800-23-456-7890</a></p>
                        </form>
                    </div>
                </div>
            </div>

            <div className="right-image">
                <img src="images/order-online.png" alt="order-online" width="600" height="830" />
            </div>
            <div className="section-padding"></div>
        </div>
    );
}

export default Odr;