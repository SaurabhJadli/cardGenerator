import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import CardGen from './pages/CardGen'
import DemoP from './pages/DemoP'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/app' element={<Layout />}>
          <Route path='idgen' element={<CardGen />} />
        </Route>
        <Route path='/demoP' element={<DemoP />} />
      </Routes>
    </>
  )
}

export default App