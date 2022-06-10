import React from 'react';
import { FooterSocialContainer, Root, SocialIcon } from './index';

const Social = () => (
  <Root>
    <FooterSocialContainer>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <a href="https://ru-ru.facebook.com/"><SocialIcon src="/facebook.svg" /></a>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <a href="https://twitter.com/"><SocialIcon src="/twitter.svg" /></a>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <a href="https://ru.linkedin.com"><SocialIcon src="/linkedIn.svg" /></a>
    </FooterSocialContainer>
  </Root>
);

export default Social;
