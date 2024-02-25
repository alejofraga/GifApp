import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({ gif }) => {
    return (

        <div className='card'>
            <img src={gif.url} alt={gif.title} key={gif.id}></img>
            <p>{gif.title}</p>
        </div>

    );
}


GifGridItem.propTypes = {
    gif: PropTypes.object.isRequired,
};