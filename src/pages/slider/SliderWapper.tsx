import Box from '@mui/material/Box';
import CardSlider1 from './CardSlider1';
import Divider from '@mui/material/Divider';
import CardSlider2 from './CardSlider2';
import CardSlider3 from './CardSlider3';

const SliderWrapper = () => {
  return (
    <Box>
      <Divider>Slider 1</Divider>
      <CardSlider1 />

      <Divider>Slider 2</Divider>
      <CardSlider2 />

      <Divider>Slider 3</Divider>
      <CardSlider3 />
    </Box>
  );
};

export default SliderWrapper;
