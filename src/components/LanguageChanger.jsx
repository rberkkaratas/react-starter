import React from 'react'
import { useTranslation } from 'react-i18next';

export default function LanguageChanger() {
    const { i18n } = useTranslation()
    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'tr' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className="flex justify-center ">
            <div
                onClick={toggleLanguage}
                className="px-4 py-2 text-2xl font-medium text-gray-900 bg-white focus:outline-none focus:ring-2  dark:bg-gray-900  dark:text-gray-300  "
            >
                {i18n.language === 'en' ? '🇹🇷' : '🇬🇧'}
            </div>
        </div>
    );
}