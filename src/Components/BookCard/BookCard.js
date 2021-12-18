import './BookCard.scss';

function BookCard(props) {

    let { author, category, description, imageUrl, price, title } = props.book;

    if(title.length > 35) {
        title = title.substring(0, 35) + '...';
    }

    return (
        <div className="card">
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