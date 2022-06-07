import React from 'react';

import {
  Root,
  Flex,
  BottomFlex,
  SubmitButton, Text, ThinText, SecondFlex, SmallText, Container, ColoredText,
} from './index';
import { SubscriptionsListType } from '../../store/subscriptions/types';

export interface PricesCardProps {
    item: SubscriptionsListType
    status: string
    price: string,
    name: string
    date: string
    isActive: boolean
    onSetCurrentIndex: (value: number) => void
    onSetContentIndex: (value: number) => void
    index: number;
    currentProductId: number

}

const PricesCard: React.FC<PricesCardProps> = ({
  status,
  price,
  name,
  date,
  isActive,
  onSetCurrentIndex,
  index,
  item,
  onSetContentIndex,
  currentProductId,
}) => {
  const handleDate = () => {
    const newDate = new Date(+date * 1000);
    return ` ${newDate.getDate()} ${newDate.getMonth()} ${newDate.getFullYear()}`;
  };

  const handleCardClick = () => {
    onSetCurrentIndex(index + 1);
  };
  const handleViewClick = () => {
    onSetContentIndex(index);
  };

  return (
    <Root $isActive={isActive} onClick={handleCardClick}>
      <Container>
        <Flex>
          <Text>
            Gscore
            $
            {item.productId}
            $
            {item.codes[0].subscribeId}
          </Text>
          <ColoredText
            $isActive={status.toLocaleLowerCase() === 'active'}
          >
            {status}
          </ColoredText>
        </Flex>
        <SecondFlex>
          <SmallText>
            {name}
            {' '}
            license
          </SmallText>
          <SmallText>
            $
            {price}
          </SmallText>
        </SecondFlex>
        <BottomFlex>
          <ThinText>
            void until
            {handleDate()}
          </ThinText>
        </BottomFlex>
        <SubmitButton onClick={handleViewClick} type="button">View</SubmitButton>
      </Container>
    </Root>

  );
};

export default PricesCard;
