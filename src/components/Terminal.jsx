function Terminal() {
    return(
        <div className="Card flex flex-col m-8 min-w-[800px] border-2 border-[#2D2D2D] h-[400px] font-mono">
            <div className="nav flex justify-between bg-gray-500 p-2">
                <div className="flex gap-2">
                    <span style={{ color: '#FF5F57' }}>●</span>
                    <span style={{ color: '#FFBD2E' }}>●</span>
                     <span style={{ color: '#28C840' }}>●</span>
                </div>

                <p>gitforce-console-tty1</p>

                
            </div>


            <div className="content bg-[#131313] flex flex-col gap-2 justify-around flex-1 border-y-2 border-[#2D2D2D] p-8">

                <p className="text-[#FACC15] text-2xl uppercase font-bold">system ready</p>
                    
                <div className="flex gap-2 font-xl">
                    <p className="text-[#4ADE80]">$</p>
                    <input type="text" placeholder="gitforce analyze" className="placeholder-[white] bg-[#131313] text-white focus:outline focus:outline-[#131313]-500"/>
                </div>

                <button className="bg-[#FACC15] hover:bg-[#131313] hover:text-[#FACC15] hover:rounded transition-colors duration-300 mt-1 p-4 w-[200px]">Run_Analysis</button>

            </div>

            <div className="bg-gray-500 p-2">
                <p></p>
            </div>

        </div>
    );
}


export default Terminal