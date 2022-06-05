import React from 'react';
import Link from 'next/link';
import {
  FooterList, FooterListItem, FooterListLink, Root,
} from './index';

const Copyright = () => (
  <Root>
    <FooterList>
      <FooterListItem>Copyright © 2022 GScore</FooterListItem>
      <FooterListItem>All Rights Reserved</FooterListItem>
      <Link href="/cookies"><FooterListLink>Cookies</FooterListLink></Link>
      <Link href="/privacy"><FooterListLink>Privacy Policy</FooterListLink></Link>
    </FooterList>
  </Root>
);

export default Copyright;
