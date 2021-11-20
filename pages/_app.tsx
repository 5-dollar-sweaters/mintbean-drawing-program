import "tailwindcss/tailwind.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import type { AppProps /*, AppContext */ } from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
