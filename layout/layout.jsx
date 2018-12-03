import React from 'react';

import Head from './_partial/Head.jsx';
import Header from './_partial/Header.jsx';
import Footer from './_partial/Footer.jsx';
import GoogleAnalytics from './_partial/GoogleAnalytics.jsx';

export default props => {
  return (
    <html>
      <Head {...props} />
      <body>
        <Header {...props} />
        <div className="container">
          <main className="main_contents" dangerouslySetInnerHTML={{__html: props.body}} />
        </div>
        <Footer {...props} />
        <GoogleAnalytics {...props} />
      </body>
    </html>
  );
}
