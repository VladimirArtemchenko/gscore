import React, { useState } from 'react';
import {
  CardLine,
  CardList,
  CardListItem,
  License,
  Price,
  PriceCard,
  Text,
  ListIcon,
  PrimaryButton,
} from '../../styles/styledComponents';

export interface PricesCardProps {
    price: string,
    sitesCount: number
}

const PricesCard: React.FC<PricesCardProps> = ({ price, sitesCount }) => {
  const [isHovered, setHovered] = useState(false);
  const toggleHover = () => {
    setHovered(!isHovered);
  };

  return (
    <PriceCard $isHovered={isHovered} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
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
        Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual
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
      <PrimaryButton $isHovered={isHovered}>Get Gscore</PrimaryButton>
    </PriceCard>
  );
};

export default PricesCard;
