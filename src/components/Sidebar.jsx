

function Sidebar() {
    return (
        <div className="bg-[#131313] w-[300px] min-h-screen flex flex-col font-mono">

            <div className="upper-box border-b-2 border-r-2 border-[#2D2D2D]">

                <div className="in-up-box flex gap-4 items-center justify-center p-4 ">
                    <img src="\public\GitForce.png" height={50} width={50} />
                    <div className="flex flex-col gap-2">
                        <p className="text-[#CA8A04] text-xl font-black">GF_USER_01</p>
                        <div>
                            <p className="text-[#4ADE80] text-xs font-medium">AGENT_PIPELINE</p>
                            <p className="text-[#4ADE80] text-xs font-medium">ACTIVE</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="buttons flex flex-col justify-between min-h-[600px] border-r-2 border-b-2 border-[#2D2D2D] min-h-full">
                <div className="grp-btns flex flex-col px-12 pt-4 gap-4 justify-between">
                    <button className="min-w-full p-2 text-[#FACC15] hover:bg-[#FACC15] hover:text-black hover:rounded transition-colors duration-300 hover:border-l-2 hover:border-l-white">Analyze</button>
                    <button className="min-w-full p-2 text-[#FACC15] hover:bg-[#FACC15] hover:text-black hover:rounded transition-colors duration-300 hover:border-l-2 hover:border-l-white">Agents</button>
                    <button className="min-w-full p-2 text-[#FACC15] hover:bg-[#FACC15] hover:text-black hover:rounded transition-colors duration-300 hover:border-l-2 hover:border-l-white">Report</button>
                    <button className="min-w-full p-2 text-[#FACC15] hover:bg-[#FACC15] hover:text-black hover:rounded transition-colors duration-300 hover:border-l-2 hover:border-l-white">History</button>
                    <button className="min-w-full p-2 text-[#FACC15] hover:bg-[#FACC15] hover:text-black hover:rounded transition-colors duration-300 hover:border-l-2 hover:border-l-white">Settings</button>
                </div>

            </div>


        </div>
    );
}

export default Sidebar