import React from 'react';
import './styles.css';

function Dialog({ onClose }) {
    const abort = () => {
        console.log('aborted');
        onClose();
    };

    const confirm = () => {
        console.log('content deleted');
        onClose();
    };

    return (
        <div className='overlay'>
            <div className='dialog'>
                <button onClick={onClose}>X</button>
                <h4>Delete content?</h4>
                <p>This action is irreversible.</p>
                <div>
                    <button onClick={abort}>Abort</button>
                    <button onClick={confirm}>DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog;