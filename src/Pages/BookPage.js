import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import '../Styles/BookPage.scss';
import { useEffect, useState } from "react";
import axios from '../axios'

function BookPage() {

    let params = useParams();

    const [bookData, setBookData] = useState({});

    const bookId = params.id;

    async function getBookData(id) {
        const bookData = (await axios.get('/api/books/' + id)).data;
        setBookData(bookData);
    }

    useEffect(() => {
        getBookData(bookId);
    }, [])

    return (
        <>
            <Header/>
                <div className="book__page">
                    <div className = "book__page__card">
                        <div className="book__page__left__container">
                            <img src={bookData.imageUrl} alt="book" className="book__page__image"/>
                            <div className="book_page_price">{bookData.price}</div>
                            <div className="book__page__buttons">
                                <button>Buy Now</button>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                        <div className="book__page__info">
                            <h1 className="book__page__title">{bookData.title}</h1>
                            <p className="book__page__author">{bookData.author}</p>
                            <p className="book__page__description">{bookData.description}</p>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default BookPage;