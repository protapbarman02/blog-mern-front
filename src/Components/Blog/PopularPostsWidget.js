import React from 'react';

const PopularPostsWidget = () => {
  const popularPosts = [
    {
      image: 'https://media.istockphoto.com/id/922745190/photo/blogging-blog-concepts-ideas-with-worktable.jpg?s=612x612&w=0&k=20&c=xR2vOmtg-N6Lo6_I269SoM5PXEVRxlgvKxXUBMeMC_A=',
      title: 'Space The Final Frontier',
      time: '02 Hours ago',
    },
    // More posts
  ];

  return (
    <aside className="single_sidebar_widget popular_post_widget">
      <h3 className="widget_title">Popular Posts</h3>
      {popularPosts.map((post, index) => (
        <div key={index} className="media post_item">
          <img src={post.image} alt="post" />
          <div className="media-body">
            <a href="blog-details.html">
              <h3>{post.title}</h3>
            </a>
            <p>{post.time}</p>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default PopularPostsWidget;
