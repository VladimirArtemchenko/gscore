import React from 'react';
import PricesCards from '../components/PricesCards/PricesCards';
import { products } from './api/rest/products';
import { ProductsListType } from '../store/prices/types';

export async function getStaticProps() {
  const response = await products();
  return {
    props: { productsList: response?.data },
  };
}

interface HomeProps {
    productsList: ProductsListType[]
}

const Home: React.FC<HomeProps> = ({ productsList }) => (
  <PricesCards productsList={productsList} />
);

export default Home;
