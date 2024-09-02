import Link from "next/link";

const Carousel = (Carousel) => {
    const imageSlide = [
        {
            src: "images/slider-1.jpg",
            title1: "Cake for Later Cake1",
            title2: "as a way of Life",
            url: "/"
        },
        {
            src: "images/slider-2.jpg",
            title1: "Cake for Later Cake2",
            title2: "as a way of Life",
            url: "/"
        },
        {
            src: "images/slider-3.jpg",
            title1: "Cake for Later Cake3",
            title2: "as a way of Life",
            url: "/"
        },
        {
            src: "images/slider-1.jpg",
            title1: "Cake for Later Cake4",
            title2: "as a way of Life",
            url: "/"
        }
    ]
    return (
        <div className="photo-slider container-fluid no-padding">

            <div id="main-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                <div role="listbox" className="carousel-inner">
                    {imageSlide.map((item, index) => {
                        return (
                            <div className={`item ${index === 0 ? "active" : ""}`} key={index}>
                                <img width="1920" height="1030" alt="slider" src={item.src} />
                                <div className="carousel-caption">
                                    <img data-animation="animated pulse" src="images/slider-ic.png" alt="slider-ic" width="121" height="124" />
                                    <p data-animation="animated bounceInLeft">{item.title1}</p>
                                    <p data-animation="animated bounceInRight">{item.title2}</p>
                                    <Link title="Read More" href={item.url} data-animation="animated bounceInUp">Read More</Link>
                                </div>
                            </div>
                        )
                    })}
                    <div className="left carousel-control" href="#main-carousel" role="button" data-slide="prev">
                        <i className="fa fa-caret-left" aria-hidden="true"></i>
                    </div>
                    <di className="right carousel-control" href="#main-carousel" role="button" data-slide="next">
                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </di>
                </div>
            </div>
        </div>
    );
}

export default Carousel;