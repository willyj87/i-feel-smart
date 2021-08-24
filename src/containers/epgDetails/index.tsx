import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Detail from '../../components/detail';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProgram, selectProgram } from '../../redux/epg';

export function EPGdetails ({id}): JSX.Element {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getProgram(+id))
    },[dispatch])
    const { title, description, pictures: {thumbnails}, category} = useAppSelector((state) => selectProgram(state));

    return (<Detail title={title} description={description} image={thumbnails[0]} category={category} />);
}
EPGdetails.propTypes = {
    id: PropTypes.string
}