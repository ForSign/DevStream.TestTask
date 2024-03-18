import React, {useState} from 'react';
import Canvas from "./Canvas";

const Galley = ({host, jsonData, displayBool}) => {

    const [images, setImages] = useState(jsonData.images);

    return (
        <div className="gallery">
            {images.map((image) =>
                <div className="gallery-item">
                    <Canvas imageUrl={host + image.image_url} displayBool={displayBool}/>
                </div>
            )}
        </div>
    );
};

export default Galley;