import React from 'react'
import AppNavbar from '../components/AppNavbar'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';
import LanguageChanger from '../components/LanguageChanger';

export default function Home() {
    const { t } = useTranslation()
    return (
        <div>
            <Helmet>
                <title>Home of React Starter | R.Berk Karataş</title>
                <meta name='description' content='React Starter' />
            </Helmet>
            <AppNavbar />
            <br />
            <LanguageChanger/>
            <br />
            {t('home')}
        </div>
    )
}
