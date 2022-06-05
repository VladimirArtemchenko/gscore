import React from 'react';
import Link from 'next/link';
import {
  Root, SettingsLink,
} from './index';

interface SettingsMenuItemProps {
    id: number
    label: string
    currentId: number
    link: string
}

const SettingsMenuItem: React.FC<SettingsMenuItemProps> = ({
  id, label, link, currentId,
}) => (
  <Root $isActive={id === currentId}>
    <SettingsLink href={link} $isActive={id === currentId}>
      {label}
    </SettingsLink>
  </Root>
);

export default SettingsMenuItem;
