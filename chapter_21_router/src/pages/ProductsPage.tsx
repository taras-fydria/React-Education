import { Link } from "react-router-dom";

interface ProductItem {
  to: string;
  label: string;
}

const PRODUCT_ARR: ProductItem[] = [
    {
        to: '/products/1',
        label: 'Product 1'
    },
    {
        to: '/products/2',
        label: 'Product 2'
    },
    {
        to: '/products/3',
        label: 'Product 3'
    },
    {
        to: '/products/4',
        label: 'Product 4'
    },
];

const ProductsPage = () => {
  return (
    <>
      <p>Products Page</p>
      {PRODUCT_ARR && PRODUCT_ARR.length && (
        <ul>
          {PRODUCT_ARR.map((product, index) => (
            <li key={index}>
              <Link to={product.to}>{product.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductsPage;
