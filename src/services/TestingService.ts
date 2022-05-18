export const testBinarioADecimal = (func: any): boolean | undefined => {
  try {
    const aux1 = func(10);
    const aux2 = func(111);
    if (aux1 === 2 && aux2 === 7) {
      return true;
    }
  } catch (err) {
    return false;
  }
};

export const testClavesUnicas = (func: any): boolean | undefined => {
  try {
    const obj1 = { nombre: "Luciano", apellido: "Nicolau" };
    const obj2 = { nombre: "Lio", segundoNombre: "Gustavo" };
    const obj3 = { usuario: "leanNic", edad: 23 };
    let result1 = func(obj1, obj2);
    let result2 = func(obj1, obj3);
    if (typeof result1 === "object" && typeof result1 === "object") {
      if (
        result1[0] === result2[1] &&
        result1[1] === "segundoNombre" &&
        result2[0] === "nombre" &&
        result2[2] === "usuario" &&
        result2[3] === "edad"
      ) {
        return true;
      }
    }
  } catch (err) {
    return false;
  }
};

export const testMayorMenosMenor = (func: any): boolean | undefined => {
  try {
    const arr1 = [20, 31, 11, 15, 32];
    const arr2 = [2, 3, 1, 5, 0, 32];
    const result1 = func(arr1);
    const result2 = func(arr2);
    if (result1 === 21 && result2 === 32) {
      return true;
    }
  } catch (err) {
    return false;
  }
};

export const testSumarLikesDeUsuario = (func: any): boolean | undefined => {
  try {
    const user = {
      usernombre: "Jhon Doe",
      password: "JavaScript es genial!",
      posts: [
        {
          id: "1",
          title: "Aventuras en JS!",
          likes: 10,
        },
        {
          id: "2",
          title: "Soy Henry!",
          likes: 100,
        },
        {
          id: "3",
          title: "Qué es un JavaScript?",
          likes: 35,
        },
        {
          id: "4",
          title: "JS Objects for Dummies",
          likes: 42,
        },
        {
          id: "5",
          title: "Educación online",
          likes: 99,
        },
      ],
    };
    let result = func(user);
    if (result === 286) {
      return true;
    }
  } catch (err) {
    return false;
  }
};

export const testPromedioDeResultados = (func: any): boolean | undefined => {
  try {
    const result1 = func([10, 10, 16, 12]);
    const result2 = func([97, 100, 80, 55, 72, 94]);
    if (result1 === 12 && result2 === 83) {
      return true;
    }
  } catch (err) {
    return false;
  }
};
