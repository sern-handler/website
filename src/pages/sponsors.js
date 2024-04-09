import { useEffect } from "react"
import clsx from 'clsx';

import './sponsors.module.css';
import Layout from '@theme/Layout';
export default function ( ) { 

    const url = `https://opencollective.com/sern/banner.html?limit=10&id=banner-iframe-3759&style={}&useNewFormat=true`
    return (
        <Layout>
            <header>
                <h1 className={"hero__title"}>
                   Sponsor 
                </h1>
            </header>
            <iframe 
                src={url}
                height="400"
                scrolling> 
            </iframe>
        </Layout>)
}
