import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import CardComponent from '../../components/cards';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getPrograms, selectPrograms } from '../../redux/epg';

export function EPG(): JSX.Element {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getPrograms())
    },[dispatch])
    const programs = useAppSelector((state) => selectPrograms(state));

    return (
        <Row md={5} className="m-t-2">
            {
                programs && programs.map(({title, description, pictures:{ thumbnails }, id}, key) => 
                (
                    <Col key={key}><CardComponent title={title} description={description} image={thumbnails[0]} link={`/epg/${id}`} /></Col>)
                )
            }
        </Row>
    );
}
