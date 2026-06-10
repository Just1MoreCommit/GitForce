function Navbar() {
    return (
        <div className="navbar bg-[#1C1B1B] flex justify-between items-center p-6 border-y-2 border-[#2D2D2D]">
            <p className="text-[#FACC15]">NaN%</p>
            <div className="opts flex gap-8">
                <p className="text-[#FACC15]">Analyze</p>
                <p className="text-[#FACC15]">Agents</p>
                <p className="text-[#FACC15]">Report</p>
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