import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { getRouterBasename } from './routerBasename'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Banquet } from './pages/Banquet'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'

export default function App() {
  return (
    <BrowserRouter basename={getRouterBasename()}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="banquet" element={<Banquet />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
