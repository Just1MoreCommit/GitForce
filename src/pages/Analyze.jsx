
import MiddleDisplay from '../components/analyze/MiddleDisplay';

import Navbar from '../components/analyze/Navbar';

import SidebarLeft from '../components/analyze/SidebarLeft';

import SidebarRight from '../components/analyze/SidebarRight';

function Analyze() {
    return(
        <>
            <Navbar/>
            <div className='h-screen flex justify-between'>
                <SidebarLeft/>
                <div className="flex-1" style={{ height: 'calc(100vh - 40px)' }}>
                  <MiddleDisplay/>
                </div>
                <SidebarRight/>
            </div>
        </>
    );
}

export default Analyze