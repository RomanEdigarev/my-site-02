import React from "react";
import InfoSection from "../../components/infoSection/InfoSection";
import { homeObjFour, } from "./Data";
import Pricing from "../../components/pricing/Pricing";

const Services = (props) => {

    return (
        <>
            <Pricing/>
            <InfoSection {...homeObjFour}/>
        </>
    )
};

export default Services;