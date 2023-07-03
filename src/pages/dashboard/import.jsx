
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
  } from "@material-tailwind/react";
  import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
  import { authorsTableData, projectsTableData } from "@/data";
  import { modalImport } from "./modalImport";
import { useState } from "react";
  
  export function Import() {
    const [showModal, setShowModal] = useState(false);
    function modalimport(){
        
    }
    return (
        <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4 p-1">
        <div>
        {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Container Type</label> */}
            <select id="countries" class=" mx-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-max">
                <option selected>Select</option>
                <option value="US">Job No.</option>
                <option value="CA">HBL/HAWB No.</option>
                <option value="CA">MBL/MAWB No.</option>
                <option value="CA">BE No.</option>
            </select>
            <div>
            {/* <label for="job_received_on" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Received On</label> */}
            <div class="w-64 absolute mx-52 -my-10">
            <input type="text" id="input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            </div>
        </div>
        
        
<div date-rangepicker class="flex items-center m-4">
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
    </div>
    <input name="start" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
  </div>
  <span class="mx-4 text-gray-500">to</span>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
    </div>
    <input name="end" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
</div>
</div>
<button type="submit" class="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring- focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm w-max sm:w-max px-8 py-2.5 text-left dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-0">Search</button>
        <div className="relative overflow-x-max shadow-md sm:rounded-lg">
      <table className="w-max text-sm text-center text-gray-500 dark:text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  
                  <th scope="col" class="px-6 py-3">
                      Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Job No.
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Importer Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                      HBL/HAWB No.
                  </th>
                  <th scope="col" class="px-6 py-3">
                      MBL/MAWB No.
                  </th>
                  <th scope="col" class="px-6 py-3">
                      ETA
                  </th>
                  <th scope="col" class="px-6 py-3">
                      IGM
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Checklist
                  </th>
                  <th scope="col" class="px-6 py-3">
                      E-Sanchit
                  </th>
                  <th scope="col" class="px-6 py-3">
                      BOE Filling
                  </th>
                  <th scope="col" class="px-6 py-3">
                      DO
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Delivery
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Remarks
                  </th>
                  <th scope="col" class="px-6 py-3">
                      
                  </th>
                  
              </tr>
          </thead>
          <tbody>
              <tr onClick={() => setShowModal(true)} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  
                  <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      19-06-2023 16:37:00
                  </th>
                  <td class="px-6 py-0 text-xs">
                      S/I/0001/23-24
                  </td>
                  <td class="px-6 py-0 text-xs">
                      PERMANENT MAGNET LTD
                  </td>
                  <td class="px-6 py-0 text-xs">
                      RTTT5787088
                  </td>
                  <td class="px-6 py-0 text-xs">
                      20-06-2023
                  </td>
                  <td class="px-6 py-0 text-xs">
                      19-06-2023 16:37:00
                  </td>
                  <td class="px-6 py-0 text-xs">
                    19-06-2023 16:37:00
                  </td>
                  <td class="px-6 py-0 text-xs">
                  19-06-2023 16:37:00
                  </td>
                  <td class="px-6 py-0 text-xs">
                  19-06-2023 16:37:00
                  </td>
                  <td class="px-6 py-0 text-xs">
                  19-06-2023 16:37:00
                  </td>
                  <td class="px-6 py-0 text-xs">
                  19-06-2023 16:37:00
                  </td>
                  <td class="px-6 py-0 text-xs">
                  19-06-2023 16:37:00
                  </td>
                  <td class="px-6 py-0 text-xs">
                  Hello
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
  </div>
  </div>
  {showModal ? (
    <>
    {/* <button className="btn" onClick={()=>window.my_modal_1.showModal()}>open modal</button> */}
    <dialog id="my_modal_1" className="modal w-9/12 h-5/6 mx-80">
        <form method="dialog" className="modal-box">
        <div class="grid gap-2 mb-2 md:grid-cols-6 m-2">
            <div>
                <label for="job_received_on" class="block mb-2 text-xs font-sans text-gray-900 dark:text-white">Job Received On</label>
            </div>
            <div>
                <input type="date" id="job_received_on" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block  -mx-9 -my-1 w-40 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
                <label for="importer_name" class="block mb-2 text-xs font-sans text-gray-900 dark:text-white">Importer Name</label>
            </div>
            <div>
                <input type="text" id="importer_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block -mx-12 -my-1 w-40 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
            <label for="countries" class="block mb-2 text-xs font-sans text-gray-900 dark:text-white">Mode</label></div>
                <div>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block -mx-12 -my-1 w-40 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Select</option>
                    <option value="US">Sea</option>
                    <option value="CA">Air</option>
                </select>
                </div>
                <div>
            <label for="countries" class="block mb-2 text-xs font-sans text-gray-900 dark:text-white">Container</label></div>
                <div>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block -mx-9 -my-1 w-40 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Select</option>
                    <option value="US">20</option>
                    <option value="CA">40</option>
                    <option value="CA">LCL</option>
                </select>
                </div>
            <div>
                <label for="HBL/HAWB" class="block mb-2 text-xs font-sans text-gray-900 dark:text-white">HBL/HAWB No.</label>
            </div>
            <div>
                <input type="text" id="HBL/HAWB" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block -mx-12 -my-1 w-40 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
                <label for="MBL/MAWB" class="block mb-2 text-xs font-sans text-gray-900 dark:text-white">MBL/MAWB No.</label>
            </div>
            <div>
                <input type="text" id="MBL/MAWB" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block -mx-12 -my-1 w-40 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
                <label for="eta_date" class="block mb-2 text-xs font-sans text-gray-900 dark:text-white">ETA Date</label>
            </div>
            <div>
                <input type="date" id="eta_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block  -mx-9 -my-1 w-40 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
                <label for="be_no" class="block mb-2 text-xs font-sans text-gray-900 dark:text-white">BE No.</label>
            </div>
            <div>
                <input type="text" id="be_no" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block -mx-12 -my-1 w-40 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
                <label for="be_date" class="block mb-2 text-xs font-sans text-gray-900 dark:text-white">BE Date</label>
            </div>
            <div>
                <input type="date" id="be_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block -mx-12 -my-1 w-40 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
                <label for="shipping_name" class="block mb-2 text-xs font-sans text-gray-900 dark:text-white">Shipping Line Name</label>
            </div>
            <div>
                <input type="text" id="shipping_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block  -mx-9 -my-1 w-40 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
                <label for="cfs_name" class="block mb-2 text-xs font-sans text-gray-900 dark:text-white">CFS Name</label>
            </div>
            <div>
                <input type="text" id="cfs_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block -mx-12 -my-1 w-40 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div>
                <label for="custom_location" class="block mb-2 text-xs font-sans text-gray-900 dark:text-white">Custom Location</label>
            </div>
            <div>
                <input type="text" id="custom_location" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block -mx-12 -my-1 w-40 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            {/* <div>
                <label for="custom_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Custom Location</label>
                <input type="text" id="custom_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div> */}
        </div>
        <div>
        <hr className="border-t border-gray-800"></hr>
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-800 dark:border-gray-700 dark:text-gray-400">
                <li class="mr-2" className={showResults ? showResults : null}>
                    <button>
                    <div class="inline-block p-4 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 hover:bg-gray-50">
                        O2D
                        {/* {showResults ? <modalImport /> : null} */}
                        {/* {isshown} */}
                    </div>
                    </button>
                </li>
                <li class="mr-2">
                    <div class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                        D2C
                        {/* {isshown && <JobExport />} */}
                    </div>
                </li>
                <li class="mr-2">
                    <div class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                        CRM
                        {/* {isshown && <JobExport />} */}
                    </div>
                </li>
                <li class="mr-2">
                    <div class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                        DOCUMENT TO BE UPLOADED
                        {/* {isshown && <JobExport />} */}
                    </div>
                </li>
            </ul>
            {/* {showResults === "import" && <modalImport />} */}
            <div id="divOne">
            <div class="grid gap-2 mb-3 md:grid-cols-5 m-1">
            <div>
                <label for="job_received_on" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Milestone Name</label>
                <label for="job_received_on" class="block mb-2 text-sm font-xs text-gray-900 dark:text-white">Checklist</label>
                <label for="job_received_on" class="block mb-2 text-sm font-xs text-gray-900 dark:text-white">BE Filed</label>
                <label for="job_received_on" class="block mb-2 text-sm font-xs text-gray-900 dark:text-white">BE Receipt</label>
                <label for="job_received_on" class="block mb-2 text-sm font-xs text-gray-900 dark:text-white">Assessed</label>
                <label for="job_received_on" class="block mb-2 text-sm font-xs text-gray-900 dark:text-white">Duty Paid</label>
                <label for="job_received_on" class="block mb-2 text-sm font-xs text-gray-900 dark:text-white">Org Doc. Received</label>
                <label for="job_received_on" class="block mb-2 text-sm font-xs text-gray-900 dark:text-white">DO Collect</label>
                <label for="job_received_on" class="block mb-2 text-sm font-xs text-gray-900 dark:text-white">Examined</label>
                <label for="job_received_on" class="block mb-2 text-sm font-xs text-gray-900 dark:text-white">Out of Charge</label>
                <label for="job_received_on" class="block mb-2 text-sm font-xs text-gray-900 dark:text-white">Delivery</label>
                <label for="job_received_on" class="block mb-2 text-sm font-xs text-gray-900 dark:text-white">Billing</label>
            </div>
            <div>
                <label for="job_no" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-4">Plan Date</label>
                <input type="datetime-local" id="job_no" class="mb-1 -mx-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="job_no" class="mb-1 -mx-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="job_no" class="mb-1 -mx-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="job_no" class="mb-1 -mx-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="job_no" class="mb-1 -mx-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="job_no" class="mb-1 -mx-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="job_no" class="mb-1 -mx-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="job_no" class="mb-1 -mx-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="job_no" class="mb-1 -mx-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="job_no" class="mb-1 -mx-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="job_no" class="mb-1 -mx-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                {/* <input type="datetime-local" id="job_no" class="mb-1 -mx-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="job_no" class="mb-1 -mx-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> */}

            </div>
            <div className="flex flex-row -mx-10">
            <div className="flex flex-col">
            <label for="importer_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-2">Actual Date</label>
            <div className="flex flex-row">
            <input type="datetime-local" id="importer_name" class="mb-1 -mx-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-1 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> 
            <input type="checkbox"/>
            </div>
            <div className="flex flex-row">
            <input type="datetime-local" id="importer_name" class="mb-1 -mx-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-1 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> 
            <input type="checkbox"/>
            </div>
            <div className="flex flex-row">
            <input type="datetime-local" id="importer_name" class="mb-1 -mx-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-1 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> 
            <input type="checkbox"/>
            </div>
            <div className="flex flex-row">
            <input type="datetime-local" id="importer_name" class="mb-1 -mx-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-1 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> 
            <input type="checkbox"/>
            </div>
            <div className="flex flex-row">
            <input type="datetime-local" id="importer_name" class="mb-1 -mx-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-1 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> 
            <input type="checkbox"/>
            </div>
            <div className="flex flex-row">
            <input type="datetime-local" id="importer_name" class="mb-1 -mx-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-1 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> 
            <input type="checkbox"/>
            </div>
            <div className="flex flex-row">
            <input type="datetime-local" id="importer_name" class="mb-1 -mx-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-1 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> 
            <input type="checkbox"/>
            </div>
            <div className="flex flex-row">
            <input type="datetime-local" id="importer_name" class="mb-1 -mx-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-1 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> 
            <input type="checkbox"/>
            </div>
            <div className="flex flex-row">
            <input type="datetime-local" id="importer_name" class="mb-1 -mx-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-1 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> 
            <input type="checkbox"/>
            </div>
            <div className="flex flex-row">
            <input type="datetime-local" id="importer_name" class="mb-1 -mx-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-1 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> 
            <input type="checkbox"/>
            </div>
            <div className="flex flex-row">
            <input type="datetime-local" id="importer_name" class="mb-1 -mx-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-1 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> 
            <input type="checkbox"/>
            </div>
            
            {/* <input type="datetime-local" id="importer_name" class="mb-1 -mx-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-1 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            <input type="datetime-local" id="importer_name" class="mb-1 -mx-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-1 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /> */}

            </div>
                {/* <div className="flex mx-24 my-8">
                <input type="checkbox"/>
                </div> */}
            
            </div>
            <div className="-mx-10">
                <label for="importer_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-10">Time Delay</label>
                <input type="datetime-local" id="importer_name" class="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-3 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="importer_name" class="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-3 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="importer_name" class="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-3 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="importer_name" class="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-3 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="importer_name" class="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-3 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="importer_name" class="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-3 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="importer_name" class="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-3 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="importer_name" class="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-3 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="importer_name" class="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-3 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="importer_name" class="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-3 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="datetime-local" id="importer_name" class="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-3 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            <div className="-mx-10">
                <label for="importer_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Remarks</label>
                <input type="text" id="importer_name" class="mb-1 mx-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="text" id="importer_name" class="mb-1 mx-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="text" id="importer_name" class="mb-1 mx-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="text" id="importer_name" class="mb-1 mx-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="text" id="importer_name" class="mb-1 mx-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="text" id="importer_name" class="mb-1 mx-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="text" id="importer_name" class="mb-1 mx-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="text" id="importer_name" class="mb-1 mx-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="text" id="importer_name" class="mb-1 mx-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="text" id="importer_name" class="mb-1 mx-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="text" id="importer_name" class="mb-1 mx-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                <input type="text" id="importer_name" class="mb-1 mx-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>
            </div>
            </div>
        </div>

        <div className="modal-action">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn float-right my-56 mx-10">Save</button>
        </div>
        </form>
    </dialog>
    </> ) : null}
  </div>
    );
  }
  
  export default Import;