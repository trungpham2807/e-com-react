import React from 'react'
import {Form, Button} from "react-bootstrap"
import UserRating from "./UserRating"
import "./UserReview.css"
const UserReview = () => {
    return (
        <div>
        <Form>
        <UserRating />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label >Write your Review here</Form.Label>
            <Form.Control className="review-container" as="textarea" rows={3} />
        </Form.Group>
        </Form>
        <Button>Submit your review</Button>
        </div>
    )
}

export default UserReview
