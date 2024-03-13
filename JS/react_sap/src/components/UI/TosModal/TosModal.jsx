import React from 'react';
import cl from './TosModal.module.css'

const TosModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.TosModal]

    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.TosContent}>
                {children}
            </div>
        </div>
    );
};

export default TosModal;