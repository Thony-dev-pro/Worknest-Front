import '../../../assets/styles/css/detail.css'

export const Detail = () => {
  return (
    <div>
        <div className="notepad-field">
              <label className="notepad-label">Description :</label>
              <textarea className="notepad-textarea" placeholder="Ajoutez une description détaillée...">Préparer la réunion du 15 mars avec l'équipe commerciale pour discuter des objectifs trimestriels.</textarea>
          </div>
          
          <div className="notepad-checklist">
              <h4 className="notepad-checklist-title">Affichage :</h4>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check1" checked />
                  <label>Préparer l'ordre du jour</label>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check2" />
                  <label>Envoyer les invitations</label>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check3" />
                  <label>Préparer les supports visuels</label>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check4" />
                  <label>Réserver la salle de réunion</label>
              </div>
          </div>

          <div className="notepad-checklist">
              <h4 className="notepad-checklist-title">Métier :</h4>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check1" checked />
                  <label>Préparer l'ordre du jour</label>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check2" />
                  <label>Envoyer les invitations</label>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check3" />
                  <label>Préparer les supports visuels</label>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check4" />
                  <label>Réserver la salle de réunion</label>
              </div>
          </div>

          <div className="notepad-checklist">
              <h4 className="notepad-checklist-title">Base de donnée :</h4>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check1" checked />
                  <label>Préparer l'ordre du jour</label>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check2" />
                  <label>Envoyer les invitations</label>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check3" />
                  <label>Préparer les supports visuels</label>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check4" />
                  <label>Réserver la salle de réunion</label>
              </div>
          </div>
          <div className="notepad-checklist">
              <h4 className="notepad-checklist-title">Documents :</h4>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check1" checked />
                  <label>Préparer l'ordre du jour</label>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check2" />
                  <label>Envoyer les invitations</label>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check3" />
                  <label>Préparer les supports visuels</label>
              </div>
              
              <div className="notepad-checklist-item">
                  <input type="checkbox" id="check4" />
                  <label>Réserver la salle de réunion</label>
              </div>
          </div>
    </div>
  );
};