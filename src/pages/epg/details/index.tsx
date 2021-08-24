import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { EPGdetails } from '../../../containers/epgDetails';
import { ParamsType } from '../../../helpers/interfaces';

export default function EpgDetails(): JSX.Element {
    const { t } = useTranslation();
    const { slug } = useParams<ParamsType>();
    
    
    return <EPGdetails id={slug} />
}
