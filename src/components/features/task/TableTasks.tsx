

export const TasksList = () => {

  return (
    <div className="notepad">
        <div className="notepad-header">
            <h1 className="notepad-title">Vanilla Pay International</h1>
            <div className="notepad-date" id="current-date"></div>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th>Domaine</th>
                    <th>Enregitrement</th>
                    <th>Initiateur</th>
                    <th>Titre</th>
                    <th>Priorité</th>
                    <th>Type</th>
                    <th>Etat</th>
                    <th>Début</th>
                    <th>DL</th>
                    <th>MEPP</th>
                    <th>MEP</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="status-select">
                            <select>
                                <option value="En attente">Pro</option>
                                <option value="En cours">Admin</option>
                                <option value="Terminé">API</option>
                                <option value="Annulé">DOCS API</option>
                                <option value="Annulé">Serveur</option>
                                <option value="Annulé">DOCS</option>
                            </select>
                        </div>
                    </td>
                    <td>15/03/2023</td>
                    <td>Johary</td>
                    <td>MAJ TAUX</td>
                    <td>
                        <div className="status-select">
                            <select>
                                <option value="1">🟢 Basse</option>
                                <option value="2">🟡 Normale</option>
                                <option value="3">🟠 Haute</option>
                                <option value="4">🔴 Urgente</option>
                            </select>         
                        </div>
                    </td>
                    <td>
                        <div className="status-select">
                            <select>
                                <option value="En attente">🔴 Anomalie</option>
                                <option value="En cours">🟠 Amélioration</option>
                                <option value="Terminé">🟢 Evolution</option>
                                <option value="Annulé">🔵 Document</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="status-select">
                            <select>
                                <option value="En attente">🔵 A Planifier</option>
                                <option value="En cours">🟠 En Cours</option>
                                <option value="Terminé">🟡 En Preprod</option>
                                <option value="Annulé">🟣 En local</option>
                                <option value="Annulé">🟤 En Conception</option>
                                <option value="Annulé">⚫ A Vérifier</option>
                                <option value="Annulé">🔴 A Corriger</option>
                                <option value="Annulé">🟫 A Corriger</option>
                            </select>
                        </div>
                    </td>
                    <td>29/03/2025</td>
                    <td>29/03/2025</td>
                    <td>29/03/2025</td>
                    <td>29/03/2025</td>
                    <td>
                        <div className="actions-dropdown">
                            <button className="dropdown-btn">Actions</button>
                            <div className="dropdown-content">
                                <button className="edit">Détail</button>
                                <button className="delete">⬆ MEP</button>
                                <button className="archive">⬆ MEPP</button>
                                <button className="archive">❌ Supprimer</button>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="status-select">
                            <select>
                                <option value="En attente">Pro</option>
                                <option value="En cours">Admin</option>
                                <option value="Terminé">API</option>
                                <option value="Annulé">DOCS API</option>
                                <option value="Annulé">Serveur</option>
                                <option value="Annulé">DOCS</option>
                            </select>
                        </div>
                    </td>
                    <td>15/03/2023</td>
                    <td>Johary</td>
                    <td>MAJ TAUX</td>
                    <td>
                        <div className="status-select">
                            <select>
                                <option value="1">🟢 Basse</option>
                                <option value="2">🟡 Normale</option>
                                <option value="3">🟠 Haute</option>
                                <option value="4">🔴 Urgente</option>
                            </select>         
                        </div>
                    </td>
                    <td>
                        <div className="status-select">
                            <select>
                                <option value="En attente">🔴 Anomalie</option>
                                <option value="En cours">🟠 Amélioration</option>
                                <option value="Terminé">🟢 Evolution</option>
                                <option value="Annulé">🔵 Document</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="status-select">
                            <select>
                                <option value="En attente">🔵 A Planifier</option>
                                <option value="En cours">🟠 En Cours</option>
                                <option value="Terminé">🟡 En Preprod</option>
                                <option value="Annulé">🟣 En local</option>
                                <option value="Annulé">🟤 En Conception</option>
                                <option value="Annulé">⚫ A Vérifier</option>
                                <option value="Annulé">🔴 A Corriger</option>
                                <option value="Annulé">🟫 A Corriger</option>
                            </select>
                        </div>
                    </td>
                    <td>29/03/2025</td>
                    <td>29/03/2025</td>
                    <td>29/03/2025</td>
                    <td>29/03/2025</td>
                    <td>
                        <div className="actions-dropdown">
                            <button className="dropdown-btn">Actions</button>
                            <div className="dropdown-content">
                                <button className="edit">Détail</button>
                                <button className="delete">⬆ MEP</button>
                                <button className="archive">⬆ MEPP</button>
                                <button className="archive">❌ Supprimer</button>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="status-select">
                            <select>
                                <option value="En attente">Pro</option>
                                <option value="En cours">Admin</option>
                                <option value="Terminé">API</option>
                                <option value="Annulé">DOCS API</option>
                                <option value="Annulé">Serveur</option>
                                <option value="Annulé">DOCS</option>
                            </select>
                        </div>
                    </td>
                    <td>15/03/2023</td>
                    <td>Johary</td>
                    <td>MAJ TAUX</td>
                    <td>
                        <div className="status-select">
                            <select>
                                <option value="1">🟢 Basse</option>
                                <option value="2">🟡 Normale</option>
                                <option value="3">🟠 Haute</option>
                                <option value="4">🔴 Urgente</option>
                            </select>         
                        </div>
                    </td>
                    <td>
                        <div className="status-select">
                            <select>
                                <option value="En attente">🔴 Anomalie</option>
                                <option value="En cours">🟠 Amélioration</option>
                                <option value="Terminé">🟢 Evolution</option>
                                <option value="Annulé">🔵 Document</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="status-select">
                            <select>
                                <option value="En attente">🔵 A Planifier</option>
                                <option value="En cours">🟠 En Cours</option>
                                <option value="Terminé">🟡 En Preprod</option>
                                <option value="Annulé">🟣 En local</option>
                                <option value="Annulé">🟤 En Conception</option>
                                <option value="Annulé">⚫ A Vérifier</option>
                                <option value="Annulé">🔴 A Corriger</option>
                                <option value="Annulé">🟫 A Corriger</option>
                            </select>
                        </div>
                    </td>
                    <td>29/03/2025</td>
                    <td>29/03/2025</td>
                    <td>29/03/2025</td>
                    <td>29/03/2025</td>
                    <td>
                        <div className="actions-dropdown">
                            <button className="dropdown-btn">Actions</button>
                            <div className="dropdown-content">
                                <button className="edit">Détail</button>
                                <button className="delete">⬆ MEP</button>
                                <button className="archive">⬆ MEPP</button>
                                <button className="archive">❌ Supprimer</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  );
};