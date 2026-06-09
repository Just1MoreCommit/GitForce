function Navbar() {
    return (
        <div className="navbar bg-gray-400 flex justify-between items-center p-6">
            <p>NaN%</p>
            <div className="opts flex gap-8">
                <p>Analyze</p>
                <p>Agents</p>
                <p>Report</p>
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