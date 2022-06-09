import React, { useEffect } from 'react';
import {
  ContactLink,
  Flex,
  Root,
  TextHome,
  Title,
} from './index';
import PriceCard from '../PriceCard';
import { ProductsListType } from '../../store/prices/types';

interface PricesCardsProps {
    productsList: ProductsListType[]
}

const PricesCards: React.FC<PricesCardsProps> = ({ productsList }) => (
  <Root>
    <Title>Get started with Gscore today!</Title>
    <Flex>
      {productsList.map((item, index) => (
        <PriceCard
          key={item.id}
          id={item.id}
          index={index}
          price={item.prices[0].price}
          sitesCount={item.sitesCount}
        />
      ))}
    </Flex>
    <TextHome>Have more than 10 sites?</TextHome>
    <ContactLink href="mailto:voartemchenko@gmail.com">Contact Us</ContactLink>
  </Root>
);
export default PricesCards;
