'use client'
import { XMarkIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
import React, { useState } from "react";
interface AddNewPersonalLoanProps {
    isOpen: boolean;
    onClose: () => void;
}
const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row w-fit"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold px-2 py-1 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white cust-tab-active"
                    : "text-black bg-slate-300")
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
                    ? "text-black bg-white"
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
                  (openTab === 2
                    ? "text-black bg-white"
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
                <i className="fas fa-cog text-base mr-1"></i>  Employment Information
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold px-2 py-1 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black bg-white"
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
                <i className="fas fa-cog text-base mr-1"></i>  Address Details
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold px-2 py-1 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black bg-white"
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
                <i className="fas fa-cog text-base mr-1"></i>  Refrences
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold px-2 py-1 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black bg-white"
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
                <i className="fas fa-cog text-base mr-1"></i>  Obligations
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white text-black w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AddNewPersonalLoan: NextPage<AddNewPersonalLoanProps> = ({isOpen , onClose}) => {      

    return(
      <div id="extralarge-modal" className={`${isOpen ? 'animate-fade-down animate-duration-500'  : 'hidden'} max-w-screen p-4 fixed`}>
          <div className="relative p-4 w-screen px-20 w-auto h-full pb-60">      
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex justify-between items-start p-2 px-3 rounded-t border dark:border-gray-600 bg-slate-100">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-black flex"><PlusCircleIcon className="h-4 w-4 mr-1 mt-0.5"/>Add New</h3>
                      <span onClick={onClose} className="cursor-pointer">
                          <XMarkIcon className="h-5 w-5 text-black"/>
                      </span>
                  </div>
                  <div className="px-6 py-2 space-y-1 w-full text-center">
                      <Tabs/>
                      <div className="flex justify-end py-1">
                          <button className="flex text-black bg-red-900 py-1.5 px-5 mr-2 rounded shadow text-sm text-black" style={{backgroundColor:'#9fafca'}}>Cancel</button>
                          <button className="flex text-black py-1.5 px-5  rounded text-sm shadow text-black" style={{backgroundColor:'#fd9b4d'}}>{"Yes I'm Sure"}</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}
export default AddNewPersonalLoan;