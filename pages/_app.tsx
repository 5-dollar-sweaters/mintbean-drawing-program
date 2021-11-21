import 'tailwindcss/tailwind.css';
import { UserProvider } from '@auth0/nextjs-auth0';
import type { AppProps /*, AppContext */ } from 'next/app';
import Nav from 'components/Landing/Nav/Nav';
import Footer from 'components/Landing/Pages/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </UserProvider>
  );
}

export default MyApp;
