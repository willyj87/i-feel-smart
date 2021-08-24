import React from 'react';
import { useTranslation } from 'react-i18next';
import { EPG } from '../../containers/epg';

export default function Home(): JSX.Element {
    const { t } = useTranslation();
    
    return <EPG />
}
