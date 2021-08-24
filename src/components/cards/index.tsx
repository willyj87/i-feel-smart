import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';
import { StyledCard } from './styleCard';

const CardComponent = ({title, description, image, link}): JSX.Element => {
    return (
        <StyledCard>
            <StyledCard.Img variant="top" src={image} />
            <StyledCard.Body>
                <StyledCard.Title>{title}</StyledCard.Title>
                <StyledCard.Text>
                    {description}
                </StyledCard.Text>
                <Button variant="light" href={link}>View details</Button>
            </StyledCard.Body>
        </StyledCard>
    )
}

CardComponent.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string
} 

export default CardComponent;