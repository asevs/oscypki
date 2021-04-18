import React from 'react';
import mediumZoom from 'medium-zoom';
import ImageZoom from '../components/ImageZoom';

const Card = ({ image, description }) => {
  try {
    const zoom = React.useRef(mediumZoom());
    return (
      <div
        className={`mb-8 p-10 pb-5 rounded-lg border border-solid border-gray-200 `}
        style={{
          boxShadow: '0 10px 28px rgba(0,0,0,.08)'
        }}
      >
        <ImageZoom src={image} zoom={zoom.current} background="#000" />
        <p className="font-semibold text-xl mt-5">{description}</p>
      </div>
    );
  } catch (error) {
    return <div> </div>;
  }
};

export default Card;
