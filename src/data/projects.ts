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
];
