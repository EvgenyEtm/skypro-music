import { Navigate, Outlet } from 'react-router-dom'
// import { useState } from 'react'

export const ProtectedRoute = ({ redirectPath = '/auth' }) => {
  let user = localStorage.getItem('token')

  if (!user) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}
