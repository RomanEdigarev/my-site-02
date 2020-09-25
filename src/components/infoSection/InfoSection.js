import React from "react";
import {
    Heading, Img,
    ImgWrapper,
    InfoColumn,
    InfoRow,
    InfoSec,
    Subtitle,
    TextWrapper,
    TopLine
} from "./InfoSection.elements";
import {Button, Container} from "../../globalStyles";
import {Link} from "react-router-dom";


const InfoSection = (
    {
        lightBg,
        imgStart,
        lightTopLine,
        lightText,
        headLine,
        lightTextDesc,
        description,
        topLine,
        buttonLabel,
        primary,
        img,
        altImg,
        start
    }
) => {

    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to={'/sign-up'}>
                                    <Button fontBig primary={primary}>{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={altImg}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>

        </>
    )
}
export default InfoSection