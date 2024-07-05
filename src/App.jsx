import { Outlet } from 'react-router-dom'
import './App.css'

export default function App() {  
  return (
    <>
      <header>
        <h1>ToDo List</h1>
      </header>
      <Outlet />
      <footer>
        <p>&copy; Todos os direitos reservados</p>
      </footer>
    </>
  )
}
