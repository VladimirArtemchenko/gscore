import React from 'react';
import {
  ButtonsContainer,
  Root,
} from './index';
import RegistrationButtons from '../RegistrationButtons';
import { useAppSelector } from '../../hooks';

export interface VerificationMenuProps {
    index: number
}

const VerificationMenu: React.FC<VerificationMenuProps> = ({ index }) => {
  const verificationMenu = useAppSelector((state) => state.verificationMenu.verificationMenu);
  return (
    <Root>
      <ButtonsContainer>
        {verificationMenu.map((menuItem, currentIndex) => (
          <RegistrationButtons
            key={menuItem.link}
            id={currentIndex}
            index={index}
            link={menuItem.link}
            label={menuItem.label}
          />
        ))}
      </ButtonsContainer>
    </Root>
  );
};
export default VerificationMenu;
