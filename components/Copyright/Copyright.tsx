import React from "react";
import {FooterList, FooterListItem, FooterListLink, Root} from "../../styles/styledComponents";
import Link from "next/link";



const Copyright = () => {

    return (
        <Root>
            <FooterList>
                <FooterListItem>Copyright © 2022 GScore</FooterListItem>
                <FooterListItem>All Rights Reserved</FooterListItem>
                <Link href="/cookies"><FooterListLink>Cookies</FooterListLink></Link>
                <Link href="/privacy"><FooterListLink>Privacy Policy</FooterListLink></Link>
            </FooterList>
        </Root>
    )
}

export default Copyright