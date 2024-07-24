const listadoDeDatosDeCarreras = [
    { 
        careerId: 1, 
        unahurSubjects: [{year:1},{year:4}], englishLevels: [{year:3},{year:4}], 
        suggestionThresholdRegularizedSubjects: 4 
    },
    { 
        careerId: 5, 
        unahurSubjects: [{year: 1}], englishLevels: [{year:2}, {year:3}], 
        suggestionThresholdRegularizedSubjects: 3
    },
    { 
        careerId: 6, 
        unahurSubjects: [{year:1}, {year:2}, {year:3}], englishLevels: [{year:2}], 
        suggestionThresholdRegularizedSubjects: 5 
    },
    { 
        careerId: 7, 
        unahurSubjects: [{year:3, campo: 'CFC1'}], 
        englishLevels: [{year:1, campo: 'CFC1'}], 
        suggestionThresholdRegularizedSubjects: 3 
    },
    { 
        careerId: 13, 
        unahurSubjects: [{ year: 3, campo: 'CFC1' }, { year: 4, campo: 'CFC2'}],
        englishLevels: [{ year: 1, campo: 'CFC1' }, { year: 5, campo: 'CFC2'}], 
        suggestionThresholdRegularizedSubjects: 3
    },
    { 
        careerId: 16, 
        unahurSubjects: [{year:1}, {year:4}], englishLevels: [{year:2}, {year:3}], 
        suggestionThresholdRegularizedSubjects: 3 
    },
    { 
        careerId: 21, 
        unahurSubjects: [{year:3, campo: 'Gral'}], 
        englishLevels: [{ year: 1, campo: 'Gral' }, { year: 2, campo: 'Gral'}], 
        suggestionThresholdRegularizedSubjects: 3 
    },
    { 
        careerId: 31, 
        unahurSubjects: [{year:1}], englishLevels: [{year:2}, {year:3}], 
        suggestionThresholdRegularizedSubjects: 3 
    },
    { 
        careerId: 34, 
        unahurSubjects: [{year:1}, {year:2}, {year:3}], englishLevels: [{year:2}, {year:4}], 
        suggestionThresholdRegularizedSubjects: 5 
    },
    { 
        careerId: 38, 
        unahurSubjects: [{ year: 3, campo: 'Gral' }, { year: 4, campo: 'Gral'}], 
        englishLevels: [{ year: 1, campo: 'Gral' }, { year: 3, campo: 'Gral'}], 
        suggestionThresholdRegularizedSubjects: 3, 
        specialCareerName: "Tecnicatura / Licenciatura en informática"
    }
]; export default listadoDeDatosDeCarreras;