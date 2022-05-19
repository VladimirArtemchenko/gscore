import '../styles/index.css'
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Root} from "../styles/styledComponents";
import Header from "../components/Header";

const MyApp = ({Component, pageProps}: AppProps) => (
    <Root>
        <Header>{}</Header>
        <Component {...pageProps} />
    </Root>

)

export default MyApp
