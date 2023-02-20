export const PROJECT_TYPE_TYPE = {
    work: 'work',
    school: 'school',
} as const;

type ObjectValues<T> = T[keyof T];

export type ProjectTypeType = ObjectValues<typeof PROJECT_TYPE_TYPE>;

export type ProjectType = {
    name: string;
    type: ProjectTypeType;
    url?: string;
    programminglanguages: string[];
    keypoints: string[];
    description: string;
};

export const projects: ProjectType[] = [
    {
        name: 'BMI Rechner - Flutter',
        type: PROJECT_TYPE_TYPE.school,
        url: 'https://github.com/fullyonline/SOM_BMI_Calculator',
        programminglanguages: ['flutter', 'dart'],
        keypoints: [
            'Projektarbeit des Faches Software Engineering Mobile',
            'Arbeiten mit Localstorage',
            'Arbeiten mit Localisation',
        ],
        description:
            'Dieser BMI Rechner basiert auf einer Android-App und sollte uns beibringen wie man mit Multi-Platform-Frameworks arbeitet.',
    },
    {
        name: 'BMI Rechner - Java',
        type: PROJECT_TYPE_TYPE.school,
        url: 'https://github.com/fullyonline/BMIApp',
        programminglanguages: ['Java', 'Android Studio'],
        keypoints: [
            'Arbeit des Faches Software Engineering Mobile',
            'Arbeiten mit Localstorage',
            'Arbeiten mit Localisation',
            'Vorlage für Flutter-BMI-Rechner',
        ],
        description: 'Dieser BMI Rechner bildet die Basis auf welcher eine Flutter-App entwickelt wurde.',
    },
    {
        name: 'Software Engineering 2 - Car Rental',
        type: PROJECT_TYPE_TYPE.school,
        url: 'https://github.com/fullyonline/car-rental',
        programminglanguages: ['Java', 'Springboot', 'OpenAPI'],
        keypoints: [
            'Projektarbeit des Faches Software Engineering 2',
            'Frontend war gegeben',
            'API wurde vorgegeben',
            'OpenAPI Dokumentation',
        ],
        description:
            'Dies ist das Backend einer Autovermietung. Der User kann mit dem Frontend nach Autos Filtern und diese Mieten.',
    },
    {
        name: 'Software Engineering Web - Movie',
        type: PROJECT_TYPE_TYPE.school,
        url: 'https://github.com/fullyonline/movie',
        programminglanguages: ['typescript', 'javascript', 'express.js', 'MongoDB', 'Angular.js'],
        keypoints: [
            'Projektarbeit des Faches Software Engineering Web',
            'Arbeiten mit NoSQL Datenbank',
            'Arbeiten mit express Server',
            'Daten Quelle: themoviedb.org',
            'Filmfavoriten werden in eigener Datenbank gespeichert',
        ],
        description:
            'Dies ist eine komplette Web-Applikation mit Client und Server. Der User kann die aktuellen und Top10 Filme darstellen. Zusätzlich kann man nach Filmen oder Genre suchen. Jeder Film kann als Favorit gespeichert werden, welche in der Übersicht schnell für ihn ersichtlich sind',
    },
];
