import React, { useState } from "react";
import styles from "./index.module.css";
import Modal from 'react-modal';
import Turnstile from "react-turnstile";
import { useLocation } from "@docusaurus/router";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'var(--ifm-background-color)',
      width: '60vw',
      height: '60vh',
      overflow: 'hidden',
    },
    feedbackBox: {
        width: '100%',
        height: '65%',
        resize: 'none'
    }
};

export default function GuideFeedback() {
    const location = useLocation();
    const [feedback, setFeedback] = useState('');
    const [inputText, setInputText] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState('');
    const handleFeedbackChange = (e) => {
        setInputText(e.target.value);
    };
    const handleSubmit = () => {
        if (!turnstileToken) return
        fetch("https://automata.srizan.dev/tutorial/feedback", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
              inputText, 
              feedback,
              turnstileToken,
              route: location.pathname
            }),
            mode: 'cors'
        }).then(() => {
            closeModal();
            setSubmitted(true)
        }).catch((e) => {
            closeModal();
            alert('Well, that didn\'t work! Try again later. If it\'s urgent join https://sern.dev/discord :)')
            console.error(e)
        })
    };
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <h1>
            {feedback === "up"
              ? "Thank you!"
              : "Sorry you didn't like it! Can you help us improve?"}
          </h1>
          <textarea
            style={customStyles.feedbackBox}
            value={inputText}
            onChange={handleFeedbackChange}
            placeholder="If you have any more feedback, please let us know! (optional)"
          />
          <div style={{ display: 'flex' }}>
          <Turnstile
            sitekey={
              "0x4AAAAAAAJ518xa-S0l-saQ"
            }
            onVerify={(token) => {
              setTurnstileToken(token);
            }}
            theme='dark'
            style={{
                width: '270px',
                height: '63px'
            }} />
          <button
            onClick={handleSubmit}
            style={{
              marginLeft: "auto",
              order: 2,
              height: "10vh",
              width: "30%",
              backgroundColor: "var(--ifm-color-primary)",
            }}
          >
            Submit
          </button>
          </div>
        </Modal>
        <div className={styles.inline}>
          <p
            className={styles.thumbsUpButton}
            onClick={() => {
              if (!isSubmitted) openModal();
              setFeedback("up");
            }}
          >
            👍
          </p>
          <p
            className={styles.thumbsDownButton}
            onClick={() => {
              if (!isSubmitted) openModal();
              setFeedback("down");
            }}
          >
            👎
          </p>
        </div>
      </div>
    );
}

// tf did u do seren :

