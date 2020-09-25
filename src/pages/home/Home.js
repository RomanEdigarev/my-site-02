import React from "react";
import InfoSection from "../../components/infoSection/InfoSection";
import {homeObj} from "./Data";

const Home = (props) => {

    return (
        <>
            <InfoSection {...homeObj}/>
        </>
    )
}

export default Home;