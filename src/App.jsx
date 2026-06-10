import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Terminal from './components/Terminal.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
        <div className='flex justify-center w-screen bg-blue-200'>
          <Terminal/>
        </div>
        
      </div>

    </>
  )
}

export default App
