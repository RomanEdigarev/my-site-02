import React, {useEffect, useState} from "react";
import {
    MobileIcon,
    NavbarContainer,
    NavbarStyledComponents, NavBtnLink,
    NavIcon,
    NavItem, NavItemBtn, NavLinks,
    NavLogo,
    NavMenu
} from "./NavbarStyledComponents";
import {FaTimes, FaBars} from "react-icons/all";
import {IconContext} from "react-icons/lib";
import {Button} from "../../globalStyles";


const Navbar = (props) => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener(`resize`, showButton);

    return (
        <>
            <IconContext.Provider value={{color: '#fff',}}>
                <NavbarStyledComponents>
                    <NavbarContainer>

                        <NavLogo to={'/'}>
                            <NavIcon/>
                            ULTRA
                        </NavLogo>

                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>

                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to={'/'}>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to={'/products'}>Products</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to={'/services'}>Services</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to={'/sign-up'}>
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to={'/sign-up'}>
                                        <Button fontBig primary>SIGN UP</Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>


                    </NavbarContainer>
                </NavbarStyledComponents>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;