import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { VODdetails } from '../../../containers/vodDetails';
import { ParamsType } from '../../../helpers/interfaces';

export default function VodDetails(): JSX.Element {
    const { t } = useTranslation();
    const { slug } = useParams<ParamsType>();

    return <VODdetails id={slug}/>
}
