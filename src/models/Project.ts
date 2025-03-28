export class Project{
    id:number;
    name:string;
    git_link:string;

    constructor(id:number,name:string,git_link:string){
       this.id = id;
       this.name = name;
       this.git_link = git_link;
    }
}