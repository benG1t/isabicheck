import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import Home from './pages/Home'
import About from './pages/About'
import FactCheck from './pages/FactCheck'
import Articles from './pages/Articles'
import Event from './pages/Event'
import Contact from './pages/Contact'
import MyAiFactCheck from './pages/MyAiFactCheck'
import Error from './pages/Error'
import SingleBlog from './pages/SingleBlog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'fact-check',
        element: <FactCheck />,
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'event',
        element: <Event />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'my-ai-factcheck',
        element: <MyAiFactCheck />,
      },
      {
        path: 'single-blog/:id',
        element: <SingleBlog />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
