import {FirstApp} from "../FirstApp.jsx";
import {render} from "@testing-library/react";

describe('Puebas en  FirstApp.jsx', () => {
  // test('debe hace match con el snapshot', () => {
  //   const title = 'Soy Aaron';
  //   const {container} = render(<FirstApp title={title}/>)
  //
  //   expect(container).toMatchSnapshot();
  //
  // })
  test('debe de mostrar el titulo en h1', () => {
    const title = 'Soy Aaron';
    const {container, getByText, getByTestId} = render(<FirstApp title={title}/>)

    expect(getByText(title)).toBeTruthy();
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
    expect(getByTestId('test-title')).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toBe(title);


  })

  test('debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Soy Aaron';
    const subTitle = 'Soy un subtitulo';
    const { getAllByText} = render(
      <FirstApp title={title} subTitle={subTitle}/>);

    expect(getAllByText(subTitle).length).toBe(2);

  })
});