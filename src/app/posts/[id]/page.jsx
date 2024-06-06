"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DetailPage from '@/app/Components/DetailPage';

export default function PostPage({ params }) {
  const [post, setPost] = useState(null);
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://admin.desh365.top/api/post/${id}`);
        setPost(response.data.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchData();
  }, [id]);
  console.log(post)

  return (
    <div>
     
        <DetailPage post={post}/>
      
   
    </div>
  );
}
