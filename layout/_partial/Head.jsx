import React from 'react';

export default ({page, theme, open_graph}) => {
  const title = page.title !== undefined ? page.title + " | takachan-mirai" : 'takachan-mirai';

  return (
    <head>
      <meta charSet="UTF-8" />
      <title>{ title }</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/css/root.css" />
      <link rel="shortcut icon" type="image/x-icon" href="/css/images/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=K2D|Oswald" rel="stylesheet" />
      <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"/>
    </head>
  );
}
