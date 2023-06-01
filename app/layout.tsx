import '@mantine/core/styles.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';

import { CustomHeader } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';


export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const mainLinksArray = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "FAQ", link: "/faq" },
  ];
  const footerLinksArray = [
    { label: "Contact", link: "/contact" },
    { label: "Team", link: "/team" },
    { label: "Blog", link: "/blog" },
    { label: "Privacy", link: "/privacy" },
    { label: "Terms", link: "/terms " },
  ];
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <CustomHeader mainLinks={mainLinksArray} />
          {children}
          <Footer footerLinks={footerLinksArray} />
        </MantineProvider>
      </body>
    </html>
  );
}