import {
  Gamepad2,
  Headphones,
  Image,
  LucideIcon,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
} from 'lucide-react';

export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: 'Med On Time',
    techStack: 'ReactJS, Tailwind CSS',
    imageUrl: 'hero_image.png',
    href: 'https://medontime.vercel.app/',
  },
  {
    id: 2,
    title: 'Financesmart',
    techStack:'Node js., Tailwind CSS, Express js. MongoDB, JWT, Cloudinary',
    imageUrl: 'book-ecom2.jpg',
    href: 'https://financesmart-bc8j.vercel.app/',
  },
  {
    id: 3,
    title: 'Chat App',
    techStack:
      'Mongoose, Express, React.js,NodeJs, Tailwind CSS',
    imageUrl: 'chat-app.jpeg',
    href: 'https://chat-app-fv9e.onrender.com/',
  },
  {
    id: 4,
    title: 'Ecommerce-Mern [Under Development]',
    techStack: 'HTML, Nodejs, Express, ReactJS, Tailwind CSS',
    imageUrl: 'ecommerce.png',
    href: 'https://ecommerce-mern-omega-one.vercel.app/',
  },
];

export const moreProjects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    techStack: 'CSS, HTML, Javascript',
    icon: 'shirt',
    href: 'https://github.com/SagnikPal-7/E-Commerce-Website',
  },
  {
    id: 2,
    title: 'Hotstar Clone',
    techStack: 'HTML, CSS, Javascript',
    icon: 'lottery',
    href: 'https://github.com/SagnikPal-7/Hotstar-Clone',
  },
  /*{
    id: 3,
    title: 'File Sharing App',
    techStack: 'Node js, Express, Web Sockets, WebRTC, ReactJs',
    icon: 'share',
    href: '#',
  },*/

  // {
  //   id: 4,
  //   title: 'Snake Game',
  //   techStack: 'Next.js 13, Tailwind CSS, Typescript',
  //   icon: 'game',
  //   href: '#',
  // },
];

export const frontendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'HTML, CSS',
    src: '/tech/frontend/htmlcss.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'Tailwind',
    src: '/tech/frontend/tailwind.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: 'Javascript, Typescript',
    src: '/tech/frontend/jsts.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 85,
  },
  {
    id: 4,
    title: 'Reactjs',
    src: '/tech/frontend/reactjs.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: 'Nextjs',
    src: '/tech/frontend/nextjs13.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
];

export const backendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'NodeJs',
    src: '/tech/backend/nodejs.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'ExpressJs',
    src: '/tech/backend/express.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  /*{
    id: 3,
    title: 'DenoJs',
    src: '/tech/backend/denojs.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 60,
  },
  {
    id: 4,
    title: 'Next Auth',
    src: '/tech/backend/nextauth.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },*/
  /*{
    id: 5,
    title: 'PHP',
    src: '/tech/backend/php.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },*/
];

export const databaseCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'MySQL',
    src: '/tech/database/mysql.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: 'MongoDB',
    src: '/tech/database/mongo.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  /*{
    id: 3,
    title: 'Redis',
    src: '/tech/database/redis.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 4,
    title: 'PostgreSQL',
    src: '/tech/database/postgres.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: 'Elastic Search',
    src: '/tech/database/elasticSearch.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },*/
];

export const devopsCards: ISectionCardData[] = [
  /*{
    id: 1,
    title: 'Docker',
    src: '/tech/devops/docker.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: 'Kubernetes',
    src: '/tech/devops/k8s.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },*/
  {
    id: 3,
    title: 'GIT',
    src: '/tech/devops/git.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  /*{
    id: 4,
    title: 'Jenkins',
    src: '/tech/devops/jenkins.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: 'Terraform',
    src: '/tech/devops/terraform.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 60,
  },*/
];

export const web3Cards: ISectionCardData[] = [
  // {
  //   id: 1,
  //   title: 'Rust',
  //   src: '/tech/web3/rust.jpg',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 90,
  // },
  /*{
    id: 2,
    title: 'Hardhat',
    src: '/tech/web3/hardhat.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: 'Metamask',
    src: '/tech/web3/metamask.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 4,
    title: 'Chainlink',
    src: '/tech/web3/chainlink.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: 'OpenZeppelin',
    src: '/tech/web3/openzeppelin.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },*/
];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Rest API',
    src: '/tech/others/rest.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  /*{
    id: 2,
    title: 'SOAP API',
    src: '/tech/others/soap.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 3,
    title: 'GraphQl',
    src: '/tech/others/graphql.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },*/
];
