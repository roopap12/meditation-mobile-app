import React from 'react';
import { render } from '@testing-library/react';
import Meditation from './Meditation';
import '@testing-library/jest-dom'


test('renders Meditation component', () => {
    const { getByText, getByAltText } = render(<Meditation />);

    // Assert if the image is in the document
    const image = getByAltText('Meditation');
    expect(image).toBeInTheDocument();

    // Assert if the text is in the document
    const text = getByText(/Awake the world, one mind at a time!/i);
    expect(text).toBeInTheDocument();
});