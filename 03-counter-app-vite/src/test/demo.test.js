describe("Pruebas en <DcoumentComponent/>", () =>{
  test('esta prueba no debe de fallar', () =>{
    //1.Inicializacion
    const message1= 'Hola Mundo' +
      '';
    //2.Estímulo
    const message2 = message1.trim();

    //3.Assert- mirar comportamiento
    expect(message1).toBe(message2);
  });
});
