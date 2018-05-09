import React from 'react';
import PostNav from './_partial/PostNav.jsx';

export default ({page, theme, paginator}) => {
  return (
    <div className="post">
      <article dangerouslySetInnerHTML={{__html: page.content}} />
      <PostNav page={page} />
    </div>
  );
}
