import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import 'antd/dist/antd.css';
import { RecoilRoot } from 'recoil';

 
// function MyApp({ Component, pageProps}) {
// const {session} = pageProps;

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // console.log("SESSION : ", session);
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp; 