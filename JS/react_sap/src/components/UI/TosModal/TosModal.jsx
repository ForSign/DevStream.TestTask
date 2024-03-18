import React from 'react';
import cl from './TosModal.module.css'

const TosModal = ({children, visible, setVisible}) => {

    // Hide or show Tos using active class
    const rootClasses = [cl.TosModal]

    if (visible) {
        rootClasses.push(cl.active)
    }

    // Main Tos Modal css
    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.TosContent}>
                {children}
            </div>
        </div>
    );
};

export default TosModal;