import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { userActions } from "../redux/actions/user.action";
import { userReducer} from "../redux/reducers/user.reducer"
import LoadingBox from "../components/LoadingBox"
const CartPage = () => {
  const BACKEND_API = process.env.REACT_APP_BACKEND_API;
  const cartProduct = useSelector((state) => state.user.cartProduct);
  const loading = useSelector((state) => state.user.loading);
console.log("cart", cartProduct)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.getCart());
  }, [dispatch]);
  const removeFromCart = (cartId) => {
    dispatch(userActions.removeFromCart(cartId));
  };
  return (
    <> 
      {loading ? (
        <LoadingBox />
      ) : (
        <>
          <ul>
            {cartProduct.map((cart) => (
              <Row key={cart._id} className="border border-info mt-5">
                <Col md={3}>
                  {cart && (
                    <img
                      className="w-100"
                      src={cart.productId.imageUrls[0]}
                    //   src={`${BACKEND_API}/${book.imageLink}`}
                      alt="hihi"
                    />
                  )}
                </Col>
                <Col md={9}>
                  {cart && (
                    <>
                      <h2>{cart.productId.name}</h2>
                      <div>
                        <div>
                        <strong>Quantity:</strong> {cart.quantity}

                        </div>
                        <div>
                        <strong>Stock:</strong> {cart.productId.stock}
                        </div>

                      </div>
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(cart._id)}
                      >
                        Remove
                      </Button>{" "}
                    </>
                  )}
                </Col>
              </Row>
            ))}
          </ul>
          <Button variant="success">Order Now !</Button>
        </>
      )}
    </>
  );
};

export default CartPage;