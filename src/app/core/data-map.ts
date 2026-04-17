import { Achievements } from "../models/achievement.model";
import { Educations } from "../models/education.medel";
import { Experiences } from "../models/experience.model";
import { Profile } from "../models/profile.model";
import { Projects } from "../models/project.model";
import { Skills } from "../models/skill.model";

export interface DataMap {
    profile: Profile;
    skills: Skills;
    achievements: Achievements;
    experiences: Experiences;
    projects: Projects;
    educations: Educations;
}