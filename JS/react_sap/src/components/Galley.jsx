import React, {useState} from 'react';
import Canvas from "./Canvas";

const Galley = ({host, jsonData}) => {

    const [images, setImages] = useState(jsonData.images);

    return (
        <div className="gallery">
            {images.map((image) =>
                <div className="gallery-item">
                    <Canvas imageUrl={host + image.image_url} />
                </div>
            )}
        </div>
    );
};

export default Galley;