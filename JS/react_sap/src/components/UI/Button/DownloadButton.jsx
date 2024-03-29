import React from 'react';
import cl from './DownloadButton.module.css';

const DownloadButton = ({href}) => {

    // Image download function
    // Needed because image opens on href from <a/>
    async function download() {
        const image = await fetch(href)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)

        const link = document.createElement('a')
        link.href = imageURL
        link.download = href.split('/').pop() + Date.now();
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    // Main Download image button
    return (
        <div className={cl.button}>
            <a className="btn-wrap" onClick={download}>Download</a>
        </div>
    );
};

export default DownloadButton;