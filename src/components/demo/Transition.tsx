import { ChangeEvent, useDeferredValue, useState, useTransition } from "react";
import VirtualizedList from "./VirtualizedList";
import Box from "@mui/material/Box";

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
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  console.log("triggle", filteredProducts);

  function updateFilterHandler(event: ChangeEvent<HTMLInputElement>) {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
    // setFilterTerm(event.target.value);
  }

  return (
    <div id="app">
      <input type="text" onChange={updateFilterHandler} />
      {isPending && <p>Updating List...</p>}
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
    </div>
  );
};

export default Transition;
