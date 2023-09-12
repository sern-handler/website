import React from 'react'
import NiceModal from '@ebay/nice-modal-react';

const modal = ({ closeModal, handleFeedbackChange, handleSubmit }) => {
    return (
        <div>  
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>Feedback</h2>
              <textarea
                placeholder="Enter your feedback..."
                value={feedback}
                onChange={handleFeedbackChange}
              ></textarea>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
      </div>
    )
}

export default function GuideFeedbackModal({ fb }) {

  

    return (
        <div>
            <modal />
        </div>
    );
}