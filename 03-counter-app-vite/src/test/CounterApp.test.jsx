import {fireEvent, render, screen} from "@testing-library/react";
import {CounterApp} from "../CounterApp.jsx";

describe('Pruebas en main de <CounterApp/>', () =>{
  let contadorInicial = 100;
  test('Debe hacer match con el snapchat', () =>{
    const { container } = render(<CounterApp value={contadorInicial}/>)
    expect(container).toMatchSnapshot();

  });

  test('mostrar el valor inicial en 100', () =>{
    render(<CounterApp value={contadorInicial}/>)
    expect(screen.getByText(contadorInicial)).toBeTruthy();
    //expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100')
  });

  test('debe de incrementear con el boton +1', () =>{
    render(<CounterApp value={contadorInicial}/>)
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText('101')).toBeTruthy();

  });

  test('debe de decrementear con el boton -1', () =>{
    render(<CounterApp value={contadorInicial}/>)
    fireEvent.click(screen.getByText('-1'))
    expect(screen.getByText('99')).toBeTruthy();

  });

  test('debe resetear el valor inicial', () =>{
    render(<CounterApp value={contadorInicial}/>)
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText('103')).toBeTruthy();
    //fireEvent.click(screen.getByText('Reseat'))
    fireEvent.click(screen.getByRole('button',{name:'btn-reseat'}))
    expect(screen.getByText('100')).toBeTruthy();

  });

});
