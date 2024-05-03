import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

interface LazyImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleImageLoad = () => {
      imgRef.current?.classList.remove('skeleton');
    };

    if (imgRef.current?.complete) {
      handleImageLoad();
    } else {
      imgRef.current?.addEventListener('load', handleImageLoad);
    }

    return () => {
      imgRef.current?.removeEventListener('load', handleImageLoad);
    };
  }, []);

  return (
    <img
      ref={imgRef}
      className={classNames('skeleton', className)}
      loading="lazy"
      decoding="async"
      src={src}
      alt={alt}
    />
  );
};

export default LazyImage;
