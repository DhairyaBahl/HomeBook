import './BookCard.scss';
import { Navigate, useNavigate } from 'react-router-dom';

function BookCard(props) {

    let { author, category, description, imageUrl, price, title } = props.book;

    const id = props.book._id;

    const navigate = useNavigate();

    if(title.length > 35) {
        title = title.substring(0, 35) + '...';
    }

    function cardClicked() {
        navigate('/books/' + id);
    }

    return (
        <div className="card" onClick={cardClicked}>
            <img src={imageUrl} alt="book" className="card__image"/>
            <div className='details'>
                <div className="card__price">{price}</div>
                <div className="card__title">{title}</div>
                <div className="card_author">{author}</div>
            </div>
        </div>
    )
}

export default BookCard;