import { useState, useEffect } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, AppShell } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Footer } from '../components/Footer/Footer';
import { CustomHeader } from "../components/Header/Header";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('valhalla-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const mainLinksArray = [{ label: 'Home', link: '/' }, { label: 'About', link: '/about' }];
  const footerLinksArray = [{ label: 'Contact', link: '/contact' }, { label: 'Team', link: '/team' }, { label: 'Blog', link: '/blog' }, { label: 'Privacy', link: '/privacy' }, { label: 'Terms', link: '/terms ' }];

  useEffect(() => {
    if (!getCookie('valhalla-color-scheme')) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const initialColorScheme = darkModeQuery.matches ? 'dark' : 'light';
      setColorScheme(initialColorScheme);
    }
  }, []);

  return (
      <>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>

        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
            <AppShell
              header={<CustomHeader mainLinks={mainLinksArray} />}
              footer={<Footer footerLinks={footerLinksArray}/>}
              padding={0}
            >
              <Component {...pageProps} />
            </AppShell>
            <Notifications />
          </MantineProvider>
        </ColorSchemeProvider>
      </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  const cookieColorScheme = getCookie('valhalla-color-scheme', appContext.ctx);
  let colorScheme;

  if (cookieColorScheme) {
    colorScheme = cookieColorScheme;
  } else {
    const darkModeQuery = appContext.ctx.req?.headers['user-agent']?.includes('DarkMode') ? 'dark' : 'light';
    colorScheme = darkModeQuery;
  }

  return {
    ...appProps,
    colorScheme,
  };
};