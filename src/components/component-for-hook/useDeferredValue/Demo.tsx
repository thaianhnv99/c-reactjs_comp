import Box from '@mui/material/Box';
import { useDeferredValue, useState } from 'react';
import TextFieldUI from 'src/components/base/TextFieldUI';
import Products from './Products';

const Demo = () => {
  const [inputValue, setInputValue] = useState('');
  const deferredValue = useDeferredValue(inputValue);

  console.log('deferredValue', deferredValue);

  return (
    <Box>
      <TextFieldUI value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Products searchTerm={deferredValue} />
    </Box>
  );
};

export default Demo;
