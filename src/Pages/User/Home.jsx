import React from 'react';
// import Card from "../../Components/Blog/Card";
// import Image from "../../Components/Blog/Image";
// import Paragraph from "../../Components/Blog/Paragraph";
import Blog from "../../Components/Blog/Blog";
import Sidebar from "../../Components/Blog/Sidebar";
import Pagination from "../../Components/Blog/Pagination";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-8">
          <Blog />
        </div>
        <div className="col-lg-2">
          
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Home;