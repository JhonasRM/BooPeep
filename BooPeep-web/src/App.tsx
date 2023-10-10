import './App.css'
import { Link } from "react-router-dom";


function App() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <Link to='login'>TelaLogin</Link>
      <Link to='cadastro'>TelaCadastro</Link>
    </div>
  )
}

export default App
