import React from 'react';
import Modal from 'react-modal';
import styles from "./index.module.css";
import CodeBlock from "@theme/CodeBlock";
import clsx from "clsx";
import useTheme from "../../hooks/useTheme";

const light = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "70vw",
        height: "50vh",
        backgroundColor: "#fff",
    },
};
const dark = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "70vw",
        height: "50vh",
        backgroundColor: "#333",
        color: "#fff"
    },
};

export default function PluginModal({ plugin }) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [theme] = useTheme();
    const [modalCSS, setModalCSS] = React.useState(theme === "dark" ? dark : light);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    React.useEffect(() => {
        setModalCSS(theme === "dark" ? dark : light)
    }, [theme])
    return (
        <div>
            <button onClick={openModal}>Info</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalCSS}
                contentLabel={plugin.name}
            >
                <h2>{plugin.name} by {parseAuthor(plugin.author)}</h2>
                <p>{plugin.description}</p>
                <CodeBlock
                    language="ts"
                    title="/src/commands/ping.ts"
                    showLineNumbers
                >
                    {plugin.example.replace('```ts', '').replace('```', '').trim()}
                </CodeBlock>
                <div className={styles.closeButton}>
                    <button onClick={closeModal}>close</button>
                </div>
            </Modal>
        </div>
    );
}

function parseAuthor(aut) {
    const [interestingStuff,] = aut.toString().replace(/[\]<>@]/g, "").split("[")
    return interestingStuff.trim()
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