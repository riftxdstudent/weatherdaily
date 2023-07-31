import React from 'react'

const Image = ({ time }) => {
  const getHourFromTimeString = (timeString) => {
    const timeArray = timeString.split(':');
    return Number(timeArray[0]);
  };

  const getImageSrc = (hour) => {
    if(hour >= 0 && hour < 12) {
        return '../src/assets/morning.jpg';
    } else if(hour >= 12 && hour < 18) {
        return '../src/assets/afternoon.jpg';
    } else {
        return '../src/assets/evening.jpg';
    }
  };

  const hour = getHourFromTimeString(time);
  const imageSrc = getImageSrc(hour);

  return <img src={imageSrc} alt='Image' className='rounded-xl' />
}

export default Image