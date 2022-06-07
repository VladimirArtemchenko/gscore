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

const Checkout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isUpdateMode = useAppSelector((state) => state.isUpdateMode.isUpdateMode);
  const currentProductId = useAppSelector(
    (state) => state.currentProductId.currentProductId,
  );
  const currentProductIndex = useAppSelector(
    (state) => state.currentProductIndex.currentProductIndex,
  );
  const currentSubscribeId = useAppSelector(
    (state) => state.currentSubscribeId.currentSubscribeId,
  );
  const currentPriceId = useAppSelector(
    (state) => state.productsList.productsList[currentProductIndex].prices[0].id,
  );
  const price = useAppSelector(
    (state) => (state.productsList.productsList[currentProductIndex].prices[0].price),
  );
  const license = useAppSelector(
    (state) => (state.productsList.productsList[currentProductIndex].name),
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
      const response = await payments(token, { priceId: currentPriceId });
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
