import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/template/Header'
import Footer from './components/template/footer/Footer'
import Home from './pages/Home'
import Search from './pages/Search'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import NotFound from './pages/PageNotFound'
import Login from './pages/Login'
import About from './pages/About'
import TermsConditions from './pages/TerrmsConditions'
import Favorites from './pages/Favorites'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
