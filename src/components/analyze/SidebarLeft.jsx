function SidebarLeft() {
    return(
            <div className="sidebar flex flex-col bg-[#0e0e0e] border-r-2 border-[#1c1b1b] h-full w-[250px] font-mono">
                <div className="flex flex-col items-center justify-evenly  h-[200px]">
                    <button className="text-[#FACC15]"> Analysis </button>
                    <button className="text-[#FACC15]"> Narrator </button>
                    <button className="text-[#FACC15]"> Report </button>
                </div>
            </div>
    )
}

export default SidebarLeft