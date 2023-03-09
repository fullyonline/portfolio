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
        company: 'CISTEC AG',
        url: 'https://www.cistec.com/',
        positionDescription: 'Fullstack Web Developer',
        description:
            'Technischer Lead in einer der grössten und aufstrebenden, Anbieter eines Klinikinformationssystemes (KISIM) für Schweizer Spitäler. Die Kundenbasis der CISTEC AG geht vom Regionalspital bis zum Universitätsspital, vom öffentlichen Chefarztspital bis zum privaten Belegarztspital und von der Psychiatrie bis zur Reha.',
        competence: [
            'Neu- und Weiterentwicklung der Leistungserfassung im KISIM',
            'Neu- und Weiterentwicklung der Codierung im KISIM',
            'Konfiguration und Wartung der Kundensysteme',
            '2nd Level Support zur Unterstützung der Applikationsbetreuer der Kunden',
        ],
        programminglanguages: [
            'Node.js',
            'typescript',
            'fastify',
            'GraphQL',
            'Apollo Federation',
            'Oracle DB',
            'cypress.io',
            'xState.js',
        ],
        startdate: new Date('2018-02-01'),
    },
    {
        company: 'boreas AG',
        url: 'https://www.boreas.ch/',
        positionDescription: 'Software Entwickler',
        description: 'Die boreas AG bot mir einen Quereinstieg vom Landschaftsgärtner in die Informatik.',
        competence: [
            'Weiterentwicklung der firmeneigenen ERP-Lösung',
            'SQL-Datenbankenanpassung und Erweiterung der Funktionalitäten',
            'Kundensupport',
            'Projektrealisierung und Einführung einer ERP-Lösung',
            'Realisierung von CMS-Webauftritten',
            'Virtualisierung und Wartung von Windows Servern',
            'Netzwerkinstallationen und Unterhaltung der Firmen-Hardware',
        ],
        programminglanguages: ['TS SQL', 'Xamarin', 'C#', 'Windows Server'],
        enddate: new Date('2018-01-31'),
        startdate: new Date('2015-09-01'),
    },
];
