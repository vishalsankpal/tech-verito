// import React, { useContext, useEffect, useMemo, useState } from "react";
// import { useParams } from "react-router-dom";
// import { DataContext } from "../../Contexts/DataContext";
// import "./ProductDetails.scss";
// import { CartContext } from "../../Contexts/CartContext";
// import styled from "styled-components";
// interface ResultProps {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   category: string;
//   image: string;
//   rating: object;
// }

// const PDP: React.FC = () => {
//   const [product, setProduct] = useState({});
//   const { productId } = useParams();
//   // const { data } = useContext(DataContext);
//   const { addToCart } = useContext(CartContext);
//   // const product = useMemo(() => {
//   //   const result = data.filter((item) => item.id === Number(productId));
//   //   return result;
//   //   // setProduct(...result);
//   //   //
//   // }, [productId, data]);
//   useEffect(() => {
//     (async () => {
//       const reslt2 = await fetch(
//         `https://fakestoreapi.com/products/${productId}`
//       );
//       const data2 = await reslt2.json();
//       console.log(data2);
//       setProduct(data2 || []);
//     })();
//     // fetch(`https://fakestoreapi.com/products/${productId}`)
//     //   .then((res) => res.json())
//     //   .then((data) => setProduct(data));
//   }, [productId]);
//   // useMemo is kind of caching function
//   const handleProductAddToCart = (product) => {
//     addToCart(product);
//   };
//   return (
//     <>
//       {product && (
//         <ProductContainer>
//           <ImgContainer>
//             <Image src={product?.image} alt={product?.title} />
//           </ImgContainer>
//           <ContentWrapper>
//             <ProductTitle>{product.title}</ProductTitle>
//             <hr />
//             {/* <p className="">{product.category}</p> */}
//             <p className="description">
//               <Title>Information: </Title>
//               {product.description}
//             </p>
//             <p>
//               <Title>Price: </Title>
//               {product.price}
//             </p>
//             <p>
//               <Title>rating: </Title>
//               {product.rating?.rate}
//             </p>
//             <div className="btn-wrapper">
//               <button onClick={() => handleProductAddToCart(product)}>
//                 Add to Cart
//               </button>
//             </div>
//           </ContentWrapper>
//         </ProductContainer>
//       )}
//     </>
//   );
// };

// export default PDP;
// const ProductContainer = styled.div`
//   display: flex;
//   max-width: 80%;
//   margin: 40px auto 0;
// `;
// const ImgContainer = styled.div`
//   flex: 0 0 50%;
//   padding-right: 20px;
// `;
// const Image = styled.img`
//   width: 100%;
//   height: 850px;
//   object-fit: contain;
// `;
// const ContentWrapper = styled.div`
//   flex: 1;
//   padding-left: 20px;
// `;
// const Title = styled.span`
//   font-weight: 700;
//   font-size: 20px;
//   text-transform: capitalize;
// `;
// const ProductTitle = styled.h1`
//   font-size: 36px;
// `;
