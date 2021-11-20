import 'tailwindcss/tailwind.css';
import { UserProvider } from '@auth0/nextjs-auth0';
import type { AppProps /*, AppContext */ } from 'next/app';
import Nav from 'components/Landing/Nav/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Nav />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
