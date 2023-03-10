import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Topic from './components/Topic/Topic';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Questions from './components/Questions/Questions';
import Error from './components/Error/Error';
import Statics from './components/Statics/Statics';

function App() {
  const router = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children:[

      {
        path:'/',
        loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
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
       path:'/statics',
       loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
       element:<Statics></Statics>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path: '/quiz/:quizid',
        loader: async ({params}) =>{
         return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`)
        },
        element: <Questions></Questions>
      },
      {
        path: '*',
        element: <Error></Error>
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
