import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ gif }) => {
    const handleDownload = () => {
        fetch(gif.url)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${gif.title}.gif`);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            });
    };

    return (
        <div className='card' style={{ position: 'relative', display: 'inline-block' }}>
            <p>{gif.title}</p>
            <img src={gif.url} alt={gif.title} key={gif.id} />
            <i onClick={handleDownload} class="fa-solid fa-file-arrow-down"></i>
        </div>
    );
};


GifGridItem.propTypes = {
    gif: PropTypes.object.isRequired,
};