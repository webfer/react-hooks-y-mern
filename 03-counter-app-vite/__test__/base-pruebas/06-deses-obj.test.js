import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Testing on 06-deses-obj', () => {
  test('Debe devolver un OBJ, con parametros por defecto', () => {
    //const retun = usContext();
    //console.log(retun);

    const persona = {
      nombre: 'Tony',
      edad: 45,
      clave: 'Ironman',
    };

    const {
      nombreClave,
      anios,
      latlng: { lat, lng },
    } = usContext(persona);

    // console.log(nombreClave);
  });
});
