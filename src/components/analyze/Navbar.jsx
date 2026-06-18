function Navbar() {
    return(
        <div className="navbar bg-[#000000] flex justify-between items-center font-mono border-b-2 border-[#1c1b1b]">
            
           
            
            <p className="text-[#FACC15] pl-6 text-[20px]">GITFORCE</p>
                <div className="navButtons flex gap-6 text-[#FACC15]">
                    <button>Workspace</button>
                    <button>Commits</button>
                    <button>Agents</button>
                    </div> 
             

            <div className="side flex justify-between gap-6 p-4">
                <input type="text" placeholder="🔍 search for commits..." className="focus:outline focus:outline-[#000000] bg-[#0e0e0e] p-2 border-2 border-[#1c1b1b] text-white " />
                <p className="text-[#FACC15] mt-2">⚙️</p>
            </div>
        </div>
    );
}

export default Navbar