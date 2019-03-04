import React from 'react';

export default ({config}) => {
  return <footer className="footer">© {(new Date()).getFullYear()} {config.author}</footer>;
}
