import { Routes, Route } from 'react-router-dom'
import { RegistrationPage } from './pages/Registr/Registration.jsx'
import { MainPage } from './pages/MainPage/MainPage.jsx'
import { MyPlaylist } from './pages/PlayList/MyPlaylist.jsx'
import { NotFound } from './pages/404/NotFound404.jsx'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.jsx'
import { FavoriteCategory } from './pages/Favorites/Category.jsx'

export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={<LoginPage setUsername={setUsername} />} /> */}
      <Route path="/auth" element={<RegistrationPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<MyPlaylist />} />
        <Route path="/category/:id" element={<FavoriteCategory />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
