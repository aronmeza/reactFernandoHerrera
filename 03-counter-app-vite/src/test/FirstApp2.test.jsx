import {FirstApp} from "../FirstApp.jsx";
import {render, screen} from "@testing-library/react";

describe('Puebas en  FirstApp.jsx', () => {

  const title = 'Soy Aaron';
  const subTitle = 'Soy subtitulo';

  test('debe de mhacer match con el snapshot', () => {

    const {container, getByText, getByTestId} = render(<FirstApp title={title}/>)
    expect(container).toMatchSnapshot();

  })

  test('debe de contener el mensaje "Soy Aaron', () => {

    render(<FirstApp title={title}/>)
    expect(screen.getByText(title)).toBeTruthy();

  })

  test('debe de mostrar el titulo h1', () => {

    render(<FirstApp title={title}/>)
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);

  })

  test('debe de mostrar el subtitulo enviado por props', () => {

    render(<FirstApp title={title} subTitle={subTitle}/>)
    expect(screen.getAllByText(subTitle).length).toBe(2);

  })

});