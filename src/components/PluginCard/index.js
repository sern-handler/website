import styles from './index.module.css'
import PluginModal from "../PluginModal";

export default function PluginCard({ plugin }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h3>{plugin.name}</h3>
            </div>
            <div className={styles.cardBody}>
                <p>{plugin.trimmedDescription}</p>
            </div>
            <div className={styles.cardFooter}>
                <PluginModal plugin={plugin} />
            </div>
        </div>
    )
}

/*
- description
- hash
- name
- author
- link
- example
- version
 */