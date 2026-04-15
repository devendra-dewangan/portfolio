export interface Skill{
    name:string;
    logoUrl:string;
}

export interface SkillGroup{
    type:string;
    skills:Skill[];
}

export type Skills = SkillGroup[];