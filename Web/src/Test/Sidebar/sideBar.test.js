import React from 'react';
import { shallow } from 'enzyme';

import SideBar from '../../components/SideBar';

import { findByTestAtrr, checkProps } from '../Utils';

const setUp = (props={}) => {
    const component = shallow(<SideBar {...props} />);
    return component;
}

describe('SideBar component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => { 
        const wrapper = findByTestAtrr(component, 'sideBar');
        expect(wrapper.length).toBe(1);
    });

    it('Should render header IMG without errors', () => { 
        const wrapper = findByTestAtrr(component, 'headerIMG');
        expect(wrapper.length).toBe(1);
    });

    describe('Checking proptypes', () => {  

        it('Should not throw a warning', () => {
            const expectProps = {
                onClickHome: () => {},
                onClickPokemon: () => {},
                onClickGitHub: () => {}
            };

            const propsErr = checkProps(SideBar, expectProps);
            expect(propsErr).toBeUndefined();
        });

    });

    describe('Should render sideBar buttons without errors', () => {

        it('Home', () => {
            const wrapper = findByTestAtrr(component, 'click-home');
            expect(wrapper.length).toBe(1);
        });

        it('Pokemon', () => {
            const wrapper = findByTestAtrr(component, 'click-pokemon');
            expect(wrapper.length).toBe(1);
        });

        it('GitHub', () => {
            const wrapper = findByTestAtrr(component, 'click-github');
            expect(wrapper.length).toBe(1);
        });
        
    });

    describe('Testing click', () => {
        let wrapper; 
        let mockFunc; 

        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                onClickHome: mockFunc,
                onClickPokemon: mockFunc,
                onClickGitHub: mockFunc
            };
            wrapper = shallow(<SideBar {...props} />);
        });

        it('Should emit callback on HOME click event', () => {
            const button = findByTestAtrr(wrapper, 'click-wrapper-home');
            button.simulate('click');

            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });

        it('Should emit callback on Pokemon click event', () => {
            const button = findByTestAtrr(wrapper, 'click-wrapper-pokemon');
            button.simulate('click');

            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });

        it('Should emit callback on GitHub click event', () => {
            const button = findByTestAtrr(wrapper, 'click-wrapper-github');
            button.simulate('click');

            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    });

});