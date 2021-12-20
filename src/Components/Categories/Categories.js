import './Categories.scss';
import { useState, useEffect } from 'react';
import axios from '../../axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Categories (props) {

    const [categories, setCategories] = useState([])
    const navigate = useNavigate();

    async function getCategories() {
        const categoriesData = await axios.get('/api/categories');
        const categories = categoriesData.data;
        setCategories(categories);
    }

    function categoryClicked(categoryId) {
        navigate(`/category/${categoryId}`);
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
                        <div className={`category ${category._id === props.categoryId && 'category--active'}`} key = {categories._id}>
                            <span onClick={()=>categoryClicked(category._id)}>{category.name}</span>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default Categories;