// Create our image list component
// Import React
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  { title: 'Pen', link: 'https://dummyimage.com/600x400' },
  { title: 'Pine Tree', link: 'https://dummyimage.com/600x400' },
  { title: 'Mug', link: 'https://dummyimage.com/600x400' }  
];

// Create our component
const ImageList = () => {
    const RenderedImages = IMAGES.map(image => 
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