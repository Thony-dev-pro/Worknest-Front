import { Project } from "../models/Project";
import dataProject from "../assets/styles/data/ProjectData.json"

export class ProjectService {
    async getAll() : Promise<Project[]>{
        const data = new Promise<Project[]>(resolve => {
            setTimeout(() => resolve(dataProject), 300); // 300ms de délai
        });
        return data;
    }
}