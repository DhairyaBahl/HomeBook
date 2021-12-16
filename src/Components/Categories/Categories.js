import './Categories.scss';
import { useState } from 'react';

function Categories () {

    const [categories, setCategories] = useState(['Architecture', 'Arts & Photography', 'Biographies & Memoirs', 'Body, Mind & Spirit', 'Business & Economics', 'Children & Teens', 'Computer & Internet', 'Cookery, Food & Wine', 'Dictionaries & Language', 'Economics, finance, business & management', 'English Language Teaching', 'Environment & Geography', 'Fiction', 'History & Humanities', 'Law', 'Lifestyle', 'Literature & literary studies', 'Medicine', 'Music', 'Nursing', 'Parenting, Family & Health', 'Politics & Current Events', 'Project management', 'Public administration', 'References & Encyclopaedias', 'Religion & Spirituality', 'Science & Mathematics', 'Self Help & Personal Development', 'Society & social sciences', 'Society & social sciences', 'Sports', 'Technology & Engineering', 'Travel & holiday'])

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
                            {category}
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default Categories;