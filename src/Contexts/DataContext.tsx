import React, { ReactNode, createContext, useEffect, useState } from "react";
// Product data type interface
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  //Will add more property as per our requirement
}
// product with pagination interface
interface DataContextProps {
  data: Product[];
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  paginatedData: Product[];
}
interface DataProviderProps {
  children: ReactNode;
}
const DataContext = createContext<DataContextProps | undefined>(undefined);

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 10;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error while fetching data :", error);
      }
    };
    fetchData();
  }, []);
  //   merging products pagination in 1
  const value: DataContextProps = {
    data,
    currentPage,
    itemsPerPage,
    setCurrentPage,
    paginatedData: data.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    ),
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataProvider, DataContext };
