function SidebarRight() {
    return(
        <div className="sidebar flex flex-col bg-[#0e0e0e] border-l-2 border-[#1c1b1b] h-full w-[250px] font-mono justify-between">
            
            <div className="upperBox bg-[#000000] flex justify-center">
                <p className="bg-[#1a1400] text-[#FACC15] border border-[#FFE500] px-12 py-1 m-4">Chat</p>
            </div>

            <div className="chatArea flex-1"></div>

            <div className="lowerBox bg-[#0e0e0e] border-t border-[#1c1b1b] p-3">
                

                {/* input box */}
                <div className="bg-[#000000] border border-[#1c1b1b] p-2 flex flex-col gap-2">
    
  
    <div className="flex items-center justify-between border-b border-[#1c1b1b] pb-1">
        <p className="text-[#FACC15] text-xs tracking-widest opacity-50">claude-sonnet-4-5</p>
    </div>

    <textarea
        placeholder="Ask a follow-up..."
        rows={3}
        className="bg-[#000000] text-[#FACC15] text-sm placeholder-[#FACC15] placeholder-opacity-30 resize-none outline-none font-mono w-full"
    />

    <div className="flex items-center justify-end">
        <button className="bg-[#FACC15] px-3 py-1 text-black text-lg">⤷</button>
    </div>
</div>

            </div>
        </div>
    )
}

export default SidebarRight