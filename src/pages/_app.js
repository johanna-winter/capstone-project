import TopRightLogin from "@/components/Login/TopRightLogin";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <TopRightLogin />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
