"use client"
import { Carousel } from '@material-tailwind/react';
import React, { useState } from 'react';

const Slider = () => {
  const [selectedImage, setSelectedImage] = useState("https://admin.desh365.top/public/storage/post-image/4598_1716725277.webp");

  const handleMouseEnter = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div>
      <div className='flex flex-row gap-4'>
        <div onMouseEnter={() => handleMouseEnter("https://admin.desh365.top/public/storage/post-image/4598_1716725277.webp")}>
          <h1>post 1</h1>
          <img src="https://admin.desh365.top/public/storage/post-image/4598_1716725277.webp" alt="post1" />
        </div>
        <div onMouseEnter={() => handleMouseEnter("https://admin.desh365.top/public/storage/post-image/9040_1716980287.webp")}>
          <h1>post 2</h1>
          <img src="https://admin.desh365.top/public/storage/post-image/9040_1716980287.webp" alt="post2" />
        </div>
      </div>

      <Carousel className="rounded-xl">
        <img
          src={selectedImage}
          alt="Selected"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}

export default Slider;
