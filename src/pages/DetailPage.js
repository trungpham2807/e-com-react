import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Button, Col, Container, Row, Card} from "react-bootstrap"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import api from "../apiService";
import { productAction } from "../redux/actions/product.action";
import LoadingBox from "../components/LoadingBox"
import Rating from "../components/Rating"
import UserReview from "../components/UserReview"
import "./DetailPage.css"
const DetailPage = () => {
    const params = useParams();
    const productId = params.id;
    // const productList = useSelector((state) => state.productList)
    // const {selectedProduct} = productList;
    const product = useSelector((state) => state.productList.selectedProduct)
    const loading = useSelector((state) => state.productList.loading)


    const dispatch = useDispatch();
    console.log("product", product)
    const addToCart = () => {

    }
    useEffect(()=> {
        dispatch(productAction.getSingleProduct(productId))
    }, [productId, dispatch])

    return (
        <div className = "detail-product">
            {loading || (
                    Object.entries(product).length === 0       
                ) ? ( <LoadingBox loading = {loading} />): (
                    <div>
                        {/* using responsive grids */}
                    <Container>
                    <Row>
                        <Col className = "detail-image" sm={6}>
                            <Card.Img variant="top" src={product.imageUrls[0]} alt={product.name} />
                        </Col>
                        <Col className = "product-info" sm={3}>
                            <h1>{product.name}</h1>
                            <h1></h1>
                            <Rating>
                                rating = {product.avgRating}
                            </Rating>
                            </Col>
                        <Col className = "product-cart" sm={3}>
                            <Button variant="success" onClick={() => addToCart()}>
                        Add to cart
                    </Button>{" "} 
                    </Col>
                    </Row>
                    <Row className = "product-review">
                    <h2>Reviews</h2>
                    {product.reviews.length === 0 
                        ? (<div>There is no review</div>)
                        : (
                            <div>
                            {product.reviews.map((review) =>
                                (
                                    <li key={review._id}>Review
                                        <strong>{review.name}</strong>
                                        <Rating rating={review.rating} caption="">
                                        </Rating>
                                        <p>{review.createdAt.substring(0,10)}</p>
                                        <p>{review.content}</p>
                                    </li>
                                )
                                )}
                            </div>
                        )
                    }
                   
                    </Row>

                    <Row className = "product-create-review">
                    <h2>Add your review</h2>
                    <div className="product-create-review-container">
                    <UserReview /> 
                    </div>
                    </Row>
                    </Container>
                    
                    </div>
                )}      
        </div>

    )
}

export default DetailPage
