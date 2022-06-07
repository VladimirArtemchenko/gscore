import React, { useState } from 'react';
import Link from 'next/link';
import {
  Root,
  CardLine,
  CardList,
  CardListItem,
  License,
  Price,
  Text,
  ListIcon,
  PrimaryButton,
  Container,
} from './index';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentProductId } from '../../store/currentProductId/reducer';
import { setCurrentProductIndex } from '../../store/currentProductIndex/reducer';

export interface PricesCardProps {
    price: string,
    sitesCount: number
    id: number
    index: number
}

const PricesCard: React.FC<PricesCardProps> = ({
  price, sitesCount, id, index,
}) => {
  const [isHovered, setHovered] = useState(false);
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.token.userInfo.token);
  const toggleHover = () => {
    setHovered(!isHovered);
  };

  const handleClick = () => {
    dispatch(setCurrentProductId({ id }));
    dispatch(setCurrentProductIndex({ index }));
  };

  return (
    <Root>
      <Container $isHovered={isHovered} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <Price>
          {price}
          $
        </Price>
        <License>
          {sitesCount}
          {' '}
          Site license
        </License>
        <Text>
          Get the advanced WordPress plugin that optimizes
          content with GSC keywords at one low annual
          price
        </Text>
        <CardLine />
        <CardList>
          <CardListItem>
            {isHovered ? <ListIcon src="/CheckCircle.svg" /> : <ListIcon src="/CheckCircleInactive.svg" />}
            <Text>
              All features for
              {sitesCount}
              {' '}
              sites
            </Text>
          </CardListItem>
          <CardListItem>
            {isHovered ? <ListIcon src="/CheckCircle.svg" /> : <ListIcon src="/CheckCircleInactive.svg" />}
            <Text>Special introductory pricing</Text>
          </CardListItem>
          <CardListItem>
            {isHovered ? <ListIcon src="/CheckCircle.svg" /> : <ListIcon src="/CheckCircleInactive.svg" />}
            <Text>Unlimited Pages and Keywords</Text>
          </CardListItem>
          <CardListItem>
            {isHovered ? <ListIcon src="/CheckCircle.svg" /> : <ListIcon src="/CheckCircleInactive.svg" />}
            <Text>Billed annually</Text>
          </CardListItem>
        </CardList>
        <Link href={token !== '' ? '/verification/checkout' : '/verification'}>
          <PrimaryButton onClick={handleClick} $isHovered={isHovered}>
            Get
            Gscore
          </PrimaryButton>
        </Link>
      </Container>
    </Root>

  );
};

export default PricesCard;
