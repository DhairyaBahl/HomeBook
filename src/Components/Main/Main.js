import './Main.scss'
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Main (props) {
    return (
        <div className="main">
            <div className="main__container">
                <Categories categoryId={props.categoryId} />
                <Products categoryId = {props.categoryId} />
            </div>
        </div>
    )
}

export default Main;