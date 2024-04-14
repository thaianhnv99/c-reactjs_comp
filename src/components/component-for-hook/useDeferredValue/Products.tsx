import Box from '@mui/material/Box';
import { useMemo } from 'react';

const Products = ({ searchTerm }: { searchTerm: string }) => {
  const LIST_SIZE = 10000;

  const list = useMemo(() => {
    return [...Array(LIST_SIZE)].map((_, index) => `${searchTerm ? searchTerm + '-' : ''}${index}`);
  }, [searchTerm]);

  return (
    <>
      {list.map((item) => {
        return <Box key={item}>{item}</Box>;
      })}
    </>
  );
};

export default Products;
