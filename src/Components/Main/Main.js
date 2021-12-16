import './Main.scss'
import Categories from '../Categories/Categories';
import Products from '../Products/Products';

function Main () {
    return (
        <div className="main">
            <div className="main__container">
                <Categories />
                <Products />
            </div>
        </div>
    )
}

export default Main;