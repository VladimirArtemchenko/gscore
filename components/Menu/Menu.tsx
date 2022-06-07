import React from 'react';
import { useRouter } from 'next/router';
import {
  Root, MenuContainer, MenuImage, Text, MenuItem,
} from './index';
import { useAppDispatch } from '../../hooks';
import { logout } from '../../store/token/reducer';

interface MenuProps {
    onSetMenuActive: (value: boolean) => void
}

const Menu: React.FC<MenuProps> = ({ onSetMenuActive }) => {
  const dispatch = useAppDispatch();
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

  return (
    <Root>
      <MenuContainer>
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
      </MenuContainer>
    </Root>
  );
};

export default Menu;
