import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
