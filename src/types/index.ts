export interface Role {
    id: string;
    title: string;
    description: string;
    responsibilities: string[];
}

export interface Project {
    id: string;
    name: string;
    description: string;
    link: string;
    contributors: string[];
}

export interface Member {
    id: string;
    name: string;
    role: string;
    avatarUrl: string;
}