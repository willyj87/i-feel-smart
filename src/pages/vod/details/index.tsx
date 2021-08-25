import React from 'react';
import { useParams } from 'react-router-dom';
import { VODdetails } from '../../../containers/vod/details';
import { ParamsType } from '../../../helpers/interfaces';

export default function VodDetails(): JSX.Element {
    const { slug } = useParams<ParamsType>();

    return <VODdetails id={slug}/>
}
