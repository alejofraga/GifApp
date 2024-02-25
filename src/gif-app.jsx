import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifApp = () => {
    const firstValue = [];
    const [categories, setCategories] = useState(firstValue);
    const onAddCategory = (newCategory) => {
        if (!categories.includes(newCategory)) {
            setCategories([newCategory, ...categories]);
        }

    }

    return (
        <div className='container-grid'>
            <h1>Encuentra tus Gifs favoritos</h1>
            <AddCategory setCategories={setCategories} onNewCategory={newCategory => onAddCategory(newCategory)} />
            {categories.map(category => {

                return <GifGrid category={category} key={category} />
            })
            }
        </div>
    );
};
