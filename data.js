
const SUBJECT_DATA = [
    { id: "pedagogia", name: "Pedagogía", prerequisites: [] },
    { id: "psico_edu", name: "Psicología Educacional", prerequisites: [] },
    { id: "didactica_gen", name: "Didáctica General", prerequisites: ["pedagogia", "psico_edu"] },
    { id: "practica_docente_ii", name: "Práctica Docente II", prerequisites: ["pedagogia", "psico_edu"] },
];
