import '../../../assets/styles/css/detail.css'

export const Detail = () => {
  return (
    <div>
    
        <div className="notepad-field">
              <label className="notepad-label">Description :</label>
              <textarea className="notepad-textarea" placeholder="Ajoutez une description détaillée...">Préparer la réunion du 15 mars avec l'équipe commerciale pour discuter des objectifs trimestriels.</textarea>
          </div>

          <div className="date-fields">
                <div className="date-field">
                    <label className="notepad-label">Date de début :</label>
                    <input type="date" className="date-input" id="start-date" value="2023-03-15"/>
                </div>
                <div className="date-field">
                    <label className="notepad-label">Date de fin :</label>
                    <input type="date" className="date-input" id="end-date" value="2023-03-17"/>
                </div>
        </div>
          
          <div className="notepad-checklist">
              <h4 className="notepad-checklist-title">Affichage :</h4>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check1" checked />
                  <label>Préparer l'ordre du jour</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check2" />
                  <label>Envoyer les invitations</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check3" />
                  <label>Préparer les supports visuels</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check4" />
                  <label>Réserver la salle de réunion</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>

              <div className="add-checklist-item">
                <button className="add-item-btn">
                    <span className="plus-icon">+</span> Ajouter une tâche
                </button>
            </div>
          </div>

          <div className="notepad-checklist">
              <h4 className="notepad-checklist-title">Métier :</h4>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check1" checked />
                  <label>Préparer l'ordre du jour</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check2" />
                  <label>Envoyer les invitations</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check3" />
                  <label>Préparer les supports visuels</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check4" />
                  <label>Réserver la salle de réunion</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              <div className="add-checklist-item">
                <button className="add-item-btn">
                    <span className="plus-icon">+</span> Ajouter une tâche
                </button>
            </div>
          </div>

          <div className="notepad-checklist">
              <h4 className="notepad-checklist-title">Base de donnée :</h4>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check1" checked />
                  <label>Préparer l'ordre du jour</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check2" />
                  <label>Envoyer les invitations</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check3" />
                  <label>Préparer les supports visuels</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check4" />
                  <label>Réserver la salle de réunion</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              <div className="add-checklist-item">
                <button className="add-item-btn">
                    <span className="plus-icon">+</span> Ajouter une tâche
                </button>
            </div>
          </div>
          <div className="notepad-checklist">
              <h4 className="notepad-checklist-title">Documents :</h4>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check1" checked />
                  <label>Préparer l'ordre du jour</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check2" />
                  <label>Envoyer les invitations</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check3" />
                  <label>Préparer les supports visuels</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check4" />
                  <label>Réserver la salle de réunion</label>
                  <div className="duration-controls">
                    <input type="number" min="0" value="30" className="duration-input"/>
                    <select className="duration-unit">
                        <option value="minutes">minutes</option>
                        <option value="hours">heures</option>
                    </select>
                 </div>
                 <button className="delete-item-btn" title="Supprimer cette tâche">×</button>
              </div>
              <div className="add-checklist-item">
                <button className="add-item-btn">
                    <span className="plus-icon">+</span> Ajouter une tâche
                </button>
            </div>
          </div>
    </div>
  );
};