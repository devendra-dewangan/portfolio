export interface Social{
    name:string,
    link:string,
    logo:string   
}

export interface About{
    description: string;
    image: string;
}

export interface Profile{
    name: string;
    title: string;
    summary: string;
    skills : string[];
    email: string;
    phone:string;
    address: string;
    about:About[]  
    cvLink: string;
    copyright: string;
    socials: Social[]
}