import { Route, Routes } from 'react-router-dom'
import Header from './components/layouts/header'
import Wrapper from './components/wrapper'
import Home from './pages/home'

function App() {

  return (
    <>        
      <Header/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </>
  )
}

export default App
