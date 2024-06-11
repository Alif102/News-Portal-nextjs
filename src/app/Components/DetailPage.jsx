import React, { useEffect } from 'react';
import PostBody from './Shared/Postbody';
import Image from 'next/image';
import Head from 'next/head';

const DetailPage = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>;
  }

  console.log('post', post);

  // The base URL should be the domain where your application is hosted
  const baseUrl = 'https://newsportalnextjs.vercel.app';
  const imageUrl = `https://admin.desh365.top/public/storage/post-image/${post.image}`;
  const currentUrl = post && `${baseUrl}/posts/${post.id}`;

  return (
    <div>
      <Head>
        {/* Title specific to this post's content */}
        <title>{post.title}</title>

        {/* Open Graph tags */}
        <meta property='og:title' content={post.title} />
        <meta property='og:description' content={post.Category_name} />
        {/* Ensure the image URL is absolute */}
        <meta property='og:image' content={imageUrl} />
        {/* The URL should point to the page where the content is hosted */}
        <meta property='og:url' content={currentUrl} />
        <meta property='og:type' content='article' />

        {/* Additional tags like Twitter Card data could also be included */}
      </Head>

      <div className='p-2 space-y-5'>
        {/* No need to use JavaScript to open share dialog, just use anchor tag directly */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            currentUrl,
          )}`}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-blue-600 p-2 text-white rounded-lg'>
          Share on Facebook
        </a>

        <h1 className='text-[22px] font-bold'>{post.title}</h1>

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
