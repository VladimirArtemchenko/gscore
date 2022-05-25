import React from 'react';
import {
  Root, HeaderContainer, Logo, UserContainer,
} from '../../styles/styledComponents';

export interface HeaderProps {
    children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => (
  <Root>
    <HeaderContainer>
      <Logo src="/logo.svg" />
      <UserContainer>{children}</UserContainer>
    </HeaderContainer>
  </Root>
);

export default Header;
