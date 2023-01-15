export function contactosAdminRegistro() {
  //Pedir a api toda esta info

  return [
    {
      sede: "Sede Central",
      codigo: 5050,
      contactos: [
        {
          puesto: "Matricula",
          encargado: "Xiomara Salas Cerdas",
          correo: "xsalas@tec.ac.cr",
          telefono: "25502255",
        },
        {
          puesto: "Dirección",
          encargado: "William Vives Brenes",
          correo: "wvives@itcr.ac.cr",
          telefono: "25502624",
        },
        {
          puesto: "Puesto de Información",
          encargado: "Vilma Solano Picado",
          correo: "vsolano@tec.ac.cr",
          telefono: "25502667",
        },
        {
          puesto: "Matrícula",
          encargado: "Soporte Matrícula",
          correo: "admisionyregistro@tec.ac.cr	",
          telefono: "25509328",
        },
      ],
    },
    {
      sede: "Sede Regional San Carlos",
      codigo: 150,
      contactos: [
        {
          puesto: "Oficina Admisión y Registro",
          encargado: "Kattia Murillo Barquero",
          correo: "	kmurillo@tec.ac.cr",
          telefono: "24013294",
        },
        {
          puesto: "Oficina Admisión y Registro",
          encargado: "Erick Palacios Rodríguez",
          correo: "epalacios@itcr.ac.cr",
          telefono: "24013289",
        },
      ],
    },
    {
      sede: "Centro Académico San José",
      codigo: 540,
      contactos: [
        {
          puesto: "Oficina Admisión y Registro",
          encargado: "Warren Loáiciga Álvarez",
          correo: "wloaiciga@tec.ac.cr",
          telefono: "25509106",
        },
        {
          puesto: "Oficina Admisión y Registro",
          encargado: "Kimberly Marcela Piedra Inces",
          correo: "kimpiedra@itcr.ac.cr	",
          telefono: "25509084",
        },
      ],
    },
    {
      sede: "Centro Académico Limón",
      codigo: 300,
      contactos: [
        {
          puesto: "Oficina Admisión y Registro",
          encargado: "Danny Rostrán Pacheco",
          correo: "drostan@tec.ac.cr",
          telefono: "27582152",
        },
      ],
    },
    {
      sede: "Sede Interunivesitaria de Alajuela",
      codigo: 100,
      contactos: [
        {
          puesto: "Oficina Admisión y Registro",
          encargado: "Anthony Frank Ulloa Acuña",
          correo: "afulloa@itcr.ac.cr",
          telefono: "25509483",
        },
      ],
    },
  ];
}
export function matriculasDisponibles() {
  return [
    {
      modalidad: "Semestre",
      periodo: 1,
      tipo: "Primer Ingreso con cambio de carrera",
      inicio: "19 ene. 2023 08:00",
      fin: "19 ene. 2023 15:30",
      cursos: [
        {
          nombre: "SEMINARIO DE ESTUDIOS FILOSOFICOS HISTORICOS",
          codigo: "CS3401",
          creditos: 2,
          grupo: null, //debe cambiar guarndo se selecciona.
          grupos: [
            {
              sede: "CAMPUS TECNOLOGICO CENTRAL CARTAGO",
              grupo: 1,
              horario: "L 09:30-12:20",
              aula: "F4-08",
              profesor: "CASASOLA RIVERA WILMER",
              cupo: 25,
              reservado: false,
              estado: "Regular",
            },
          ],
        },
      ],
    },
    {
      modalidad: "Semestre",
      periodo: 1,
      tipo: "Ordinaria",
      inicio: "30 ene. 2023 08:00",
      fin: "31 ene. 2023 12:00",
      cursos: [{ nombre: "Comunicación Escrita" }],
    },
    {
      modalidad: "Semestre",
      periodo: 1,
      tipo: "ExtraOrdinaria",
      inicio: "02 feb. 2023 08:00",
      fin: "02 feb. 2023 12:00",
      cursos: [{ nombre: "Cálculo Diferencial e Integral" }],
    },
  ];
}
export function pedirHistorialAcademico() {
  return [];
}
