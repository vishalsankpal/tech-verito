import { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";
import Product from "../Product/Product";
import Pagination from "../Pagination/Pagination";
// import ClipLoader from "react-spinners/ClipLoader";

import "./PLP.scss";
const PLP = () => {
  const { paginatedData } = useContext(DataContext);
  return (
    <>
      <div className="product-container">
        {paginatedData.map((product: Product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default PLP;
