import '../../assets/styles/css/search.css'

export const Filter = () => {
  return (
    <div className="search-filter-container">
        <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" id="search-input" placeholder="Rechercher une tâche..."/>
        </div>
        
        <div className="date-filter">
            <div>
                <label>De:</label>
                <input type="date" id="start-date"/>
            </div>
            <div>
                <label>À:</label>
                <input type="date" id="end-date"/>
            </div>
            <button className="filter-btn" id="apply-filter">Filtrer</button>
            <button className="filter-btn" id="reset-filter">Réinitialiser</button>
        </div>
    </div>
  );
};