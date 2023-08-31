import React from 'react';
import Advertisement from './Advertisement';

const AdvertisementList = ({ ads }) => {
  return (
    <div className="advertisement-list">
      {ads.map((ad, index) => (
        <Advertisement key={index} ad={ad} />
      ))}
    </div>
  );
};

export default AdvertisementList;
