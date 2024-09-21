import React from 'react';
import { Link } from 'react-router-dom'

const BlogPost = ({ post }) => {
  return (
    <article className="row blog_item">
      <div className="col-md-3">
        <div className="blog_info text-right">
          <ul className="blog_meta list">
            <li><Link to="#">{post.author} <i className="bi bi-person"></i></Link></li>
            <li><Link to="#">{post.date} <i className="bi bi-calendar3"></i></Link></li>
            <li><Link to="#">{post.likes} Likes <i className="bi bi-heart"></i></Link></li>
            <li><Link to="#">{post.comments} Comments <i className="bi bi-chat-quote"></i></Link></li>
          </ul>
        </div>
      </div>
      <div className="col-md-9">
        <div className="blog_post">
          <img src={post.image} alt="Blog" />
          <div className="blog_details">
            <Link to={post.link}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.description}</p>
            <Link to={post.link} className="white_bg_btn">View More</Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
