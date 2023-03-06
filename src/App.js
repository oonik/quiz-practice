import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Topic from './components/Topic/Topic';
import Blog from './components/Blog/Blog';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children:[

      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/topic',
        element: <Topic></Topic>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/about',
        element: <About></About>
      }
    ]
   }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
