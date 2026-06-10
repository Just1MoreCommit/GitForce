function Navbar() {
    return (
        <div className="navbar bg-[#1C1B1B] flex justify-between items-center p-2 border-y-2 border-[#2D2D2D] font-mono">
            <p className="text-[#FACC15]">NaN%</p>
            <div className="opts flex gap-8">
                <button className="text-[#CA8A04]">Analyze</button>
                <button className="text-[#CA8A04]">Agents</button>
                <button className="text-[#CA8A04]">Report</button>
            </div>


            <div className="side flex gap-8 p-4">
                <p>cli</p>
                <p>Settings</p>
                <p>FAQ</p>
            </div>
        </div>
    );
}

export default Navbar