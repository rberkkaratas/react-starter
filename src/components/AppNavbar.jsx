import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function AppNavbar() {
    const { t, i18n } = useTranslation()

    const lngs = {
        en: { nativeName: 'English' },
        tr: { nativeName: 'Türkçe' },
    }
    return (
        <>
            <Link to="/">{t('homeNavbar')} </Link>
            <Link to="/about">{t('aboutNavbar')}</Link>
            <div>
                {Object.keys(lngs).map((lng) => (
                <button type='submit' key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</button>
            ))}
            </div>
        </>
    )
}
