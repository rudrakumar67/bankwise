'use client';
import { ChartBarIcon,
    FunnelIcon,
    DocumentCheckIcon,
    LinkIcon,
    ReceiptRefundIcon,
    UserGroupIcon,
    ChartPieIcon,
    CalculatorIcon,
    WrenchScrewdriverIcon,
    UserIcon,
} from '@heroicons/react/24/outline'
import { usePathname} from 'next/navigation';

function Sidebar() {
    const pathname = usePathname();
    return (
        <aside className="z-20 hidden w-20 sidebar md:block flex-shrink-0">
            <div className="py-4 text-gray-500">
              <a className="font-medium px-1.5 font-sm capitalize" style={{color:"#e67300"}} href="#">Bankwise</a>
              <ul className='mt-4'>
                {/* <li className="relative px-3 py-1 md:px-1.5 md:py-0.5">
                    <div className={"flex flex-col py-1.5 md:py-1" + (pathname == '/' ? "active" : "")}>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <ChartBarIcon className={"h-6 w-6 md:h-4 md:w-4 "}/>
                        </a>
                        <span style={{color:'#12344d'}} className='text-sm md:text-xs text-center font-semibold'>Dashboard</span>
                    </div>
                </li> */}
                <li className="relative px-3 py-1 md:px-1.5 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <ChartBarIcon className={"h-6 w-6 md:h-4 md:w-4 " + (pathname == '/leads' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{color:'#ffffff'}} className='text-sm md:text-xs text-center font-semibold'>Leads</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-1.5 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <FunnelIcon className={"h-6 w-6 md:h-4 md:w-4 " + (pathname == '/leads' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{color:'#ffffff'}} className='text-sm md:text-xs text-center font-semibold'>Leads</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-1.5 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <LinkIcon className={"h-6 w-6 md:h-4 md:w-4 " + (pathname == '/' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{color:'#ffffff'}} className='text-sm md:text-xs text-center font-semibold'>Links</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-1.5 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <ReceiptRefundIcon className={"h-6 w-6 md:h-4 md:w-4 " + (pathname == '/' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{color:'#ffffff'}} className='text-sm md:text-xs text-center font-semibold'>Re-Target</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-1.5 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <UserGroupIcon className={"h-6 w-6 md:h-4 md:w-4 " + (pathname == '/' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{color:'#ffffff'}} className='text-sm md:text-xs text-center font-semibold'>Teams</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-1.5 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <ChartPieIcon className={"h-6 w-6 md:h-4 md:w-4 " + (pathname == '/' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{color:'#ffffff'}} className='text-sm md:text-xs text-center font-semibold'>Reports</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-1.5 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <CalculatorIcon className={"h-6 w-6 md:h-4 md:w-4 " + (pathname == '/' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{color:'#ffffff'}} className='text-sm md:text-xs text-center font-semibold'>Accounts</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-1.5 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <UserIcon className={"h-6 w-6 md:h-4 md:w-4 " + (pathname == '/' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{color:'#ffffff'}} className='text-sm md:text-xs text-center font-semibold'>HR</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-1.5 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <WrenchScrewdriverIcon className={"h-6 w-6 md:h-4 md:w-4 " + (pathname == '/' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{color:'#ffffff'}} className='text-sm md:text-xs text-center font-semibold'>Settings</span>
                    </div>
                </li>
              </ul>
            </div>
        </aside>
    );
}

export default Sidebar;