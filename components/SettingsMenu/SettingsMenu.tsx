import React from 'react';
import {
  Root,
} from './index';
import SettingsMenuItem from '../SettingsMenuItem';

interface SettingsMenuProps {
    currentId: number
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ currentId }) => {
  const settingsItemList = [
    { id: 0, name: 'Personal info', link: '/settings' },
    { id: 1, name: 'Change password', link: '/settings/changePassword' },
  ];

  return (
    <Root>
      {settingsItemList.map(({ id, name, link }) => (
        <SettingsMenuItem key={id} id={id} label={name} link={link} currentId={currentId} />
      ))}
    </Root>
  );
};

export default SettingsMenu;
