import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { ToastContainer } from 'react-toastify'
import Loading from './components/loading/Loading'

const App = () => {
  return (
    <>
    <Suspense fallback={<Loading/>}>
       <RouterProvider router={routes}/>
    </Suspense>
    <ToastContainer/>
    </>
  )
}

export default App