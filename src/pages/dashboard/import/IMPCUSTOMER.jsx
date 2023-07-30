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
  
  import React from 'react';
//   import {Select, MenuItem} from "@mui/material";

//   <MenuItem disabled value="">
//   None
//   </MenuItem>




  
  export function IMPCUSTOMER() {
    
    return (      
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div>
              {/* <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
              <input type="text" id="first_name" class=" w-32 h-8 mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job No./BL No." /> */}
              
          </div>
          
<form>
    <div class="grid gap-2 mb-3 md:grid-cols-2 m-2">
        <div>
            <label for="job_received_on" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch Name</label>
            <input type="text" id="job_received_on" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="job_no" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
            <input type="text" id="job_no" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="importer_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email ID</label>
            <input type="text" id="importer_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="importer_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact No.</label>
            <input type="text" id="importer_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>  
        <div>
            <label for="importer_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PAN No.</label>
            <input type="text" id="importer_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>  
        <div>
            <label for="importer_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GST No.</label>
            <input type="text" id="importer_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>  
            </div>
   </form>

      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              </tr>
          </thead>
      </table>
  </div>
  
    );
  }
  
  export default IMPCUSTOMER;
  