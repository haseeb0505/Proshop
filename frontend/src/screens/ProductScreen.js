import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Button, Image, ListGroup, Card, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
const ProductScreen = () => {
    const match = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const fetchProduct = async () => {

            const { data } = await axios.get(`/api/products/${match.id}`)
            setProduct(data)
        }
        fetchProduct();
    }, [match.id])


    return (

        < >
            <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h4>{product.name}</h4>
                        </ListGroup.Item>
                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                        </ListGroupItem>
                        <ListGroupItem>
                            Price: ${product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Brand: {product.brand}
                        </ListGroupItem>
                        <ListGroupItem>
                            Description: {product.description}
                        </ListGroupItem>

                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>
                                        ${product.price}
                                    </strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    <strong>
                                        {product.countInStock > 0 ? "In Stock " : "Out Of Stock"}
                                    </strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className="btn-block " type='button' disabled={product.countInStock === 0}>ADD TO CART</Button>
                        </ListGroupItem>
                    </Card>


                </Col>

            </Row>
        </>

    )
}

export default ProductScreen
