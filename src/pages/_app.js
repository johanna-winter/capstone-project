import Layout from "@/components/Layout";
import GlobalStyles from "@/styles/GlobalStyles";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
