import React from 'react';

const SinglePost = ({ postData, related }) => {
  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
      <h2>Related Posts</h2>
      <ul>
        {related.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SinglePost;
