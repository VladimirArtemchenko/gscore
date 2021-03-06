import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  ListText,
} from './index';

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
  const [isLogin, setIsLogin] = useState('');
  const toggleHover = () => {
    setHovered(!isHovered);
  };
  const router = useRouter();
  const handleClick = () => {
    console.log(localStorage.getItem('isLogin'));
    setIsLogin(String(localStorage.getItem('isLogin')));
    router.push(String(localStorage.getItem('isLogin')) === 'true' ? '/verification/checkout' : '/verification');
    sessionStorage.setItem('currentProductId', id.toString());
    sessionStorage.setItem('currentIndex', index.toString());
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
            <ListText>
              All features for
              {sitesCount}
              {' '}
              sites
            </ListText>
          </CardListItem>
          <CardListItem>
            {isHovered ? <ListIcon src="/CheckCircle.svg" /> : <ListIcon src="/CheckCircleInactive.svg" />}
            <ListText>Special introductory pricing</ListText>
          </CardListItem>
          <CardListItem>
            {isHovered ? <ListIcon src="/CheckCircle.svg" /> : <ListIcon src="/CheckCircleInactive.svg" />}
            <ListText>Unlimited Pages and Keywords</ListText>
          </CardListItem>
          <CardListItem>
            {isHovered ? <ListIcon src="/CheckCircle.svg" /> : <ListIcon src="/CheckCircleInactive.svg" />}
            <ListText>Billed annually</ListText>
          </CardListItem>
        </CardList>
        {/* <Link href={}> */}
        <PrimaryButton onClick={handleClick} $isHovered={isHovered}>
          Get
          Gscore
        </PrimaryButton>
        {/* </Link> */}
      </Container>
    </Root>

  );
};

export default PricesCard;
