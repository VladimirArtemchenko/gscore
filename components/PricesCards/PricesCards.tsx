import React, { useEffect } from 'react';
import PricesCard from '../PriceCard';
import { Flex, Root } from '../../styles/styledComponents';
import { products } from '../../pages/api/rest/products';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProducts } from '../../store/prices/reducer';

function PricesCards() {
  const productsList = useAppSelector((state) => state.productsList.productsList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      const data = await products();
      console.log(data);
      dispatch(getProducts({ data }));
    })();
  }, []);

  return (
    <Root>
      <Flex>
        {productsList.map((item) => (
          <PricesCard key={item.id} price={item.prices[0].price} sitesCount={item.sitesCount} />
        ))}
      </Flex>
    </Root>
  );
}

export default PricesCards;
