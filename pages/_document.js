// _appjs is the app shell inside the body tag of your html docs.
// and _documentjs is the whole htnl component.
// This is to customize the whole html document offer by Nextjs


import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlays"></div>
          {/* outside component is useful in combining with React Portal to create things like modal, dialog or pop ups. */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
