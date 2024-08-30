import {BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Home from "./Home"
import AuthForm from "./components/AuthForm/AuthForm"
import CollectionPage from "./components/CollectionPage/CollectionPage"
function App() {
  return (
  <Router>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/login'} element={<AuthForm/>}/>
      <Route path={'/sign_in'} element={<AuthForm/>}/>
      <Route path="/collection" element={<CollectionPage/>}/>
    </Routes>
  </Router>
  )
}

export default App
