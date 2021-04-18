import React from 'react';
import mediumZoom from 'medium-zoom';
import Carousel from 'nuka-carousel';
import ImageZoom from './ImageZoom';

const Card = ({ image, description, className }) => {
  try {
    const zoom = React.useRef(mediumZoom());
    return (
      <div
        className={`p-10 rounded-lg border border-solid border-gray-200 z-20 ${className}`}
        style={{
          boxShadow: '0 10px 28px rgba(0,0,0,.2)'
        }}
      >
        <Carousel>
          <ImageZoom src={image} zoom={zoom.current} background="#000" />
          <ImageZoom src={image} zoom={zoom.current} background="#000" />
        </Carousel>
        <p className="font-semibold text-xl mt-5">{description}</p>
      </div>
    );
  } catch (error) {
    return <div> </div>;
  }
};

export default Card;
