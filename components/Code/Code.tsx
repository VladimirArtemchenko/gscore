import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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
import { deleteCodeId, setCodeId } from '../../store/activeCodesIds/reducer';

export interface PricesCardProps {
    code: CodesType
    isInactive: boolean
}

const Code: React.FC<PricesCardProps> = ({
  code,
  isInactive,

}) => {
  const {
    register, handleSubmit,
  } = useForm({
    defaultValues: {
      code: code.code,
      origin: code.origin,
    },
  });
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const token = useAppSelector(
    (state) => (state.token.userInfo.token),
  );

  useEffect(() => {
    setIsChecked(false);
  }, []);

  const onSubmit = async (data: { code: string; origin: string }) => {
    const response = await activate(token, data);
    if (response) {
      dispatch(activateCode(response.data));
    }
  };
  const handleCheck = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      dispatch(deleteCodeId({ id: code.id }));
    } else {
      dispatch(setCodeId({ id: code.id }));
    }
  };

  return (
    <Root>
      <Container>
        <Checkbox onChange={handleCheck} id={code.code} type="checkbox" />
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