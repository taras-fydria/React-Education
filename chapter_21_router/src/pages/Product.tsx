import { useParams } from "react-router-dom";

const Product = () => {
  const { productID } = useParams();
  return <>Product {productID}</>;
};

export default Product
