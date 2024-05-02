import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

function LazyImage({ src, alt, className }) {
  const imgRef = useRef();

  useEffect(() => {
    const handleImageLoad = () => {
      imgRef.current.style.animation = 'none';
    };

    if (imgRef.current.complete) {
      handleImageLoad();
    } else {
      imgRef.current.addEventListener('load', handleImageLoad);
    }

    return () => {
      imgRef.current.removeEventListener('load', handleImageLoad);
    };
  }, []);

  return (
    <Image ref={imgRef} className={className} loading="lazy" decoding="async" src={src} alt={alt} />
  );
}

export default LazyImage;
