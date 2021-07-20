import "../styles/globals.css";
import { Layout } from "../components/layout/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
      <title>Next Events</title>
      <meta name="description" content="NExtJS Events" />
        <meta name="viewport" content="initial-scale=1.0, wdith=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
