import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Terminal from './components/Terminal.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <div className='flex bg-[#000000]'>
        <Sidebar/>
        <div className='flex justify-center w-screen bg-[#000000] min-h-screen pt-[15vh]'>
          <Terminal/>
        </div>
        
      </div>

      <div className="flex flex-col min-h-screen pb-10">
  
        <footer className="fixed bottom-0 w-full py-3 border-t border-[#2D2D2D] text-center font-mono bg-[#0D0D0D]">
            <p className="text-[#444444] text-xs tracking-widest">
                GITFORCE v1.0.0 &nbsp;|&nbsp; made with ♥ for devs, by a dev
            </p>
        </footer>
  </div>

    </>
  )
}

export default App
