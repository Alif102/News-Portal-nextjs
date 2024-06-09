"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'



const AllPost = () => {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
      axios.get('https://admin.desh365.top/api/all-post')
        .then((response) => {
          setData(response.data.data);
          // console.log(response.data.data)
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []);
    // console.log(data)


    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
  return (
    <div>
        {/* <h1>{data.data.title}</h1> */}
        <div className='w-[100%] h-[410px] py-4 shadow-lg overflow-x-scroll'>
      <div className='flex flex-col space-y-4 gap-3 py-4'>
        {data.map(post => {
          const imageUrl = `https://admin.desh365.top/public/storage/post-image/${post.image}`;
          return (
            <Link href={`/posts/${post?.id}`} key={post?.id}>
              <div className='flex gap-2 justify-center items-center hover:underline' key={post?.id}>
                <img className='w-20' src={imageUrl} alt={post.title} />
                <h2 className='text-[14px]'>{post.title}</h2>
              </div>
              <div className='border borber-b'></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
    </div>
  )
}

export default AllPost
