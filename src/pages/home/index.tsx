import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '../../containers/counter';
export default function Home(): JSX.Element {
    const { t } = useTranslation();
    
    return (
        <div style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
            <h1>{t('title')}</h1>
            <h2>{t('subtitle')}</h2>
            <Counter />
            <p>
                Remove the content from
                <code> src/page/home</code> and start working !
            </p>
        </div>
    );
}
