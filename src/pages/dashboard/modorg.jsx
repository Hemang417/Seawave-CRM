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
  import { useEffect, useState } from "react";
  
  export function modorg() {
        const [showResults, setShowResults] = useState(false)
        // const onClick = () => setShowResults(true)
    return (
        <div>
            {/* Open the modal using ID.showModal() method */}
  {/* <button className="btn" onClick={()=>window.my_modal_1.showModal()}>open modal</button> */}
  <div id="my_modal_1" className="modal w-8/12 h-4/6">
  <div method="dialog" className="modal-box">
          <button type="button" class="mx-96 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Close modal</span>
          </button>
  <div class="grid gap-2 mb-3 md:grid-cols-2 m-1">
          <div>
              <label for="job_received_on" class="block mb-0.5 p-0 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          </div>
          <div>
          <input type="text" id="job_no" class="mb-0.5 -mx-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          <div>
              <label for="job_received_on" class="block mb-0.5 p-0 text-sm font-medium text-gray-900 dark:text-white">Alias</label>
          </div>
          <div>
          <input type="text" id="job_no" class="mb-0.5 -mx-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          <div class="grid gap-0 mb-3 md:grid-cols-2 m-1">
          <div>
              <label for="job_received_on" class="block w-max mx-36 mb-0.5 p-0 text-sm font-medium text-gray-900 dark:text-white">Branch Name</label>
          </div>
          <div>
              <input type="text" id="job_no" class="mb-0.5 mx-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          <div>
              <label for="job_received_on" class="block w-max mx-36 mb-0.5 p-0 text-sm font-medium text-gray-900 dark:text-white">Address</label>
          </div>
          <div>
              <input type="text" id="job_no" class="mb-0.5 mx-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
              <input type="text" id="job_no" class="mb-0.5 mx-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
              <input type="text" id="job_no" class="mb-0.5 mx-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          
          <div>
              <label for="job_received_on" class="block w-max mx-36 mb-0.5 p-0 text-sm font-medium text-gray-900 dark:text-white">Email Id</label>
          </div>
          <div>
              <input type="text" id="job_no" class="mb-0.5 mx-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          <div>
              <label for="job_received_on" class="block w-max mx-36 mb-0.5 p-0 text-sm font-medium text-gray-900 dark:text-white">Contact No.</label>
          </div>
          <div>
              <input type="text" id="job_no" class="mb-0.5 mx-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          <div>
              <label for="job_received_on" class="block w-max mx-36 mb-0.5 p-0 text-sm font-medium text-gray-900 dark:text-white">PAN No.</label>
          </div>
          <div>
              <input type="text" id="job_no" class="mb-0.5 mx-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          <div>
              <label for="job_received_on" class="block w-max mx-36 mb-0.5 p-0 text-sm font-medium text-gray-900 dark:text-white">GST No.</label>
          </div>
          <div>
              <input type="text" id="job_no" class="mb-0.5 mx-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
          <div class="grid gap-0 mb-3 md:grid-cols-2 m-1">
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-72 w-40 sm:w-max px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-3">Submit</button>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-72 w-40 sm:w-max px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-3">Submit</button>
          </div>
          <div class="grid gap-0 mb-3 md:grid-cols-1 m-1">
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-72 w-40 sm:w-max px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-3">Submit</button>
          </div>
          </div>
  
  </div> 
  </div>
  </div>
        </div>        
    );
  }
  
  export default modorg;