import React, { useEffect, useState } from 'react';
import Input from './Input';
import { useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";
import Post from './Post';

const Feed = ({ posts }) => {
    const [realtimePosts, setRealtimePosts] = useState([]);
    const [handlePost, setHandlePost] = useState(handlePostState);
    const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

    
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts', {
                method: 'GET',
                headers: { "Content-Type": "application/json" }
            });
            const responseData = await response.json();
            setRealtimePosts(responseData);
            setHandlePost(false);
            setUseSSRPosts(false);
        }
        fetchPosts();
        console.log("UseEffectssss");
    }, [handlePost])
    
    console.log("HPPP",handlePost);
    
    console.log("Posts: ", realtimePosts);

    return (
        <div className='space-y-6 pb-24 max-w-lg'>
            <Input />

            { !useSSRPosts
                ? realtimePosts.map((post) => <Post key={post._id} post={post} />)
                : posts.map((post) => <Post key={post._id} post={post} />)
            }

        </div>
    );
}

export default Feed;
