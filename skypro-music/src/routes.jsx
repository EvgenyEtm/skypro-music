import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages//Login/Login.jsx'
import { RegistrationPage } from './pages/Registr/Registration.jsx'
import { MainPage } from './pages/MainPage/MainPage.jsx'
import { MyPlaylist } from './pages/PlayList/MyPlaylist.jsx'
import { HundredHits } from './pages/Collections/HundredHits.jsx'
import { IndiCharge } from './pages/Collections/IndiCharge.jsx'
import { PlaylistOfTheDay } from './pages/Collections/PlayListOfTheDay.jsx'
import { NotFound } from './pages/404/NotFound404.jsx'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.jsx'
ProtectedRoute
export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/myplaylist" element={<MyPlaylist />} />
        <Route path="/hundredhits" element={<HundredHits />} />
        <Route path="/indicharge" element={<IndiCharge />} />
        <Route path="/playlistoftheday" element={<PlaylistOfTheDay />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
