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
      inicio: "14/01/2023 08:00:00",
      fin: "19/01/2023 15:30:00",
      horaMatricula: "09:10:00",
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
              horarioAula: "L 09:30-12:20 F4-08",
              profesor: "CASASOLA RIVERA WILMER",
              cupo: 25,
              reservado: false,
              estado: "Regular",
            },
            {
              sede: "CAMPUS TECNOLOGICO CENTRAL CARTAGO",
              grupo: 2,
              horarioAula: "M 09:30-12:20 F4-09",
              profesor: "CASASOLA RIVERA WILMER",
              cupo: 25,
              reservado: false,
              estado: "Regular",
            },
            {
              sede: "CAMPUS TECNOLOGICO CENTRAL CARTAGO",
              grupo: 3,
              horarioAula: "V 09:30-12:20 B2-03",
              profesor: "FALLAS VARGAS FABRICIO",
              cupo: 25,
              reservado: false,
              estado: "Reservado",
            },
          ],
        },
        {
          nombre: "ADMINISTRACION DE PROYECTOS",
          codigo: "IC4810",
          creditos: 4,
          grupo: null,
          grupos: [
            {
              sede: "CAMPUS TECNOLOGICO CENTRAL CARTAGO",
              grupo: 1,
              horarioAula: "K 07:30-09:20 B3-08 J 07:30-09:20 B3-08",
              profesor: "ARROYO HERRERA MAURICIO",
              cupo: 28,
              reservado: false,
              estado: "Semipresencial",
            },
            {
              sede: "CAMPUS TECNOLOGICO CENTRAL CARTAGO",
              grupo: 2,
              horarioAula: "K 09:30-11:20 B3-07 J 09:30-11:20 B3-07",
              profesor: "SOLANO SOTO JAIME",
              cupo: 28,
              reservado: false,
              estado: "Regular",
            },
            {
              sede: "CENTRO ACADEMICO DE ALAJUELA",
              grupo: 20,
              horarioAula:
                "M 08:00-09:50 Aula No Disponible V 08:00-09:50 Aula No Disponible",
              profesor: "LOPEZ VALERIO CYNTHIA",
              cupo: 25,
              reservado: false,
              estado: "Regular",
            },
          ],
        }
      ],
    },
    {
      modalidad: "Semestre",
      periodo: 1,
      tipo: "Ordinaria",
      inicio: "30/01/2023 08:00:00",
      fin: "31/01/2023 12:00:00",
      horaMatricula: "10:10:00",
      cursos: [
        {
          nombre: "	SEMINARIO DE ESTUDIOS FILOSOFICOS HISTORICOS",
          codigo: "CS3401",
          creditos: 2,
          grupo: null,
          grupos: [
            {
              sede: null,
              grupo: null,
              horario: null,
              aula: null,
              profesor: null,
              cupo: null,
              reservado: null,
              estado: null,
            },
            {
              sede: null,
              grupo: null,
              horario: null,
              aula: null,
              profesor: null,
              cupo: null,
              reservado: null,
              estado: null,
            },
            {
              sede: null,
              grupo: null,
              horario: null,
              aula: null,
              profesor: null,
              cupo: null,
              reservado: null,
              estado: null,
            },
          ],
        },
      ],
    },
    {
      modalidad: "Semestre",
      periodo: 1,
      tipo: "ExtraOrdinaria",
      inicio: "02/01/2023 08:00:00",
      fin: "02/01/2023 12:00:00",
      horaMatricula: "11:10:00",
      cursos: [{ nombre: "ADMINISTRACION DE PROYECTOS" }],
    },
  ];
}
export function pedirHistorialAcademico() {
  return [];
}
