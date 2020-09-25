import React from "react";
import InfoSection from "../../components/infoSection/InfoSection";
import {homeObj, homeObjFour, homeObjThree, homeObjTwo} from "./Data";

const Home = (props) => {

    return (
        <>
            <InfoSection {...homeObj}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Home;