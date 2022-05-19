import Head from "next/head";


import '../styles/globals.css'
import '../styles/index.css'
import type {AppProps} from 'next/app'
import {Root} from "../styles/styledComponents";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyApp = ({Component, pageProps}: AppProps) => (
    <Root>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        </Head>
        <Header>{}</Header>
        <Component {...pageProps} />
        <Footer />
    </Root>

)

export default MyApp
