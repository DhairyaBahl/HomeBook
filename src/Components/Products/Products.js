import './Products.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, { useEffect, useState } from 'react';
import axios from '../../axios'
import BookCard from '../BookCard/BookCard';

function Products () {

    const [bannerImages, setBannerImages] = useState([]);
    const [books, setBooks] = useState([]);

    async function getBannerImages() {
        const bannerData = await axios.get('api/banners');
        setBannerImages(bannerData.data)
    }

    async function getBooks() {
        const bookData = await axios.get('api/books/random');
        setBooks(bookData.data)
    }

    useEffect(()=>{
        getBannerImages();
        getBooks();
    },[]);

    return (
        <div className="products">
            <Carousel infiniteLoop autoPlay interval={3000} showStatus={false}>
                {
                    bannerImages.map((bannerImage) => {
                        return <React.Fragment key = {bannerImage._id}>
                            <div>
                                <img src={bannerImage.imageUrl} alt = 'banner'/>
                            </div>
                        </React.Fragment>
                    })
                }
            </Carousel>
            <div className = "cards">
                {
                    books.map(book => <BookCard key = {book._id} book = {book}/>)
                }
            </div>
        </div>
    )
}

export default Products