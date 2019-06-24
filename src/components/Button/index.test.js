import React from 'react';
import Button from './';

describe('Button', () => {
    it('should render correctly', () => {
        const output = shallow(
            <Button />
        ).dive();
        expect(output.toMatchSnapshot);
    });
});

it('should handle the click event', () => {
    window.alert = jest.fn();
    const output = shallow(
        <Button />
    ).dive();
    output.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('clicked!');
});