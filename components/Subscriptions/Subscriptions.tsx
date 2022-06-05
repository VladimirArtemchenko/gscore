import React, { useEffect, useState } from 'react';
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

} from './index';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Card from '../Card';
import { CodesContainer, UpgradeButton } from './Subscriptions.styled';
import Code from '../Code';
import { setCurrentSubscribeId } from '../../store/currentSubscribeId/reducer';

const Subscriptions = () => {
  const router = useRouter();
  const token = useAppSelector(
    (state) => state.token.userInfo.token,
  );
  const dispatch = useAppDispatch();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [contentIndex, setContentIndex] = useState(0);
  const subscriptionsList = useAppSelector(
    (state) => state.subscriptionsList.subscriptionsList,
  );

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await subscribe(token);
  //     setSubscriptionsList(response.data);
  //   };
  //   getData();
  // }, []);

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
    dispatch(setCurrentSubscribeId(
      { id: subscriptionsList[(currentIndex - 1)].codes[0].subscribeId },
    ));
    router.push(homedir());
  };

  return (
    <Root>
      {subscriptionsList
        ? (
          <div>
            <TitleContainer>
              <Title>My subscriptions</Title>
              <UpgradeButton onClick={handleUpdateButton}>Upgrade</UpgradeButton>
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
                //          {subscriptionsList[contentIndex - 1].codes.length > code.subscribeId
                //                     && <div>fdgghjg</div>}
              ))}
            </CodesContainer>
          </div>
        )
        : <div>fadsfd</div>}
    </Root>
  );
};

export default Subscriptions;
