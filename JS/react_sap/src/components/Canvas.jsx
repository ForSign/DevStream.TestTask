import React from 'react';

const Canvas = ({ imageUrl }) => {

    const canvas = React.useRef();
    let width;
    let height;

    var image = new Image();
    image.src = imageUrl;

    width = image.width;
    height = image.height

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
        <canvas className="gallery-image" ref={canvas} width={width} height={height}/>
    );
};

export default Canvas;