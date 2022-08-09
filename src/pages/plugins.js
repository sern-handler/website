import React from 'react';
import Layout from '@theme/Layout';
import clsx from "clsx";
import styles from "./index.module.css";

export default function Plugins() {

    return (
        <Layout>
            <header className={clsx('hero hero--primary-darker', styles.heroBanner)}>
                <h1 className={"hero__title"}>
                    Coming soon
                </h1>
            </header>

        </Layout>
    )
}