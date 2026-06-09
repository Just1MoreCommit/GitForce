

function Sidebar() {
    return (
        <div className="bg-purple-400 w-[300px] min-h-screen flex flex-col">

            <div className="upper-box border">

                <div className="in-up-box flex gap-4 items-center justify-center p-4">
                    <p>GitForce logo</p>
                    <div className="">
                        <p>GF_USER_01</p>
                        <p>AGENT_PIPELINE</p>
                        <p>ACTIVE</p>
                    </div>
                </div>
            </div>

            <div className="buttons flex flex-col justify-between bg-yellow-300 min-h-[600px]">
                <div className="grp-btns flex flex-col px-12 pt-4 gap-4">
                    <button className="bg-white min-w-full p-2">Analyze</button>
                    <button>Agents</button>
                    <button>Report</button>
                    <button>History</button>
                    <button>Settings</button>
                </div>

                <div className="grp-btns flex flex-col px-12 pt-4 gap-4">
                    <button className="mb-16 bg-white min-w-full py-4 ">Deploy Agent</button>
                </div>
            </div>


        </div>
    );
}

export default Sidebar