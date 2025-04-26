import { Game, Value, FAQ, TeamMember } from '../types';
import { Compass, Lightbulb, Users, Shield, Puzzle } from 'lucide-react';

export const games: Game[] = [
  {
    id: 'game1',
    title: 'SkyMaster Pro',
    description: 'Our flagship flight simulator with unparalleled physics and visually stunning cockpit details. Experience the thrill of flight with precise weather systems and global scenery.',
    imageUrl: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'game2',
    title: 'Urban Architect',
    description: 'Build and manage sprawling cities with intricate economic systems. From infrastructure to social policies, every decision shapes your metropolis in this detailed city simulator.',
    imageUrl: 'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'game3',
    title: 'What\'s Next?',
    description: 'We\'re constantly innovating and working on the next generation of simulation experiences. Stay tuned for updates!',
    imageUrl: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const values: Value[] = [
  {
    id: 'authenticity',
    title: 'Authenticity',
    description: 'We strive for unparalleled realism, grounding our simulations in meticulous research and accurate mechanics.',
    icon: 'Compass',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'We leverage the latest technology and creative design to push the boundaries of what simulation games can achieve.',
    icon: 'Lightbulb',
  },
  {
    id: 'player-focus',
    title: 'Player Focus',
    description: 'We design engaging and rewarding experiences, listening to our community to build games players love.',
    icon: 'Users',
  },
  {
    id: 'quality',
    title: 'Quality Craftsmanship',
    description: 'From code to art, we are committed to the highest standards of development and polish.',
    icon: 'Shield',
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'We foster a creative and supportive environment where great ideas can flourish.',
    icon: 'Puzzle',
  },
];

export const faqs: FAQ[] = [
  {
    id: 'faq1',
    question: 'What types of simulation games do you create?',
    answer: 'We specialise in high-fidelity simulations, including flight simulators, vehicle (cars, trucks, specialized machinery) simulators, and city/economic simulation games. Our focus is always on realism and depth.',
  },
  {
    id: 'faq2',
    question: 'What platforms are your games available on?',
    answer: 'Platform availability varies per title. Please check the specific game pages for details. We primarily target PC platforms but are always exploring opportunities on consoles where feasible for the simulation experience.',
  },
  {
    id: 'faq3',
    question: 'Are you hiring?',
    answer: 'We are always interested in hearing from talented individuals passionate about simulation games. While we may not always have open positions, feel free to reach out via our contact email with your portfolio or CV.',
  },
  {
    id: 'faq4',
    question: 'How can I report a bug or provide feedback?',
    answer: 'We value player feedback! Please use the contact form or email address provided on our Contact page. For game-specific issues, check if there are dedicated support channels listed on the game\'s page or community forums.',
  },
];

export const team: TeamMember[] = [
  {
    id: 'team1',
    name: 'Alex Morgan',
    role: 'Lead Game Designer',
    bio: 'With over 15 years in simulation design, Alex leads our creative vision.',
  },
  {
    id: 'team2',
    name: 'Sarah Chen',
    role: 'Technical Director',
    bio: 'Sarah ensures our simulations maintain the highest standard of technical excellence.',
  },
  {
    id: 'team3',
    name: 'James Wilson',
    role: 'Art Director',
    bio: 'James brings our worlds to life with stunning visual fidelity and attention to detail.',
  },
  {
    id: 'team4',
    name: 'Olivia Patel',
    role: 'Physics Programmer',
    bio: 'Olivia creates the sophisticated physics systems that power our realistic simulations.',
  },
];

export const companyInfo = {
  name: 'HELLO GAMES LIMITED',
  address: 'Dolphin House, 3 North Street, Guildford, Surrey, England, GU1 4AA, B74 2DG',
  email: 'hello@hellogames.co.uk',
  regNumber: '12345678', // Placeholder - replace with actual number if available
  year: new Date().getFullYear(),
};