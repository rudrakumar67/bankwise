'use client'
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
import { usePathname, useRouter} from 'next/navigation';

function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <aside className="z-20 hidden w-20 md:w-16 sidebar md:block flex-shrink-0">
            <div className="py-4 text-gray-500 mx-auto text-center">
              <a className="font-medium md:font-sm capitalize" style={{color:"#ffffff"}} href="#">BW</a>
              <ul className='mt-4'>
                <li className="relative px-3 py-1 md:px-2 md:py-0.5">
                    <div className={"flex flex-col py-1.5 md:py-1 cursor-pointer " + (pathname == '/' ? "active" : "")}>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            type="button" onClick={() => router.push('/')}
                        >
                        <ChartBarIcon className={"h-6 w-6 "} color="#ffffff"/>
                        </a>
                        <span style={{fontSize:'10px', color:'#ffffff'}} className='text-center font-semibold'>Dashboard</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-2 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1 cursor-pointer'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            type="button" onClick={() => router.push('/lead')}
                        >
                        <FunnelIcon className={"h-6 w-6 " + (pathname == '/lead' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{fontSize:'10px', color:'#ffffff'}} className='text-center font-semibold'>Leads</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-2 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <LinkIcon className={"h-6 w-6 " + (pathname == '/' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{fontSize:'10px', color:'#ffffff'}} className='text-center font-semibold'>Links</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-2 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <ReceiptRefundIcon className={"h-6 w-6 " + (pathname == '/' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{fontSize:'10px', color:'#ffffff'}} className='text-center font-semibold'>Re-Target</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-2 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <UserGroupIcon className={"h-6 w-6 " + (pathname == '/' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{fontSize:'10px', color:'#ffffff'}} className='text-center font-semibold'>Teams</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-2 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <ChartPieIcon className={"h-6 w-6 " + (pathname == '/' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{fontSize:'10px', color:'#ffffff'}} className='text-center font-semibold'>Reports</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-2 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <CalculatorIcon className={"h-6 w-6 " + (pathname == '/' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{fontSize:'10px', color:'#ffffff'}} className='text-center font-semibold'>Accounts</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-2 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <UserIcon className={"h-6 w-6 " + (pathname == '/' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{fontSize:'10px', color:'#ffffff'}} className='text-center font-semibold'>HR</span>
                    </div>
                </li>
                <li className="relative px-3 py-1 md:px-2 md:py-0.5">
                    <div className='flex flex-col py-1.5 md:py-1'>
                        <a
                            className="inline-flex items-center w-full menu-item justify-center"
                            href="forms.html"
                        >
                        <WrenchScrewdriverIcon className={"h-6 w-6 " + (pathname == '/' ? "" : "")} color='#ffffff'/>
                        </a>
                        <span style={{fontSize:'10px', color:'#ffffff'}} className='text-center font-semibold'>Settings</span>
                    </div>
                </li>
              </ul>
            </div>
        </aside>
    );
}

export default Sidebar;