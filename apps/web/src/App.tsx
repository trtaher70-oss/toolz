import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ToolPlaceholder from './pages/ToolPlaceholder'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools/:slug" element={<ToolPlaceholder />} />
      </Routes>
    </BrowserRouter>
  )
}
