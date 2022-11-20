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
                <button className='close' onClick={onClose}>X</button>
                <h4 className='text'>Delete content?</h4>
                <p className='text'>This action is irreversible.</p>
                <button className='abort' onClick={abort}>Abort</button>
                <button className='delete' onClick={confirm}>DELETE</button>
            </div>
        </div>
    )
}

export default Dialog;