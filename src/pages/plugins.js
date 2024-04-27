import React from 'react';
import Layout from '@theme/Layout';
import clsx from "clsx";
import styles from "./index.module.css";
import PluginCard from "../components/PluginCard";

export default function Plugins() {
    const [pluginList, setPluginList] = React.useState([])
    React.useEffect(() => {
        const asyncFetch = async () => {
            const response = await fetch('https://raw.githubusercontent.com/sern-handler/awesome-plugins/main/pluginlist.json')
            const data = await response.json()
            data.forEach(pl => {
                pl.trimmedDescription = pl.description.length > 100 ? pl.description.slice(0, 100) + "..." : pl.description
            })
            setPluginList(data)
        }
        asyncFetch()
    }, [])

    return (
        <Layout>
            <h1 className={styles.header}>
                Plugins
            </h1>
            <div className={styles.cntnr}>
                {pluginList.map(p => (
                    <PluginCard plugin={p} key={p.hash} />
                ))}
            </div>
        </Layout>
    )
}