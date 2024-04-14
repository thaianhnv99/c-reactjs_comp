import { type ChangeEvent, useState, useTransition, useMemo } from 'react';
import VirtualizedList from './VirtualizedList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const dummyProducts = () => {
  const products = [];
  for (let i = 0; i < 10000; i++) {
    products.push(`Product ${i + 1}`);
  }
  return products;
};

function filterProducts(filterTerm: string) {
  if (!filterTerm) {
    return dummyProducts();
  }
  return dummyProducts().filter((product) => product.includes(filterTerm));
}

// function ProductList({ products }: { products: string[] }) {
//   // const deferredProducts = useDeferredValue(products)
//   return (
//     <ul>
//       {products.map((product, index) => (
//         <li key={index}>{product}</li>
//       ))}
//     </ul>
//   );
// }

const Demo = () => {
  const [, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return filterProducts(filterTerm);
  }, [filterTerm]);

  /**
   *
   * @param event
   * Khi set hàm bên trong startTransition, mức độ ưu tiên sẽ thấp hơn so với không dùng startTransition.
   * Vì vậy hàm `setFilterTerm` run sau `setSearchTerm`
   */
  function updateFilterHandler(event: ChangeEvent<HTMLInputElement>) {
    //Hàm này sẽ chạy đồng thời
    setSearchTerm(event.target.value);

    startTransition(() => {
      //set độ ưu tiên thấp hơn sau hàm `setSearchTerm`
      setFilterTerm(event.target.value);
    });
    // setFilterTerm(event.target.value);
  }

  return (
    <Grid container>
      <Grid item component="div" xs={6}>
        <input type="text" value={searchTerm} onChange={updateFilterHandler} />
        {/* {isPending && <p>Updating List...</p>} */}
        {/* <ProductList products={filteredProducts} /> */}
        <Box height="400px">
          <VirtualizedList
            data={filteredProducts}
            listProps={{
              style: {
                height: 'inherit',
              },
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Typography>Cơ bản cái này là set mức độ ưu tiên trong cách dùng.</Typography>
      </Grid>
    </Grid>
  );
};

export default Demo;
