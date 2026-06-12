function Navbar() {
    return(
        <div className="navbar bg-[#000000] flex justify-between items-center font-mono border-b-2 border-[#1c1b1b]">
            
           
            
            <p className="text-[#FACC15] pl-4 text-[20px]">GITFORCE</p>
                <div className="navButtons flex gap-12 text-[#FACC15]">
                    <button>Workspace</button>
                    <button>Agents</button>
               </div> 
             

            
                <p className="text-[#FACC15] pr-4">⚙️</p>

            
        </div>
    );
}

export default Navbar