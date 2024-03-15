import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../src/contexts/AuthContext'

import Layout from './layout/Layout'

import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'
import MainPage from './pages/MainPage'

import AuthRoutes from './layout/AuthRoutes'




function App() {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

        {/* No user? they can see the Home Page */}
        {!user && <Route index element={<Home/>}/>}

        {/* PRIVATE AUTH ROUTES FOR USERS ONLY */}
        <Route element={<AuthRoutes/>}>
          <Route path="feed" element={<MainPage/>}/>

        </Route>

        {/* Not found */}
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App