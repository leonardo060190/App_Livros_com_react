import './App.css';
import MenuSuperior from './components/MenuSuperior';
import InclusaoLivros from './components/InclusaoLivros';
import { Routes, Route } from 'react-router-dom';
import ManutencaoLivros from './components/ManutencaoLivros';
import ResumoLivros from './components/ResumoLivros';
import InclusaoAutores from './components/InclusaoAutores';
import InclusaoEditoras from './components/InclusaoEditoras';

  const App = () => {
  return( // tudo que vai no return é o que aparece na aplicação
  <>
  <MenuSuperior />
  <Routes>
    <Route path="/" element={ <InclusaoLivros />} />
    <Route path="/autores" element={ <InclusaoAutores />} />
    <Route path="/editoras" element={ <InclusaoEditoras />} />
    <Route path="/manutencao" element={ <ManutencaoLivros />} />
    <Route path="/resumo" element={ <ResumoLivros />} />

  </Routes>
  </>
  );
}
//Serão criados 3 compomentes para essa aplicação
//MeuSuperior.js
//InclusaoLivros.js

export default App;
