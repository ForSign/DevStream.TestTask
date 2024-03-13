import React, {useState} from 'react';
import myData from "../test.json";
import Canvas from "./Canvas";

const Galley = () => {

    const [images, setImages] = useState(myData.images)

    return (
        <div className="gallery">
            {images.map((image) =>
                <div className="gallery-item">
                    <Canvas imageUrl={image.image_url} />
                </div>
            )}
        </div>
    );
};

export default Galley;