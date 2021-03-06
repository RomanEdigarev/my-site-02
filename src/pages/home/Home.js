import React from "react";
import InfoSection from "../../components/infoSection/InfoSection";
import {homeObj, homeObjFour, homeObjThree, homeObjTwo} from "./Data";
import Pricing from "../../components/pricing/Pricing";

const Home = (props) => {

    return (
        <>
            <InfoSection {...homeObj}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Pricing/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Home;