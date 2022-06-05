import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/index.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Root } from '../styles/styledComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';
import store, { persistor } from '../store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Root>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  </Root>

);

export default MyApp;
