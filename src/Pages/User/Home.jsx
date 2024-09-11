import React from 'react';
import Card from "../../Components/Blog/Card";
import Image from "../../Components/Blog/Image";
import Paragraph from "../../Components/Blog/Paragraph";

const Home = () => {
  return (
    <div className="home">
      <Card>
        <Image src="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg" alt="Placeholder Image" />
        <Paragraph text="This is a paragraph inside the card component." />
      </Card>
    </div>
  );
};

export default Home;