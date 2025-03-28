import { useProjects } from '../../../hooks/UseProjects';


export const NavBar = () => {

  const {projects} = useProjects();

  return (
    <nav className="menu-cote">
            <div className="logo-cahier">📓</div>
            <ul className="menu-notes">
                <li className="active"><a href="#"><span>Notes du jour</span></a></li>
                <li className="menu-projets">
                    <select className="select-projets">
                        <option value="" selected disabled>Projets</option>
                        {
                          projects.map(project => (
                            <option value="projet5">{project.name}</option>
                          ))
                        }
                        <option value="nouveau-projet">+ Créer un projet</option>
                    </select>
                </li>
                <li><a href="#"><span>Idées</span></a></li>
                <li><a href="#"><span>Listes</span></a></li>
                <li><a href="#"><span>Archives</span></a></li>
            </ul>
            <div className="outils-notes">
                <button className="btn-notes" id="nouvelle-note">+ Nouvelle note</button>
                <button className="btn-notes" id="recherche">🔍 Rechercher</button>
            </div>
    </nav>
  );
};