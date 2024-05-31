import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import LanguageChanger from './LanguageChanger';

export default function AppNavbar() {
    const { t } = useTranslation()
    return (
        <>
            <Link to="/">{t('homeNavbar')} </Link>
            <Link to="/about">{t('aboutNavbar')}</Link>
        </>
    )
}
