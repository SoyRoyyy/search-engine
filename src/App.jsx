import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchResults from '../src/pages/SearchResult'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  )
}

export default App
