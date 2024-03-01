import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRef, useState } from 'react';

const CardSlider3 = () => {
  const [active, setActive] = useState<boolean>(false);
  const contentRef = useRef(null);
  return (
    <Box ref={contentRef}>
      <Box
        sx={{
          backgroundColor: 'ActiveBorder',
          width: '100px',
          height: '200px',
          transition: '2s',
          ...(active
            ? {
                transform: 'translateX(30%)',
              }
            : null),
        }}
      >
        test
      </Box>
      <Button onClick={() => setActive((prev) => !prev)}>Toggle</Button>
    </Box>
  );
};

export default CardSlider3;
