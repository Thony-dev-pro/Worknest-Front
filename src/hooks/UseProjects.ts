import { useEffect, useState } from "react";
import { Project } from "../models/Project";
import { ProjectService } from '../services/ProjectService';

const projectService = new ProjectService();

export function useProjects(){
    const [state, setState] = useState<{
        projects: Project[]
      }>({
        projects: []
      });

      useEffect(() => {
        const fetchProjects = async () => {
          try{
              const projects = await projectService.getAll();
              setState({projects});
          }catch(e){
              console.log(e);
          }
        }
    
        fetchProjects();
      }, []);

    return state;
}