import React from 'react'
import { useTranslation } from 'react-i18next';

export default function LanguageChanger() {
    const { i18n } = useTranslation()

    const lngs = {
        en: { nativeName: 'EN' },
        tr: { nativeName: 'TR' },
    }
    return (
        <div className="inline-flex rounded-md shadow-sm" role="group">
            {Object.keys(lngs).map((lng) => (
                <button
                    type='submit'
                    key={lng}
                    onClick={() => i18n.changeLanguage(lng)}
                    disabled={i18n.resolvedLanguage === lng}
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                    {lngs[lng].nativeName}
                </button>

            ))}
            
        </div>
    )
}
