import {
  ChangeEvent,
  useDeferredValue,
  useState,
  useTransition,
  useMemo,
} from "react";
import VirtualizedList from "./VirtualizedList";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

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

function ProductList({ products }: { products: string[] }) {
  const deferredProducts = useDeferredValue(products);
  return (
    <ul>
      {products.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  );
}

const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return filterProducts(filterTerm);
  }, [filterTerm]);

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
    <Box id="app">
      <Stack direction="row" spacing={2}>
        <input type="text" value={searchTerm} onChange={updateFilterHandler} />
        {isPending && <p>Updating List...</p>}
      </Stack>
      {/* <ProductList products={filteredProducts} /> */}
      <Box height="400px">
        <VirtualizedList
          data={filteredProducts}
          listProps={{
            style: {
              height: "inherit",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Transition;
