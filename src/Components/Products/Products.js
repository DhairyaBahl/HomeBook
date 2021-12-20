import './Products.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, { useEffect, useState } from 'react';
import axios from '../../axios'
import BookCard from '../BookCard/BookCard';

function Products (props) {

    const [bannerImages, setBannerImages] = useState([]);
    const [books, setBooks] = useState([]);
    const [categoryData, setCategoryData] = useState([]);

    async function getBannerImages() {
        const bannerData = await axios.get('api/banners');
        setBannerImages(bannerData.data)
    }

    async function getBooks() {
        const bookData = await axios.get('api/books/random');
        setBooks(bookData.data)
    }

    async function getBooksForCategory(categoryId) {
        const categoriesData = (await axios.get('api/books/category/'+ categoryId)).data;
        setCategoryData(categoriesData);
    }

    console.log(props.categoryId)

    useEffect(()=>{

        if(!props.categoryId) {
            getBannerImages();
            getBooks();
        }

        else {
            getBooksForCategory(props.categoryId);
        }

    },[props.categoryId]);

    return (
        <div className="products">
            {!props.categoryId && 
                <>
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
                </>
            }
            {
                props.categoryId && 
                <>
                    <div className = "cards">
                        {
                            categoryData.map(book => <BookCard key = {book._id} book = {book}/>)
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default Products