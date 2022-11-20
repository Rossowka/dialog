import React from 'react';
import './styles.css';

function Dialog() {

    return (
        <div className='overlay'>
            <div className='dialog'>
                <button>X</button>
                <h4>Delete content?</h4>
                <p>This action is irreversible.</p>
                <div>
                    <button>Abort</button>
                    <button>DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog;