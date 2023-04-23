import * as SC from '../components/SkillCard';
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPhp, SiDocker, SiGit } from "react-icons/si";
import { BsFillDatabaseFill } from "react-icons/bs";

const skills :SC.skillCardContent[] = [
    {
        Icon: SiJavascript,
        title: 'JavaScript', 
        topic: 'Backend and frontend', 
        content: 'Language with which I am most productive. My favourite one.',
        rating: 4,
        color: '#F0DB4F',
    },
    {
        Icon: SiTypescript,
        title: 'TypeScript', 
        topic: 'Backend', 
        content: 'JS with types? My cup of tea. I usually use it together with Node, express.js and TypeORM.',
        rating: 2,
        color: '#3178C6',
    },
    {
        Icon: SiReact,
        title: 'React', 
        topic: 'Frontend', 
        content: 'The library I enjoy the most. Next step: improve TypeScript integration knowledge💪.',
        rating: 3,
        color: '#149ECA',
    },
    {
        Icon: SiNodedotjs,
        title: 'NodeJS', 
        topic: 'Backend', 
        content: 'If I had to start a new project, NodeJS would be my first backend choice.',
        rating: 3,
        color: '#5B994F',
    },
    {
        Icon: SiPhp,
        title: 'PHP', 
        topic: 'Backend', 
        content: "One of the first languages ​I learned. I still use it with joy, as long as it's PHP 8.",
        rating: 4,
        color: '#7A86B8',
    },
    {
        Icon: BsFillDatabaseFill,
        title: 'SQL and ORM', 
        topic: 'Backend', 
        content: 'I work mainly with MySQL with and without ORM (TypeORM).',
        rating: 3,
        color: '#00758F',
    },
    {
        Icon: SiDocker,
        title: 'Docker', 
        topic: 'DevOps', 
        content: 'Still learning, but i love working on dockerized projects.',
        rating: 1,
        color: '#08489B',
    },
    {
        Icon: SiGit,
        title: 'Git', 
        topic: 'Versioning', 
        content: 'I am particularly comfortable with Gitlab environment.',
        rating: 4,
        color: '#F64D27',
    },
];

export default skills;