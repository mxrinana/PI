const SUBJECT_DATA = [
  {
    "id": "pedagogia",
    "name": "Pedagog\u00eda",
    "prerequisites": []
  },
  {
    "id": "alfabetizacion",
    "name": "Alfabetizaci\u00f3n acad\u00e9mica",
    "prerequisites": []
  },
  {
    "id": "historia_arg",
    "name": "Historia Argentina y Latinoamericana",
    "prerequisites": []
  },
  {
    "id": "practica_docente_i",
    "name": "Pr\u00e1ctica Docente I",
    "prerequisites": []
  },
  {
    "id": "pract_disc_ingles_i",
    "name": "Pr\u00e1cticas Discursivas en Ingl\u00e9s I",
    "prerequisites": []
  },
  {
    "id": "gramatica_i",
    "name": "Gram\u00e1tica Inglesa I",
    "prerequisites": []
  },
  {
    "id": "fonetica_i",
    "name": "Fon\u00e9tica y Fonolog\u00eda I",
    "prerequisites": []
  },
  {
    "id": "historia_educ",
    "name": "Historia de la Educaci\u00f3n y Pol\u00edtica Educacional",
    "prerequisites": []
  },
  {
    "id": "psicologia_educ",
    "name": "Psicolog\u00eda Educacional",
    "prerequisites": []
  },
  {
    "id": "sociologia_educ",
    "name": "Sociolog\u00eda de la Educaci\u00f3n",
    "prerequisites": [
      "psicologia_educ"
    ]
  },
  {
    "id": "sujeto_aprend_i",
    "name": "Sujeto del Aprendizaje I",
    "prerequisites": [
      "psicologia_educ"
    ]
  },
  {
    "id": "didactica_general",
    "name": "Did\u00e1ctica General",
    "prerequisites": [
      "pedagogia",
      "psicologia_educ"
    ]
  },
  {
    "id": "practica_docente_ii",
    "name": "Pr\u00e1ctica Docente II",
    "prerequisites": [
      "pedagogia",
      "psicologia_educ"
    ]
  },
  {
    "id": "pract_disc_ingles_ii",
    "name": "Pr\u00e1cticas Discursivas en Ingl\u00e9s II",
    "prerequisites": [
      "pract_disc_ingles_i",
      "gramatica_i"
    ]
  },
  {
    "id": "gramatica_ii",
    "name": "Gram\u00e1tica Inglesa II",
    "prerequisites": [
      "pract_disc_ingles_i",
      "gramatica_i"
    ]
  },
  {
    "id": "fonetica_ii",
    "name": "Fon\u00e9tica y Fonolog\u00eda II",
    "prerequisites": [
      "fonetica_i"
    ]
  },
  {
    "id": "tic",
    "name": "Tecnolog\u00edas de la Informaci\u00f3n y la Comunicaci\u00f3n",
    "prerequisites": []
  },
  {
    "id": "sujeto_aprend_ii",
    "name": "Sujetos del Aprendizaje II",
    "prerequisites": [
      "sujeto_aprend_i"
    ]
  },
  {
    "id": "filosofia",
    "name": "Filosof\u00eda",
    "prerequisites": [
      "pedagogia",
      "alfabetizacion"
    ]
  },
  {
    "id": "didactica_ingles_i",
    "name": "Did\u00e1ctica de la ense\u00f1anza del ingl\u00e9s I",
    "prerequisites": [
      "tic",
      "didactica_general",
      "practica_docente_ii",
      "pract_disc_ingles_ii",
      "gramatica_ii",
      "fonetica_ii",
      "sujeto_aprend_i",
      "sujeto_aprend_ii"
    ]
  },
  {
    "id": "linguistica_i",
    "name": "Ling\u00fc\u00edstica I",
    "prerequisites": [
      "pract_disc_ingles_ii",
      "alfabetizacion",
      "pract_disc_ingles_i",
      "gramatica_i",
      "fonetica_i"
    ]
  },
  {
    "id": "practica_docente_iii",
    "name": "Pr\u00e1ctica Docente III",
    "prerequisites": [
      "tic",
      "pract_disc_ingles_ii",
      "gramatica_ii",
      "fonetica_ii",
      "sujeto_aprend_i",
      "sujeto_aprend_ii",
      "alfabetizacion",
      "fonetica_i",
      "didactica_general",
      "practica_docente_ii"
    ]
  },
  {
    "id": "pract_disc_ingles_iii",
    "name": "Pr\u00e1cticas Discursivas en Ingl\u00e9s III",
    "prerequisites": [
      "pract_disc_ingles_ii",
      "alfabetizacion",
      "pract_disc_ingles_i",
      "gramatica_i",
      "fonetica_i"
    ]
  },
  {
    "id": "estudios_socioculturales",
    "name": "Estudios Socioculturales de los pueblos de habla inglesa",
    "prerequisites": [
      "pract_disc_ingles_i",
      "gramatica_i",
      "fonetica_i",
      "alfabetizacion"
    ]
  },
  {
    "id": "literatura_i",
    "name": "Literatura de los Pueblos de habla inglesa I",
    "prerequisites": [
      "pract_disc_ingles_ii",
      "alfabetizacion",
      "pract_disc_ingles_i",
      "gramatica_i",
      "fonetica_i"
    ]
  },
  {
    "id": "didactica_ingles_ii",
    "name": "Did\u00e1ctica de la ense\u00f1anza del ingl\u00e9s II",
    "prerequisites": [
      "didactica_ingles_i"
    ]
  },
  {
    "id": "inclusion",
    "name": "Integraci\u00f3n e inclusi\u00f3n educativa",
    "prerequisites": [
      "sujeto_aprend_i",
      "sujeto_aprend_ii",
      "alfabetizacion"
    ]
  },
  {
    "id": "esi",
    "name": "Educaci\u00f3n Sexual Integral",
    "prerequisites": [
      "sujeto_aprend_i",
      "sujeto_aprend_ii"
    ]
  },
  {
    "id": "residencia",
    "name": "Residencia y sistematizaci\u00f3n de experiencias",
    "prerequisites": [
      "didactica_ingles_i",
      "didactica_ingles_ii",
      "practica_docente_iii"
    ]
  },
  {
    "id": "pract_disc_ingles_iv",
    "name": "Pr\u00e1cticas Discursivas en Ingl\u00e9s IV",
    "prerequisites": [
      "pract_disc_ingles_iii",
      "gramatica_ii",
      "fonetica_ii"
    ]
  },
  {
    "id": "linguistica_ii",
    "name": "Ling\u00fc\u00edstica II",
    "prerequisites": [
      "linguistica_i",
      "pract_disc_ingles_ii"
    ]
  },
  {
    "id": "literatura_ii",
    "name": "Literatura de los pueblos de habla inglesa II",
    "prerequisites": [
      "literatura_i"
    ]
  },
  {
    "id": "formacion_etica",
    "name": "Formaci\u00f3n \u00e9tica y ciudadana",
    "prerequisites": [
      "filosofia"
    ]
  }
];
