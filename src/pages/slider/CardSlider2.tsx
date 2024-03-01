import Box from '@mui/material/Box';
import { useEffect, useRef } from 'react';

const CardSlider2 = () => {
  const list = [
    'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
  ];

  const sliderRef = useRef();

  useEffect(() => {
    console.log('sliderRef', sliderRef);
  }, []);

  return (
    <Box
      ref={sliderRef}
      sx={{
        display: 'flex',
      }}
    >
      {list.map((item, index) => {
        return (
          <Box
            key={item + index}
            sx={{
              padding: '.5rem',
            }}
          >
            <img width={100} height={200} src={item} alt="" />
          </Box>
        );
      })}
    </Box>
  );
};

export default CardSlider2;
