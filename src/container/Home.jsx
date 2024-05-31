import React from 'react'
import AppNavbar from '../components/AppNavbar'
import { Helmet } from 'react-helmet'

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Home of React Starter | R.Berk Karataş</title>
                <meta name='description' content='React Starter' />
            </Helmet>
            <AppNavbar />
            Home
        </div>
    )
}
