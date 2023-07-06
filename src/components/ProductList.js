import { ProductBox } from "./ProductBox";
import { Stack } from "./UI";

export const ProductList = ({ products }) => {
  return (
    <Stack flexWrap='wrap'>
      {products.map((product, index) => (
        <ProductBox key={index} product={product} />
      ))}
    </Stack>
  );
}
