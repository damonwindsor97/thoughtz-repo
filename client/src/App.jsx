import { Route, Routes } from 'react-router-dom'

import Layout from './layout/Layout'
import AuthRoutes from './layout/AuthRoutes'

import Home from './pages/Home/Home'

import Profile from './pages/Profile/Profile'
import EditProfile from './pages/Profile/EditProfile'

import NotFound from './pages/NotFound'



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* Only logged out users will see this page */}
        <Route index element={<Home/>}/>

        {/* PRIVATE AUTH ROUTES FOR USERS ONLY */}
        <Route element={<AuthRoutes/>}>
          <Route path="profile">
            <Route path=":id" element={<Profile/>}/>
            <Route path="edit/:id" element={<EditProfile/>}/>

          </Route>

          {/* User Post Routes */}

        </Route>

        {/* Not found */}
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App