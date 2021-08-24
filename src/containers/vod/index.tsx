import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import CardComponent from '../../components/cards';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getContents, selectContents } from '../../redux/vod';

export function Vod(): JSX.Element {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getContents())
    },[dispatch])
    const contents = useAppSelector((state) => selectContents(state));

    return (
        <Row md={5} className="m-t-2">
            {
                contents && contents.map(({title, summary, pictures:{ thumbnails }, id}, key) => 
                (
                    <Col key={key}><CardComponent title={title} description={summary} image={thumbnails[0]} link={`/vod/${id}`}/></Col>)
                )
            }
        </Row>
    );
}
