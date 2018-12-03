import React from 'react';

export default ({page, config}) => {
  const sub_header = page.__index ? <span className="header__sub">{config.subtitle}</span> : <a href="/" className="header__sub">{config.title}</a>;
  const main_header = page.__index ? config.title : page.title;
  const date_header = page.date !== undefined ? <span className="header__date">{page.date.format("YYYY/MM/DD")}</span> : null;

  return (
    <header className="header">
      <h1 className="header__main">{main_header}</h1>
      { sub_header }
      { date_header }
    </header>
  );
}
