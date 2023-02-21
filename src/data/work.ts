export type WorkType = {
    company: string;
    description: string;
    positionDescription: string;
    url: string;
    startdate: Date;
    enddate?: Date;
    competence: string[];
    programminglanguages: string[];
};

export const WorkData: WorkType[] = [
    {
        company: 'Cistec AG',
        url: 'https://www.cistec.com/',
        description: '',
        positionDescription: 'Fullstack Entwickler',
        competence: [''],
        programminglanguages: ['typescript', 'GraphQL', 'fastify', 'Apollo Federation', 'Oracle'],
        startdate: new Date('2018-02-01'),
    },
];
