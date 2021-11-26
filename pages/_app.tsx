import 'tailwindcss/tailwind.css';
import { UserProvider } from '@auth0/nextjs-auth0';
import Nav from 'components/Landing/Nav/Nav';
import Footer from 'components/Landing/Pages/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col'>
      <UserProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </UserProvider>
    </div>
  );
}

export default MyApp;
