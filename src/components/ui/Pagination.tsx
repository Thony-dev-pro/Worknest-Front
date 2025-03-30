import '../../assets/styles/css/pagination.css'

export const Pagination = () => {
  return (
    <div className="pagination">
        <ul className="pagination-list">
            <li className="pagination-item">
                <a href="#" className="pagination-link is-disabled pagination-arrow">&lt;</a>
            </li>
            <li className="pagination-item">
                <a href="#" className="pagination-link is-current">1</a>
            </li>
            <li className="pagination-item">
                <a href="#" className="pagination-link">2</a>
            </li>
            <li className="pagination-item">
                <a href="#" className="pagination-link">3</a>
            </li>
            <li className="pagination-item">
                <a href="#" className="pagination-link pagination-arrow">&gt;</a>
            </li>
        </ul>
    </div>
  );
};