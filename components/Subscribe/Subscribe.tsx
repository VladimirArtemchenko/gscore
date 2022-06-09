import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Root,
  Title,
  Flex,
  SubmitButton, Text, ThinText, SecondFlex, Container,
} from './index';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Description } from './Subscribe.styled';
import { subscribe } from '../../pages/api/rest/subscribe';
import { getSubscriptions } from '../../store/subscriptions/reducer';

const Subscribe = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentProductIndex = useAppSelector(
    (state) => state.currentProductIndex.currentProductIndex,
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

  useEffect(() => {
    if (localStorage.getItem('isLogin') === 'true') {
      return;
    }
    alert('Пожалуйста зарегистрируйтесь');
    router.push('/verification');
  });

  const handleSubscribe = async () => {
    const response = await subscribe(token);
    if (response) {
      dispatch(getSubscriptions(response.data));
      if (response.data.length !== 0) {
        router.push(`/mySubscription/${response.data[0].userId}`);
      } else router.push('/mySubscription}');
    }
  };

  return (
    <Root>
      <Title>Start your subscription</Title>
      <Description>
        We have sent you a payment receipt by e-mail and a link to
        download the plugin with a license key.
      </Description>
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
          </ThinText>
        </SecondFlex>
      </Container>
      <SubmitButton type="button" onClick={handleSubscribe}>Go to my subscriptions</SubmitButton>
    </Root>
  );
};

export default Subscribe;
