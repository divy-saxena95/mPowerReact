import React from 'react';
import TextField from './';

describe('TextField', () => {
    it('should render correctly', () => {
        const output = shallow(
            <TextField />
        ).dive();
        expect(output).toMatchSnapshot();
    });
});


// describe('TextField', () => {
//     it('should render correctly', () => {
//         const output = shallow(
//             <TextField />
//         ).dive();
//         expect(output).toMatchSnapshot();
//     });
// });