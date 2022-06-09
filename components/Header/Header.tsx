import React, { useState } from 'react';
import Link from 'next/link';
import {
  Root, HeaderContainer, Logo, UserContainer, Text, MenuIcon, Burger, LogoMobile, GreyText,
} from './index';
import { useAppSelector } from '../../hooks';
import Menu from '../Menu';

const Header = () => {
  const userInfo = useAppSelector((state) => state.token.userInfo);
  const [isMenuOpen, setMenuActive] = useState(false);

  const handlerMenuOpen = () => {
    setMenuActive(!isMenuOpen);
  };

  return (
    <Root>
      <HeaderContainer>
        <Link href="/"><Logo src="/logo.svg" /></Link>
        <Link href="/">
          <LogoMobile src="/logoMobile.svg" />
        </Link>
        {userInfo.user.username !== ''
                    && (
                    <div>
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
                      <Burger onClick={handlerMenuOpen} src="/burger.svg" />
                    </div>
                    )}
      </HeaderContainer>
      {isMenuOpen && <Menu onSetMenuActive={setMenuActive} />}
    </Root>
  );
};

export default Header;
