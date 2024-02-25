import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './gifGridItem';


export const GifGrid = ({ category }) => {

    const { gifList, isLoading } = useFetchGifs(category);
    return (
        <div className='display-grid'>
            {!(isLoading) ? <h3>Se encontraron {gifList.length} gifs relacionados a {category.toUpperCase()}</h3> : null}
            {(isLoading) ? <h4 className='loading'>Cargando...</h4> : null}

            <div className='card-grid' >
                {
                    gifList.map(gif => {
                        return <GifGridItem gif={gif} key={gif.id} />
                    }
                    )
                }
            </div>

        </div>

    );
};
