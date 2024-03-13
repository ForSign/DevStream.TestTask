import React, {useState} from 'react';
import myData from "../test.json";
import Canvas from "./Canvas";
import DownloadButton from "./UI/Button/DownloadButton";

const Galley = () => {

    const [images, setImages] = useState(myData.images)

    const host = "http://188.166.203.164";

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