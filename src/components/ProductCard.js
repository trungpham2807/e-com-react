import React from 'react'
import {Link} from "react-router-dom"
import {Card} from "react-bootstrap"
import Rating from "./Rating"
import "./ProductCard.css"
const ProductCard = (props) => {
    const {product} = props;
    return (
        <div key={product._id} className="product-card">
            <Card style={{ width: '18rem' }}>
                <Link to={`/product/${product._id}`}>
                    <Card.Img variant="top" src={product.imageUrls[0]} alt={product.name} />
                </Link>
                <div className = "card-body">
                    <Card.Body>
                        <Link to={`/product/${product._id}`}>
                            <Card.Title>{product.name}</Card.Title>
                        </Link>

                        <Card.Text>
                        <Rating
                            rating = {product.avgRating}
                        ></Rating>
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
            {/* Click on image or name => link to product/:id */}


        </div>
    )
}

export default ProductCard
