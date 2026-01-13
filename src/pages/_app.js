import LoginAuthButton from "@/components/Login/LoginAuthButton";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <LoginAuthButton />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
