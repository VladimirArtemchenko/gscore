import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import {
  Root, Title, Form, Input, SubmitButton, SubTitle,
} from './index';
import { changeUserInfo } from '../../pages/api/rest/users';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setUserInfo } from '../../store/token/reducer';
import SettingsMenu from '../SettingsMenu';

const Settings = () => {
  const token = useAppSelector(
    (state) => (state.token.userInfo.token),
  );
  const dispatch = useAppDispatch();
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
    },
  });
  const onSubmit = async (data: { email: string; username: string }) => {
    const response = await changeUserInfo(data, token);
    if (response) {
      dispatch(setUserInfo(response.data));
      reset();
    }
  };

  return (
    <Root>
      <Title>Settings</Title>
      <SettingsMenu currentId={0} />
      <SubTitle>Settings</SubTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          {...register('username', { required: true })}
          placeholder="Username"
        />
        {errors.username && <p>Введите email!</p>}
        <Input
          type="email"
          {...register('email', { required: true })}
          placeholder="Email"
        />
        {errors.email && <p>Введите пароль!</p>}
        <SubmitButton type="submit">Save</SubmitButton>
      </Form>
    </Root>
  );
};

export default Settings;
