
import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {


    const [gifList, setGifList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getGifs(category)
            .then(gifs => {// gifs refiere al arreglo de objetos  retornado por getGifs
                setGifList(gifs);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching gifs:', error);
            });
    }, [category]);//cada vez que category cambie, se vuelve a ejecutar la funcion



    return {
        gifList: gifList,
        isLoading: isLoading
    }


}
