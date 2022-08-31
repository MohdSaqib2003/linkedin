import React from 'react';

const Post = ({post}) => {
    console.log("Feed->Post : ",post);
    return (
        <div>
           <p>{post.input}</p>
           <img src={post.photoUrl} alt="" />
        </div>
    );
}

export default Post;