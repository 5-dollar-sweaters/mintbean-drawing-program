import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className='relative overflow-x-hidden '>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@100;300;400;700&display=swap'
            rel='stylesheet'
          />
        </Head>

        {/* TW screen debugger in dev  */}
        <body
          className={` relative overflow-hidden ${
            process.env.NODE_ENV !== 'production' && 'debug-screens'
          }`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
