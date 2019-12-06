import React from 'react';

import './style.css';

const Modal = React.memo(props => {
    return (
        <React.Fragment>
            <div className="backdrop" onClick={props.onClose} />
            <div className="app-modal">
                <h2>Success！</h2>
                <div>
                    <p>{props.children}</p>
                    <div className="app-modal__actions">
                        <button type="button" onClick={props.onClose}>
                            Okay
                        </button>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
});

export default Modal;
