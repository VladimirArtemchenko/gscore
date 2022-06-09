import React from 'react';
import { useRouter } from 'next/router';
import {
  Root,
  Title,
  Flex,
  BottomFlex,
  SubmitButton, Text, ThinText, SecondFlex, BigText, Basket, Container,
} from './index';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { payments } from '../../pages/api/rest/payments';
import VerificationMenu from '../Verification';
import { changeSubscribe } from '../../pages/api/rest/subscribe';
import { toggleIsUpdateMode } from '../../store/isUpdateMode/reducer';
import { setCurrentProductIndex } from '../../store/currentProductIndex/reducer';
import { setCurrentProductId } from '../../store/currentProductId/reducer';

const Checkout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isUpdateMode = useAppSelector((state) => state.isUpdateMode.isUpdateMode);
  const currentProductId = Number(sessionStorage.getItem('currentProductId'));
  const currentProductIndex = Number(sessionStorage.getItem('currentIndex'));
  dispatch(setCurrentProductId({ id: Number(sessionStorage.getItem('currentProductId')) }));
  dispatch(setCurrentProductIndex({ index: Number(sessionStorage.getItem('currentIndex')) }));
  const currentProduct = useAppSelector(
    (state) => state.productsList.productsList[currentProductIndex],
  );
  const currentSubscribeId = useAppSelector(
    (state) => state.currentSubscribeId.currentSubscribeId,
  );
  const token = useAppSelector(
    (state) => (state.token.userInfo.token),
  );

  const handlePurchase = async () => {
    if (isUpdateMode) {
      await changeSubscribe(token, {
        productId: currentProductId,
        subscribeId: currentSubscribeId,
      });
      await router.push('/verification/subscribe');
    } else {
      const response = await payments(token, { priceId: currentProduct.prices[0].id });
      if (response) {
        await router.push('/verification/subscribe');
      } else await router.push('/verification/login');
    }
    dispatch(toggleIsUpdateMode({ isUpdateMode: false }));
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
            {currentProduct.name}
            {' '}
            license
          </ThinText>
          <ThinText>
            $
            {' '}
            {currentProduct.prices[0].price}
            <Basket src="/basket.svg" />
          </ThinText>
        </SecondFlex>
      </Container>
      <BottomFlex>
        <BigText>Total:</BigText>
        <BigText>
          $
          {' '}
          {currentProduct.prices[0].price}
        </BigText>
      </BottomFlex>
      <SubmitButton type="button" onClick={handlePurchase}>Purchase</SubmitButton>
    </Root>
  );
};

export default Checkout;
