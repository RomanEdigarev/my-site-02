import React from "react";
import {
    FooterContainer, FooterLink,
    FooterLinkContainer, FooterLinkItems, FooterLinksWrapper, FooterLinkTittle,
    FooterSubHeading,
    FooterSubscription,
    FooterSubText,
    Form,
    FormInput, SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights
} from "./Footer.elements";
import {Button} from "../../globalStyles";
import {FaInstagram, FaFacebook, FaTwitter, FaYoutube} from "react-icons/all";


const Footer = (props) => {

    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive...
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time</FooterSubText>
                <Form>
                    <FormInput name={'email'} type={'email'} placeholder={'Your email'}></FormInput>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinkContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTittle>About Us</FooterLinkTittle>
                        <FooterLink to={'/sign-up'}>How It works</FooterLink>
                        <FooterLink to={'/'}>Testimonials</FooterLink>
                        <FooterLink to={'/'}>Careers</FooterLink>
                        <FooterLink to={'/'}>Investors</FooterLink>
                        <FooterLink to={'/'}>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTittle>Contact</FooterLinkTittle>
                        <FooterLink to={'/sign-up'}>How It works</FooterLink>
                        <FooterLink to={'/'}>Testimonials</FooterLink>
                        <FooterLink to={'/'}>Careers</FooterLink>
                        <FooterLink to={'/'}>Investors</FooterLink>
                        <FooterLink to={'/'}>Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTittle>Social Media</FooterLinkTittle>
                        <FooterLink to={'/sign-up'}>How It works</FooterLink>
                        <FooterLink to={'/'}>Testimonials</FooterLink>
                        <FooterLink to={'/'}>Careers</FooterLink>
                        <FooterLink to={'/'}>Investors</FooterLink>
                        <FooterLink to={'/'}>Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinkContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to={'/'}>
                        <SocialIcon>
                            ULTRA
                        </SocialIcon>
                    </SocialLogo>
                    <WebsiteRights>
                        ULTRA 2020
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href={'/'} target={'_blank'} aria-label={'Facebook'}>
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href={'/'} target={'_blank'} aria-label={'Instagram'}>
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href={'/'} target={'_blank'} aria-label={'Youtube'}>
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href={'/'} target={'_blank'} aria-label={'Twitter'}>
                            <FaTwitter/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

        </FooterContainer>
    )
}

export default Footer;