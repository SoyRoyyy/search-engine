import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchResults from './pages/SearchResult'
import DetailPage from './pages/DetailPage' // <-- Impor halaman baru
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/item/:id" element={<DetailPage />} /> {/* <-- Tambahkan rute dinamis ini */}
    </Routes>
  )
}

export default App