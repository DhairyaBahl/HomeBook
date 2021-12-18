import './Categories.scss';
import { useState, useEffect } from 'react';
import axios from '../../axios';

function Categories () {

    const [categories, setCategories] = useState([])

    async function getCategories() {
        const categoriesData = await axios.get('/api/categories');
        const categories = categoriesData.data;
        setCategories(categories);
    }

    useEffect(()=>{
        getCategories();
    },[])

    return (
        <div className="categories">
            <div className="categories__heading">
                Browse by Category
            </div>
            <div className="categories__list">
                {
                    categories.map((category) => {
                        return (
                        <div className="category">
                            {category.name}
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default Categories;