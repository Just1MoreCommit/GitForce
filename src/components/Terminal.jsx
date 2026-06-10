function Terminal() {
    return(
        <div className="Card flex flex-col m-8 min-w-[400px] border b-black min-h-[200px]">
            <div className="nav flex justify-evenly">
                <p>mac wali pic thingy</p>

                <p>gitforce-console-tty1</p>

                
            </div>


            <div className="content bg-black flex flex-col justify evenly">

                <p>system ready</p>
                    
                <div className="flex gap-2">
                    <p className="text-green-600">$</p>
                    <input type="text" placeholder="gitforce analyze"/>
                </div>

            </div>


            <div className="lower-nav bg-black">

            </div>


        </div>
    );
}


export default Terminal