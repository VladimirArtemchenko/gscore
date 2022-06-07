import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import {
  Root, Title, Form, Input, SubmitButton,
} from './index';
import { signIn } from '../../pages/api/rest/users';
import { useAppDispatch } from '../../hooks';
import { setToken } from '../../store/token/reducer';
import VerificationMenu from '../Verification';
import { subscribe } from '../../pages/api/rest/subscribe';
import { getSubscriptions } from '../../store/subscriptions/reducer';

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    const response = await signIn(data);
    if (response) {
      dispatch(setToken(response.data));
      const subscriptionsList = await subscribe(response.data.token);
      dispatch(getSubscriptions(subscriptionsList.data));
      reset();
      await router.push('/verification/checkout');
    }
  };

  return (
    <Root>
      <VerificationMenu index={1} />
      <Title>Log In</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          {...register('email', { required: true })}
          placeholder="Email"
        />
        {errors.email && <p>Введите email!</p>}
        <Input
          type="password"
          {...register('password', { required: true })}
          placeholder="Password"
        />
        {errors.password && <p>Введите пароль!</p>}
        <SubmitButton type="submit">Log In</SubmitButton>
      </Form>
    </Root>
  );
};

export default LoginForm;
