import React from 'react';
import { Gallery } from 'react-grid-gallery';
import './Grid.css'
import {Link} from 'react-router-dom';

const PhotoGrid = () => {
    const images = [
        { src: "gd1.jpeg", thumbnail: "gd1.jpeg", thumbnailWidth: 150, thumbnailHeight: 100, caption: 'Image 1' },
        { src: "gd2.jpeg", thumbnail: "gd12.jpg", thumbnailWidth: 150, thumbnailHeight: 100, caption: 'Image 2' },
        { src: "gd3.jpeg", thumbnail: "gd3.jpg", thumbnailWidth: 150, thumbnailHeight: 100, caption: 'Image 3' },
        { src: "gd4.jpeg", thumbnail: "gd4.jpeg", thumbnailWidth: 150, thumbnailHeight: 100, caption: 'Image 4' },
        { src: "gd5.jpeg", thumbnail: "gd5.jpeg", thumbnailWidth: 150, thumbnailHeight: 100, caption: 'Image 5' },
        { src: "gd6.jpeg", thumbnail: "gd6.jpeg", thumbnailWidth: 150, thumbnailHeight: 100, caption: 'Image 6' },
        { src: "/packege-2.jpg", thumbnail: "/packege-2.jpg", thumbnailWidth: 150, thumbnailHeight: 100, caption: 'Image 7' },
        { src: "/packege-3.jpg", thumbnail: "/packege-3.jpg", thumbnailWidth: 150, thumbnailHeight: 100, caption: 'Image 8' },
        { src: "gd7.jpg", thumbnail: "gd7.jpg", thumbnailWidth: 150, thumbnailHeight: 100, caption: 'Image 9' },
    ];

    return (
        <div className="photo-grid">
            <Gallery images={images}  enableImageSelection={false}/>
            <div className="image-buttons">
                <button className="btn buy-btn">
                    <Link to='/services'  className='buy-li' style={{color: 'white' , textDecoration: 'none'}}>Buy Package</Link>
                </button>
                <button className="btn query-btn">
                    <Link to='/contact'  className='query-li' style={{color: 'white' , textDecoration: 'none'}} >Queries</Link>
                </button>
            </div>
        </div>
    );
};

export default PhotoGrid;
