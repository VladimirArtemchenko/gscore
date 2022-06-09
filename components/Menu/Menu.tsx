import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Root, MenuContainer, MenuImage, Text, MenuItem, Logo, Close,
  TextMobile, Line, Flex, FlexColumn, MenuLayout, TextMobileGrey,
} from './index';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/token/reducer';
import { MenuIcon } from '../Header';

interface MenuProps {
  // eslint-disable-next-line no-unused-vars
  onSetMenuActive: (value: boolean) => void
}

const Menu: React.FC<MenuProps> = ({ onSetMenuActive }) => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.token.userInfo);
  const router = useRouter();
  const handlerLogout = () => {
    dispatch(logout());
    onSetMenuActive(false);
    router.push('/');
  };
  const handlerSettings = () => {
    onSetMenuActive(false);
    router.push('/settings');
  };
  const handlerClose = () => {
    onSetMenuActive(false);
  };
  const handlerMySubscription = () => {
    router.push(`/mySubscription/${userInfo.user.id}`);
    onSetMenuActive(false);
  };

  const [isMenuOpen, setMenuActive] = useState(false);

  const handlerMenuOpen = () => {
    setMenuActive(!isMenuOpen);
  };
  return (
    <Root>
      <MenuItem>
        <Close onClick={handlerClose} src="/close.svg" />
        <Logo src="/logoMobile.svg" />
      </MenuItem>
      <MenuContainer>
        <TextMobile onClick={handlerMySubscription}>
          My Subscriptions
        </TextMobile>
        <Line />
        <Flex onClick={handlerMenuOpen}>
          <TextMobile>
            {userInfo.user.username}
          </TextMobile>
          <MenuIcon $isMenuOpen={isMenuOpen} src="/menuIcon.svg" />
        </Flex>
        {isMenuOpen
              && (
              <FlexColumn>
                <MenuItem onClick={handlerSettings}>
                  <MenuImage src="/settings.svg" />
                  <TextMobileGrey>
                    Settings
                  </TextMobileGrey>
                </MenuItem>
                <MenuItem onClick={handlerLogout}>
                  <MenuImage src="/logout.svg" />
                  <TextMobileGrey>
                    Logout
                  </TextMobileGrey>
                </MenuItem>
              </FlexColumn>
              )}
        <MenuLayout>
          <MenuItem onClick={handlerSettings}>
            <MenuImage src="/settings.svg" />
            <Text>
              Settings
            </Text>
          </MenuItem>
          <MenuItem onClick={handlerLogout}>
            <MenuImage src="/logout.svg" />
            <Text>
              Logout
            </Text>
          </MenuItem>
        </MenuLayout>
      </MenuContainer>
    </Root>
  );
};

export default Menu;
