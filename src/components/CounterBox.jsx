
const CounterBox = (CounterBox) => {
    return (
        <div className="counter-section container-fluid no-padding">
            <div className="container">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="counter-box">
                        <h3><span className="count" id="statistics_count-1" data-statistics_percent="1500"> &nbsp;</span></h3>
                        <i className="fa fa-smile-o" aria-hidden="true"></i>
                        <p>HAPPY CLIENTS</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="counter-box">
                        <h3><span className="count" id="statistics_count-2" data-statistics_percent="550">&nbsp;</span></h3>
                        <i className="fa fa-coffee" aria-hidden="true"></i>
                        <p>COFFEE CUPS</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="counter-box">
                        <h3><span className="count" id="statistics_count-3" data-statistics_percent="750">&nbsp;</span></h3>
                        <i className="fa fa-hourglass-o" aria-hidden="true"></i>
                        <p>WORKED HOURS</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="counter-box">
                        <h3><span className="count" id="statistics_count-4" data-statistics_percent="110">&nbsp;</span></h3>
                        <i className="fa fa-home" aria-hidden="true"></i>
                        <p>BRANCHES</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterBox;