import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory, setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const onSubmitForm = (event) => {
        event.preventDefault();
        const newCategory = inputValue.trim();
        if (newCategory.length < 1) return;
        // enviar el inputValue a gif-app
        onNewCategory(newCategory);
        setInputValue('');
    }
    const resetCategories = () => {
        setCategories([]);

    }

    return (
        <form
            onSubmit={event => onSubmitForm(event)}>
            <input
                type='text'
                placeholder='buscar gif'
                value={inputValue}
                onChange={event => onInputChange(event)}
            >
            </input>
            <i id='reset-btn' onClick={resetCategories} className="fa-solid fa-rotate-right"></i>
        </form>

    )
}

