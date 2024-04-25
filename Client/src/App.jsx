import { Header } from './components/Header'
import { Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css'

function App() {
  
  return (
    <>
      <div>
        <Header/>
        <Routes>
          <Route exact path={"/"} element={<Home/>}/>
        </Routes>
      </div>    
    </>
  )
}

export default App
