import React from 'react';
import DownloadButton from "./UI/Button/DownloadButton";

const Canvas = ({ imageUrl, displayBool }) => {

    const canvas = React.useRef();
    let width;
    let height;

    var image = new Image();
    image.src = imageUrl;

    width = image.width;
    height = image.height;

    function DrawImage(context) {
        image.onload = () => {
            context.drawImage(image, 0, 0);
        };
    }

    React.useEffect(() => {
        const context = canvas.current.getContext("2d");
        DrawImage(context);
    });

    return (
        <div>
            <canvas className="gallery-image" ref={canvas} width={width} height={height}/>
            {!displayBool && <DownloadButton href={imageUrl}/>}
        </div>
    );
};

export default Canvas;