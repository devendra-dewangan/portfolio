export interface Skill{
    name:string;
    logoURL:string;
}

export interface SkillGroup{
    type:string;
    skills:Skill[];
}

export type Skills = SkillGroup[];