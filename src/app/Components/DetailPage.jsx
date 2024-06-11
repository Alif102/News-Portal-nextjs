import React, { useEffect } from 'react';
import PostBody from './Shared/Postbody';
import Image from 'next/image';
import Head from 'next/head';

const DetailPage = ({ post }) => {
  const imageUrl = post
    ? `https://admin.desh365.top/public/storage/post-image/${post.image}`
    : '';

  // Perform URL-related operations only if we have a valid post.
  let currentUrl = '';
  let shareUrl = '';
  if (typeof window !== 'undefined' && post) {
    currentUrl = window.location.href;
    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl,
    )}`;
  }

  useEffect(() => {
    if (post && post.title) {
      document.title = post.title;
    }
  }, [post]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta property='og:title' content={post.title} />
        <meta property='og:description' content={post.Category_name} />
        <meta property='og:image' content={imageUrl} />
        <meta property='og:url' content={currentUrl} />
        <meta property='og:type' content='article' />
      </Head>
      <div className='p-2 space-y-5'>
        <a href={shareUrl} target='_blank' rel='noopener noreferrer'>
          <button className='bg-blue-600 p-2 text-white rounded-lg'>
            Share on Facebook
          </button>
        </a>

        <h1 className='text-[22px] font-bold'> {post.title} </h1>

        <div
          className='rounded-md overflow-hidden relative'
          style={{ height: '360px', width: '100%' }}>
          {post.image && (
            <Image
              src={imageUrl}
              alt={post.title || 'Default Alt Text'}
              layout='fill'
              objectFit='cover'
            />
          )}
        </div>

        <PostBody postBody={post.post_body} />
      </div>
    </div>
  );
};

export default DetailPage;
