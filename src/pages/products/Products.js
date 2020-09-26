import React from "react";
import InfoSection from "../../components/infoSection/InfoSection";
import { homeObjFour, homeObjThree, homeObjTwo} from "./Data";
import Pricing from "../../components/pricing/Pricing";

const Products = (props) => {

    return (
        <>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Pricing/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Products;