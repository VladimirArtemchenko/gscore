import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Root, Title, Text, Form, Input, SubmitButton, BottomText, Flex, ColloredText,
} from './index';
import { signIn, signUp } from '../../pages/api/rest/users';
import { useAppDispatch } from '../../hooks';
import { setToken } from '../../store/token/reducer';
import VerificationMenu from '../Verification';

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  });

  const onSubmit = async (data: { username: string; email: string; password: string }) => {
    const response = await signUp(data);
    if (response) {
      await signIn({ email: data.email, password: data.password });
      dispatch(setToken(response.data));
      await router.push('/verification/checkout');
      reset();
    }
  };

  return (
    <Root>
      <VerificationMenu index={0} />
      <Title>Create account</Title>
      <Text>
        You need to enter your name and email.
        We will send you a temporary password by email
      </Text>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          {...register('username', { required: true })}
          placeholder="Username"
        />
        {errors.username && <p>Введите имя!</p>}

        <Input
          type="email"
          {...register('email', { required: true })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <Input
          type="password"
          {...register('password', { required: true, minLength: 6 })}
          placeholder="Password"
        />
        <Text>{errors.password?.message}</Text>
        <SubmitButton type="submit">Send password</SubmitButton>
        <Flex>
          <BottomText>Have an account?</BottomText>
          <ColloredText><Link href="/verification/login">Go to the next step</Link></ColloredText>
        </Flex>
      </Form>
    </Root>
  );
};

export default SignUpForm;
