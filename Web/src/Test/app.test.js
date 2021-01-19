// import React from 'react';
// import { fireEvent, render } from '@testing-library/react';

// import App from '../App';
// import SideBar from '../components/SideBar';
// // import Modal from '../components/Modal';


// // it('Modal should start false', () => {
// //     const { getByTestId } = render(<Modal />);
// //     const Modal = getByTestId('modalTest');

// //     expect(Modal).toBeInTheDocument();
// // })

// it("Should button to go home be in the document", () => {
//     const { getByLabelText } = render(<SideBar label="click-home" />);

//     const btnElement = getByLabelText('click-home');
//     expect(btnElement).toBeInTheDocument();
//     expect(btnElement).toHaveTextContent('Home');
// })

// it('Should button home be called', () => {
//     const onClickHome = jest.fn();
//     const { getByTestId } = render(<SideBar onClickHome={onClickHome} />)

//     const btn = getByTestId('onclickHome');
//     fireEvent.click(btn);

//     expect(onClickHome).toHaveBeenCalled();
// })


// it("Should button to go Pokemon be in the document", () => {
//     const { getByLabelText } = render(<SideBar label="click-pokemon" />);

//     const btnElement = getByLabelText('click-pokemon');
//     expect(btnElement).toBeInTheDocument();
//     expect(btnElement).toHaveTextContent('Pokemons');
// })

// it('Should button pokemon be called', () => {
//     const onClick = jest.fn();
//     const { getByTestId } = render(<SideBar onClickPokemon={onClick} />)

//     const btn = getByTestId('onclickPokemon');
//     fireEvent.click(btn);

//     expect(onClick).toHaveBeenCalled();
// })


// it("Should button to go Github be in the document", () => {
//     const { getByLabelText } = render(<SideBar label="click-github" />);

//     const btnElement = getByLabelText('click-github');
//     expect(btnElement).toBeInTheDocument();
//     expect(btnElement).toHaveTextContent('GitHub');
// })

// it('Should button Gitub be called', () => {
//     const onClick = jest.fn();
//     const { getByTestId } = render(<SideBar onClickGitHub={onClick} />)

//     const btn = getByTestId('onclickGihub');
//     fireEvent.click(btn);

//     expect(onClick).toHaveBeenCalled();
// })
