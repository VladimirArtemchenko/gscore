import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import {
  Root,
  Container,
  ActivateButton,
  Checkbox,
  LicenseContainer,
  LinkContainer,
  StatusContainer,
  Form,
  LicenseCode,
  Label,
  ColoredText,
  Domain,
  LabelCheckbox,
} from './index';
import { CodesType } from '../../store/subscriptions/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { activateCode } from '../../store/subscriptions/reducer';
import { activate } from '../../pages/api/rest/code';

export interface PricesCardProps {
    code: CodesType
    isInactive: boolean

}

const Code: React.FC<PricesCardProps> = ({
  code,
  isInactive,
}) => {
  const {
    register, handleSubmit, reset,
  } = useForm({
    defaultValues: {
      code: code.code,
      origin: code.origin,
    },
  });
  const dispatch = useAppDispatch();

  const token = useAppSelector(
    (state) => (state.token.userInfo.token),
  );
  const onSubmit = (data: { code: string; origin: string }) => {
    (async () => {
      await activate(token, data)
        .then((response) => {
          if (response) {
            dispatch(activateCode(response.data));
          }
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    })();
  };

  return (
    <Root>
      <Container>
        <Checkbox type="checkbox" />
        <LabelCheckbox />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <LicenseContainer>
            <Label>License code</Label>
            <LicenseCode
              type="text"
              {...register('code', { required: true })}
            />
          </LicenseContainer>
          <LinkContainer $isInactive={isInactive}>
            <Label>Domain</Label>
            <Domain
              type="text"
              {...register('origin', { required: true })}
              defaultValue={code.origin}
            />
          </LinkContainer>
          {isInactive && <ActivateButton type="submit">Activate</ActivateButton>}
        </Form>
        <StatusContainer>
          <Label>Status</Label>
          <ColoredText $color={code.status.toLocaleLowerCase()}>{code.status}</ColoredText>
        </StatusContainer>
      </Container>
    </Root>

  );
};

export default Code;
