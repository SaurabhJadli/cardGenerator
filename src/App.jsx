import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import CardGen from './pages/CardGen'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/app' element={<Layout />}>
          <Route path='idgen' element={<CardGen />} />
        </Route>
      </Routes>
    </>
  )
}

export default App