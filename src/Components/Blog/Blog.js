import React from 'react';
import BlogPost from './BlogPost';

const Blog = () => {
  const posts = [
    {
      author: 'Mark wiens',
      date: '12 Dec, 2018',
      likes: '1.2M',
      comments: '06',
      image: 'https://media.istockphoto.com/id/922745190/photo/blogging-blog-concepts-ideas-with-worktable.jpg?s=612x612&w=0&k=20&c=xR2vOmtg-N6Lo6_I269SoM5PXEVRxlgvKxXUBMeMC_A=',
      title: 'Astronomy Binoculars A Great Alternative',
      description: 'MCSE boot camps have its supporters...',
      link: 'single-blog.html',
    },
    {
      author: 'Mark wiens',
      date: '12 Dec, 2018',
      likes: '1.2M',
      comments: '06',
      image: 'https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg',
      title: 'Astronomy Binoculars A Great Alternative',
      description: 'MCSE boot camps have its supporters...',
      link: 'single-blog.html',
    },
    {
      author: 'Mark wiens',
      date: '12 Dec, 2018',
      likes: '1.2M',
      comments: '06',
      image: 'https://media.istockphoto.com/id/922745190/photo/blogging-blog-concepts-ideas-with-worktable.jpg?s=612x612&w=0&k=20&c=xR2vOmtg-N6Lo6_I269SoM5PXEVRxlgvKxXUBMeMC_A=',
      title: 'Astronomy Binoculars A Great Alternative',
      description: 'MCSE boot camps have its supporters...',
      link: 'single-blog.html',
    },
    {
      author: 'Mark wiens',
      date: '12 Dec, 2018',
      likes: '1.2M',
      comments: '06',
      image: 'https://media.istockphoto.com/id/922745190/photo/blogging-blog-concepts-ideas-with-worktable.jpg?s=612x612&w=0&k=20&c=xR2vOmtg-N6Lo6_I269SoM5PXEVRxlgvKxXUBMeMC_A=',
      title: 'Astronomy Binoculars A Great Alternative',
      description: 'MCSE boot camps have its supporters...',
      link: 'single-blog.html',
    },
    {
      author: 'Mark wiens',
      date: '12 Dec, 2018',
      likes: '1.2M',
      comments: '06',
      image: 'https://media.istockphoto.com/id/922745190/photo/blogging-blog-concepts-ideas-with-worktable.jpg?s=612x612&w=0&k=20&c=xR2vOmtg-N6Lo6_I269SoM5PXEVRxlgvKxXUBMeMC_A=',
      title: 'Astronomy Binoculars A Great Alternative',
      description: 'MCSE boot camps have its supporters...',
      link: 'single-blog.html',
    },
  ];

  return (
    <div className="blog_left_sidebar">
      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </div>
  );
};

export default Blog;
