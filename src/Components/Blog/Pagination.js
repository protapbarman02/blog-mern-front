import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <nav className="blog-pagination justify-content-center d-flex">
      <ul className="pagination">
        <li className="page-item">
          <Link to="#" className="page-link" aria-label="Previous">
            <span aria-hidden="true"><i className="bi bi-caret-left"></i></span>
          </Link>
        </li>
        <li className="page-item"><Link to="#" className="page-link">01</Link></li>
        <li className="page-item active"><Link to="#" className="page-link">02</Link></li>
        <li className="page-item"><Link to="#" className="page-link">03</Link></li>
        <li className="page-item">
          <Link to="#" className="page-link" aria-label="Next">
            <span aria-hidden="true"><i className="bi bi-caret-right"></i></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
