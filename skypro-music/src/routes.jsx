import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages//Login/Login.jsx'
import { RegistrationPage } from './pages/Registr/Registration.jsx'
import { MainPage } from './pages/MainPage/MainPage.jsx'
import { MyPlaylist } from './pages/PlayList/MyPlaylist.jsx'
import { NotFound } from './pages/404/NotFound404.jsx'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.jsx'
import { FavoriteCategory } from './pages/Favorites/Category.jsx'

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route element={<ProtectedRoute isAllowed={user} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<MyPlaylist />} />
        <Route path="/category/:id" element={<FavoriteCategory />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
