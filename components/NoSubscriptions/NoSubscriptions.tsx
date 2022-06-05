import React from 'react';
import Link from 'next/link';
import {
  Root,
  NoSubscride,
  Text,
  Title,
  PurchaseButton,
  Flex,
} from './index';

const NoSubscriptions = () => (
  <Root>
    <Flex>
      <NoSubscride src="/NoSubscribe.svg" />
      <Title>No active subscriptions</Title>
      <Text>
        You can subscribe right now by
        clicking on the button below
      </Text>
      <Link href="/"><PurchaseButton>Get Score</PurchaseButton></Link>
    </Flex>
  </Root>
);

export default NoSubscriptions;
