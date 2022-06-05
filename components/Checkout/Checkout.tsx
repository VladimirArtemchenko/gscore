import React from 'react';
import { useRouter } from 'next/router';
import {
  Root,
  Title,
  Flex,
  BottomFlex,
  SubmitButton, Text, ThinText, SecondFlex, BigText, Basket, Container,
} from './index';
import { useAppSelector } from '../../hooks';
import { payments } from '../../pages/api/rest/payments';
import VerificationMenu from '../Verification';

const Checkout = () => {
  const router = useRouter();
  const currentProductId = useAppSelector(
    (state) => state.currentProductId.currentProductId,
  );
  const currentPriceId = useAppSelector(
    (state) => state.productsList.productsList[currentProductId].prices[0].id,
  );
  const price = useAppSelector(
    (state) => (state.productsList.productsList[currentProductId].prices[0].price),
  );
  const license = useAppSelector(
    (state) => (state.productsList.productsList[currentProductId].name),
  );
  const token = useAppSelector(
    (state) => (state.token.userInfo.token),
  );

  const handlePurchase = () => {
    payments(token, { priceId: currentPriceId })
      .then((response) => {
        if (response) {
          console.log(response);
          router.push('/verification/subscribe');
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
        router.push('/verification/login');
      });

    router.push('/verification/subscribe');
  };

  return (
    <Root>
      <VerificationMenu index={2} />
      <Title>Checkout</Title>
      <Container>
        <Flex>
          <Text>Package name</Text>
          <Text>Price</Text>
        </Flex>
        <SecondFlex>
          <ThinText>
            {license}
            {' '}
            license
          </ThinText>
          <ThinText>
            $
            {' '}
            {price}
            <Basket src="/basket.svg" />
          </ThinText>
        </SecondFlex>
      </Container>
      <BottomFlex>
        <BigText>Total:</BigText>
        <BigText>
          $
          {' '}
          {price}
        </BigText>
      </BottomFlex>
      <SubmitButton type="button" onClick={handlePurchase}>Purchase</SubmitButton>
    </Root>
  );
};

export default Checkout;
