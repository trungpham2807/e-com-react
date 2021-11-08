// import React, { useEffect } from "react";
// import { Button, Col, Row } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { ClipLoader } from "react-spinners";
// import { cartActions } from "../redux/actions/cart.actions";
// import { cartReducer} from "../redux/reducers/cart.reducer"
// import LoadingBox from "../components/LoadingBox"
// const CartDetail = () => {
//   const BACKEND_API = process.env.REACT_APP_BACKEND_API;
//   const books = useSelector((state) => state.cart.products);
//   const loading = useSelector((state) => state.cart.loading);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(cartActions.getCart());
//   }, [dispatch]);
//   const removeFromCart = (cartId) => {
//     dispatch(cartActions.removeFromCart(cartId));
//   };
//   return (
//     <>
//       {loading ? (
//         <LoadingBox />
//       ) : (
//         <>
//           <ul>
//             {carts.map((cart) => (
//               <Row className="border border-info mt-5">
//                 <Col md={3}>
//                   {cart && (
//                     <img
//                       className="w-100"
//                     //   src={`${BACKEND_API}/${book.imageLink}`}
//                       alt="hihi"
//                     />
//                   )}
//                 </Col>
//                 <Col md={9}>
//                   {cart && (
//                     <>
//                       <h2>{cart.name}</h2>
//                       <div>
//                         <strong>Price:</strong> {cart.price}
//                       </div>
//                       <Button
//                         variant="danger"
//                         onClick={() => removeFromCart(cart._id)}
//                       >
//                         Remove
//                       </Button>{" "}
//                     </>
//                   )}
//                 </Col>
//               </Row>
//             ))}
//           </ul>
//           <Button variant="success">Order Now !</Button>
//         </>
//       )}
//     </>
//   );
// };

// export default CartDetail;