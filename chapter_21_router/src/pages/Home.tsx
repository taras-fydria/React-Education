import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateHandler = () => navigate("/products");
  return (
    <>
      <h1>Home</h1>
      <p>
        <Link to={"/products"}>Go to Products Page</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Go to Products</button>
      </p>
    </>
  );
};

export default Home;
