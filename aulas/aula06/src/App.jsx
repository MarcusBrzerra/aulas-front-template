import { Routes, Route } from 'react-router'
import Listagem from './pages/Listagem.jsx'
import Formularios from './pages/Formularios.jsx'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/produtos" element={<Listagem />} />
      <Route path="/produtos/novo" element={<Formularios />} />
      <Route path="/produtos/editar/:id" element={<Formularios />} />
    </Routes>
  )
}

export default App
