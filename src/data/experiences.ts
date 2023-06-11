import * as ET from '../components/ExperienceTimeline';
import SchoolIcon from '@mui/Icons-material/School';
import CodeIcon from '@mui/Icons-material/Code';
import WorkIcon from '@mui/Icons-material/Work';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const experiences :ET.ExperienceTimelineItem[] = [
    {
        years: '2020 - today',
        Icon: CodeIcon,
        company: 'Coolshop srl',
        city: 'Turin',
        job: 'Fullstack developer',
        description: 'JS, TypeScript, React, PHP, NodeJs, SQL, ORM, Docker, Sass',
        type: 'primary'
    },
    {
        years: '2015 - today',
        Icon: VolunteerActivismIcon,
        company: 'Gruppo Archeologico Torinese',
        city: '',
        job: 'Volunteering',
        description: '',
        type: 'secondary'
    },
    {
        years: '2018 - 2020',
        Icon: CodeIcon,
        company: 'Netsurfing srl',
        city: 'Ivrea',
        job: 'Fullstack developer',
        description: 'JS, PHP, SQL',
        type: 'primary'
    },
    {
        years: '2017 - 2018',
        Icon: SchoolIcon,
        company: 'C.IA.C. Formazione',
        city: 'Ivrea',
        job: 'Tecnico Sviluppo software - JAVA, Oracle, HTML 5',
        description: 'JS, Java, SQL',
        type: 'primary'
    },
    {
        years: '2015 - 2017',
        Icon: WorkIcon,
        company: 'Alleanza Assicurazioni SpA',
        city: 'Ivrea',
        job: 'Insurance consultant',
        description: '',
        type: 'secondary'
    },
    {
        years: '2007 - 2013',
        Icon: SchoolIcon,
        company: 'Università degli Studi di Torino',
        city: '',
        job: 'Medicina e Chirurgia',
        description: 'Curricular exams and internships taken.',
        type: 'secondary'
    },
    {
        years: '2005',
        Icon: SchoolIcon,
        company: 'First (FCE)',
        city: '',
        job: 'Cambridge Assessment English',
        description: '',
        type: 'secondary'
    },
    {
        years: '2002 - 2007',
        Icon: SchoolIcon,
        company: 'Liceo Scientifico Statale "A. Gramsci"',
        city: 'Ivrea',
        job: 'Scientific high school diploma',
        description: '',
        type: 'secondary'
    }
];

export default experiences;