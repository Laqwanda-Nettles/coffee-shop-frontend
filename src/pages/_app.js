import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
const CLIENTID = process.env.NEXT_PUBLIC_CLIENT_ID;
const REDIRECT = process.env.NEXT_PUBLIC_REDIRECT_URL;

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Auth0Provider
        domain={DOMAIN}
        clientId={CLIENTID}
        authorizationParams={{ redirect_uri: REDIRECT }}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    </main>
  );
}
