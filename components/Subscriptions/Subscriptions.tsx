import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { homedir } from 'os';
import {
  Root,
  Title,
  Cards,
  ButtonsContainer,
  LeftButton,
  Text,
  RightButton,
  Slider,
  TitleContainer,
  BottomText,
  BottomContainer,
  PrimaryButton,
  CodesContainer,

} from './index';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Card from '../Card';
import Code from '../Code';
import { setCurrentSubscribeId } from '../../store/currentSubscribeId/reducer';
import { toggleIsUpdateMode } from '../../store/isUpdateMode/reducer';
import { manage } from '../../pages/api/rest/code';
import { manageCode } from '../../store/subscriptions/reducer';
import { clearCodesIds } from '../../store/activeCodesIds/reducer';

const Subscriptions = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [contentIndex, setContentIndex] = useState(0);
  const subscriptionsList = useAppSelector(
    (state) => state.subscriptionsList.subscriptionsList,
  );
  const codesIds = useAppSelector(
    (state) => state.codesIds.codesIds,
  );
  const token = useAppSelector(
    (state) => state.token.userInfo.token,
  );

  const increment = () => {
    if (currentIndex < subscriptionsList.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const decrement = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleUpdateButton = () => {
    dispatch(toggleIsUpdateMode({ isUpdateMode: true }));
    dispatch(setCurrentSubscribeId(
      { id: subscriptionsList[(currentIndex - 1)].codes[0].subscribeId },
    ));
    router.push(homedir());
  };

  const handleActivateCodes = async () => {
    const { subscribeId } = subscriptionsList[(currentIndex - 1)].codes[0];
    const response = await manage(token, { codesIds, subscribeId });
    if (response) {
      dispatch(manageCode({ codes: response.data }));
      dispatch(clearCodesIds());
    }
  };

  return (
    <Root>
      <TitleContainer>
        <Title>My subscriptions</Title>
        <PrimaryButton onClick={handleUpdateButton}>Upgrade</PrimaryButton>
      </TitleContainer>
      <Slider>
        <Cards $currentIndex={currentIndex}>
          {subscriptionsList.map((item, index) => (
            <Card
              item={item}
              index={index}
              onSetCurrentIndex={setCurrentIndex}
              onSetContentIndex={setContentIndex}
              isActive={(currentIndex - 1) === index}
              status={item.status}
              currentProductId={item.productId}
              date={item.currentPeriodEnd}
              price={item.product.prices[0].price}
              name={item.product.name}
              key={item.id}
            />
          ))}
        </Cards>
      </Slider>
      <ButtonsContainer>
        <LeftButton src="/arrow.svg" onClick={decrement} $isActive={currentIndex !== 1} />
        <Text>
          {currentIndex}
          /
          {subscriptionsList.length}
        </Text>
        <RightButton
          src="/arrow.svg"
          onClick={increment}
          $isActive={currentIndex !== subscriptionsList.length}
        />
      </ButtonsContainer>
      <CodesContainer>
        {subscriptionsList && subscriptionsList[contentIndex].codes.map((code) => (
          <Code
            key={code.id}
            isInactive={code.status.toLocaleLowerCase() === 'inactive'}
            code={code}
          />
        ))}
      </CodesContainer>
      {(subscriptionsList[contentIndex].codes.length
                > subscriptionsList[contentIndex].product.sitesCount)
            && (
            <BottomContainer>
              <BottomText>Select the domains you want to keep</BottomText>
              <PrimaryButton onClick={handleActivateCodes}>Confirm</PrimaryButton>
            </BottomContainer>
            )}
    </Root>
  );
};

export default Subscriptions;
