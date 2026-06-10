function Terminal() {
    return(
        <div className="Card flex flex-col m-8 min-w-[800px] border-2 border-[#2D2D2D] h-[400px]">
            <div className="nav flex justify-between bg-gray-500 p-2">
                <p>mac wali pic thingy</p>

                <p>gitforce-console-tty1</p>

                
            </div>


            <div className="content bg-[#131313] flex flex-col gap-16 flex-1 border-y-2 border-[#2D2D2D] p-8">

                <p className="text-[#FACC15]">system ready</p>
                    
                <div className="flex gap-2">
                    <p className="text-green-600">$</p>
                    <input type="text" placeholder="gitforce analyze" className="placeholder-[white] bg-[#131313]"/>
                </div>

                <button className="bg-[#FACC15] mt-1 p-4 w-[200px]">Run_Analysis</button>

            </div>

            <div className="bg-gray-500 p-2">
                <p>Commits commits commits</p>
            </div>

        </div>
    );
}


export default Terminal