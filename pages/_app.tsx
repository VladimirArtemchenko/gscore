import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/index.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Root } from '../styles/styledComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';
import store from '../store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Root>
    <Provider store={store}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header>{}</Header>
      <Component {...pageProps} />
      <Footer />
    </Provider>
  </Root>

);

export default MyApp;
