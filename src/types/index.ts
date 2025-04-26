export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
}