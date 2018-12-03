import React from 'react';

export default ({page, theme, open_graph}) => {
  const title = page.title !== undefined ? page.title + " | takachan-mirai" : 'takachan-mirai';

  return (
    <head>
      <meta charSet="UTF-8" />
      <title>{ title }</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="stylesheet" href="/css/root.css" />
      <link rel="shortcut icon" type="image/x-icon" href="/css/images/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=K2D|Oswald" rel="stylesheet" />
    </head>
  );
}
