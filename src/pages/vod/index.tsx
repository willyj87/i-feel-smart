import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Vod } from '../../containers/vod/vods';

export default function VODpage(): JSX.Element {
    const { t } = useTranslation(['vod']);
    
    return (
        <Container>
            <h3>{t('vodTitle')}</h3>
            <Vod />
        </Container>
    )
}
