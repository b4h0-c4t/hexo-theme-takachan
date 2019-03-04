import React from 'react';
import PostCard from './_partial/PostCard.jsx';

export default ({page, theme, paginator}) => {
  const post_cards = page.posts.data.map(x => <PostCard document={x} theme={theme} key={x.title} />);

  return (
    <div className="index">
      <div className="postCards">
        {post_cards}
      </div>
      <div className="pageNav" dangerouslySetInnerHTML={{__html: paginator({
        next_text: `<i className="fa fa-chevron-right" aria-hidden="true"></i>`,
        prev_text: `<i className="fa fa-chevron-left" aria-hidden="true"></i>`,
      })}} />
    </div>
  );
}
