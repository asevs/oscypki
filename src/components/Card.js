import React from 'react';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import mediumZoom from 'medium-zoom';
import Carousel from 'nuka-carousel';
import ImageZoom from './ImageZoom';

const Card = ({ images, description, price }) => {
  const zoom = React.useRef(mediumZoom());
  return (
    <div className="px-3">
      <div
        className="mb-8 p-10 pb-5 rounded-lg border border-solid border-gray-200 z-20"
        style={{
          boxShadow: '0 10px 28px rgba(0,0,0,.2)'
        }}
      >
        <Carousel>
          {images.map(image => (
            <ImageZoom loading="lazy" src={image} zoom={zoom.current} background="#000" />
          ))}
        </Carousel>
        <p className="font-semibold text-xl mt-5">{description}</p>
        <p className="mt-1 text-l ">Cena: {price}</p>
      </div>
    </div>
  );
};

export default trackWindowScroll(Card);
