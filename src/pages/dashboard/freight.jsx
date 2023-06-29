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
  // import modalImport from "./modalImport";
  
  export function Freight() {
    return (
        <div>
            {/* Open the modal using ID.showModal() method */}
<button className="btn" onClick={()=>window.my_modal_1.showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal w-9/12 h-5/6 mx-80">
  <form method="dialog" className="modal-box">
  <div class="grid gap-2 mb-3 md:grid-cols-10 m-2">
        <div>
            <label for="job_received_on" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Received On</label>
            <input type="date" id="job_received_on" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="job_no" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job No.</label>
            <input type="text" id="job_no" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="importer_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Importer Name</label>
            <input type="text" id="importer_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>  
        <div>
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mode</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Select</option>
                <option value="US">Sea</option>
                <option value="CA">Air</option>
            </select>
            
        </div>
        <div>
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Container Type</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Select</option>
                <option value="US">20</option>
                <option value="CA">40</option>
                <option value="CA">LCL</option>
            </select>
        </div>
        <div>
            <label for="HBL/HAWB No." class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">HBL/HAWB No.</label>
            <input type="text" id="HBL/HAWB No." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="MBL/MAWB No." class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">MBL/MAWB No.</label>
            <input type="text" id="MBL/MAWB No." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="ETA" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ETA Date</label>
            <input type="date" id="ETA" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="be_no" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BE No.</label>
            <input type="text" id="be_no" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="be_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BE Date</label>
            <input type="date" id="be_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="shipping_line" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipping Line/Carrier</label>
            <input type="text" id="shipping_line" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="cfs_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CFS Name</label>
            <input type="text" id="cfs_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="custom_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Custom Location</label>
            <input type="text" id="custom_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
    </div>
    <div>
      <hr className="border-t border-gray-800"></hr>
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-800 dark:border-gray-700 dark:text-gray-400">
            <li class="mr-2">
                <div class="inline-block p-4 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 hover:bg-gray-50">
                    O2D
                    {/* {isshown} */}
                </div>
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
        <div>
        <div class="grid gap-1 mb-3 md:grid-cols-4 m-1">
        <div>
            <label for="job_received_on" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Milestone Name</label>
            <th scope="col" class="px-0 py-0" style={{fontSize:15}}>
                  Checklist
            </th>
        </div>
        <div>
            <label for="job_no" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white -mx-10">Plan Date</label>
            <input type="datetime-local" id="job_no" class="-mx-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
          <label for="importer_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white -mx-20">Actual Date</label>
          <input type="localdatetime" id="importer_name" class="-mx-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
          </div>
            <div className="flex mx-24 my-8">
            <input type="checkbox"/>
            </div>
        </div>
        <div>
            <label for="importer_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white -mx-20">Remarks</label>
            <input type="text" id="importer_name" class="-mx-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
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
        </div>
    );
  }
  
  export default Freight;