// Create our image list component
// Import React
import React from 'react';
import ImageDetail from './image_detail';

// Create our component
const ImageList = (props) => {
    const validImages = props.images.filter(image => !image.is_album);


    const RenderedImages = validImages.map(image => 
        <ImageDetail key={image.title} image={image} />
    );

    return (
        <ul className="meida-list list-grooup">
            {RenderedImages}
        </ul>
    );
};

// Export our component
export default ImageList;