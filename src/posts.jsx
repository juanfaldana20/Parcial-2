import React from 'react';

const Post = ({ title, body }) => {
  return (
    <div>
      <h2 className='negrilla'>{title}</h2>
      
      <p className='letrita'>{body}</p>
      <hr />
      
    </div>
  );
};

export default Post;