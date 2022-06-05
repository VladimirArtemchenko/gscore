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

  const onSubmit = (data: { email: string; password: string }) => {
    (async () => {
      await signIn(data)
        .then((response) => {
          if (response) {
            dispatch(setToken(response.data));
            console.log(response.data.token);
            reset();
            router.push('/verification/checkout');
          }
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    })();
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
