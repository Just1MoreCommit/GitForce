
import Navbar from '../components/analyze/Navbar'

import SidebarLeft from '../components/analyze/SidebarLeft'


function Analyze() {
    return(
        <>
            <Navbar/>
            <div className='h-screen'>
                <SidebarLeft/>
            </div>
        </>
    );
}

export default Analyze