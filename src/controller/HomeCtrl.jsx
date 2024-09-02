import Carousel from "@/components/Carousel";
import CounterBox from "@/components/CounterBox";
import Festival from "@/components/Festival";
import LatestPost from "@/components/LatestPost";
import Menu from "@/components/Menu";
import Odr from "@/components/Odr";
import Team from "@/components/Team";
import Welcome from "@/components/Welcome";

const HomeCTRL = (HomeCTRL) => {
    return (
        <>
            <Carousel />
            <Welcome />
            <Festival />
            <Menu />
            <Team />
            {/* <Odr /> */}
            <CounterBox />
            <LatestPost />
        </>

    );
}

export default HomeCTRL;