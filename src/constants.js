import { RiTeamFill } from "react-icons/ri";
import { GiAura, GiSandsOfTime, GiMusicalNotes } from "react-icons/gi";
import { MdSyncProblem, MdPhoneInTalk } from "react-icons/md";
import { GrWorkshop, GrHtml5, GrCss3 } from "react-icons/gr";
import { SiJavascript, SiReact, SiGoogletranslate, SiRedux } from "react-icons/si";

export const PROFESSIONAL_SKILL_DATA = [
    {
        title: "Team-work",
        icon: <RiTeamFill />,
        description: "Teamwork skills help you operate well in a group and quickly and effectively accomplish tasks",
        utterances: ['Idea exchange', 'Delegation', 'Coordination']
    },
    {
        title: "Adaptability",
        icon: <GiAura />,
        description: "Adaptability and flexibility are essential skills for embracing and adjusting to change ",
        utterances: ['Optimism', 'Self-management', 'Decision-making']
    },
    {
        title: "Problem-Solving",
        icon: <MdSyncProblem />,
        description: "Problem-solving skills depend on your ability to use analytical and creative thinking to find solutions",
        utterances: ['Analysis', 'Lateral thinking', 'Logical reasoning', 'Brainstorming']
    },
    {
        title: "Communication",
        icon: <MdPhoneInTalk />,
        description: "Communication skills are the effective oral or written ways you express yourself in the workplace",
        utterances: ['Verbal communication', 'Non-verbal communication', 'Active listening', 'Empathy']
    },
    {
        title: "Time Management",
        icon: <GiSandsOfTime />,
        description: "Time management skills describe your ability to work efficiently and productively by using your time wisely",
        utterances: ['Planning', 'Goal setting', 'Prioritizing', 'Focus']
    },
    {
        title: "Work Ethic",
        icon: <GrWorkshop />,
        description: "The foundation for any great employee, work ethic is one of the most basic, widely transferable soft skills there is",
        utterances: ['Integrity', 'Discipline', 'Responsibility']
    }
];

export const TECNICAL_SKILL_DATA = [
    {
        title: "HTML5",
        icon: <GrHtml5 />,
        description: "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser",
        utterances: ['WHATWG', 'Document file format', 'HTML 5.2']
    },
    {
        title: "CSS3",
        icon: <GrCss3 />,
        description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
        utterances: ['W3C', 'Style sheet language', 'CSS 2.1']
    },
    {
        title: "JavaScript",
        icon: <SiJavascript />,
        description: "JavaScript is high-level programming language, often just-in-time compiled, and multi-paradigm.",
        utterances: ['ECMAScript 2020', 'event-driven', 'Netscape']
    },
    {
        title: "ReactJS",
        icon: <SiReact />,
        description: "React is an open-source, front end, JavaScript library for building user interfaces or UI components.",
        utterances: ['Facebook', 'Web platform', '17.0.2']
    },
    {
        title: "Redux",
        icon: <SiRedux />,
        description: "Redux is an open-source JavaScript library for managing application state",
        utterances: ['Dan Abramov', 'Cross-platform software', '4.0.5']
    }
];

export const NON_TECH_SKILL_DATA = [
    {
        title: "Languages",
        icon: <SiGoogletranslate />,
        description: "A language is a structured system of communication used by humans, including speech, gestures and writing.",
        utterances: ['Hindi', 'Telugu', 'English']
    },
    {
        title: "Hobby",
        icon: <GiMusicalNotes />,
        description: "A hobby is considered to be a regular activity that is done for enjoyment, typically during one's leisure time.",
        utterances: ['Play music', 'Fitness', 'fpp-games']
    },
    {
        title: "Languages",
        icon: <SiGoogletranslate />,
        description: "A language is a structured system of communication used by humans, including speech, gestures and writing.",
        utterances: ['Hindi', 'Telugu', 'English']
    },
    {
        title: "Hobby",
        icon: <GiMusicalNotes />,
        description: "A hobby is considered to be a regular activity that is done for enjoyment, typically during one's leisure time.",
        utterances: ['Play music', 'Fitness', 'fpp-games']
    },
    
]