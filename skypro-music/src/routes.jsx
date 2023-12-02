import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages//Login/Login.jsx'
import { RegistrationPage } from './pages/Registr/Registration.jsx'
import { MainPage } from './pages/MainPage/MainPage.jsx'
import { MyPlaylist } from './pages/PlayList/MyPlaylist.jsx'
import { NotFound } from './pages/404/NotFound404.jsx'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.jsx'
import { FavoriteCategory } from './pages/Favorites/Category.jsx'
// import { useState } from 'react'

export const AppRoutes = ({
  singles,
  setSingles,
  arrayTrack,
  setArrayTrack,
  isLoadind,
  setIsLoadind,
}) => {
  console.log(localStorage)
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={
            <MainPage
              singles={singles}
              setSingles={setSingles}
              setArrayTrack={setArrayTrack}
              arrayTrack={arrayTrack}
              isLoadind={isLoadind}
              setIsLoadind={setIsLoadind}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <MyPlaylist
              singles={singles}
              arrayTrack={arrayTrack}
              setArrayTrack={setArrayTrack}
              isLoadind={isLoadind}
              setIsLoadind={setIsLoadind}
              setSingles={setSingles}
            />
          }
        />
        <Route
          path="/category/:id"
          element={
            <FavoriteCategory
              arrayTrack={arrayTrack}
              setSingles={setSingles}
              isLoadind={isLoadind}
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
