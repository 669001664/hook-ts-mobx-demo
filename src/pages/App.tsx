import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ROUTES from '../router'
const Home = lazy(() => import('./Home'))
const Login = lazy(() => import('./Login'))

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App