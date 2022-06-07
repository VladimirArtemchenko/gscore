import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Root, Title, Form, Input, SubmitButton, SubTitle,
} from './index';
import { changeUserPassword } from '../../pages/api/rest/users';
import { useAppSelector } from '../../hooks';
import SettingsMenu from '../SettingsMenu';

const ChangePassword = () => {
  const token = useAppSelector(
    (state) => (state.token.userInfo.token),
  );
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
    },
  });

  const onSubmit = async (data: { currentPassword: string; newPassword: string }) => {
    const response = await changeUserPassword(data, token);
    if (response) {
      alert('Пароль успешно сменен');
      reset();
    }
  };

  return (
    <Root>
      <Title>Settings</Title>
      <SettingsMenu currentId={1} />
      <SubTitle>Settings</SubTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="password"
          {...register('currentPassword', { required: true })}
          placeholder="Current Password"
        />
        {errors.currentPassword && <p>Введите email!</p>}
        <Input
          type="password"
          {...register('newPassword', { required: true })}
          placeholder="New Password"
        />
        {errors.newPassword && <p>Введите пароль!</p>}
        <SubmitButton type="submit">Save</SubmitButton>
      </Form>
    </Root>
  );
};

export default ChangePassword;
