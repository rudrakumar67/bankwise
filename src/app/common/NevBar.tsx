'use client'
import { 
  UserIcon,
  EnvelopeIcon,
  BellAlertIcon,
  ArrowDownTrayIcon
 } from '@heroicons/react/24/outline'
import { useState } from 'react';
import {Tooltip} from "@nextui-org/tooltip";
function Navbar() {
  // Import Data Modal
  const [importDataModal, setimportDataModal] = useState(false);
  const importDataModalFun = () => setimportDataModal(true);
  const closeImportDataModal = () => setimportDataModal(false);
    return (
      <>
      <header className="z-10 py-2 border-b border-gray-200">
        <div className="wrapper flex items-center justify-between h-full px-6 mx-auto">
          <div className="flex justify-between flex-0 h-full w-fit">
          <div className="flex justify-between">
                <div className="flex">
                    <ul className="flex">
                        <li>
                            <span onClick={importDataModalFun} className="flex hover:bg-gray-100 md:py-1.5 md:px-2 w-fit sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a', backgroundColor:'#d2e0fb'}}>
                                {/* <ArrowDownTrayIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/> */}
                                <span className="text-sm md:text-xs font-semibold my-auto" style={{color:'#12344d'}}>CIBIL Report</span>
                            </span>
                        </li>
                        <li>
                            <span onClick={importDataModalFun} className="flex hover:bg-gray-100 md:py-1.5 md:px-2 w-fit sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a', backgroundColor:'#d2e0fb'}}>
                                {/* <ArrowDownTrayIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/> */}
                                <span className="text-sm md:text-xs font-semibold my-auto" style={{color:'#12344d'}}>Company Listing Validator</span>
                            </span>
                        </li>
                        <li>
                            <span onClick={importDataModalFun} className="flex hover:bg-gray-100 md:py-1.5 md:px-2 w-fit sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a', backgroundColor:'#d2e0fb'}}>
                                {/* <ArrowDownTrayIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/> */}
                                <span className="text-sm md:text-xs font-semibold my-auto" style={{color:'#12344d'}}>Check Eligibility</span>
                            </span>
                        </li>
                        <li>
                            <span onClick={importDataModalFun} className="flex hover:bg-gray-100 md:py-1.5 md:px-2 w-fit sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a', backgroundColor:'#d2e0fb'}}>
                                {/* <ArrowDownTrayIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/> */}
                                <span className="text-sm md:text-xs font-semibold my-auto" style={{color:'#12344d'}}>Import Website Leads</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
          <ul className="flex items-center flex-shrink-0 space-x-5">
          <Tooltip
              showArrow={false}
              content="Tools" 
              offset={7} 
              closeDelay={0} 
              classNames={{base: "text-white bg-theme rounded text-xs py-0.5 px-2 mt-0.5 m-0", arrow: "bg-blue-900 py-0.5 px-2 mt-0.5 m-0"}}>
              <a href="" className='rounded my-auto'>
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#2e4374">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                  <g id="SVGRepo_iconCarrier"> 
                    <path d="M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z" fill="#00539c"/>
                    <path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" fill="#00539c"/>
                    <path d="M19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7Z" fill="#00539c"/> 
                    <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#00539c"/> 
                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#00539c"/> 
                    <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#00539c"/> 
                    <path d="M5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z" fill="#00539c"/> 
                    <path d="M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z" fill="#00539c"/> 
                    <path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21Z" fill="#00539c"/> </g>
                </svg>
              </a>
            </Tooltip>
            <Tooltip
              showArrow={false}
              content="Emails" 
              offset={7} 
              closeDelay={0} 
              classNames={{base: "text-white bg-theme rounded text-xs py-0.5 px-2 mt-0.5 m-0", arrow: "bg-blue-900 py-0.5 px-2 mt-0.5 m-0"}}>
              <a href="" className='border rounded p-2 border-gray-200'>
                <EnvelopeIcon className='h-4 w-4 text-blue-500'/>
              </a>
            </Tooltip>
            <Tooltip
              showArrow={false}
              content="Notification" 
              offset={7} 
              closeDelay={0} 
              classNames={{base: "text-white bg-theme rounded text-xs py-0.5 px-2 mt-0.5 m-0", arrow: "bg-blue-900 py-0.5 px-2 mt-0.5 m-0"}}>
              <a href="" className='border rounded p-2 border-gray-200'>
                <BellAlertIcon className='h-4 w-4 text-blue-500'/>
              </a>
            </Tooltip>
            <Tooltip
              showArrow={false}
              content="My Profile" 
              offset={7} 
              closeDelay={0} 
              classNames={{base: "text-white bg-theme rounded text-xs py-0.5 px-2 mt-0.5 m-0", arrow: "bg-blue-900 py-0.5 px-2 mt-0.5 m-0"}}>
              <a href="" className='rounded p-2' style={{backgroundColor:'#2e4374', borderColor: '#00539c'}}>
                <UserIcon className='h-4 w-4 text-slate-50'/>
              </a>
            </Tooltip>
          </ul>
        </div>
      </header>
    </>
    );
  }
  
  export default Navbar;