import React from 'react';
import './styles.css';

import { Button } from '../Button';

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
                <Button className='close' onClick={onClose}>X</Button>
                <h4 className='text'>Delete content?</h4>
                <p className='text'>This action is irreversible.</p>
                <Button className='abort' onClick={abort}>Abort</Button>
                <Button className='delete' onClick={confirm}>DELETE</Button>
            </div>
        </div>
    )
}

export default Dialog;