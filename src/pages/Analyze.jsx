
import Navbar from '../components/analyze/Navbar'

import SidebarLeft from '../components/analyze/SidebarLeft'

import SidebarRight from '../components/analyze/SidebarRight';

function Analyze() {
    return(
        <>
            <Navbar/>
            <div className='h-screen flex justify-between'>
                <SidebarLeft/>
                <SidebarRight/>
            </div>
        </>
    );
}

export default Analyze