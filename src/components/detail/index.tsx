import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Image, Row } from "react-bootstrap";

const Detail = ({image, description, category, title}): JSX.Element => {
    return (
        <Container>
            <Row md={2}>
                <Col md={4}>
                    <Image src={image} rounded />
                </Col>
                <Col md={8}>
                    <h5>{title}</h5>
                    <h6>{category}</h6>
                    <p>{description}</p>
                </Col>
            </Row>
        </Container>
    )
}

Detail.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string
}

export default Detail;