import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/atom/footer/Footer'
import Home from './pages/Home'
import Search from './pages/Search'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import NotFound from './pages/PageNotFound'
import Login from './pages/Login'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/detail/:id" element={ <Detail /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
