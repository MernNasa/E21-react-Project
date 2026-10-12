import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { ToastContainer } from 'react-toastify'
import Loading from './components/loading/Loading'
import SearchContextAPI from './contextAPI/SearchContextAPI'

const App = () => {
  return (
    <>
    <Suspense fallback={<Loading/>}>
       <SearchContextAPI>
        <RouterProvider router={routes}/>
       </SearchContextAPI>
    </Suspense>
    <ToastContainer/>
    </>
  )
}

export default App