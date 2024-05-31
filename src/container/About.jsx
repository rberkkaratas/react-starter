import React from 'react'
import AppNavbar from '../components/AppNavbar'
import { Helmet } from 'react-helmet'

export default function About() {
    return (
        <div>
            <Helmet>
                <title>About of React Starter | R.Berk Karataş</title>
                <meta name='description' content='React Starter' />
            </Helmet>
            <AppNavbar />
            About
        </div>
    )
}
