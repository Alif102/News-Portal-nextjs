"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import Head from 'next/head';

const DetailPage = ({ post }) => {
  const imageUrl = `https://admin.desh365.top/public/storage/post-image/${post?.image}`;

  useEffect(() => {
    // This effect runs only once on mount
    document.title = post?.title || 'news detail';
    // document.description = post?.Category_name || 'news description';
  }, [post]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.Category_name} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={window.location.href} />
      </Head>

      <div className='flex mx-auto gap-5 items-center mt-5 justify-center'>
        <div className='flex flex-col gap-5'>
          <h1>
            Title: <span className='font-bold'>{post?.title}</span>
          </h1>
          <h1>
            Category: <span className='font-bold'>{post?.Category_name}</span>
          </h1>
        </div>
        <img className='w-56' src={imageUrl} alt={post?.title} />
      </div>

      <div className='flex flex-row gap-5 justify-center mt-7'>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='b bg-blue-600 p-2 text-white rounded-lg'>
            Share on Facebook
          </button>
        </a>
        <Link href='/'>
          <button className='b bg-purple-300 p-2 rounded-lg'>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default DetailPage;
