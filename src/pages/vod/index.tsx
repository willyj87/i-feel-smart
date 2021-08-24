import React from 'react';
import { useTranslation } from 'react-i18next';
import { Vod } from '../../containers/vod';

export default function Home(): JSX.Element {
    const { t } = useTranslation();
    
    return <Vod />
}
