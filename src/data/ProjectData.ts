export interface ProjectData {
  img: string;
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  liveDemo?: string;
}

export const ProjectList: ProjectData[] = [
  {
    img: 'img/ykte-feature-graphic.png',
    title: 'YouKnowTheEnding',
    description:
      'A cross-platform mobile game (in closed testing) where players try to find the missing pieces of a story.',
    techStack: ['React Native', 'Google Cloud', 'NextJs', 'TailwindCSS'],
    liveDemo: 'https://youknowtheending.net/',
  },
  {
    img: 'img/renr-responsive.png',
    title: 'RENR Safety App',
    description: 'A safety application for the Renewable Resources Dept. of BCIT',
    techStack: ['React', 'Firebase'],
    liveDemo: 'https://renr-bcit.web.app/',
  },
  {
    img: 'img/mymind-responsive.png',
    title: 'MyMind',
    description:
      'An app where users can purchase online therapy sessions and chat with their therapists.',
    techStack: ['HTML', 'CSS', 'NodeJs', 'MongoDB', 'SocketIo'],
    github: 'https://github.com/salesp07/MyMind---Copy',
    liveDemo: 'https://mymindweb.vercel.app/',
  },
  {
    img: 'img/pokedex-responsive.png',
    title: 'Pokedex',
    description: 'A pokedex app that displays pokemon data, plays OSTs and makes pokemons dance.',
    techStack: ['ReactJs', 'NodeJs', 'MongoDB'],
    github: 'https://github.com/salesp07/Pokedex-ReactApp',
    liveDemo: 'https://pokedex-salesp07.netlify.app/',
  },
  {
    img: 'img/jobDetect.png',
    title: 'JobDetect',
    description: 'An app to detect if a job posting is a scam or not using its description.',
    techStack: ['Python', 'Flask', 'NodeJs', 'MongoDB'],
    github: 'https://github.com/salesp07/JobDetectNode',
    liveDemo: 'https://jobdetective.onrender.com/',
  },
];
