function SidebarLeft() {
    return(
            <div className="sidebar flex flex-col bg-[#0e0e0e] border-r-2 border-[#1c1b1b] h-full w-[250px] font-mono">
                <div className="flex flex-col items-center justify-evenly  h-[200px]">
                    <button className="hover:bg-[#1a1400] text-[#FACC15] hover:border border-[#FFE500] hover:border-l-[#FFFFE0] hover:border-l-4 px-12 py-1"> Analysis </button>
                    <button className="hover:bg-[#1a1400] text-[#FACC15] hover:border hover:border-[#FFE500] hover:border-l-[#FFFFE0] hover:border-l-4 px-12 py-1"> Narrator </button>
                    <button className="hover:bg-[#1a1400] text-[#FACC15] hover:border hover:border-[#FFE500] hover:border-l-[#FFFFE0] hover:border-l-4 px-12 py-1"> Report </button>
                </div>

            </div>
    )
}

export default SidebarLeft