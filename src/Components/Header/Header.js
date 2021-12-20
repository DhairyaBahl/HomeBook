import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    function headerClicked() {
        navigate('/home');
    }

    return (
        <div className = "header">
            <div className="header__left" onClick={headerClicked}>
                <div className = "header__title"> BOOK STORE </div>
            </div>
            <div className="header__center">
                <input type="text" className="search__bar" />
                <SearchIcon  className = "search__icon" />
            </div>
            <div className="header__right">
                <button className="login__btn">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Header;