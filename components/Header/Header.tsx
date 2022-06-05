import React, { useState } from 'react';
import Link from 'next/link';
import {
  Root, HeaderContainer, Logo, UserContainer, Text, MenuIcon, GreyText,
} from './index';
import { useAppSelector } from '../../hooks';
import Menu from '../Menu';

const Header = () => {
  const userInfo = useAppSelector((state) => state.token.userInfo);
  const [isMenuOpen, setMenuActive] = useState(false);

  const handlerMenuOpen = () => {
    setMenuActive(!isMenuOpen);
    // console.log('s');
  };

  return (
    <Root>
      <HeaderContainer>
        <Link href="/"><Logo src="/logo.svg" /></Link>
        {userInfo.user.username !== ''
                    && (
                    <UserContainer>
                      <Link href={`/mySubscription/${userInfo.user.id}`}>
                        <GreyText>
                          My
                          subscriptions
                        </GreyText>
                      </Link>
                      <UserContainer onClick={handlerMenuOpen}>
                        <Text>
                          {userInfo.user.username}
                        </Text>
                        <MenuIcon $isMenuOpen={isMenuOpen} src="/menuIcon.svg" />
                      </UserContainer>
                    </UserContainer>
                    )}
      </HeaderContainer>
      {isMenuOpen && <Menu onSetMenuActive={setMenuActive} />}
    </Root>
  );
};

export default Header;
