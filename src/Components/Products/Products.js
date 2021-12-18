import './Products.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, { useEffect, useState } from 'react';
import axios from '../../axios'

function Products () {

    const [bannerImages, setBannerImages] = useState([])

    async function getBannerImages() {
        const bannerData = await axios.get('api/banners');
        setBannerImages(bannerData.data)
    }

    useEffect(()=>{
        getBannerImages();
    },[]);

    return (
        <div className="products">
            <Carousel infiniteLoop autoPlay interval={3000} showStatus={false}>
                {
                    bannerImages.map((bannerImage) => {
                        return <React.Fragment key = {bannerImage._id}>
                            <div>
                                <img src={bannerImage.imageUrl} />
                            </div>
                        </React.Fragment>
                    })
                }
            </Carousel>
        </div>
    )
}

export default Products