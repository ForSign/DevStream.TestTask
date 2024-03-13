import React from 'react';
import cl from './AcceptButton.module.css';

const AcceptButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.button}>
            {children}
        </button>
    );
};

export default AcceptButton;