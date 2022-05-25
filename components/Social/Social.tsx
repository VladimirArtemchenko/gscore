import React from 'react';
import { FooterSocialContainer, Root, SocialIcon } from '../../styles/styledComponents';

const Social = () => (
  <Root>
    <FooterSocialContainer>
      <a href="https://ru-ru.facebook.com/"><SocialIcon src="/facebook.svg" /></a>
      <a href="https://twitter.com/"><SocialIcon src="/twitter.svg" /></a>
      <a href="https://ru.linkedin.com"><SocialIcon src="/linkedIn.svg" /></a>
    </FooterSocialContainer>
  </Root>
);

export default Social;
