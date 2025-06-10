import SearchBar from '../assets/components/SearchBar'

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 leading-[1.3]">
          Yalali Search Engine
        </h1>
        <SearchBar />
      </div>
    </div>
  )
}

export default Home
