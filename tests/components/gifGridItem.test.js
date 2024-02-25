import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components";


describe('gifGridItem', () => {

    const myGif = {
        id: 1,
        title: 'myGif',
        url: 'http://mygif.com/'
    }

    test('debe hacer match con el snapshot', () => {

        const { container } = render(<GifGridItem gif={myGif} />);

        expect(container).toMatchSnapshot();


    });

    test('debe mostrar la imagen con el url y el alt indicado', () => {

        render(<GifGridItem gif={myGif} />);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(myGif.url);
        expect(alt).toBe(myGif.title);

    });

    test('debe mostrar el titulo en un parrafo', () => {

        render(<GifGridItem gif={myGif} />);

        expect(myGif.title).toBeTruthy();
        
    });


})