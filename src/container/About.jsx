import React from 'react'
import AppNavbar from '../components/AppNavbar'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation()
    return (
        <div>
            <Helmet>
                <title>About of React Starter | R.Berk Karataş</title>
                <meta name='description' content='React Starter' />
            </Helmet>
            <AppNavbar />
            {t('about')}
        </div>
    )
}
