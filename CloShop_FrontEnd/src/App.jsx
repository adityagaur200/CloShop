import {BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Home from "./Home"
import AuthForm from "./components/AuthForm/AuthForm"
import CollectionPage from "./components/CollectionPage/CollectionPage"
import ProductPage from "./components/ProductPage/ProductPage"
import Profile from "./components/ProfilePage/Profile"
function App() {
  return (
  <Router>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/login'} element={<AuthForm/>}/>
      <Route path={'/sign_in'} element={<AuthForm/>}/>
      <Route path="/collection" element={<CollectionPage/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/Profile" element={<Profile/>}/>
    </Routes>
  </Router>
  )
}

export default App
