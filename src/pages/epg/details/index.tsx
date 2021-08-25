import React from 'react';
import { useParams } from 'react-router-dom';
import { EPGdetails } from '../../../containers/epg/details';
import { ParamsType } from '../../../helpers/interfaces';

export default function EpgDetails(): JSX.Element {
    const { slug } = useParams<ParamsType>();
    
    
    return <EPGdetails id={slug} />
}
