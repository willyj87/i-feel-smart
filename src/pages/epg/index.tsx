import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { EPG } from '../../containers/epg/epgs';

export default function EPGpage(): JSX.Element {
    const { t } = useTranslation(['epg']);

    return (
        <Container>
            <h3>{t('epgTitle')}</h3>
            <EPG/>
        </Container>
    )
}
