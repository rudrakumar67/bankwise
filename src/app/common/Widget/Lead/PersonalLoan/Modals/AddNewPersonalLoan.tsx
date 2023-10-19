'use client'
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
import React, { useState } from "react";
interface AddNewPersonalLoanProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddNewPersonalLoan: NextPage<AddNewPersonalLoanProps> = ({isOpen , onClose}) => {      

    return(
        <div id="extralarge-modal" className={`${isOpen ? 'animate-fade-down animate-duration-500'  : 'hidden'} w-10/12 p-4 overflow-x-hidden overflow-y-auto max-h-full`}>
            <div className="relative flex flex-col w-full bg-white border border-solid pointer-events-auto dark:bg-grey-950 bg-clip-padding border-black/20 rounded-xl outline-0">
  <div className="flex items-center justify-between p-4 border-b border-solid shrink-0 border-[#dee2e6] rounded-t-xl">
    <h5
      className="text-[#344767] mb-0 leading-normal dark:text-white"
      id="ModalLabel"
    >
      Import CSV
    </h5>
    <i className="ml-4 fas fa-upload" aria-hidden="true" />
    <button
      type="button"
      data-toggle="modal"
      data-target="#import"
      className="fa fa-close w-4 h-4 ml-auto box-content p-2 text-black dark:text-white border-0 rounded-1.5 opacity-50 cursor-pointer -m-2 "
      data-dismiss="modal"
      aria-hidden="true"
    />
  </div>
  <div className="relative flex-auto p-4">
    <p className="mb-2">You can browse your computer for a file.</p>
    <input
    //   action="/file-upload"
    //   dropzone=""
      type="text"
      placeholder="Browse file..."
      className="dark:bg-grey-950 mb-4 focus:shadow-[0_0_0_2px_#e9aede] dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-[#e293d3] focus:outline-none dz-clickable"
    />
    <div className="min-h-6 pl-7 mb-0.5 flex items-center">
      <input
        id="terms"
        className="text-base w-[1.23em] h-[1.23em] ease rounded-[.35rem] checked:bg-gradient-to-tl checked:from-[#141727] checked:to-[#3a416f] after:text-[.67rem] after:font-[FontAwesome] after:duration-250 after:ease-in-out duration-250 relative float-left my-auto cursor-pointer appearance-none border border-solid border-[#cbd3da] bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 mb-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
        type="checkbox"
      />
      <label
        className="ml-1 font-normal cursor-pointer text-[.875rem] text-[#344767] select-none mb-0"
        htmlFor="terms"
      >
        &nbsp; I agree the{" "}
        <a href="javascript:;" className="font-bold text-[#344767]">
          Terms and Conditions
        </a>{" "}
      </label>
    </div>
  </div>
  <div className="flex flex-wrap items-center justify-end p-3 border-t border-solid shrink-0 border-[#dee2e6] rounded-b-xl">
    <button
      type="button"
      data-toggle="modal"
      data-target="#import"
      className="inline-block px-8 py-2 m-1 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-in leading-pro tracking-tight bg-gradient-to-tl from-[#627594] to-[#a8b8d8] shadow-md bg-150 bg-x-25 hover:scale-[1.02] active:opacity-85"
    >
      Close
    </button>
    <button
      type="button"
      data-toggle="modal"
      data-target="#import"
      className="inline-block px-8 py-2 m-1 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-in leading-pro tracking-tight bg-gradient-to-tl from-[#7928ca] to-[#ff0080] shadow-md bg-150 bg-x-25 hover:scale-[1.02] active:opacity-85"
    >
      Upload
    </button>
  </div>
</div>

        </div>
    );
}
export default AddNewPersonalLoan;