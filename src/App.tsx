import './styles/main.scss'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import ProductList from './pages/ProductList/ProductList';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} errorElement={<ErrorPage/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  );
}

export default App
