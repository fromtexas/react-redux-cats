import React from 'react';
import Category from './Category';


const CATEGORIES = ['random', 'hats', 'space', 'funny', 'sunglasses', 'boxes', 'caturday', 'ties', 'dream', 'kittens', 'sinks', 'clothes'];

const CategoriesList = () => {
    const categories = CATEGORIES.map((item, index) => {
        return <Category key = {index} category={item} />;
    });
    return (
        <div className='category__list'>
            {categories}
        </div>
    );
};

export default CategoriesList;