
import Loader from "../Loader";
import Footer from "./Footer/Index";
import TopBar from "./TopBar";

const Layouts = (props) => {
    const { children } = props
    return (
        <main>
            <Loader />
            <TopBar />
            {children}
            <Footer />

        </main>
    );
}

export default Layouts;