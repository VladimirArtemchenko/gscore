import React from 'react';
import Link from 'next/link';
import {
  Root,
  Text,
  ChoiceButton,
} from './index';

export interface RegistrationButtonProps {
    label: string
    link: string
    id: number
    index: number

}

const RegistrationButtons: React.FC<RegistrationButtonProps> = ({
  label, link, id, index,
}) => (
  <Root>
    <Text>{label}</Text>
    <Link href={link}><ChoiceButton $isActive={id <= index} /></Link>
  </Root>
);

export default RegistrationButtons;
