import React, {useState} from 'react'
import {Form, Button} from "react-bootstrap"
import UserRating from "./UserRating"
import "./UserReview.css"
import { useParams } from "react-router-dom";
import {reviewActions} from "../redux/actions/review.action"
import { useDispatch, useSelector } from "react-redux";
const UserReview = () => {
    const [review, setReview] = useState("");
    // const [rating, setRating] = useState(1);
    const params = useParams();
    const productId = params.id;
    const rating = 1;
    const dispatch = useDispatch();

    const handleReviewChange = (e) => {
        e.preventDefault();
        setReview(e.target.value)
        console.log(setReview)
    }
    const handleReviewSubmit = () => {
        dispatch(reviewActions.addReview({review, productId, rating}))

    }
    return (
        <div>
        <Form>
        <UserRating />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label >Write your Review here</Form.Label>
            <Form.Control onChange={handleReviewChange} className="review-container" as="textarea" rows={3} />
        </Form.Group>
        </Form>
        <Button onSubmit={handleReviewSubmit}>Submit your review</Button>
        </div>
    )
}

export default UserReview
