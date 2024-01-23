import { Route, Routes } from 'react-router-dom'
import Header from './components/layouts/header'
import Wrapper from './components/wrapper'
import Home from './pages/home'
import AnimePage from './pages/anime'

function App() {

  return (
    <>        
      <Header/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/anime' element={<AnimePage/>}/>
      </Routes>
    </>
  )
}

export default App
