import React from 'react';

const SearchWidget = () => {
  return (
    <aside className="single_sidebar_widget search_widget">
      <div className="input-group bg-light">
        <input type="text" className="form-control" placeholder="Search Posts" />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button"><i className="bi bi-search"></i></button>
        </span>
      </div>
    </aside>
  );
};

export default SearchWidget;
