import React from "react";
import {
    Root,
    Logo,
    FooterContainer,
    FooterColumn,
    FooterDescription, FooterLine, FooterBottomContainer
} from "../../styles/styledComponents";
import Copyright from "../Copyright";
import Social from "../Social";

export interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {

    return (
        <Root>
            <FooterContainer>
                <FooterColumn>
                    <Logo src='/logo.svg'/>
                    <FooterDescription>Ut enim ad minim veniam quis nostrud exercitation ea commodo</FooterDescription>
                </FooterColumn>
                <FooterLine/>
                <FooterBottomContainer>
                    <Copyright/>
                    <Social />
                </FooterBottomContainer>
            </FooterContainer>
        </Root>
    )
}

export default Footer