import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Detail from '../../components/detail';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getContent, selectContent } from '../../redux/vod';

export function VODdetails ({id}): JSX.Element {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getContent(+id))
    },[dispatch])
    const { title, summary, pictures: {thumbnails}, genre} = useAppSelector((state) => selectContent(state));

    return (<Detail title={title} description={summary} image={thumbnails[0]} category={genre} />);
}
VODdetails.propTypes = {
    id: PropTypes.string
}