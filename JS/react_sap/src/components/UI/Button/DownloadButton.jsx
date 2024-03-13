import React from 'react';
import cl from './DownloadButton.module.css';

const DownloadButton = ({href}) => {

    return (
        <div className={cl.button}>
            <a href={href} className="btn-wrap">Download</a>
        </div>
    );
};

export default DownloadButton;