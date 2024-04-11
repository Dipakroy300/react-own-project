import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import About from './component/About/About.jsx';

import Contact from './component/Contact/Contact.jsx';
import Friends from './component/Friends/Friends.jsx';
import Details from './component/Details/Details.jsx';
import FriendDetails from './component/FriendDetails/FriendDetails.jsx';
import Posts from './component/Posts/Posts.jsx';
import PostDetails from './component/PostDetails/PostDetails.jsx';






// const router = createBrowserRouter([
//   {
//    path:"/",
//    element:<Home></Home> ,
  
//   },
//   {
//    path:"/m",
//    element: <div>this is my home in real page in second part</div>,
  
//   },
//   {
//    path:"/o",
//    element: <div>this is my home in real page in second part 2</div>,
  
//   },
//   {
//    path:"/home",
//    element: <Home></Home>,
  
//   },
//   {
//    path:"/about",
//    element: <About></About>,
  
//   },
  
 
// ]);

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'about',
        element:<About></About>
      }
      ,
      {
        path:'friends',
        element:<Friends></Friends>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      }
      ,
      {
        path:'friend/:friendId',
        element:<FriendDetails></FriendDetails>,
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`),
        
        
      }
      ,
      {
        path:'posts',
        element:<Posts></Posts>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        
        
      }
      ,
      {
        path:'post/:postId',
        element:<PostDetails></PostDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        
        
      }
      ,
      {
        path:'contact',
        element:<Contact></Contact>
      }
      ,
      {
        path:'details',
        element:<Details></Details>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
