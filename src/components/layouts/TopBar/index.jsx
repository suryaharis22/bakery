import Link from "next/link";
import { SlBasket } from "react-icons/sl";

const TopBar = () => {
    return (
        <header className="header-main container-fluid no-padding">

            <div className="menu-block container-fluid no-padding">

                <div className="container">
                    <nav className="navbar ow-navigation">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html" title="Logo"><h3>
                                {/* <img src="images/logo.png" alt="logo" />  */}
                                Bakers</h3></a>
                        </div>
                        <div className="add-to-cart">
                            {/* <div className="menu-search">
                                <div id="sb-search" className="sb-search">
                                    <form>
                                        <input className="sb-search-input" placeholder="Enter your search term..." type="text" value="" name="search" id="search" />
                                        <Link href="/shopping-cart" className="sb-search-submit"><SlBasket size={20} /></Link>
                                        <span className="sb-icon-search"></span>
                                    </form>
                                </div>
                            </div> */}
                            <ul className="cart">
                                <li>
                                    {/* <a aria-expanded="true" aria-haspopup="true" data-toggle="dropdown" id="cart" className="btn dropdown-toggle" title="Order Online" href="#">order</a> */}
                                    <Link href="/shopping-cart"><SlBasket size={20} /></Link>
                                </li>
                            </ul>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse navbar-right">
                            <ul className="nav navbar-nav">
                                <li className="dropdown active">
                                    <Link href="/" title="Portfolio" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Home</Link>
                                    <i className="ddl-switch fa fa-angle-down"></i>
                                    <ul className="dropdown-menu">
                                        <li><Link href="/" title="Portfolio grid">Home 1</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" title="Pages" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                    <i className="ddl-switch fa fa-angle-down"></i>
                                    <ul className="dropdown-menu">
                                        <li><a href="about.html" title="About">About us</a></li>
                                        <li><a href="services.html" title="Services">Services</a></li>
                                        <li><a href="gallery-2.html" title="Gallery">Gallery</a></li>
                                    </ul>
                                </li>
                                <li><a href="#menu-section" title="Features">Features</a></li>
                                <li><a href="gallery-2.html" title="Portfolio">Portfolio</a></li>
                                <li className="dropdown">
                                    <a href="blog.html" title="Latest News" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                    <i className="ddl-switch fa fa-angle-down"></i>
                                    <ul className="dropdown-menu">
                                        <li><a href="blog-post.html" title="Blog Post">Blog Post</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="contact-1.html" title="Latest News" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Contact</a>
                                    <i className="ddl-switch fa fa-angle-down"></i>
                                    <ul className="dropdown-menu">
                                        <li><a href="contact-2.html" title="Contact 2">Contact 2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default TopBar;