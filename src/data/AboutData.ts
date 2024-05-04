interface Skill {
  name: string;
  type: string;
}

interface AboutMeButton {
  text: string;
  url: string;
}

interface Portrait {
  alt?: string;
  src: string;
}

interface AboutMe {
  portrait: Portrait;
  header: string;
  bio: string;
  buttons: AboutMeButton[];
  skills: Skill[];
}

export const aboutMe: AboutMe = {
  portrait: {
    alt: 'A picture of Ratul',
    src: '/img/portrait.jpg',
  },
  header: 'I love building stuff  💻',
  bio: "I always enjoy taking part in projects and turning ideas into reality. Whether I'm developing websites, building apps, or solving coding challenges, I get my greatest kick from watching my projects come to life and from the thrill of problem-solving. I am eager to keep learning new skills, expanding my knowledge of cutting-edge technologies, and working on worthwhile initiatives that have a positive impact.",
  buttons: [],
  skills: [
    // devOps, db, tools, cms, frontend, backend
    // cms: Content Management System
    { name: 'Solidity', type: 'backend' },
    { name: 'Foundry', type: 'backend' },
    { name: 'Typescript', type: 'backend' },
    { name: 'React', type: 'frontend' },
    { name: 'Node.js', type: 'backend' },
    { name: 'HTML', type: 'frontend' },
    { name: 'CSS', type: 'frontend' },
    { name: 'Next.js', type: 'frontend' },
    { name: 'Hardhat', type: 'tools' },
  ],
};
