import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Vod } from '../../containers/vod/vods';
export default function Home(): JSX.Element {
    const { t } = useTranslation();
    return (
        <Container>
                <h3>{t('title')}</h3>
                <Vod />
        </Container>
    );
}
