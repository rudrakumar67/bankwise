'use client'
import { XMarkIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
import React, { useState } from "react";
interface AddNewBusinessLoanProps {
    isOpen: boolean;
    onClose: () => void;
}
const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row w-full"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold px-2 py-1 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white cust-tab-active"
                    : "tab-inactive")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> Applicant Details
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold px-2 py-1 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white cust-tab-active"
                    : "tab-inactive")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i>  Loan Requirement
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold px-2 py-1 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white cust-tab-active"
                    : "tab-inactive")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i>  Employment Information
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold px-2 py-1 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white cust-tab-active"
                    : "tab-inactive")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i>  Address Details
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold px-2 py-1 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white cust-tab-active"
                    : "tab-inactive")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i>  Refrences
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white text-black w-full mb-3 ">
            <div className="flex-auto p-4 pb-6 bg-slate-100 rounded">
              <div className="tab-content tab-space ">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <h4 className="text-left pb-4 font-semibold">Basic Details</h4>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Full Name</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Phone Number</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Alt Phone Number</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Email Address</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Date of Birth</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Gender</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Marital Status</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">PAN Number</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Mother Name</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Father Name</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <h4 className="text-left pb-4 font-semibold">Loan Requirements</h4>
                <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Product Type</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Loan Purpose</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Required Loan</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Tenure Needed</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">CIBIL Score</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Any CIBIL Issues</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Collateral (If any)</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                <h4 className="text-left pb-6 font-semibold">Income Details</h4>
                  <label className='themeSwitcherTwo relative flex cursor-pointer select-none pb-6'>
                    <input
                      type='checkbox'
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className='sr-only'
                    />
                    <span className='label flex items-center text-sm font-medium text-black'>
                      Salaried
                    </span>
                      <span
                        className={`slider mx-4 flex h-6 w-[40px] items-center rounded-full p-1 duration-200 ${
                          isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
                        }`}
                      >
                      <span
                        className={`dot h-4 w-4 rounded-full bg-white duration-200 ${
                          isChecked ? 'translate-x-[16px]' : ''
                        }`}
                      ></span>
                    </span>
                    <span className='label flex items-center text-sm font-medium text-black'>
                      Self-Employed
                    </span>
                  </label>
                  
                  {isChecked ? <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Company Name</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Incorporation Type</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Nature Of Business</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Year of Registration</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">GST Available</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Monthly Turn Over</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Annual Turn Over</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Current Acc Bank</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Collateral (if any)</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                  </div> :
                  <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Company Name</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Designation</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Department</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Gross Salary</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Net Salary</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Salary Bank Account</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Working Since</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Total Experience</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Official Email ID</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                  </div>}
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link2">
                  <h4 className="text-left pb-4 font-semibold">Residence Details</h4>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Resident Type</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Street Address</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Address 2</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Area</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">PinCode</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">City</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Landmark (If any)</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                  </div>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link2">
                <h4 className="text-left pb-4 font-semibold">Reference Details</h4>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Full Name</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Phone Number</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Address</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 pt-2">
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Full Name</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Phone Number</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="text-left text-xs font-normal pb-1">Address</label>
                      <input type="text" name="" id=""  className="border rounded w-52 h-8" style={{borderColor:'#cfd7df'}}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AddNewBusinessLoan: NextPage<AddNewBusinessLoanProps> = ({isOpen , onClose}) => {      

    return(
      <div id="extralarge-modal" className={`${isOpen ? 'animate-fade-down animate-duration-500'  : 'hidden'} max-w-screen p-4 fixed`}>
          <div className="relative p-4 px-20 w-auto sm:w-auto h-full pb-60">      
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex justify-between items-start p-2 px-3 rounded-t border dark:border-gray-600 bg-slate-100">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-black flex"><PlusCircleIcon className="h-4 w-4 mr-1 mt-0.5"/>Add New</h3>
                      <span onClick={onClose} className="cursor-pointer">
                          <XMarkIcon className="h-5 w-5 text-black"/>
                      </span>
                  </div>
                  <div className="px-6 py-2 space-y-1 w-full text-center">
                      <Tabs/>
                      <div className="flex justify-between py-1 pt-4">
                          <div>
                            <button className="flex bg-red-900 py-1.5 px-5 mr-2 rounded shadow text-sm text-white" style={{backgroundColor:'#9fafca'}}>Cancel</button>
                          </div>
                          <div className="flex">
                            <button className="flex py-1.5 px-5 mr-2 rounded text-sm shadow text-white" style={{backgroundColor:'#fd9b4d'}}>Save</button>
                            <button className="flex py-1.5 px-5 rounded text-sm shadow text-white" style={{backgroundColor:'#2058dc'}}>Next</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}
export default AddNewBusinessLoan;