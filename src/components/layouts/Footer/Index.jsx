
const Footer = (Footer) => {
    return (
        <>
            <footer className="footer-main container-fluid no-padding">
                <div className="footer-content container">
                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="about-footer">
                            <h3>
                                {/* Royal<img src="images/logo.png" alt="logo" /> */}
                                Bakers</h3>
                            <p>The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground oil.</p>
                            <a href="contact-2.html" title="Contact" className="about-links">Contact</a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="about-footer">
                            <h5>Order online</h5>
                            <p>The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground oil.</p>
                            <a href="#" title="Order Now" className="about-links order">Order Now</a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="about-footer">
                            <h5>Contact Us Today</h5>
                            <p>Call Us 666 777 888 OR 111 222 333 Send an Email on contact@cakeshop.com Visit Us 123 Fake Street- London 12358 United Kingdom</p>
                            <ul>
                                <li><a href="#" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#" title="Google-plus"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#" title="Dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


            <div className="bottom-footer container-fluid no-padding">
                <div className="container">
                    <div className="footer-copyright">
                        <p>&copy; Copyrights 2016 Royal Bakers. All Rights Reserved</p>
                    </div>
                    <div className="footer-breadcrumb pull-right">
                        <ol className="breadcrumb">
                            <li title="Home" className="active">Home</li>
                            <li><a title="About Us" href="about.html">About</a></li>
                            <li><a title="Services" href="services.html">Services</a></li>
                            <li><a title="Portfolio" href="gallery-2.html">Portfolio</a></li>
                            <li><a title="Blog" href="blog.html">Blog</a></li>
                            <li><a title="Contact" href="contact-2.html">Contact</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;