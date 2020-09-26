import React from "react";
import {
    PricingCardCost, PricingCardFeature, PricingCardFeatures,
    PricingCardIcon,
    PricingCardInfo, PricingCardLength, PricingCardPlan,
    PricingContainer,
    PricingHeading,
    PricingSection,
    PricingWrapper,
    PrisingCard
} from "./Pricing.elements";
import {IconContext} from "react-icons";
import {GiCrystalBars, GiCutDiamond, GiRock} from "react-icons/all";
import {Button} from "../../globalStyles";

const Pricing = (props) => {

    return (
        <IconContext.Provider value={{color: `a9b3c1`, size: 64}}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Our Services</PricingHeading>
                    <PricingContainer>
                        <PrisingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiRock />
                                </PricingCardIcon>
                                <PricingCardPlan>Starter Pack</PricingCardPlan>
                                <PricingCardCost>$99.99</PricingCardCost>
                                <PricingCardLength>per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>100 New Users</PricingCardFeature>
                                    <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                                    <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PrisingCard>
                        <PrisingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCrystalBars />
                                </PricingCardIcon>
                                <PricingCardPlan>Gold Rush</PricingCardPlan>
                                <PricingCardCost>$299.99</PricingCardCost>
                                <PricingCardLength>per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>1000 New Users</PricingCardFeature>
                                    <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                                    <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PrisingCard>
                        <PrisingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCutDiamond />
                                </PricingCardIcon>
                                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                                <PricingCardCost>$999.99</PricingCardCost>
                                <PricingCardLength>per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Unlimited Users</PricingCardFeature>
                                    <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                                    <PricingCardFeature>24/7 Support</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PrisingCard>
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    )
}
export default Pricing;