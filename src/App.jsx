import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import RootLayout from './layout/RootLayout.jsx'
import ContactLayout from './layout/ContactLayout.jsx'
import ContactInfo from './components/ContactInfo.jsx'
import ContactForm from './components/ContactForm.jsx'
import NotFound from './components/NotFound.jsx'
import JobsLayout from './layout/JobsLayout.jsx'
import Jobs, { jobsLoader } from './pages/Jobs.jsx'
import JobDetails, { jobDetailsLoader } from './components/JobDetails.jsx'

const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />}/>
          <Route path='products' element={<Products />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<ContactLayout />}>
            <Route path='info' element={<ContactInfo />} />
            <Route path='form' element={<ContactForm />} />
          </Route>
          <Route path='*' element={<NotFound />}/>
          <Route path='jobs' element={<JobsLayout />}>
            <Route index element={<Jobs />} loader={jobsLoader}/>
            <Route path=':id' element={<JobDetails />} loader={jobDetailsLoader}/>
          </Route>
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App