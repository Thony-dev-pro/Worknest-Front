import './assets/styles/css/style.css'
import { NavBar } from './components/features/navbar/navbar'
import { TasksList } from './components/features/task/TableTasks'

function App() {
  return (
    <>
      <div className="cahier-container">
        <NavBar></NavBar>

        <main className="contenu-principal">
                <div className="lignes-papier"></div>
                <div className="contenu-note">
                    <TasksList></TasksList>
                </div>
                <div className="coins-papier"></div>
        </main>
    </div>
    </>
  )
}

export default App
