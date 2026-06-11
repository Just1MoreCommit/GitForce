function Terminal() {
    return(
        <div className="Card flex flex-col m-8 min-w-[800px] border-2 border-[#2D2D2D] h-[300px] font-mono">
            <div className="nav flex justify-between bg-[#3A3939] p-2">
                <div className="flex gap-2">
                    <span style={{ color: '#FF5F57' }}>●</span>
                    <span style={{ color: '#FFBD2E' }}>●</span>
                     <span style={{ color: '#28C840' }}>●</span>
                </div>

                <p className="text-white uppercase">gitforce-console</p>

                
            </div>


            <div className="content bg-[#000000] flex flex-col gap-2 justify-evenly flex-1 border-y-2 border-[#2D2D2D] p-6">

                <p className="text-[#FACC15] text-3xl uppercase font-bold">system ready</p>
                    
                <div className="flex gap-2 font-xl items-center">
                    <p className="text-[#4ADE80]">$</p>
                    <div
                        contentEditable
                        suppressContentEditableWarning
                        className="text-white bg-[#000000] outline-none min-w-[1px] whitespace-pre"
                        data-placeholder="gitforce analyze"
                    />
                    <span className="text-[#FACC15] animate-blink">▋</span>
                </div>

                <button className="bg-[#FACC15] hover:rounded mt-1 p-2 w-[200px] transition duration-300 ease-in-out hover:translate-y-1">Run_Analysis</button>

            </div>

        </div>
    );
}


export default Terminal