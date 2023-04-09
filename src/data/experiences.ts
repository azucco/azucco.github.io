import * as ET from '../components/ExperienceTimeline';
import SchoolIcon from '@mui/Icons-material/School';
import CodeIcon from '@mui/Icons-material/Code';
import WorkIcon from '@mui/Icons-material/Work';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const experiences :ET.ExperienceTimelineItem[] = [
    {
        years: '2020 - today',
        Icon: CodeIcon,
        company: 'Coolshop srl - Turin',
        job: 'Fullstack developer',
        description: 'JS, TypeScript, React, PHP, NodeJs, SQL, ORM, Docker, Sass',
        type: 'focusOn'
    },
    {
        years: '2015 - today',
        Icon: VolunteerActivismIcon,
        company: 'Gruppo Archeologico Torinese',
        job: 'Volunteering',
        description: '',
        type: 'beyond'
    },
    {
        years: '2018 - 2020',
        Icon: CodeIcon,
        company: 'Netsurfing srl - Ivrea',
        job: 'Fullstack developer',
        description: 'JS, PHP, SQL',
        type: 'focusOn'
    },
    {
        years: '2017 - 2018',
        Icon: SchoolIcon,
        company: 'C.IA.C. Formazione - Ivrea',
        job: 'Tecnico Sviluppo software - JAVA, Oracle, HTML 5',
        description: 'JS, Java, SQL',
        type: 'focusOn'
    },
    {
        years: '2015 - 2017',
        Icon: WorkIcon,
        company: 'Alleanza Assicurazioni SpA',
        job: 'Insurance consultant',
        description: '',
        type: 'beyond'
    },
    {
        years: '2007 - 2013',
        Icon: SchoolIcon,
        company: 'Universita degli Studi di Torino',
        job: 'Medicina e Chirurgia',
        description: 'Curricular exams and internships taken.',
        type: 'beyond'
    },
    {
        years: '2005',
        Icon: SchoolIcon,
        company: 'First (FCE)',
        job: 'Cambridge Assessment English',
        description: '',
        type: 'beyond'
    },
    {
        years: '2002 - 2007',
        Icon: SchoolIcon,
        company: 'Liceo Scientifico Statale "A. Gramsci" - Ivrea',
        job: 'Scientific high school diploma',
        description: '',
        type: 'beyond'
    }
];

export default experiences;