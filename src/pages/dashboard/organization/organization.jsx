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
import { Link } from "react-router-dom";
  
  export function Organization() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4 p-1">
        <div>
        <label for="countries" class="block mb-2 text-small font-sans text-gray-900 dark:text-white">Name</label>
        <label for="countries" class="block mb-2 text-small font-sans text-gray-900 dark:text-white">Email Id</label>
        <label for="countries" class="block mb-2 text-small font-sans text-gray-900 dark:text-white">GST No.</label>
            <div>
            {/* <label for="job_received_on" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Received On</label> */}
            <div class="w-64 absolute mx-16 -my-24 p-0 ">
            <input type="text" id="input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-1 w-30 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            <input type="text" id="input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-1 w-30 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            <input type="text" id="input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-1 w-30 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />

            </div>
        </div>
        
        
<div>
<button type="submit" class="mx-16 text-white bg-blue-700 hover:bg-blue-800 focus:ring- focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm w-40 sm:w-max px-8 py-1 my-1 text-left dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-0">Search</button>
</div>

        <div className="relative overflow-x-max shadow-md sm:rounded-lg my-2">
        <hr className="border-t border-gray-800"></hr>
      <table className="w-max text-sm text-center text-gray-500 dark:text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              <th scope="col" class="px-14 py-3">
                      
                  </th>
                  <th scope="col" class="px-14 py-3">
                      Name
                  </th>
                  <th scope="col" class="px-14 py-3">
                      Type
                  </th>
                  <th scope="col" class="px-14 py-3">
                      Email Id
                  </th>
                  <th scope="col" class="px-14 py-3">
                      Contact
                  </th>
                  <th scope="col" class="px-14 py-3">
                      PAN No.
                  </th>
                  {/* <th scope="col" class="px-6 py-3">
                      GST No.
                  </th>                   */}
              </tr>
          </thead>
          <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th class="px-6 py-0 text-xs">
                    {/* <Link to={"/dashboard/organization/MODORG"}>
                        Edit
                      </Link> */}
                      <a href="/dashboard/organization/MODORG" target="_blank" rel="noopener noreferrer">
                        Edit
                    </a> 
                  </th>
                  <td class="px-6 py-0 text-xs">
                  SEAWAVE FORWARDING AND LOGISTICS PVT LTD
                  </td>
                  <td class="px-6 py-2 text-xs">
                      SERVICE
                  </td>
                  <td class="px-6 py-2 text-xs">
                      accounts@seawave.in
                  </td>
                  <td class="px-6 py-2 text-xs">
                      9867612222
                  </td>
                  <td class="px-6 py-2 text-xs">
                      AAICS7836D
                  </td>                  
              </tr>
          </tbody>
          <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th class="px-6 py-0 text-xs">
                    <Link to={"/dashboard/MODORG"}>
                        Edit
                      </Link>
                  </th>
                  <td class="px-6 py-0 text-xs">
                  APEXSEA LOGISTICS PVT LTD
                  </td>
                  <td class="px-6 py-2 text-xs">
                      SERVICE
                  </td>
                  <td class="px-6 py-2 text-xs">
                      accounts@apexsea.in
                  </td>
                  <td class="px-6 py-2 text-xs">
                      9867612222
                  </td>
                  <td class="px-6 py-2 text-xs">
                      AAICS7836D
                  </td>                  
              </tr>
          </tbody>
      </table>
  </div>
  </div>
  </div>
    );
  }
  
  export default Organization;