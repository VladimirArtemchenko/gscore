import React from 'react';
import '../styles/globals.css';
import '../styles/index.css';
import type { AppProps } from 'next/app';
import { Root } from '../styles/styledComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Root>
    <Layout><Header /></Layout>
    <Component {...pageProps} />
    <Footer />
  </Root>
);

export default MyApp;
